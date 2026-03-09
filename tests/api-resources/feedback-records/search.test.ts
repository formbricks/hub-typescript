// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FormbricksHub from '@formbricks/hub';

const client = new FormbricksHub({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // Mock server tests are disabled
  test.skip('performSemanticSearch: only required params', async () => {
    const responsePromise = client.feedbackRecords.search.performSemanticSearch({
      query: 'What do users think about login speed?',
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
  test.skip('performSemanticSearch: required and optional params', async () => {
    const response = await client.feedbackRecords.search.performSemanticSearch({
      query: 'What do users think about login speed?',
      tenant_id: 'org-123',
      cursor: 'eyJkIjowLjEsImkiOiIwMThlMTIzNC01Njc4LTlhYmMtZGVmMC0xMTExMTExMTExMTEifQ==',
      limit: 1,
      min_score: 0,
    });
  });
});
