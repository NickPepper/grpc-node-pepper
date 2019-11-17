const grpc = require('grpc')

const greets = require('../server/protos/greet_pb')
const service = require('../server/protos/greet_grpc_pb')

/**
 * Implements the greet RPC method.
 */
function greet(call, callback) {
  const greeting = new greets.GreetResponse()
  const crg = call.request.getGreeting()
  greeting.setResult(
    `Приветствую Вас, о великий \n${crg.getFirstName()} ${crg.getMiddleName()} ${crg.getLastName()}!\n`
  )
  callback(null, greeting)
}


function main() {
  const server = new grpc.Server()
  server.addService(service.GreetServiceService, { greet: greet })
  server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure()) // TODO: .createSsl() !
  server.start()
  console.log('Server running on port 127.0.0.1:50051')
}

main()
