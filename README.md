##Envoy -demo

感谢 elvizlai('https://github.com/elvizlai')指点

配合测试grpc-web 搭建的envoy环境

同时支持restful方式请求 和grpc请求

server 部分使用GO


docker-compose up --build -d

	Restful 测试
	
	http://HOST:10000/izhaohu-adverse/api/adverse/search?keyword=1 GET
	http://HOST:10000/izhaohu-adverse/api/adverse/view/1 GET
	http://HOST:10000/izhaohu-adverse/api/adverse/save POST

	Grpc 使用标准的grpc方式调用测试

```
生成GO
protoc -I$GOPATH/src \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  -I$GOPATH/src/protobuf/src/ \
  -I$GOPATH/src/datacenter/proto \
  --go_out=plugins=grpc:. \
  adverse_event.proto

生成descriptor.pb
protoc -I$GOPATH/src \
    -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
    -I$GOPATH/src/protobuf/src/ \
    -I$GOPATH/src/datacenter/proto \
    --include_imports \
    --include_source_info \
    --descriptor_set_out=../build/envoy/descriptor.pb \
    *.proto

生成JS
protoc -I$GOPATH/src \
    -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
    -I$GOPATH/src/protobuf/src/ \
    -I$GOPATH/src/datacenter/proto \
    --js_out=import_style=commonjs:. \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. *.proto


```