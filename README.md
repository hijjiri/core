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


# 手順
```

yarn global add protoc-gen-js
yarn global bin
export PATH=$PATH:/Users/saitoshosuke/.yarn/bin
source ~/.zshrc
yarn global add grpc-web
make proto
```