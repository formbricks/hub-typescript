// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FeedbackRecords extends APIResource {
  /**
   * Creates a new feedback record data point
   *
   * @example
   * ```ts
   * const feedbackRecordData =
   *   await client.feedbackRecords.create({
   *     field_id: 'q1',
   *     field_type: 'rating',
   *     source_type: 'survey',
   *     field_label: 'How satisfied are you?',
   *     language: 'en',
   *     source_id: 'survey-123',
   *     source_name: 'Q1 NPS Survey',
   *     tenant_id: 'org-123',
   *     user_identifier: 'user-abc-123',
   *     value_number: 9,
   *   });
   * ```
   */
  create(body: FeedbackRecordCreateParams, options?: RequestOptions): APIPromise<FeedbackRecordData> {
    return this._client.post('/v1/feedback-records', { body, ...options });
  }

  /**
   * Retrieves a single feedback record data point by its UUID
   *
   * @example
   * ```ts
   * const feedbackRecordData =
   *   await client.feedbackRecords.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FeedbackRecordData> {
    return this._client.get(path`/v1/feedback-records/${id}`, options);
  }

  /**
   * Updates specific fields of a feedback record data point
   *
   * @example
   * ```ts
   * const feedbackRecordData =
   *   await client.feedbackRecords.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { value_text: 'Updated feedback text' },
   *   );
   * ```
   */
  update(
    id: string,
    body: FeedbackRecordUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FeedbackRecordData> {
    return this._client.patch(path`/v1/feedback-records/${id}`, { body, ...options });
  }

  /**
   * Lists feedback records with optional filters and pagination
   *
   * @example
   * ```ts
   * const feedbackRecords = await client.feedbackRecords.list();
   * ```
   */
  list(
    query: FeedbackRecordListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FeedbackRecordListResponse> {
    return this._client.get('/v1/feedback-records', { query, ...options });
  }

  /**
   * Permanently deletes a feedback record data point
   *
   * @example
   * ```ts
   * await client.feedbackRecords.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/feedback-records/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Permanently deletes all feedback record data points matching the specified
   * user_identifier. This endpoint supports GDPR Article 17 (Right to Erasure)
   * requests.
   *
   * @example
   * ```ts
   * const response = await client.feedbackRecords.bulkDelete({
   *   user_identifier: 'user_identifier',
   * });
   * ```
   */
  bulkDelete(
    params: FeedbackRecordBulkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FeedbackRecordBulkDeleteResponse> {
    const { user_identifier, tenant_id } = params;
    return this._client.delete('/v1/feedback-records', { query: { user_identifier, tenant_id }, ...options });
  }
}

export interface FeedbackRecordData {
  /**
   * UUIDv7 primary key
   */
  id: string;

  /**
   * When the feedback was collected
   */
  collected_at: string;

  /**
   * When this record was created
   */
  created_at: string;

  /**
   * Identifier for the question/field
   */
  field_id: string;

  /**
   * Type of field
   */
  field_type: string;

  /**
   * Type of feedback source
   */
  source_type: string;

  /**
   * When this record was last updated
   */
  updated_at: string;

  /**
   * Stable identifier grouping related fields (for ranking, matrix, grid questions)
   */
  field_group_id?: string;

  /**
   * Human-readable question text for the group
   */
  field_group_label?: string;

  /**
   * The actual question text
   */
  field_label?: string;

  /**
   * ISO language code. NULL bytes not allowed.
   */
  language?: string;

  /**
   * Additional context
   */
  metadata?: { [key: string]: unknown };

  /**
   * Reference to survey/form/ticket ID
   */
  source_id?: string;

  /**
   * Human-readable name
   */
  source_name?: string;

  /**
   * Tenant/organization identifier. NULL bytes not allowed.
   */
  tenant_id?: string;

  /**
   * User identifier
   */
  user_identifier?: string;

  /**
   * Boolean response
   */
  value_boolean?: boolean;

  /**
   * Date response
   */
  value_date?: string;

  /**
   * Numeric response
   */
  value_number?: number;

  /**
   * Text response. NULL bytes not allowed.
   */
  value_text?: string;
}

export interface FeedbackRecordListResponse {
  /**
   * List of feedback records
   */
  data: Array<FeedbackRecordData>;

  /**
   * Limit used in query
   */
  limit: number;

  /**
   * Offset used in query
   */
  offset: number;

  /**
   * Total count of feedback records matching filters
   */
  total: number;
}

export interface FeedbackRecordBulkDeleteResponse {
  /**
   * Number of records deleted
   */
  deleted_count: number;

  /**
   * Human-readable status message
   */
  message: string;
}

export interface FeedbackRecordCreateParams {
  /**
   * Identifier for the question/field. NULL bytes not allowed.
   */
  field_id: string;

  /**
   * Field type: text (enrichable), categorical, nps, csat, ces, rating, number,
   * boolean, date
   */
  field_type: 'text' | 'categorical' | 'nps' | 'csat' | 'ces' | 'rating' | 'number' | 'boolean' | 'date';

  /**
   * Type of feedback source (e.g., survey, review, feedback_form). NULL bytes not
   * allowed.
   */
  source_type: string;

  /**
   * When the feedback was collected (defaults to now). Must be between 1970-01-01
   * and 2080-12-31.
   */
  collected_at?: string;

  /**
   * Stable identifier grouping related fields (for ranking, matrix, grid questions).
   * NULL bytes not allowed.
   */
  field_group_id?: string;

  /**
   * Human-readable question text for the group
   */
  field_group_label?: string;

  /**
   * The actual question text
   */
  field_label?: string;

  /**
   * ISO language code. NULL bytes not allowed.
   */
  language?: string;

  /**
   * User agent, device, location, referrer, tags, etc. NULL bytes (\x00 or \u0000)
   * are not allowed in JSON keys or values.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Reference to survey/form/ticket ID
   */
  source_id?: string;

  /**
   * Human-readable name
   */
  source_name?: string;

  /**
   * Tenant/organization identifier for multi-tenancy. NULL bytes not allowed.
   */
  tenant_id?: string;

  /**
   * Anonymous ID or email hash
   */
  user_identifier?: string;

  /**
   * For yes/no questions
   */
  value_boolean?: boolean;

  /**
   * For date responses. Must be between 1970-01-01 and 2080-12-31.
   */
  value_date?: string;

  /**
   * For ratings, NPS scores, numeric responses. Must be between -1e15 and +1e15.
   */
  value_number?: number;

  /**
   * For open-ended text responses. NULL bytes not allowed.
   */
  value_text?: string;
}

export interface FeedbackRecordUpdateParams {
  /**
   * Update language. NULL bytes not allowed.
   */
  language?: string;

  /**
   * Update metadata. NULL bytes (\x00 or \u0000) are not allowed in JSON keys or
   * values.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Update user identifier
   */
  user_identifier?: string;

  /**
   * Update boolean response
   */
  value_boolean?: boolean;

  /**
   * Update date response. Must be between 1970-01-01 and 2080-12-31.
   */
  value_date?: string;

  /**
   * Update numeric response. Must be between -1e15 and +1e15.
   */
  value_number?: number;

  /**
   * Update text response. NULL bytes not allowed.
   */
  value_text?: string;
}

export interface FeedbackRecordListParams {
  /**
   * Filter by field group ID (for ranking/matrix questions). NULL bytes not allowed.
   */
  field_group_id?: string;

  /**
   * Filter by field ID. NULL bytes not allowed.
   */
  field_id?: string;

  /**
   * Filter by field type. NULL bytes not allowed.
   */
  field_type?: string;

  /**
   * Number of results to return (max 1000)
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;

  /**
   * Filter by collected_at >= since (ISO 8601 format). Must be between 1970-01-01
   * and 2080-12-31.
   */
  since?: string;

  /**
   * Filter by source ID (NULL bytes not allowed)
   */
  source_id?: string;

  /**
   * Filter by source type. NULL bytes not allowed.
   */
  source_type?: string;

  /**
   * Filter by tenant ID (for multi-tenant deployments). NULL bytes not allowed.
   */
  tenant_id?: string;

  /**
   * Filter by collected_at <= until (ISO 8601 format). Must be between 1970-01-01
   * and 2080-12-31.
   */
  until?: string;

  /**
   * Filter by user identifier. NULL bytes not allowed.
   */
  user_identifier?: string;
}

export interface FeedbackRecordBulkDeleteParams {
  /**
   * Delete all records matching this user identifier (required). NULL bytes not
   * allowed.
   */
  user_identifier: string;

  /**
   * Filter by tenant ID (optional, for multi-tenant deployments). NULL bytes not
   * allowed.
   */
  tenant_id?: string;
}

export declare namespace FeedbackRecords {
  export {
    type FeedbackRecordData as FeedbackRecordData,
    type FeedbackRecordListResponse as FeedbackRecordListResponse,
    type FeedbackRecordBulkDeleteResponse as FeedbackRecordBulkDeleteResponse,
    type FeedbackRecordCreateParams as FeedbackRecordCreateParams,
    type FeedbackRecordUpdateParams as FeedbackRecordUpdateParams,
    type FeedbackRecordListParams as FeedbackRecordListParams,
    type FeedbackRecordBulkDeleteParams as FeedbackRecordBulkDeleteParams,
  };
}
