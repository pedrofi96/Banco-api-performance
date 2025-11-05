// Import the http module to make HTTP requests. From this point, you can use `http` methods to make HTTP requests.
import http from 'k6/http'
// Import the sleep function to introduce delays. From this point, you can use the `sleep` function to introduce delays in your test script.
import { sleep, check } from 'k6'

export const options = {
  // Define the number of iterations for the test
  iterations: 10,
  thresholds: {
    http_req_duration: ['p(90)<10', 'max<10'], //percentil 90 abaixo de 10 ms
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
  },
};

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function () {
  //Teste!!!

 const url = 'http://localhost:3000/login';

  const payload = JSON.stringify({
    username: 'julio.lima',
    senha: '123456',
  })

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const res = http.post(url, payload, params);

  check(res,{
    'Validar o Status 200': (r)=> r.status === 200,
    'Validar que o token é uma string': (r) => typeof(r.json().token) == 'string'
  })

  sleep(1)
  
}