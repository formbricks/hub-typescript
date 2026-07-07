// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TaxonomyAPI from '../taxonomy';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Automatic topic/subtopic taxonomy generation, run history, tree browsing, and node edits
 */
export class Active extends APIResource {
  /**
   * Returns the currently active taxonomy run and its tree for a field or directory
   * scope. Exactly one run is active per scope at a time. Returns 404 when no run
   * has been activated for the scope.
   *
   * @example
   * ```ts
   * const response = await client.taxonomy.runs.active.getTree({
   *   tenant_id: 'org-123',
   * });
   * ```
   */
  getTree(query: ActiveGetTreeParams, options?: RequestOptions): APIPromise<ActiveGetTreeResponse> {
    return this._client.get('/v1/taxonomy/runs/active/tree', { query, ...options });
  }
}

export interface ActiveGetTreeResponse {
  /**
   * A node in a taxonomy tree. Non-root nodes have a parent; leaf nodes reference
   * the cluster they summarize.
   */
  root: TaxonomyAPI.Node | null;

  /**
   * A persisted taxonomy generation run.
   */
  run: TaxonomyAPI.Run;
}

export interface ActiveGetTreeParams {
  /**
   * Tenant that owns the scope.
   */
  tenant_id: string;

  /**
   * Field ID of a field scope. Must be omitted for directory scope.
   */
  field_id?: string;

  /**
   * Scope type. Omit for field scope; use directory with tenant_id only for
   * directory taxonomy.
   */
  scope_type?: 'field' | 'directory';

  /**
   * Source ID of the scope; empty string is the canonical "no source" bucket.
   */
  source_id?: string;

  /**
   * Source type of a field scope. Must be omitted for directory scope.
   */
  source_type?: string;
}

export declare namespace Active {
  export {
    type ActiveGetTreeResponse as ActiveGetTreeResponse,
    type ActiveGetTreeParams as ActiveGetTreeParams,
  };
}
