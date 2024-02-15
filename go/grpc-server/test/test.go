package main

import (
	"context"
	"fmt"
	"os"
	"net/http"
	"strings"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
)

var (
	grpcPort string
	proxyPort  string
)

const (
	WebhookMIMEType = "application/raw-webhook"
)

func main() {
	err := run()
	if err != nil {
		// 異常終了を示す終了ステータス 1 を指定してプログラムを終了する
		os.Exit(1)
	}
	os.Exit(0)
}

func run() error {
	grpcPort = os.Getenv("GRPC_PORT")
	if grpcPort == "" {
		grpcPort = "5022"
	}
	proxyPort = os.Getenv("PROXY_PORT")
	if proxyPort == "" {
		proxyPort = "9000"
	}
	fmt.Println("Success", grpcPort)

	return nil
}

func runProxy(proxyPort string, grpcPort string) error {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	mux := runtime.NewServeMux()
	customMux := webhookMimeWrapper(mux)
	return http.ListenAndServe(":"+proxyPort, customMux)
}

func webhookMimeWrapper(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if strings.Contains(r.URL.Path, "webhook") {
			r.Header.Set("Content-Type",WebhookMIMEType)
		}
		h.ServeHTTP(w, r)
	})
}
