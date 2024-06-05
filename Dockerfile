FROM golang:1.21-alpine as builder

RUN apk add --no-cache gcc libc-dev

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o grpc-server ./go/grpc-server

FROM alpine:latest

RUN apk add --no-cache libc6-compat

COPY --from=builder /app/grpc-server /usr/local/bin/grpc-server

EXPOSE 50051

CMD ["grpc-server"]
