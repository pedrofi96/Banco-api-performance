import http from "k6/http";
import { sleep, check } from "k6";
import { obterToken } from "../helpers/autenticacao.js";

export const options = {
  iterations: 1,
};

export default function () {
  const token = obterToken();

  const url = "http://localhost:3000/transferencias";

  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 2,
    valor: 10,
    token: "",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  const res = http.post(url, payload, params);
  console.log("Status:", res.status);
  console.log("Response Body:", res.body);
  console.log("Response Headers:", JSON.stringify(res.headers));

  check(res, {
    "Validar o Status 201": (r) => r.status === 201,
  });

  sleep(1);
}
