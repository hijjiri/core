PROTO_DIR=./proto
OUTPUT_DIR=./go/grpc-server
JS_DIR=./src/assets/_proto
GOOGLEAPIS_DIR=/Users/saitoshosuke/go/src/github.com/googleapis

# プロトコルバッファのコンパイル
.PHONY: proto

proto:
	for file in $(PROTO_DIR)/*.proto; do \
		filename=$$file; \
		dirname=$$(basename $$file .proto); \
		mkdir -p "$(OUTPUT_DIR)/$${dirname}"; \
		protoc --js_out=import_style=commonjs,binary:$(JS_DIR) \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:$(JS_DIR) \
		--go_out=paths=source_relative:$(OUTPUT_DIR)/$${dirname} \
		--go-grpc_out=paths=source_relative:$(OUTPUT_DIR)/$${dirname} \
		--grpc-gateway_out=logtostderr=true,paths=source_relative:$(OUTPUT_DIR)/$${dirname} \
		--proto_path=$(PROTO_DIR) \
		--proto_path=$(GOOGLEAPIS_DIR) \
		$$file; \
	done

# Dockerイメージのビルド
.PHONY: docker-build
docker-build:
	docker build -t hijjiri-core:latest .

# Dockerコンテナの停止と削除
.PHONY: docker-stop
docker-stop:
	@if docker ps -a | grep hijjiri-core; then docker stop hijjiri-core && docker rm hijjiri-core; fi

# Dockerコンテナの実行
.PHONY: docker-run
docker-run:
	docker run -d --name hijjiri-core -p 50052:50052 hijjiri-core:latest

# Dockerコンテナの再ビルドと再実行
.PHONY: docker-restart
docker-restart: docker-build docker-run
	@echo "Docker container hijjiri-core has been restarted."
