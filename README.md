# grpc-node-pepper

To get started, make sure to install all the dependencies AND install grpc-tools globally:
```
$ yarn
$ yarn global add grpc-tools
```

## To generate code in Protocol Buffers

Use the following command to generate code using protobuf plugin:
```
protoc -I=. ./protos/dummy.proto --js_out=import_style=commonjs,binary:./server --grpc_out=./server --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`
```
