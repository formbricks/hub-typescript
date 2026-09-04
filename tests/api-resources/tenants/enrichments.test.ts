// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FormbricksHub from '@formbricks/hub';

const client = new FormbricksHub({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enrichments', () => {
  // Mock server tests are disabled
  test.skip('retry', async () => {
    const responsePromise = client.tenants.enrichments.retry('tenant_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retry: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tenants.enrichments.retry(
        'tenant_id',
        { enrichments: ['translation'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FormbricksHub.NotFoundError);
  });
});
