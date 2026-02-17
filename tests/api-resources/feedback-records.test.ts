// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hub from '@formbricks/hub';

const client = new Hub({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource feedbackRecords', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.feedbackRecords.create({
      field_id: 'q1',
      field_type: 'rating',
      source_type: 'survey',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.feedbackRecords.create({
      field_id: 'q1',
      field_type: 'rating',
      source_type: 'survey',
      collected_at: '2019-12-27T18:11:19.117Z',
      field_group_id: 'feature_priority',
      field_group_label: 'Rank these features by importance',
      field_label: 'How satisfied are you?',
      language: 'en',
      metadata: { foo: 'bar' },
      source_id: 'survey-123',
      source_name: 'Q1 NPS Survey',
      tenant_id: 'org-123',
      user_identifier: 'user-abc-123',
      value_boolean: true,
      value_date: '2019-12-27T18:11:19.117Z',
      value_number: 9,
      value_text: 'Great service!',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.feedbackRecords.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.feedbackRecords.list(
        {
          field_group_id: 'field_group_id',
          field_id: 'field_id',
          field_type: 'field_type',
          limit: 1,
          offset: 0,
          since: '2019-12-27T18:11:19.117Z',
          source_id: 'source_id',
          source_type: 'source_type',
          tenant_id: 'tenant_id',
          until: '2019-12-27T18:11:19.117Z',
          user_identifier: 'user_identifier',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hub.NotFoundError);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('bulkDelete: only required params', async () => {
    const responsePromise = client.feedbackRecords.bulkDelete({ user_identifier: 'user_identifier' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('bulkDelete: required and optional params', async () => {
    const response = await client.feedbackRecords.bulkDelete({
      user_identifier: 'user_identifier',
      tenant_id: 'tenant_id',
    });
  });
});
