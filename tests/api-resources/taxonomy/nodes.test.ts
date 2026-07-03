// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FormbricksHub from '@formbricks/hub';

const client = new FormbricksHub({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource nodes', () => {
  // Mock server tests are disabled
  test.skip('listRecords: only required params', async () => {
    const responsePromise = client.taxonomy.nodes.listRecords('019f177f-9abe-78cd-8008-f40b58e3147d', {
      tenant_id: 'org-123',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listRecords: required and optional params', async () => {
    const response = await client.taxonomy.nodes.listRecords('019f177f-9abe-78cd-8008-f40b58e3147d', {
      tenant_id: 'org-123',
      limit: 1,
    });
  });

  // Mock server tests are disabled
  test.skip('rename: only required params', async () => {
    const responsePromise = client.taxonomy.nodes.rename('019f177f-9abe-78cd-8008-f40b58e3147d', {
      actor_id: 'user-42',
      label: 'Authentication Problems',
      tenant_id: 'org-123',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('rename: required and optional params', async () => {
    const response = await client.taxonomy.nodes.rename('019f177f-9abe-78cd-8008-f40b58e3147d', {
      actor_id: 'user-42',
      label: 'Authentication Problems',
      tenant_id: 'org-123',
    });
  });

  // Mock server tests are disabled
  test.skip('softRemove: only required params', async () => {
    const responsePromise = client.taxonomy.nodes.softRemove('019f177f-9abe-78cd-8008-f40b58e3147d', {
      actor_id: 'actor_id',
      tenant_id: 'org-123',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('softRemove: required and optional params', async () => {
    const response = await client.taxonomy.nodes.softRemove('019f177f-9abe-78cd-8008-f40b58e3147d', {
      actor_id: 'actor_id',
      tenant_id: 'org-123',
    });
  });
});
