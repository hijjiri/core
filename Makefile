PROTO_DIR=./proto
OUTPUT_DIR=./go/grpc-server
JS_DIR=./src/assets/_proto
GOOGLEAPIS_DIR=/Users/saitoshosuke/go/src/github.com/googleapis

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
