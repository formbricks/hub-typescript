// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TaxonomyAPI from '../taxonomy';
import * as ActiveAPI from './active';
import { Active, ActiveGetTreeParams, ActiveGetTreeResponse } from './active';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Automatic topic/subtopic taxonomy generation, run history, tree browsing, and node edits
 */
export class Runs extends APIResource {
  active: ActiveAPI.Active = new ActiveAPI.Active(this._client);

  /**
   * Returns a single taxonomy run by ID, scoped to the tenant. Returns 404 if the
   * run does not belong to the tenant.
   *
   * @example
   * ```ts
   * const run = await client.taxonomy.runs.retrieve(
   *   '019f177f-9aa3-705e-8195-cea2aa187268',
   *   { tenant_id: 'org-123' },
   * );
   * ```
   */
  retrieve(runID: string, query: RunRetrieveParams, options?: RequestOptions): APIPromise<TaxonomyAPI.Run> {
    return this._client.get(path`/v1/taxonomy/runs/${runID}`, { query, ...options });
  }

  /**
   * Returns taxonomy run history for a tenant, most recent first. Optionally filter
   * by source_type, field_id, and source_id. source_id is a tri-state filter: omit
   * it for no source filter, pass an empty string to scope to the canonical "no
   * source" bucket, or pass a concrete value to match that source.
   *
   * @example
   * ```ts
   * const runs = await client.taxonomy.runs.list({
   *   tenant_id: 'org-123',
   * });
   * ```
   */
  list(query: RunListParams, options?: RequestOptions): APIPromise<RunListResponse> {
    return this._client.get('/v1/taxonomy/runs', { query, ...options });
  }

  /**
   * Returns the run and its taxonomy tree (visible nodes only; soft-removed nodes
   * are excluded). Tenant-scoped; returns 404 if the run does not belong to the
   * tenant.
   *
   * @example
   * ```ts
   * const response = await client.taxonomy.runs.getTree(
   *   '019f177f-9aa3-705e-8195-cea2aa187268',
   *   { tenant_id: 'org-123' },
   * );
   * ```
   */
  getTree(runID: string, query: RunGetTreeParams, options?: RequestOptions): APIPromise<RunGetTreeResponse> {
    return this._client.get(path`/v1/taxonomy/runs/${runID}/tree`, { query, ...options });
  }

  /**
   * Starts a manual taxonomy generation run for a field scope. Hub validates that
   * the field has enough embedded text feedback (below the configured minimum
   * returns 400 with an "insufficient data" validation error), creates the run, and
   * hands it to the taxonomy compute service.
   *
   * Idempotent per scope: if a run is already pending or running for the same scope,
   * the existing run is returned with `in_progress: true` (HTTP 200) instead of
   * starting a new one; a newly created run returns HTTP 202 with
   * `in_progress: false`. While a tenant data purge runs for the same tenant_id, the
   * request is rejected with HTTP 409 (code `tenant_write_conflict`) and may be
   * retried. Requires Hub embeddings and the taxonomy service to be configured;
   * otherwise returns 503.
   *
   * @example
   * ```ts
   * const response = await client.taxonomy.runs.start({
   *   field_id: 'feedback',
   *   source_type: 'formbricks',
   *   tenant_id: 'org-123',
   *   actor_id: 'user-42',
   *   source_id: 'survey-abc',
   * });
   * ```
   */
  start(body: RunStartParams, options?: RequestOptions): APIPromise<RunStartResponse> {
    return this._client.post('/v1/taxonomy/runs', { body, ...options });
  }
}

export interface RunListResponse {
  data: Array<TaxonomyAPI.Run>;
}

export interface RunGetTreeResponse {
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

export interface RunStartResponse {
  /**
   * True when an existing pending/running run for the scope was returned instead of
   * starting a new one.
   */
  in_progress: boolean;

  /**
   * A persisted taxonomy generation run.
   */
  run: TaxonomyAPI.Run;
}

export interface RunRetrieveParams {
  /**
   * Tenant that owns the run.
   */
  tenant_id: string;
}

export interface RunListParams {
  /**
   * Tenant whose runs should be listed.
   */
  tenant_id: string;

  /**
   * Optional field_id filter.
   */
  field_id?: string;

  /**
   * Maximum number of runs to return.
   */
  limit?: number;

  /**
   * Optional source_id filter. Omit for no filter; empty string scopes to the "no
   * source" bucket; a concrete value matches that source.
   */
  source_id?: string;

  /**
   * Optional source_type filter.
   */
  source_type?: string;
}

export interface RunGetTreeParams {
  /**
   * Tenant that owns the run.
   */
  tenant_id: string;
}

export interface RunStartParams {
  field_id: string;

  source_type: string;

  tenant_id: string;

  /**
   * Optional identifier of the actor starting the run.
   */
  actor_id?: string;

  /**
   * Optional human-readable field label.
   */
  field_label?: string;

  /**
   * Optional; empty or omitted is the canonical "no source" bucket.
   */
  source_id?: string;
}

Runs.Active = Active;

export declare namespace Runs {
  export {
    type RunListResponse as RunListResponse,
    type RunGetTreeResponse as RunGetTreeResponse,
    type RunStartResponse as RunStartResponse,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
    type RunGetTreeParams as RunGetTreeParams,
    type RunStartParams as RunStartParams,
  };

  export {
    Active as Active,
    type ActiveGetTreeResponse as ActiveGetTreeResponse,
    type ActiveGetTreeParams as ActiveGetTreeParams,
  };
}
