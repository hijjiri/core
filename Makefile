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
		--go_out=./go/grpc-server/$${dirname} \
		--go-grpc_out=./go/grpc-server/$${dirname} \
		--grpc-gateway_out=logtostderr=true:./go/grpc-server/$${dirname} \
		--proto_path=$(PROTO_DIR) \
		$$file; \
	done
