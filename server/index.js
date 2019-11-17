const grpc = require('grpc')

const greets = require('../server/protos/greet_pb')
const greetService = require('../server/protos/greet_grpc_pb')

const calc = require('../server/protos/calculator_pb')
const calcService = require('../server/protos/calculator_grpc_pb')

/**
 * Implements the greet RPC method.
 */
function sum(call, callback) {
  const sumResponse = new calc.SumResponse()
  sumResponse.setInt64SumResult(
    call.request.getFirstInt64() + call.request.getSecondInt64()
  )
  sumResponse.setFloatSumResult(
    call.request.getFirstFloat() + call.request.getSecondFloat()
  )
  sumResponse.setDoubleSumResult(
    call.request.getFirstDouble() + call.request.getSecondDouble()
  )
  callback(null, sumResponse)
}

/**
 * Implements the greet RPC method.
 */
function greet(call, callback) {
  const greeting = new greets.GreetResponse()
  const crg = call.request.getGreeting()
  greeting.setResult(
    `Приветствую Вас, о великий ${crg.getFirstName()} ${crg.getMiddleName()} ${crg.getLastName()}!\n`
  )
  callback(null, greeting)
}


function main() {
  const server = new grpc.Server()
  server.addService(greetService.GreetServiceService, { greet: greet })
  server.addService(calcService.CalculatorServiceService, { sum: sum })
  server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure()) // TODO: .createSsl() !
  server.start()
  console.log('Server running on port 127.0.0.1:50051')
}

main()
