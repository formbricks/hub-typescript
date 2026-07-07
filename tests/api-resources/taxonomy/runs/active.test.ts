// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FormbricksHub from '@formbricks/hub';

const client = new FormbricksHub({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource active', () => {
  // Mock server tests are disabled
  test.skip('getTree: only required params', async () => {
    const responsePromise = client.taxonomy.runs.active.getTree({ tenant_id: 'org-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getTree: required and optional params', async () => {
    const response = await client.taxonomy.runs.active.getTree({
      tenant_id: 'org-123',
      field_id: 'field_id',
      scope_type: 'field',
      source_id: 'source_id',
      source_type: 'source_type',
    });
  });
});
