# pb-files-generator

# .envrcを適用させたら以下のコマンドを実行
```
//出力されればOK！
which go
which protoc-gen-go
which protoc-gen-grpc-web
which protoc-gen-js
```

#　インストールと実行ファイル
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

# 流れ

```
.protoファイルの作成:
gRPCサービスの定義は、protobufの.protoファイル内に記述されます。必要なサービスやメッセージを.protoファイルに定義しましょう。

コード生成:
.protoファイルからGoのサーバーおよびクライアントコードを生成する必要があります。先ほど提供されたスクリプトの一部でこれを行うことができます。

サービスの実装:
サービスを実際に実装するために、生成されたGoコードをベースに、gRPCサービスのメソッドを実装します。各メソッドは、クライアントからのリクエストを受け取り、適切なレスポンスを返すロジックを含む必要があります。

サーバーの起動:
gRPCサービスをホストするために、サーバーを起動する必要があります。Goの net パッケージを使用してサーバーを起動し、gRPCサービスを公開します。

クライアントの作成:
gRPCクライアントを作成し、サーバーにリクエストを送信するコードを記述します。これにより、クライアントアプリケーションがgRPCサービスと通信できます。

ビルドとテスト:
```