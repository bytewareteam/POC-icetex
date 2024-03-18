import {test as setup, expect} from "@playwright/test";

const ADMIN_AUTH_FILE = 'playwright/auth/admin.json';

setup("authorize", async ({request}) => {
    const login = await request.post('api/cqs/command/auth_login', {
        data: {
            email: 'willian.monogaa@opitech.com.co',
            password: 'OpiTech2023$',
            force: true,
        }
    });
    expect(login.ok()).toBeTruthy();
    const loginJson = await login.json();
    expect(loginJson).toEqual(
        expect.objectContaining({
            success: true,
            result: expect.objectContaining({
                challenge: 'REQUEST_OTP'
            }),
        })
    );
})