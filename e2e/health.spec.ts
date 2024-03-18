import { test, expect } from '@playwright/test';

test.describe('Server is running',{
  annotation: {
    description: 'Check if the server is running',
    type: 'init'
  },
}, () => {
  test('Its alive', async ({ request }) => {
    const health = await request.get('api/cqs/query/healthz');
    expect(health.ok()).toBeTruthy();
    expect(await health.json()).toEqual(expect.objectContaining({
      success: true,
      result: '"True"'
    }))
  });
});
