// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FormbricksHub from '@formbricks/hub';

const client = new FormbricksHub({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource feedbackRecords', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.feedbackRecords.create({
      field_id: 'q1',
      field_type: 'rating',
      source_type: 'survey',
      submission_id: '550e8400-e29b-41d4-a716-446655440000',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.feedbackRecords.create({
      field_id: 'q1',
      field_type: 'rating',
      source_type: 'survey',
      submission_id: '550e8400-e29b-41d4-a716-446655440000',
      tenant_id: 'org-123',
      collected_at: '2019-12-27T18:11:19.117Z',
      field_group_id: 'feature_priority',
      field_group_label: 'Rank these features by importance',
      field_label: 'How satisfied are you?',
      language: 'en',
      metadata: { foo: 'bar' },
      source_id: 'survey-123',
      source_name: 'Q1 NPS Survey',
      user_identifier: 'user-abc-123',
      value_boolean: true,
      value_date: '2019-12-27T18:11:19.117Z',
      value_number: 9,
      value_text: 'Great service!',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.feedbackRecords.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.feedbackRecords.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.feedbackRecords.list({ tenant_id: 'org-123' });
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
    const response = await client.feedbackRecords.list({
      tenant_id: 'org-123',
      field_group_id: 'feature_priority',
      field_id: 'q1',
      field_type: 'text',
      limit: 1,
      offset: 0,
      since: '2024-01-01T00:00:00Z',
      source_id: 'survey-123',
      source_type: 'survey',
      submission_id: '550e8400-e29b-41d4-a716-446655440000',
      until: '2024-12-31T23:59:59Z',
      user_identifier: 'user-abc-123',
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.feedbackRecords.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('bulkDelete: only required params', async () => {
    const responsePromise = client.feedbackRecords.bulkDelete({ user_identifier: 'user-abc-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('bulkDelete: required and optional params', async () => {
    const response = await client.feedbackRecords.bulkDelete({
      user_identifier: 'user-abc-123',
      tenant_id: 'org-123',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveSimilar: only required params', async () => {
    const responsePromise = client.feedbackRecords.retrieveSimilar('018e1234-5678-9abc-def0-123456789abc', {
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
  test.skip('retrieveSimilar: required and optional params', async () => {
    const response = await client.feedbackRecords.retrieveSimilar('018e1234-5678-9abc-def0-123456789abc', {
      tenant_id: 'org-123',
      cursor: 'eyJkIjowLjEsImkiOiIwMThlMTIzNC01Njc4LTlhYmMtZGVmMC0xMTExMTExMTExMTEifQ==',
      limit: 1,
      min_score: 0,
      offset: 0,
    });
  });
});
