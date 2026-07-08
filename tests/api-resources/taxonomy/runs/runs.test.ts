// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FormbricksHub from '@formbricks/hub';

const client = new FormbricksHub({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource runs', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.taxonomy.runs.retrieve('019f177f-9aa3-705e-8195-cea2aa187268', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.taxonomy.runs.retrieve('019f177f-9aa3-705e-8195-cea2aa187268', {
      tenant_id: 'org-123',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.taxonomy.runs.list({ tenant_id: 'org-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.taxonomy.runs.list({
      tenant_id: 'org-123',
      field_id: 'field_id',
      limit: 1,
      scope_type: 'field',
      source_id: 'source_id',
      source_type: 'source_type',
    });
  });

  // Mock server tests are disabled
  test.skip('getTree: only required params', async () => {
    const responsePromise = client.taxonomy.runs.getTree('019f177f-9aa3-705e-8195-cea2aa187268', {
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
  test.skip('getTree: required and optional params', async () => {
    const response = await client.taxonomy.runs.getTree('019f177f-9aa3-705e-8195-cea2aa187268', {
      tenant_id: 'org-123',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveRecordCounts: only required params', async () => {
    const responsePromise = client.taxonomy.runs.retrieveRecordCounts(
      '019f177f-9aa3-705e-8195-cea2aa187268',
      { tenant_id: 'org-123' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveRecordCounts: required and optional params', async () => {
    const response = await client.taxonomy.runs.retrieveRecordCounts('019f177f-9aa3-705e-8195-cea2aa187268', {
      tenant_id: 'org-123',
    });
  });

  // Mock server tests are disabled
  test.skip('start: only required params', async () => {
    const responsePromise = client.taxonomy.runs.start({ tenant_id: 'org-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('start: required and optional params', async () => {
    const response = await client.taxonomy.runs.start({
      tenant_id: 'org-123',
      actor_id: 'user-42',
      field_id: 'feedback',
      field_label: 'field_label',
      scope_type: 'field',
      source_id: 'survey-abc',
      source_type: 'formbricks',
    });
  });
});
