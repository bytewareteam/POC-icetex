import {expect, test} from "@playwright/test";

test.describe('Referencias de pago', () => {

    test('should validate reference code', async ({request}) => {
        const REFERENCE_CODE = 'M';
        const referenceResponse = await request.get(`api/TU/validarReferenciaPago?referenciaPago=${REFERENCE_CODE}`);
        expect(referenceResponse.ok()).toBeFalsy();

        const reference = await referenceResponse.json();
        expect(reference).toEqual(expect.objectContaining({
            Code: 'NOT OK'
        }));
    });

    test('Crear referencia de pago', async ({request}) => {
        const REFERENCE_CODE = '2934535052024031603';
        const referenceResponse = await request.get(`api/TU/getReferenciaPago?referenciaPago=${REFERENCE_CODE}`);
        expect(referenceResponse.ok()).toBeTruthy();

        const reference = await referenceResponse.json();
        expect(reference).toEqual(expect.objectContaining({
            Data: expect.objectContaining({
                ReferenciaPago: REFERENCE_CODE,
            })
        }));
    });
})