PROTO_DIR=./proto
OUTPUT_DIR=./go/grpc-server
JS_DIR=./src/assets/_proto

.PHONY: proto

proto:
	for file in $(PROTO_DIR)/*.proto; do \
		filename=$$file; \
		dirname=$$(basename $$file .proto); \
		mkdir -p "$(OUTPUT_DIR)/$${dirname}"; \
		protoc --js_out=import_style=commonjs,binary:$(JS_DIR) \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:$(JS_DIR) \
		--go_out=M$(PROTO_DIR)/example.proto=$(OUTPUT_DIR)/example,paths=source_relative:$(OUTPUT_DIR)/$${dirname} \
		--go-grpc_out=M$(PROTO_DIR)/example.proto=$(OUTPUT_DIR)/example,paths=source_relative:$(OUTPUT_DIR)/$${dirname} \
		--grpc-gateway_out=M$(PROTO_DIR)/example.proto=$(OUTPUT_DIR)/example,logtostderr=true,paths=source_relative:$(OUTPUT_DIR)/$${dirname} \
		--proto_path=$(PROTO_DIR) \
		$$file; \
	done
