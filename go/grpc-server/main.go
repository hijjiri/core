package main

import (
  "context"
  "log"
  "net"

  "google.golang.org/grpc"
  "google.golang.org/grpc/reflection"
  pb "github.com/hijjiri/core/go/grpc-server/example"
)

const (
  port = ":50051"
)

type server struct {
  pb.UnimplementedExampleServiceServer
}

func (s *server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloResponse, error) {
  log.Printf("Received: %v", in.GetName())
  return &pb.HelloResponse{Message: "Hello " + in.GetName()}, nil
}

func main() {
  lis, err := net.Listen("tcp", port)
  if err != nil {
    log.Fatalf("failed to listen: %v", err)
  }
  s := grpc.NewServer()
  pb.RegisterExampleServiceServer(s, &server{})
  reflection.Register(s)
  log.Printf("server listening at %v", lis.Addr())
  if err := s.Serve(lis); err != nil {
    log.Fatalf("failed to serve: %v", err)
  }
}
