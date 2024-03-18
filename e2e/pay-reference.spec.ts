import {expect, test} from "@playwright/test";

test.describe('Referencias de pago', () => {
    test('Crear referencia de pago', async ({request}) => {
        const REFERENCE_CODE = '1234';
        const referenceResponse = await request.get(`api/TU/getReferenciaPago?refPago=${REFERENCE_CODE}`);
        expect(referenceResponse.ok()).toBeTruthy();

        const reference = await referenceResponse.json();
        expect(reference).toEqual(expect.objectContaining({
            refPago: REFERENCE_CODE,
        }));
    });
})