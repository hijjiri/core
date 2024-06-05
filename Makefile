# プロトコルバッファのコンパイル
.PHONY: proto
proto:
	@echo "Running proto compilation..."

# Dockerビルド
.PHONY: docker-build
docker-build:
	docker build -t hijjiri-core:latest .

# Dockerコンテナの実行
.PHONY: docker-run
docker-run:
	docker run -d --name hijjiri-core -p 50052:50052 hijjiri-core:latest

# Dockerコンテナの再ビルドと再実行
.PHONY: docker-restart
docker-restart: docker-build docker-run
	@echo "Docker container hijjiri-core has been restarted."

# Dockerコンテナの停止と削除
.PHONY: docker-stop
docker-stop:
	@if docker ps -a | grep hijjiri-core; then docker stop hijjiri-core && docker rm hijjiri-core; fi
