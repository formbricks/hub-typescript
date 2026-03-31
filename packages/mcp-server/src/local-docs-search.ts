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
      'user_identifier?: string;',
      'value_boolean?: boolean;',
      'value_date?: string;',
      'value_number?: number;',
      'value_text?: string;',
    ],
    response:
      "{ id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_identifier?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }",
    markdown:
      "## create\n\n`client.feedbackRecords.create(field_id: string, field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date', source_type: string, submission_id: string, tenant_id: string, collected_at?: string, field_group_id?: string, field_group_label?: string, field_label?: string, language?: string, metadata?: object, source_id?: string, source_name?: string, user_identifier?: string, value_boolean?: boolean, value_date?: string, value_number?: number, value_text?: string): { id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_identifier?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }`\n\n**post** `/v1/feedback-records`\n\nCreates a new feedback record data point\n\n### Parameters\n\n- `field_id: string`\n  Identifier for the question/field. NULL bytes not allowed.\n\n- `field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'`\n  Field type: text (enrichable), categorical, nps, csat, ces, rating, number, boolean, date\n\n- `source_type: string`\n  Type of feedback source (e.g., survey, review, feedback_form). NULL bytes not allowed.\n\n- `submission_id: string`\n  Identifier for the logical submission this record belongs to (tenant-scoped). Required.\nEnables grouping multi-field submissions and idempotent ingestion.\nUnique per (tenant_id, submission_id, field_id). If a record has no logical submission, use e.g. field_id.\n\n\n- `tenant_id: string`\n  Tenant/organization identifier for multi-tenancy. Required.\n\n- `collected_at?: string`\n  When the feedback was collected (defaults to now). Must be between 1970-01-01 and 2080-12-31.\n\n- `field_group_id?: string`\n  Stable identifier grouping related fields (for ranking, matrix, grid questions). NULL bytes not allowed.\n\n- `field_group_label?: string`\n  Human-readable question text for the group\n\n- `field_label?: string`\n  The actual question text\n\n- `language?: string`\n  ISO language code. NULL bytes not allowed.\n\n- `metadata?: object`\n  User agent, device, location, referrer, tags, etc. NULL bytes (\\x00 or \\u0000) are not allowed in JSON keys or values.\n\n- `source_id?: string`\n  Reference to survey/form/ticket ID\n\n- `source_name?: string`\n  Human-readable name\n\n- `user_identifier?: string`\n  Anonymous ID or email hash\n\n- `value_boolean?: boolean`\n  For yes/no questions\n\n- `value_date?: string`\n  For date responses. Must be between 1970-01-01 and 2080-12-31.\n\n- `value_number?: number`\n  For ratings, NPS scores, numeric responses. Must be between -1e15 and +1e15.\n\n- `value_text?: string`\n  For open-ended text responses. Omit or null if not applicable. NULL bytes not allowed when present.\n\n### Returns\n\n- `{ id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_identifier?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }`\n\n  - `id: string`\n  - `collected_at: string`\n  - `created_at: string`\n  - `field_id: string`\n  - `field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'`\n  - `source_type: string`\n  - `submission_id: string`\n  - `tenant_id: string`\n  - `updated_at: string`\n  - `field_group_id?: string`\n  - `field_group_label?: string`\n  - `field_label?: string`\n  - `language?: string`\n  - `metadata?: object`\n  - `source_id?: string`\n  - `source_name?: string`\n  - `user_identifier?: string`\n  - `value_boolean?: boolean`\n  - `value_date?: string`\n  - `value_number?: number`\n  - `value_text?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst feedbackRecordData = await client.feedbackRecords.create({\n  field_id: 'q1',\n  field_type: 'rating',\n  source_type: 'survey',\n  submission_id: '550e8400-e29b-41d4-a716-446655440000',\n  tenant_id: 'org-123',\n});\n\nconsole.log(feedbackRecordData);\n```",
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
      "{ id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_identifier?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }",
    markdown:
      "## retrieve\n\n`client.feedbackRecords.retrieve(id: string): { id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_identifier?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }`\n\n**get** `/v1/feedback-records/{id}`\n\nRetrieves a single feedback record data point by its UUID\n\n### Parameters\n\n- `id: string`\n  Feedback Record ID (UUID)\n\n### Returns\n\n- `{ id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_identifier?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }`\n\n  - `id: string`\n  - `collected_at: string`\n  - `created_at: string`\n  - `field_id: string`\n  - `field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'`\n  - `source_type: string`\n  - `submission_id: string`\n  - `tenant_id: string`\n  - `updated_at: string`\n  - `field_group_id?: string`\n  - `field_group_label?: string`\n  - `field_label?: string`\n  - `language?: string`\n  - `metadata?: object`\n  - `source_id?: string`\n  - `source_name?: string`\n  - `user_identifier?: string`\n  - `value_boolean?: boolean`\n  - `value_date?: string`\n  - `value_number?: number`\n  - `value_text?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst feedbackRecordData = await client.feedbackRecords.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(feedbackRecordData);\n```",
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
      'user_identifier?: string;',
      'value_boolean?: boolean;',
      'value_date?: string;',
      'value_number?: number;',
      'value_text?: string;',
    ],
    response:
      "{ id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_identifier?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }",
    markdown:
      "## update\n\n`client.feedbackRecords.update(id: string, language?: string, metadata?: object, user_identifier?: string, value_boolean?: boolean, value_date?: string, value_number?: number, value_text?: string): { id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_identifier?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }`\n\n**patch** `/v1/feedback-records/{id}`\n\nUpdates specific fields of a feedback record data point\n\n### Parameters\n\n- `id: string`\n  Feedback Record ID (UUID)\n\n- `language?: string`\n  Update language. NULL bytes not allowed.\n\n- `metadata?: object`\n  Update metadata. NULL bytes (\\x00 or \\u0000) are not allowed in JSON keys or values.\n\n- `user_identifier?: string`\n  Update user identifier\n\n- `value_boolean?: boolean`\n  Update boolean response\n\n- `value_date?: string`\n  Update date response. Must be between 1970-01-01 and 2080-12-31.\n\n- `value_number?: number`\n  Update numeric response. Must be between -1e15 and +1e15.\n\n- `value_text?: string`\n  Update text response. NULL bytes not allowed.\n\n### Returns\n\n- `{ id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_identifier?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }`\n\n  - `id: string`\n  - `collected_at: string`\n  - `created_at: string`\n  - `field_id: string`\n  - `field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'`\n  - `source_type: string`\n  - `submission_id: string`\n  - `tenant_id: string`\n  - `updated_at: string`\n  - `field_group_id?: string`\n  - `field_group_label?: string`\n  - `field_label?: string`\n  - `language?: string`\n  - `metadata?: object`\n  - `source_id?: string`\n  - `source_name?: string`\n  - `user_identifier?: string`\n  - `value_boolean?: boolean`\n  - `value_date?: string`\n  - `value_number?: number`\n  - `value_text?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst feedbackRecordData = await client.feedbackRecords.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(feedbackRecordData);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/feedback-records',
    httpMethod: 'get',
    summary: 'List feedback records with filters',
    description: 'Lists feedback records with optional filters and pagination',
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
      'user_identifier?: string;',
    ],
    response:
      "{ data: { id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_identifier?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }[]; limit: number; next_cursor?: string; }",
    markdown:
      "## list\n\n`client.feedbackRecords.list(tenant_id: string, cursor?: string, field_group_id?: string, field_id?: string, field_type?: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date', limit?: number, since?: string, source_id?: string, source_type?: string, submission_id?: string, until?: string, user_identifier?: string): { data: feedback_record_data[]; limit: number; next_cursor?: string; }`\n\n**get** `/v1/feedback-records`\n\nLists feedback records with optional filters and pagination\n\n### Parameters\n\n- `tenant_id: string`\n  Tenant ID (required for isolation). NULL bytes not allowed.\n\n- `cursor?: string`\n  Omit for the first page. For the next page, use the exact value from the previous response's next_cursor.\nOpaque (base64-encoded); keyset pagination.\n\n\n- `field_group_id?: string`\n  Filter by field group ID (for ranking/matrix questions). NULL bytes not allowed.\n\n- `field_id?: string`\n  Filter by field ID. NULL bytes not allowed.\n\n- `field_type?: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'`\n  Filter by field type. NULL bytes not allowed.\n\n- `limit?: number`\n  Number of results to return (max 1000)\n\n- `since?: string`\n  Filter by collected_at >= since (ISO 8601 format). Must be between 1970-01-01 and 2080-12-31.\n\n- `source_id?: string`\n  Filter by source ID (NULL bytes not allowed)\n\n- `source_type?: string`\n  Filter by source type. NULL bytes not allowed.\n\n- `submission_id?: string`\n  Filter by submission ID to group records belonging to one logical submission. NULL bytes not allowed.\n\n- `until?: string`\n  Filter by collected_at <= until (ISO 8601 format). Must be between 1970-01-01 and 2080-12-31.\n\n- `user_identifier?: string`\n  Filter by user identifier. NULL bytes not allowed.\n\n### Returns\n\n- `{ data: { id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_identifier?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }[]; limit: number; next_cursor?: string; }`\n\n  - `data: { id: string; collected_at: string; created_at: string; field_id: string; field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date'; source_type: string; submission_id: string; tenant_id: string; updated_at: string; field_group_id?: string; field_group_label?: string; field_label?: string; language?: string; metadata?: object; source_id?: string; source_name?: string; user_identifier?: string; value_boolean?: boolean; value_date?: string; value_number?: number; value_text?: string; }[]`\n  - `limit: number`\n  - `next_cursor?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst feedbackRecords = await client.feedbackRecords.list({ tenant_id: 'org-123' });\n\nconsole.log(feedbackRecords);\n```",
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
  },
  {
    name: 'bulk_delete',
    endpoint: '/v1/feedback-records',
    httpMethod: 'delete',
    summary: 'Bulk delete feedback records by user identifier',
    description:
      'Permanently deletes all feedback record data points matching the specified user_identifier. This endpoint supports GDPR Article 17 (Right to Erasure) requests.',
    stainlessPath: '(resource) feedback_records > (method) bulk_delete',
    qualified: 'client.feedbackRecords.bulkDelete',
    params: ['user_identifier: string;', 'tenant_id?: string;'],
    response: '{ deleted_count: number; message: string; }',
    markdown:
      "## bulk_delete\n\n`client.feedbackRecords.bulkDelete(user_identifier: string, tenant_id?: string): { deleted_count: number; message: string; }`\n\n**delete** `/v1/feedback-records`\n\nPermanently deletes all feedback record data points matching the specified user_identifier. This endpoint supports GDPR Article 17 (Right to Erasure) requests.\n\n### Parameters\n\n- `user_identifier: string`\n  Delete all records matching this user identifier (required). NULL bytes not allowed.\n\n- `tenant_id?: string`\n  Filter by tenant ID (optional, for multi-tenant deployments). NULL bytes not allowed.\n\n### Returns\n\n- `{ deleted_count: number; message: string; }`\n\n  - `deleted_count: number`\n  - `message: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst response = await client.feedbackRecords.bulkDelete({ user_identifier: 'user-abc-123' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve_similar',
    endpoint: '/v1/feedback-records/{id}/similar',
    httpMethod: 'get',
    summary: 'Get similar feedback records',
    description:
      'Returns feedback record IDs and similarity scores for records similar to the given one (by embedding).\n**Only available when embeddings are configured** (EMBEDDING_PROVIDER and EMBEDDING_MODEL set).\nSupported providers: openai, google (AI Studio), google-vertex.\nWhen embeddings are disabled, this endpoint returns 503 Service Unavailable.\nThe source feedback record must belong to the given tenant_id (enforced).\n',
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
      "## retrieve_similar\n\n`client.feedbackRecords.retrieveSimilar(id: string, tenant_id: string, cursor?: string, limit?: number, min_score?: number): { data: object[]; limit: number; next_cursor?: string; }`\n\n**get** `/v1/feedback-records/{id}/similar`\n\nReturns feedback record IDs and similarity scores for records similar to the given one (by embedding).\n**Only available when embeddings are configured** (EMBEDDING_PROVIDER and EMBEDDING_MODEL set).\nSupported providers: openai, google (AI Studio), google-vertex.\nWhen embeddings are disabled, this endpoint returns 503 Service Unavailable.\nThe source feedback record must belong to the given tenant_id (enforced).\n\n\n### Parameters\n\n- `id: string`\n\n- `tenant_id: string`\n  Tenant ID (required for isolation; must match feedback record tenant_id)\n\n- `cursor?: string`\n  Omit for the first page. For the next page, use the exact value from the previous response's next_cursor.\nOpaque (base64-encoded); keyset pagination.\n\n\n- `limit?: number`\n  Number of results to return (default 10, max 100). Consistent with list endpoints.\n\n- `min_score?: number`\n  Minimum similarity score (0..1); only results with score >= min_score are returned. Default 0.7 to reduce noise.\n\n### Returns\n\n- `{ data: { feedback_record_id: string; field_label: string; score: number; value_text: string; }[]; limit: number; next_cursor?: string; }`\n\n  - `data: { feedback_record_id: string; field_label: string; score: number; value_text: string; }[]`\n  - `limit: number`\n  - `next_cursor?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst response = await client.feedbackRecords.retrieveSimilar('018e1234-5678-9abc-def0-123456789abc', { tenant_id: 'org-123' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'perform_semantic_search',
    endpoint: '/v1/feedback-records/search/semantic',
    httpMethod: 'post',
    summary: 'Semantic search over feedback records',
    description:
      'Embeds the search query and returns feedback record IDs with similarity scores (cosine, 0..1).\n**Only available when embeddings are configured** (EMBEDDING_PROVIDER and EMBEDDING_MODEL set).\nSupported providers: openai, google (AI Studio), google-vertex.\nWhen embeddings are disabled, this endpoint returns 503 Service Unavailable.\nRequest body must include query and tenant_id (required for tenant isolation).\n',
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
      "## perform_semantic_search\n\n`client.feedbackRecords.search.performSemanticSearch(query: string, tenant_id: string, cursor?: string, limit?: number, min_score?: number): { data: object[]; limit: number; next_cursor?: string; }`\n\n**post** `/v1/feedback-records/search/semantic`\n\nEmbeds the search query and returns feedback record IDs with similarity scores (cosine, 0..1).\n**Only available when embeddings are configured** (EMBEDDING_PROVIDER and EMBEDDING_MODEL set).\nSupported providers: openai, google (AI Studio), google-vertex.\nWhen embeddings are disabled, this endpoint returns 503 Service Unavailable.\nRequest body must include query and tenant_id (required for tenant isolation).\n\n\n### Parameters\n\n- `query: string`\n  Search query text (embedded and compared via cosine similarity)\n\n- `tenant_id: string`\n  Tenant ID (required for isolation; must match feedback record tenant_id)\n\n- `cursor?: string`\n  Omit for the first page. For the next page, use the exact value from the previous response's next_cursor.\nOpaque (base64-encoded); keyset pagination.\n\n\n- `limit?: number`\n  Number of results to return (default 10, max 100). Consistent with list endpoints.\n\n- `min_score?: number`\n  Minimum similarity score (0..1); only results with score >= min_score are returned. Default 0.7 to reduce noise.\n\n### Returns\n\n- `{ data: { feedback_record_id: string; field_label: string; score: number; value_text: string; }[]; limit: number; next_cursor?: string; }`\n\n  - `data: { feedback_record_id: string; field_label: string; score: number; value_text: string; }[]`\n  - `limit: number`\n  - `next_cursor?: string`\n\n### Example\n\n```typescript\nimport FormbricksHub from '@formbricks/hub';\n\nconst client = new FormbricksHub();\n\nconst response = await client.feedbackRecords.search.performSemanticSearch({ query: 'What do users think about login speed?', tenant_id: 'org-123' });\n\nconsole.log(response);\n```",
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
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

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
