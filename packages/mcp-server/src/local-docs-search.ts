// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'check',
    endpoint: '/health',
    httpMethod: 'get',
    summary: 'Health check',
    description: 'Returns OK if the service is running',
    stainlessPath: '(resource) health > (method) check',
    qualified: 'client.health.check',
    response: 'string',
    markdown:
      "## check\n\n`client.health.check(): string`\n\n**get** `/health`\n\nReturns OK if the service is running\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst response = await client.health.check();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.health.check',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst response = await client.health.check();\n\nconsole.log(response);",
      },
      http: {
        example: 'curl http://localhost:8080/health \\\n    -H "Authorization: Bearer $HUB_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/feedback-records',
    httpMethod: 'get',
    summary: 'List feedback records with filters',
    description:
      'Lists feedback records for a required tenant_id with optional additional filters and pagination',
    stainlessPath: '(resource) feedback_records > (method) list',
    qualified: 'client.feedbackRecords.list',
    params: [
      'tenant_id: string;',
      'cursor?: string;',
      'field_group_id?: string;',
      'field_id?: string;',
      "field_type?: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date';",
      'limit?: number;',
      'since?: string;',
      'source_id?: string;',
      'source_type?: string;',
      'submission_id?: string;',
      'until?: string;',
      'user_id?: string;',
    ],
    response:
      "{ data: { id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_id?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }[]; limit: number; next_cursor?: string; }",
    markdown:
      "## list\n\n`client.feedbackRecords.list(tenant_id: string, cursor?: string, field_group_id?: string, field_id?: string, field_type?: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date', limit?: number, since?: string, source_id?: string, source_type?: string, submission_id?: string, until?: string, user_id?: string): { data: feedback_record_data[]; limit: number; next_cursor?: string; }`\n\n**get** `/v1/feedback-records`\n\nLists feedback records for a required tenant_id with optional additional filters and pagination\n\n### Parameters\n\n- `tenant_id: string`\n  Tenant ID (required for isolation). NULL bytes not allowed.\n\n- `cursor?: string`\n  Omit for the first page. For the next page, use the exact value from the previous response's next_cursor.\nOpaque (base64-encoded); keyset pagination.\n\n\n- `field_group_id?: string`\n  Filter by field group ID (for ranking/matrix questions). NULL bytes not allowed.\n\n- `field_id?: string`\n  Filter by field ID. NULL bytes not allowed.\n\n- `field_type?: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'`\n  Filter by field type. NULL bytes not allowed.\n\n- `limit?: number`\n  Number of results to return (max 1000)\n\n- `since?: string`\n  Filter by collected_at >= since (ISO 8601 format). Must be between 1970-01-01 and 2080-12-31.\n\n- `source_id?: string`\n  Filter by source ID (NULL bytes not allowed)\n\n- `source_type?: string`\n  Filter by source type. NULL bytes not allowed.\n\n- `submission_id?: string`\n  Filter by submission ID to group records belonging to one logical submission. NULL bytes not allowed.\n\n- `until?: string`\n  Filter by collected_at <= until (ISO 8601 format). Must be between 1970-01-01 and 2080-12-31.\n\n- `user_id?: string`\n  Filter by user ID. NULL bytes not allowed.\n\n### Returns\n\n- `{ data: { id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_id?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }[]; limit: number; next_cursor?: string; }`\n\n  - `data: { id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_id?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }[]`\n  - `limit: number`\n  - `next_cursor?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst feedbackRecords = await client.feedbackRecords.list({ tenant_id: 'org-123' });\n\nconsole.log(feedbackRecords);\n```",
    perLanguage: {
      typescript: {
        method: 'client.feedbackRecords.list',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  apiKey: process.env['HUB_API_KEY'], // This is the default and can be omitted\n});\n\nconst feedbackRecords = await client.feedbackRecords.list({ tenant_id: 'org-123' });\n\nconsole.log(feedbackRecords.data);",
      },
      http: {
        example:
          'curl http://localhost:8080/v1/feedback-records \\\n    -H "Authorization: Bearer $HUB_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/feedback-records',
    httpMethod: 'post',
    summary: 'Create a new feedback record',
    description: 'Creates a new feedback record data point',
    stainlessPath: '(resource) feedback_records > (method) create',
    qualified: 'client.feedbackRecords.create',
    params: [
      'field_id: string;',
      "field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date';",
      'source_type: string;',
      'submission_id: string;',
      'tenant_id: string;',
      'collected_at?: string;',
      'field_group_id?: string;',
      'field_group_label?: string;',
      'field_label?: string;',
      'language?: string;',
      'metadata?: object;',
      'source_id?: string;',
      'source_name?: string;',
      'user_id?: string;',
      'value_boolean?: boolean;',
      'value_date?: string;',
      'value_number?: number;',
      'value_text?: string;',
    ],
    response:
      "{ id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_id?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }",
    markdown:
      "## create\n\n`client.feedbackRecords.create(field_id: string, field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date', source_type: string, submission_id: string, tenant_id: string, collected_at?: string, field_group_id?: string, field_group_label?: string, field_label?: string, language?: string, metadata?: object, source_id?: string, source_name?: string, user_id?: string, value_boolean?: boolean, value_date?: string, value_number?: number, value_text?: string): { id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_id?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }`\n\n**post** `/v1/feedback-records`\n\nCreates a new feedback record data point\n\n### Parameters\n\n- `field_id: string`\n  Identifier for the question/field. NULL bytes not allowed.\n\n- `field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'`\n  Field type: text (enrichable), categorical, nps, csat, ces, rating, number, boolean, date\n\n- `source_type: string`\n  Type of feedback source (e.g., survey, review, feedback_form). NULL bytes not allowed.\n\n- `submission_id: string`\n  Identifier for the logical submission this record belongs to (tenant-scoped). Required.\nEnables grouping multi-field submissions and idempotent ingestion.\nUnique per (tenant_id, submission_id, field_id). If a record has no logical submission, use e.g. field_id.\n\n\n- `tenant_id: string`\n  Tenant/organization identifier for multi-tenancy. Required.\n\n- `collected_at?: string`\n  When the feedback was collected (defaults to now). Must be between 1970-01-01 and 2080-12-31.\n\n- `field_group_id?: string`\n  Stable identifier grouping related fields (for ranking, matrix, grid questions). NULL bytes not allowed.\n\n- `field_group_label?: string`\n  Human-readable question text for the group\n\n- `field_label?: string`\n  The actual question text\n\n- `language?: string`\n  ISO language code. NULL bytes not allowed.\n\n- `metadata?: object`\n  User agent, device, location, referrer, tags, etc. NULL bytes (\\x00 or \\u0000) are not allowed in JSON keys or values.\n\n- `source_id?: string`\n  Reference to survey/form/ticket ID\n\n- `source_name?: string`\n  Human-readable name\n\n- `user_id?: string`\n  User ID (e.g., anonymous ID or email hash)\n\n- `value_boolean?: boolean`\n  For yes/no questions\n\n- `value_date?: string`\n  For date responses. Must be between 1970-01-01 and 2080-12-31.\n\n- `value_number?: number`\n  For ratings, NPS scores, numeric responses. Must be between -1e15 and +1e15.\n\n- `value_text?: string`\n  For open-ended text responses. Omit or null if not applicable. NULL bytes not allowed when present.\n\n### Returns\n\n- `{ id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_id?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }`\n\n  - `id: string`\n  - `collected_at: string`\n  - `created_at: string`\n  - `field_id: string`\n  - `field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'`\n  - `source_type: string`\n  - `submission_id: string`\n  - `tenant_id: string`\n  - `updated_at: string`\n  - `field_group_id?: string`\n  - `field_group_label?: string`\n  - `field_label?: string`\n  - `language?: string`\n  - `metadata?: object`\n  - `source_id?: string`\n  - `source_name?: string`\n  - `user_id?: string`\n  - `value_boolean?: boolean`\n  - `value_date?: string`\n  - `value_number?: number`\n  - `value_text?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst feedbackRecordData = await client.feedbackRecords.create({\n  field_id: 'q1',\n  field_type: 'rating',\n  source_type: 'survey',\n  submission_id: '550e8400-e29b-41d4-a716-446655440000',\n  tenant_id: 'org-123',\n});\n\nconsole.log(feedbackRecordData);\n```",
    perLanguage: {
      typescript: {
        method: 'client.feedbackRecords.create',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  apiKey: process.env['HUB_API_KEY'], // This is the default and can be omitted\n});\n\nconst feedbackRecordData = await client.feedbackRecords.create({\n  field_id: 'q1',\n  field_type: 'rating',\n  source_type: 'survey',\n  submission_id: '550e8400-e29b-41d4-a716-446655440000',\n  tenant_id: 'org-123',\n  field_label: 'How satisfied are you?',\n  language: 'en',\n  source_id: 'survey-123',\n  source_name: 'Q1 NPS Survey',\n  user_id: 'user-abc-123',\n  value_number: 9,\n});\n\nconsole.log(feedbackRecordData.id);",
      },
      http: {
        example:
          'curl http://localhost:8080/v1/feedback-records \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $HUB_API_KEY" \\\n    -d \'{\n          "field_id": "q1",\n          "field_type": "rating",\n          "source_type": "survey",\n          "submission_id": "550e8400-e29b-41d4-a716-446655440000",\n          "tenant_id": "org-123"\n        }\'',
      },
    },
  },
  {
    name: 'bulk_delete',
    endpoint: '/v1/feedback-records',
    httpMethod: 'delete',
    summary: 'Bulk delete feedback records by user ID',
    description:
      'Permanently deletes all feedback record data points matching the specified user_id. This endpoint supports GDPR Article 17 (Right to Erasure) requests.',
    stainlessPath: '(resource) feedback_records > (method) bulk_delete',
    qualified: 'client.feedbackRecords.bulkDelete',
    params: ['user_id: string;', 'tenant_id?: string;'],
    response: '{ deleted_count: number; message: string; }',
    markdown:
      "## bulk_delete\n\n`client.feedbackRecords.bulkDelete(user_id: string, tenant_id?: string): { deleted_count: number; message: string; }`\n\n**delete** `/v1/feedback-records`\n\nPermanently deletes all feedback record data points matching the specified user_id. This endpoint supports GDPR Article 17 (Right to Erasure) requests.\n\n### Parameters\n\n- `user_id: string`\n  Delete all records matching this user ID (required). NULL bytes not allowed.\n\n- `tenant_id?: string`\n  Filter by tenant ID (optional, for multi-tenant deployments). NULL bytes not allowed.\n\n### Returns\n\n- `{ deleted_count: number; message: string; }`\n\n  - `deleted_count: number`\n  - `message: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst response = await client.feedbackRecords.bulkDelete({ user_id: 'user-abc-123' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.feedbackRecords.bulkDelete',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  apiKey: process.env['HUB_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.feedbackRecords.bulkDelete({ user_id: 'user-abc-123' });\n\nconsole.log(response.deleted_count);",
      },
      http: {
        example:
          'curl http://localhost:8080/v1/feedback-records \\\n    -X DELETE \\\n    -H "Authorization: Bearer $HUB_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/feedback-records/{id}',
    httpMethod: 'get',
    summary: 'Get a feedback record by ID',
    description: 'Retrieves a single feedback record data point by its UUID',
    stainlessPath: '(resource) feedback_records > (method) retrieve',
    qualified: 'client.feedbackRecords.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_id?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }",
    markdown:
      "## retrieve\n\n`client.feedbackRecords.retrieve(id: string): { id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_id?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }`\n\n**get** `/v1/feedback-records/{id}`\n\nRetrieves a single feedback record data point by its UUID\n\n### Parameters\n\n- `id: string`\n  Feedback Record ID (UUID)\n\n### Returns\n\n- `{ id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_id?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }`\n\n  - `id: string`\n  - `collected_at: string`\n  - `created_at: string`\n  - `field_id: string`\n  - `field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'`\n  - `source_type: string`\n  - `submission_id: string`\n  - `tenant_id: string`\n  - `updated_at: string`\n  - `field_group_id?: string`\n  - `field_group_label?: string`\n  - `field_label?: string`\n  - `language?: string`\n  - `metadata?: object`\n  - `source_id?: string`\n  - `source_name?: string`\n  - `user_id?: string`\n  - `value_boolean?: boolean`\n  - `value_date?: string`\n  - `value_number?: number`\n  - `value_text?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst feedbackRecordData = await client.feedbackRecords.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(feedbackRecordData);\n```",
    perLanguage: {
      typescript: {
        method: 'client.feedbackRecords.retrieve',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  apiKey: process.env['HUB_API_KEY'], // This is the default and can be omitted\n});\n\nconst feedbackRecordData = await client.feedbackRecords.retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(feedbackRecordData.id);",
      },
      http: {
        example:
          'curl http://localhost:8080/v1/feedback-records/$ID \\\n    -H "Authorization: Bearer $HUB_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/feedback-records/{id}',
    httpMethod: 'delete',
    summary: 'Delete a feedback record',
    description: 'Permanently deletes a feedback record data point',
    stainlessPath: '(resource) feedback_records > (method) delete',
    qualified: 'client.feedbackRecords.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.feedbackRecords.delete(id: string): void`\n\n**delete** `/v1/feedback-records/{id}`\n\nPermanently deletes a feedback record data point\n\n### Parameters\n\n- `id: string`\n  Feedback Record ID (UUID)\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nawait client.feedbackRecords.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
    perLanguage: {
      typescript: {
        method: 'client.feedbackRecords.delete',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  apiKey: process.env['HUB_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.feedbackRecords.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');",
      },
      http: {
        example:
          'curl http://localhost:8080/v1/feedback-records/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $HUB_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/feedback-records/{id}',
    httpMethod: 'patch',
    summary: 'Update a feedback record',
    description: 'Updates specific fields of a feedback record data point',
    stainlessPath: '(resource) feedback_records > (method) update',
    qualified: 'client.feedbackRecords.update',
    params: [
      'id: string;',
      'language?: string;',
      'metadata?: object;',
      'user_id?: string;',
      'value_boolean?: boolean;',
      'value_date?: string;',
      'value_number?: number;',
      'value_text?: string;',
    ],
    response:
      "{ id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_id?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }",
    markdown:
      "## update\n\n`client.feedbackRecords.update(id: string, language?: string, metadata?: object, user_id?: string, value_boolean?: boolean, value_date?: string, value_number?: number, value_text?: string): { id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_id?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }`\n\n**patch** `/v1/feedback-records/{id}`\n\nUpdates specific fields of a feedback record data point\n\n### Parameters\n\n- `id: string`\n  Feedback Record ID (UUID)\n\n- `language?: string`\n  Update language. NULL bytes not allowed.\n\n- `metadata?: object`\n  Update metadata. NULL bytes (\\x00 or \\u0000) are not allowed in JSON keys or values.\n\n- `user_id?: string`\n  User ID (e.g., anonymous ID or email hash)\n\n- `value_boolean?: boolean`\n  Update boolean response\n\n- `value_date?: string`\n  Update date response. Must be between 1970-01-01 and 2080-12-31.\n\n- `value_number?: number`\n  Update numeric response. Must be between -1e15 and +1e15.\n\n- `value_text?: string`\n  Update text response. NULL bytes not allowed.\n\n### Returns\n\n- `{ id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_id?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }`\n\n  - `id: string`\n  - `collected_at: string`\n  - `created_at: string`\n  - `field_id: string`\n  - `field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'`\n  - `source_type: string`\n  - `submission_id: string`\n  - `tenant_id: string`\n  - `updated_at: string`\n  - `field_group_id?: string`\n  - `field_group_label?: string`\n  - `field_label?: string`\n  - `language?: string`\n  - `metadata?: object`\n  - `source_id?: string`\n  - `source_name?: string`\n  - `user_id?: string`\n  - `value_boolean?: boolean`\n  - `value_date?: string`\n  - `value_number?: number`\n  - `value_text?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst feedbackRecordData = await client.feedbackRecords.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(feedbackRecordData);\n```",
    perLanguage: {
      typescript: {
        method: 'client.feedbackRecords.update',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  apiKey: process.env['HUB_API_KEY'], // This is the default and can be omitted\n});\n\nconst feedbackRecordData = await client.feedbackRecords.update(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { value_text: 'Updated feedback text' },\n);\n\nconsole.log(feedbackRecordData.id);",
      },
      http: {
        example:
          "curl http://localhost:8080/v1/feedback-records/$ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $HUB_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'retrieve_similar',
    endpoint: '/v1/feedback-records/{id}/similar',
    httpMethod: 'get',
    summary: 'Get similar feedback records',
    description:
      'Returns feedback record IDs and similarity scores for records similar to the given one (by embedding).\n**Only available when embeddings are configured** (EMBEDDING_PROVIDER and EMBEDDING_MODEL set).\nSupported providers: openai, google (Gemini Developer API / Google AI Studio), google-gemini (Gemini Enterprise Agent Platform API).\nWhen embeddings are disabled, this endpoint returns 503 Service Unavailable.\nThe source feedback record must belong to the given tenant_id (enforced).\n',
    stainlessPath: '(resource) feedback_records > (method) retrieve_similar',
    qualified: 'client.feedbackRecords.retrieveSimilar',
    params: [
      'id: string;',
      'tenant_id: string;',
      'cursor?: string;',
      'limit?: number;',
      'min_score?: number;',
    ],
    response:
      '{ data: { feedback_record_id: string; field_label: string; score: number; value_text: string; }[]; limit: number; next_cursor?: string; }',
    markdown:
      "## retrieve_similar\n\n`client.feedbackRecords.retrieveSimilar(id: string, tenant_id: string, cursor?: string, limit?: number, min_score?: number): { data: object[]; limit: number; next_cursor?: string; }`\n\n**get** `/v1/feedback-records/{id}/similar`\n\nReturns feedback record IDs and similarity scores for records similar to the given one (by embedding).\n**Only available when embeddings are configured** (EMBEDDING_PROVIDER and EMBEDDING_MODEL set).\nSupported providers: openai, google (Gemini Developer API / Google AI Studio), google-gemini (Gemini Enterprise Agent Platform API).\nWhen embeddings are disabled, this endpoint returns 503 Service Unavailable.\nThe source feedback record must belong to the given tenant_id (enforced).\n\n\n### Parameters\n\n- `id: string`\n\n- `tenant_id: string`\n  Tenant ID (required for isolation; must match feedback record tenant_id)\n\n- `cursor?: string`\n  Omit for the first page. For the next page, use the exact value from the previous response's next_cursor.\nOpaque (base64-encoded); keyset pagination.\n\n\n- `limit?: number`\n  Number of results to return (default 10, max 100). Consistent with list endpoints.\n\n- `min_score?: number`\n  Minimum similarity score (0..1); only results with score >= min_score are returned. Default 0.7 to reduce noise.\n\n### Returns\n\n- `{ data: { feedback_record_id: string; field_label: string; score: number; value_text: string; }[]; limit: number; next_cursor?: string; }`\n\n  - `data: { feedback_record_id: string; field_label: string; score: number; value_text: string; }[]`\n  - `limit: number`\n  - `next_cursor?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst response = await client.feedbackRecords.retrieveSimilar('018e1234-5678-9abc-def0-123456789abc', { tenant_id: 'org-123' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.feedbackRecords.retrieveSimilar',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  apiKey: process.env['HUB_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.feedbackRecords.retrieveSimilar(\n  '018e1234-5678-9abc-def0-123456789abc',\n  { tenant_id: 'org-123' },\n);\n\nconsole.log(response.data);",
      },
      http: {
        example:
          'curl http://localhost:8080/v1/feedback-records/$ID/similar \\\n    -H "Authorization: Bearer $HUB_API_KEY"',
      },
    },
  },
  {
    name: 'perform_semantic_search',
    endpoint: '/v1/feedback-records/search/semantic',
    httpMethod: 'post',
    summary: 'Semantic search over feedback records',
    description:
      'Embeds the search query and returns feedback record IDs with similarity scores (cosine, 0..1).\n**Only available when embeddings are configured** (EMBEDDING_PROVIDER and EMBEDDING_MODEL set).\nSupported providers: openai, google (Gemini Developer API / Google AI Studio), google-gemini (Gemini Enterprise Agent Platform API).\nWhen embeddings are disabled, this endpoint returns 503 Service Unavailable.\nRequest body must include query and tenant_id (required for tenant isolation).\n',
    stainlessPath: '(resource) feedback_records.search > (method) perform_semantic_search',
    qualified: 'client.feedbackRecords.search.performSemanticSearch',
    params: [
      'query: string;',
      'tenant_id: string;',
      'cursor?: string;',
      'limit?: number;',
      'min_score?: number;',
    ],
    response:
      '{ data: { feedback_record_id: string; field_label: string; score: number; value_text: string; }[]; limit: number; next_cursor?: string; }',
    markdown:
      "## perform_semantic_search\n\n`client.feedbackRecords.search.performSemanticSearch(query: string, tenant_id: string, cursor?: string, limit?: number, min_score?: number): { data: object[]; limit: number; next_cursor?: string; }`\n\n**post** `/v1/feedback-records/search/semantic`\n\nEmbeds the search query and returns feedback record IDs with similarity scores (cosine, 0..1).\n**Only available when embeddings are configured** (EMBEDDING_PROVIDER and EMBEDDING_MODEL set).\nSupported providers: openai, google (Gemini Developer API / Google AI Studio), google-gemini (Gemini Enterprise Agent Platform API).\nWhen embeddings are disabled, this endpoint returns 503 Service Unavailable.\nRequest body must include query and tenant_id (required for tenant isolation).\n\n\n### Parameters\n\n- `query: string`\n  Search query text (embedded and compared via cosine similarity)\n\n- `tenant_id: string`\n  Tenant ID (required for isolation; must match feedback record tenant_id)\n\n- `cursor?: string`\n  Omit for the first page. For the next page, use the exact value from the previous response's next_cursor.\nOpaque (base64-encoded); keyset pagination.\n\n\n- `limit?: number`\n  Number of results to return (default 10, max 100). Consistent with list endpoints.\n\n- `min_score?: number`\n  Minimum similarity score (0..1); only results with score >= min_score are returned. Default 0.7 to reduce noise.\n\n### Returns\n\n- `{ data: { feedback_record_id: string; field_label: string; score: number; value_text: string; }[]; limit: number; next_cursor?: string; }`\n\n  - `data: { feedback_record_id: string; field_label: string; score: number; value_text: string; }[]`\n  - `limit: number`\n  - `next_cursor?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst response = await client.feedbackRecords.search.performSemanticSearch({ query: 'What do users think about login speed?', tenant_id: 'org-123' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.feedbackRecords.search.performSemanticSearch',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  apiKey: process.env['HUB_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.feedbackRecords.search.performSemanticSearch({\n  query: 'What do users think about login speed?',\n  tenant_id: 'org-123',\n});\n\nconsole.log(response.data);",
      },
      http: {
        example:
          'curl http://localhost:8080/v1/feedback-records/search/semantic \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $HUB_API_KEY" \\\n    -d \'{\n          "query": "What do users think about login speed?",\n          "tenant_id": "org-123"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/webhooks',
    httpMethod: 'get',
    summary: 'List webhooks',
    description: 'Lists webhook endpoints with optional filters and pagination',
    stainlessPath: '(resource) webhooks > (method) list',
    qualified: 'client.webhooks.list',
    params: ['cursor?: string;', 'enabled?: boolean;', 'limit?: number;', 'tenant_id?: string;'],
    response:
      '{ data: { id: string; created_at: string; enabled: boolean; updated_at: string; url: string; disabled_at?: string; disabled_reason?: string; event_types?: string[]; tenant_id?: string; }[]; limit: number; next_cursor?: string; offset?: number; total?: number; }',
    markdown:
      "## list\n\n`client.webhooks.list(cursor?: string, enabled?: boolean, limit?: number, tenant_id?: string): { data: object[]; limit: number; next_cursor?: string; offset?: number; total?: number; }`\n\n**get** `/v1/webhooks`\n\nLists webhook endpoints with optional filters and pagination\n\n### Parameters\n\n- `cursor?: string`\n  Omit for the first page. For the next page, use the exact value from the previous response's next_cursor.\nOpaque (base64-encoded); keyset pagination.\n\n\n- `enabled?: boolean`\n  Filter by enabled status\n\n- `limit?: number`\n  Number of results to return (max 1000)\n\n- `tenant_id?: string`\n  Filter by tenant ID. NULL bytes not allowed.\n\n### Returns\n\n- `{ data: { id: string; created_at: string; enabled: boolean; updated_at: string; url: string; disabled_at?: string; disabled_reason?: string; event_types?: string[]; tenant_id?: string; }[]; limit: number; next_cursor?: string; offset?: number; total?: number; }`\n\n  - `data: { id: string; created_at: string; enabled: boolean; updated_at: string; url: string; disabled_at?: string; disabled_reason?: string; event_types?: string[]; tenant_id?: string; }[]`\n  - `limit: number`\n  - `next_cursor?: string`\n  - `offset?: number`\n  - `total?: number`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst webhooks = await client.webhooks.list();\n\nconsole.log(webhooks);\n```",
    perLanguage: {
      typescript: {
        method: 'client.webhooks.list',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  apiKey: process.env['HUB_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhooks = await client.webhooks.list();\n\nconsole.log(webhooks.data);",
      },
      http: {
        example: 'curl http://localhost:8080/v1/webhooks \\\n    -H "Authorization: Bearer $HUB_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/webhooks',
    httpMethod: 'post',
    summary: 'Create a webhook',
    description:
      'Creates a new webhook endpoint. When events occur (e.g. feedback_record.created),\nthe Hub POSTs a signed payload to the webhook URL. If signing_key is omitted,\na key is auto-generated (Standard Webhooks format, whsec_...).\nSee WebhookDeliveryPayload for the payload structure sent to your URL.\n',
    stainlessPath: '(resource) webhooks > (method) create',
    qualified: 'client.webhooks.create',
    params: [
      'url: string;',
      'enabled?: boolean;',
      'event_types?: string[];',
      'signing_key?: string;',
      'tenant_id?: string;',
    ],
    response:
      '{ id: string; created_at: string; enabled: boolean; signing_key: string; updated_at: string; url: string; disabled_at?: string; disabled_reason?: string; event_types?: string[]; tenant_id?: string; }',
    markdown:
      "## create\n\n`client.webhooks.create(url: string, enabled?: boolean, event_types?: string[], signing_key?: string, tenant_id?: string): { id: string; created_at: string; enabled: boolean; signing_key: string; updated_at: string; url: string; disabled_at?: string; disabled_reason?: string; event_types?: string[]; tenant_id?: string; }`\n\n**post** `/v1/webhooks`\n\nCreates a new webhook endpoint. When events occur (e.g. feedback_record.created),\nthe Hub POSTs a signed payload to the webhook URL. If signing_key is omitted,\na key is auto-generated (Standard Webhooks format, whsec_...).\nSee WebhookDeliveryPayload for the payload structure sent to your URL.\n\n\n### Parameters\n\n- `url: string`\n  URL to receive webhook POSTs. Must be an HTTP or HTTPS URL. NULL bytes not allowed.\n\n- `enabled?: boolean`\n  Whether the webhook is active (default true)\n\n- `event_types?: string[]`\n  Event types this webhook subscribes to. Each value must be one of WebhookEventType.\nIf empty, the webhook receives all event types.\n\n\n- `signing_key?: string`\n  Optional. If omitted, a key is auto-generated (whsec_...). Used to sign payloads (Standard Webhooks). When provided, max 255 characters; NULL bytes not allowed.\n\n- `tenant_id?: string`\n  Tenant/organization identifier. NULL bytes not allowed.\n\n### Returns\n\n- `{ id: string; created_at: string; enabled: boolean; signing_key: string; updated_at: string; url: string; disabled_at?: string; disabled_reason?: string; event_types?: string[]; tenant_id?: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `enabled: boolean`\n  - `signing_key: string`\n  - `updated_at: string`\n  - `url: string`\n  - `disabled_at?: string`\n  - `disabled_reason?: string`\n  - `event_types?: string[]`\n  - `tenant_id?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst webhook = await client.webhooks.create({ url: 'https://example.com/hub-events' });\n\nconsole.log(webhook);\n```",
    perLanguage: {
      typescript: {
        method: 'client.webhooks.create',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  apiKey: process.env['HUB_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhook = await client.webhooks.create({\n  url: 'https://example.com/hub-events',\n  enabled: true,\n  event_types: ['feedback_record.created', 'feedback_record.updated', 'feedback_record.deleted'],\n});\n\nconsole.log(webhook.id);",
      },
      http: {
        example:
          'curl http://localhost:8080/v1/webhooks \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $HUB_API_KEY" \\\n    -d \'{\n          "url": "https://example.com/hub-events",\n          "signing_key": "whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",\n          "tenant_id": "org-123"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/webhooks/{id}',
    httpMethod: 'get',
    summary: 'Get a webhook by ID',
    description: 'Retrieves a single webhook endpoint by its UUID. signing_key is omitted for security.',
    stainlessPath: '(resource) webhooks > (method) retrieve',
    qualified: 'client.webhooks.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; created_at: string; enabled: boolean; updated_at: string; url: string; disabled_at?: string; disabled_reason?: string; event_types?: string[]; tenant_id?: string; }',
    markdown:
      "## retrieve\n\n`client.webhooks.retrieve(id: string): { id: string; created_at: string; enabled: boolean; updated_at: string; url: string; disabled_at?: string; disabled_reason?: string; event_types?: string[]; tenant_id?: string; }`\n\n**get** `/v1/webhooks/{id}`\n\nRetrieves a single webhook endpoint by its UUID. signing_key is omitted for security.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; enabled: boolean; updated_at: string; url: string; disabled_at?: string; disabled_reason?: string; event_types?: string[]; tenant_id?: string; }`\n  Webhook data for GET and LIST responses; signing_key is omitted for security\n\n  - `id: string`\n  - `created_at: string`\n  - `enabled: boolean`\n  - `updated_at: string`\n  - `url: string`\n  - `disabled_at?: string`\n  - `disabled_reason?: string`\n  - `event_types?: string[]`\n  - `tenant_id?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst webhook = await client.webhooks.retrieve('018e1234-5678-9abc-def0-123456789abc');\n\nconsole.log(webhook);\n```",
    perLanguage: {
      typescript: {
        method: 'client.webhooks.retrieve',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  apiKey: process.env['HUB_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhook = await client.webhooks.retrieve('018e1234-5678-9abc-def0-123456789abc');\n\nconsole.log(webhook.id);",
      },
      http: {
        example: 'curl http://localhost:8080/v1/webhooks/$ID \\\n    -H "Authorization: Bearer $HUB_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/webhooks/{id}',
    httpMethod: 'patch',
    summary: 'Update a webhook',
    description: 'Updates specific fields of a webhook endpoint',
    stainlessPath: '(resource) webhooks > (method) update',
    qualified: 'client.webhooks.update',
    params: [
      'id: string;',
      'enabled?: boolean;',
      'event_types?: string[];',
      'signing_key?: string;',
      'tenant_id?: string;',
      'url?: string;',
    ],
    response:
      '{ id: string; created_at: string; enabled: boolean; updated_at: string; url: string; disabled_at?: string; disabled_reason?: string; event_types?: string[]; tenant_id?: string; }',
    markdown:
      "## update\n\n`client.webhooks.update(id: string, enabled?: boolean, event_types?: string[], signing_key?: string, tenant_id?: string, url?: string): { id: string; created_at: string; enabled: boolean; updated_at: string; url: string; disabled_at?: string; disabled_reason?: string; event_types?: string[]; tenant_id?: string; }`\n\n**patch** `/v1/webhooks/{id}`\n\nUpdates specific fields of a webhook endpoint\n\n### Parameters\n\n- `id: string`\n\n- `enabled?: boolean`\n  Enable or disable the webhook\n\n- `event_types?: string[]`\n  New list of event types (use empty array to clear). Each value must be one of WebhookEventType.\n\n- `signing_key?: string`\n  New signing key. NULL bytes not allowed.\n\n- `tenant_id?: string`\n  Omit or send null to leave unchanged. Send empty string to clear (store as null).\n\n- `url?: string`\n  New webhook URL. Must be an HTTP or HTTPS URL. NULL bytes not allowed.\n\n### Returns\n\n- `{ id: string; created_at: string; enabled: boolean; updated_at: string; url: string; disabled_at?: string; disabled_reason?: string; event_types?: string[]; tenant_id?: string; }`\n  Webhook data for GET and LIST responses; signing_key is omitted for security\n\n  - `id: string`\n  - `created_at: string`\n  - `enabled: boolean`\n  - `updated_at: string`\n  - `url: string`\n  - `disabled_at?: string`\n  - `disabled_reason?: string`\n  - `event_types?: string[]`\n  - `tenant_id?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst webhook = await client.webhooks.update('018e1234-5678-9abc-def0-123456789abc');\n\nconsole.log(webhook);\n```",
    perLanguage: {
      typescript: {
        method: 'client.webhooks.update',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  apiKey: process.env['HUB_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhook = await client.webhooks.update('018e1234-5678-9abc-def0-123456789abc');\n\nconsole.log(webhook.id);",
      },
      http: {
        example:
          'curl http://localhost:8080/v1/webhooks/$ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $HUB_API_KEY" \\\n    -d \'{\n          "signing_key": "whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",\n          "tenant_id": "org-123",\n          "url": "https://example.com/hub-events"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/webhooks/{id}',
    httpMethod: 'delete',
    summary: 'Delete a webhook',
    description: 'Permanently deletes a webhook endpoint. It will no longer receive events.',
    stainlessPath: '(resource) webhooks > (method) delete',
    qualified: 'client.webhooks.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.webhooks.delete(id: string): void`\n\n**delete** `/v1/webhooks/{id}`\n\nPermanently deletes a webhook endpoint. It will no longer receive events.\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nawait client.webhooks.delete('018e1234-5678-9abc-def0-123456789abc')\n```",
    perLanguage: {
      typescript: {
        method: 'client.webhooks.delete',
        example:
          "import FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  apiKey: process.env['HUB_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.webhooks.delete('018e1234-5678-9abc-def0-123456789abc');",
      },
      http: {
        example:
          'curl http://localhost:8080/v1/webhooks/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $HUB_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'typescript',
    content:
      "# Formbricks Hub TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@formbricks/hub.svg?label=npm%20(stable))](https://npmjs.org/package/@formbricks/hub) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@formbricks/hub)\n\nThis library provides convenient access to the Formbricks Hub REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [formbricks.com](https://formbricks.com). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Formbricks Hub MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40formbricks%2Fhub-mcp&config=eyJuYW1lIjoiQGZvcm1icmlja3MvaHViLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL2h1Yi1tY3Auc3RsbWNwLmNvbSIsImhlYWRlcnMiOnsieC1odWItYXBpLWtleSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40formbricks%2Fhub-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhub-mcp.stlmcp.com%22%2C%22headers%22%3A%7B%22x-hub-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @formbricks/hub\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst response = await client.health.check();\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst response: string = await client.health.check();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.health.check().catch(async (err) => {\n  if (err instanceof FormbricksHub.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new FormbricksHub({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.health.check({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new FormbricksHub({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.health.check({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new FormbricksHub();\n\nconst response = await client.health.check().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client.health.check().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `FORMBRICKS_HUB_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport FormbricksHub from '@formbricks/hub';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new FormbricksHub({\n  logger: logger.child({ name: 'FormbricksHub' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.health.check({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport FormbricksHub from '@formbricks/hub';\nimport fetch from 'my-fetch';\n\nconst client = new FormbricksHub({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport FormbricksHub from '@formbricks/hub';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new FormbricksHub({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport FormbricksHub from 'npm:@formbricks/hub';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new FormbricksHub({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/formbricks/hub-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
