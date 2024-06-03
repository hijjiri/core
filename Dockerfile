# ベースイメージとして公式のGoイメージを使用
FROM golang:1.21 AS builder

# 作業ディレクトリを設定
WORKDIR /app

# モジュールファイルとプロジェクトファイルをコピー
COPY go.mod go.sum ./
RUN go mod download

# ソースコードをコピー
COPY . .

# バイナリをビルド
RUN go build -o grpc-server ./go/grpc-server/main.go

# 実行フェーズ
FROM gcr.io/distroless/base
COPY --from=builder /app/grpc-server /usr/local/bin/grpc-server
CMD ["grpc-server"]
