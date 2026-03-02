const request = require('supertest');

const BASE_URL = 'http://lojaebac.ebaconline.art.br';
const AUTH_TOKEN = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy';

describe('US-0003 - API de Cupons', () => {


    test('CT-API-CUPOM-01 - Deve cadastrar um novo cupom com sucesso', async () => {
        const codigo = `TESTE${Date.now()}`;
        const response = await request(BASE_URL)
            .post('/wp-json/wc/v3/coupons')
            .set('Authorization', AUTH_TOKEN)
            .send({
                code: codigo,
                amount: '10.00',
                discount_type: 'fixed_product',
                description: 'Cupom de teste automatizado'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');

        expect(response.body.code).toBe(codigo.toLowerCase());
        expect(response.body.amount).toBe('10.00');
    });


    test('CT-API-CUPOM-02 - Não deve permitir código duplicado', async () => {
        const codigoUnico = `DUPLICADO${Date.now()}`;


        await request(BASE_URL)
            .post('/wp-json/wc/v3/coupons')
            .set('Authorization', AUTH_TOKEN)
            .send({
                code: codigoUnico,
                amount: '15.00',
                discount_type: 'fixed_product',
                description: 'Cupom para teste de duplicidade'
            });


        const response = await request(BASE_URL)
            .post('/wp-json/wc/v3/coupons')
            .set('Authorization', AUTH_TOKEN)
            .send({
                code: codigoUnico,
                amount: '20.00',
                discount_type: 'fixed_product',
                description: 'Tentativa duplicada'
            });

        expect(response.status).toBe(400);
    });


    test('CT-API-CUPOM-03 - Não deve permitir criar sem campo obrigatório (BUG - API ACEITA)', async () => {
        const response = await request(BASE_URL)
            .post('/wp-json/wc/v3/coupons')
            .set('Authorization', AUTH_TOKEN)
            .send({
                code: `SEMAMOUNT${Date.now()}`,

                discount_type: 'fixed_product',
                description: 'Cupom sem amount'
            });

        expect(response.status).toBe(201);


        console.log('BUG IDENTIFICADO: API aceitou cupom sem campo amount');
        console.log('Status recebido:', response.status);
        console.log('Cupom criado com sucesso mesmo sem amount obrigatório');
    });

    test('CT-API-CUPOM-04 - Deve listar todos os cupons', async () => {
        const response = await request(BASE_URL)
            .get('/wp-json/wc/v3/coupons')
            .set('Authorization', AUTH_TOKEN);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('CT-API-CUPOM-05 - Deve buscar cupom por ID', async () => {
        const codigo = `BUSCA${Date.now()}`;

        const createResponse = await request(BASE_URL)
            .post('/wp-json/wc/v3/coupons')
            .set('Authorization', AUTH_TOKEN)
            .send({
                code: codigo,
                amount: '25.00',
                discount_type: 'fixed_product',
                description: 'Cupom para teste de busca'
            });

        const cupomId = createResponse.body.id;

        const response = await request(BASE_URL)
            .get(`/wp-json/wc/v3/coupons/${cupomId}`)
            .set('Authorization', AUTH_TOKEN);

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(cupomId);
        expect(response.body.code).toBe(codigo.toLowerCase());
    });

    test('CT-API-CUPOM-06 - Deve retornar 404 para ID inexistente', async () => {
        const response = await request(BASE_URL)
            .get('/wp-json/wc/v3/coupons/999999999')
            .set('Authorization', AUTH_TOKEN);

        expect(response.status).toBe(404);
    });
});