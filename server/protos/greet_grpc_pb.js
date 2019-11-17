// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_greet_pb = require('../protos/greet_pb.js');

function serialize_dummy_GreetRequest(arg) {
  if (!(arg instanceof protos_greet_pb.GreetRequest)) {
    throw new Error('Expected argument of type dummy.GreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dummy_GreetRequest(buffer_arg) {
  return protos_greet_pb.GreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dummy_GreetResponse(arg) {
  if (!(arg instanceof protos_greet_pb.GreetResponse)) {
    throw new Error('Expected argument of type dummy.GreetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dummy_GreetResponse(buffer_arg) {
  return protos_greet_pb.GreetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreetServiceService = exports.GreetServiceService = {
  // gRPC Unary
  greet: {
    path: '/dummy.GreetService/Greet',
    requestStream: false,
    responseStream: false,
    requestType: protos_greet_pb.GreetRequest,
    responseType: protos_greet_pb.GreetResponse,
    requestSerialize: serialize_dummy_GreetRequest,
    requestDeserialize: deserialize_dummy_GreetRequest,
    responseSerialize: serialize_dummy_GreetResponse,
    responseDeserialize: deserialize_dummy_GreetResponse,
  },
};

exports.GreetServiceClient = grpc.makeGenericClientConstructor(GreetServiceService);
