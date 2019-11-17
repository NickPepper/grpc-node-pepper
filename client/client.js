const grpc    = require('grpc')

const greets  = require('../server/protos/greet_pb')
const service = require('../server/protos/greet_grpc_pb')

// const services = require('../server/protos/dummy_grpc_pb')

function main() {
  console.log('Hello from Client!')
  // const client = new services.DummyServiceClient('localhost:50051', grpc.credentials.createInsecure()) // TODO: .createSsl() !
  // console.log('client: ', client)

  const client = new service.GreetServiceClient('localhost:50051', grpc.credentials.createInsecure()) // TODO: .createSsl() !
  // create request
  const request = new greets.GreetRequest()
  // create a Protocol Buffer greeting message
  const greeting = new greets.Greeting()
  greeting.setFirstName('Nick')
  greeting.setMiddleName('Александрович')
  greeting.setLastName('Pepper')
  request.setGreeting(greeting)
  // and now welcome to Magic: we call the 'greet' method directly from the server!
  client.greet(request, (error, response) => {
    if (!error) {
      console.log('\nGreeting Response:')
      console.log(response.getResult())
    } else {
      console.error(error)
    }
  })
}

main()
