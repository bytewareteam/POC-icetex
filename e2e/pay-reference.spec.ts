import {expect, test} from "@playwright/test";

test.describe('Referencias de pago', () => {
    test.use({
        extraHTTPHeaders: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    })
    test('Crear referencia de pago', async ({request}) => {
        const REFERENCE_CODE = '1234';
        const referenceResponse = await request.get(`/TU/getReferenciaPago?refPago=${REFERENCE_CODE}`);
        expect(referenceResponse.ok()).toBeTruthy();

        const reference = await referenceResponse.json();
        expect(reference).toEqual(expect.objectContaining({
            refPago: REFERENCE_CODE,
        }));
    });
})