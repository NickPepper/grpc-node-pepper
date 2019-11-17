const grpc    = require('grpc')

// const services = require('../server/protos/dummy_grpc_pb')

const greets = require('../server/protos/greet_pb')
const greetService = require('../server/protos/greet_grpc_pb')

const calc = require('../server/protos/calculator_pb')
const calcService = require('../server/protos/calculator_grpc_pb')


function callGreetings() {
  // const client = new services.DummyServiceClient('localhost:50051', grpc.credentials.createInsecure()) // TODO: .createSsl() !
  // console.log('client: ', client)

  const client = new greetService.GreetServiceClient('localhost:50051', grpc.credentials.createInsecure()) // TODO: .createSsl() !
  // create request
  const requestGreetings = new greets.GreetRequest()
  // create a Protocol Buffer greeting message
  const greeting = new greets.Greeting()
  greeting.setFirstName('Nick')
  greeting.setMiddleName('Александрович')
  greeting.setLastName('Pepper')
  requestGreetings.setGreeting(greeting)
  // and now welcome to Magic: we call the 'greet' method directly from the server!
  client.greet(requestGreetings, (error, response) => {
    if (!error) {
      console.log('\nGreeting Response:')
      console.log(response.getResult())
    } else {
      console.error(error)
    }
  })
}

function callSum() {
  const client = new calcService.CalculatorServiceClient(
    "localhost:50051",
    grpc.credentials.createInsecure()
  )

  const sumRequest = new calc.SumRequest()

  sumRequest.setFirstInt64(10)
  sumRequest.setSecondInt64(15)
  sumRequest.setFirstFloat(10.34)
  sumRequest.setSecondFloat(15.78)
  sumRequest.setFirstDouble(10.34)
  sumRequest.setSecondDouble(15.78)

  client.sum(sumRequest, (error, response) => {
    if (!error) {
      console.log(`\nСумма int64, которую посчитал и вернул нам сервачок: \n${sumRequest.getFirstInt64()} + ${sumRequest.getSecondInt64()} = ${response.getInt64SumResult()}`)
      console.log(`\nСумма float: \n${sumRequest.getFirstFloat()} + ${sumRequest.getSecondFloat()} = ${response.getFloatSumResult()}\n`)
      console.log(`\nСумма double: \n${sumRequest.getFirstDouble()} + ${sumRequest.getSecondDouble()} = ${response.getDoubleSumResult()}\n`)
    } else {
      console.error(error)
    }
  });
}


function main() {
  console.log('Hello from main()')
  callGreetings()
  callSum()
}

main()
