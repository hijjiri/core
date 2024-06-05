# core

# .envrcを適用させたら以下のコマンドを実行
```
//出力されればOK！
which protoc
which protoc-gen-go-grpc
which protoc-gen-grpc-gateway
which go
which protoc-gen-go
which protoc-gen-grpc-web
which protoc-gen-js
```

#　インストールと実行ファイル
```
sudo apt install protobuf-compiler
protoc --version
```

```
go get -u google.golang.org/grpc/cmd/protoc-gen-go-grpc
export PATH=$PATH:$(go env GOPATH)/bin
```

```
wget https://github.com/grpc-ecosystem/grpc-gateway/releases/download/v2.19.0/protoc-gen-grpc-gateway-v2.19.0-linux-x86_64
chmod +x protoc-gen-grpc-gateway-v2.19.0-linux-x86_64
sudo mv protoc-gen-grpc-gateway-v2.19.0-linux-x86_64 /usr/local/bin/protoc-gen-grpc-gateway
```

```
go get google.golang.org/protobuf/cmd/protoc-gen-go
//実行:
protoc --go_out=./go/grpc-server/${dirname} $file
```

```
brew install protoc-gen-grpc-web
実行:
protoc --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/assets/_proto $file
```

```
yarn global add grpc-web
実行：
protoc --js_out=import_style=commonjs,binary:./src/assets/_proto $file
```


# yarn手順
```
yarn global add protoc-gen-js
yarn global bin
export PATH=$PATH:/Users/saitoshosuke/.yarn/bin
source ~/.zshrc
```

# 扱ったコマンド一覧
docker build -t hijjiri-core:latest .
docker stop hijjiri-core
docker rm hijjiri-core
docker run -d --name hijjiri-core -p 50051:50051 hijjiri-core:latest

docker network create my_network
docker network connect my_network hijjiri-core
docker network connect my_network hijjiri-web
docker network connect my_network envoy
docker network inspect my_network

grpcurl -plaintext localhost:50051 list
grpcurl -plaintext localhost:50051 describe example.ExampleService
grpcurl -plaintext -import-path /Users/saitoshosuke/go/src/github.com/hijjiri/core/proto -proto example.proto -d '{"name": "world"}' localhost:8080 example.ExampleService/SayHello
