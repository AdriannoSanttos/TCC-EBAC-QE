import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20,
  duration: '2m',
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.05'],
  },
};

const BASE_URL = 'http://lojaebac.ebaconline.art.br';
const AUTH_TOKEN = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy';

export default function () {
  
  
  const getResponse = http.get(`${BASE_URL}/wp-json/wc/v3/coupons`, {
    headers: {
      'Authorization': AUTH_TOKEN,
    },
  });

  check(getResponse, {
    'GET cupons - status 200': (r) => r.status === 200,
    'GET cupons - retorna lista': (r) => Array.isArray(JSON.parse(r.body)),
  });

  sleep(1);


  const codigoUnico = `PERF${Date.now()}`;
  const payload = JSON.stringify({
    code: codigoUnico,
    amount: '15.00',
    discount_type: 'fixed_product',
    description: 'Cupom teste performance'
  });

  const postResponse = http.post(`${BASE_URL}/wp-json/wc/v3/coupons`, payload, {
    headers: {
      'Authorization': AUTH_TOKEN,
      'Content-Type': 'application/json',
    },
  });

  check(postResponse, {
    'POST cupom - status 201': (r) => r.status === 201,
    'POST cupom - tem ID': (r) => JSON.parse(r.body).id !== undefined,
  });

  sleep(1);
}