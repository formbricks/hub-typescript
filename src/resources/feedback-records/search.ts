// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Feedback record CRUD and search
 */
export class Search extends APIResource {
  /**
   * Embeds the search query and returns feedback record IDs with similarity scores
   * (cosine, 0..1). **Only available when embeddings are configured**
   * (EMBEDDING_PROVIDER and EMBEDDING_MODEL set). Supported providers: openai,
   * google (Gemini Developer API / Google AI Studio), google-gemini (Gemini
   * Enterprise Agent Platform API). When embeddings are disabled, this endpoint
   * returns 503 Service Unavailable. Request body must include query and tenant_id
   * (required for tenant isolation).
   *
   * @example
   * ```ts
   * const response =
   *   await client.feedbackRecords.search.performSemanticSearch(
   *     {
   *       query: 'What do users think about login speed?',
   *       tenant_id: 'org-123',
   *     },
   *   );
   * ```
   */
  performSemanticSearch(params: SearchPerformSemanticSearchParams, options?: RequestOptions): APIPromise<SearchPerformSemanticSearchResponse> {
    const { cursor, limit, min_score, ...body } = params
    return this._client.post('/v1/feedback-records/search/semantic', { query: { cursor, limit, min_score }, body, ...options });
  }
}

export interface SearchPerformSemanticSearchResponse {
  /**
   * List of feedback record IDs with similarity scores (0 = unrelated, 1 =
   * identical). Consistent with list endpoints.
   */
  data: Array<SearchPerformSemanticSearchResponse.Data>;

  /**
   * Limit used in query (echoed for consistency with list endpoints)
   */
  limit: number;

  /**
   * Opaque cursor for the next page (keyset paging). Present only when there may be
   * more results (full page returned). Omit when no next page. Use this exact value
   * as the cursor query param for the next page.
   */
  next_cursor?: string;
}

export namespace SearchPerformSemanticSearchResponse {
  export interface Data {
    /**
     * Feedback record UUID
     */
    feedback_record_id: string;

    /**
     * Label of the feedback field (included in embedding for context). May be empty if
     * the source record had no label.
     */
    field_label: string;

    /**
     * Similarity score (0..1)
     */
    score: number;

    /**
     * value_text of the feedback record (the text that was embedded). May be empty if
     * the source had no text; embeddings are only created for records with non-empty
     * value_text, but the field can be cleared after embedding creation.
     */
    value_text: string;
  }
}

export interface SearchPerformSemanticSearchParams {
  /**
   * Body param: Search query text (embedded and compared via cosine similarity)
   */
  query: string;

  /**
   * Body param: Tenant ID (required for isolation; must match feedback record
   * tenant_id)
   */
  tenant_id: string;

  /**
   * Query param: Omit for the first page. For the next page, use the exact value
   * from the previous response's next_cursor. Opaque (base64-encoded); keyset
   * pagination.
   */
  cursor?: string;

  /**
   * Query param: Number of results to return (default 10, max 100). Consistent with
   * list endpoints.
   */
  limit?: number;

  /**
   * Query param: Minimum similarity score (0..1); only results with score >=
   * min_score are returned. Default 0.7 to reduce noise.
   */
  min_score?: number;
}

export declare namespace Search {
  export {
    type SearchPerformSemanticSearchResponse as SearchPerformSemanticSearchResponse,
    type SearchPerformSemanticSearchParams as SearchPerformSemanticSearchParams
  };
}
