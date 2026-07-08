// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NodesAPI from './nodes';
import {
  NodeListRecordsParams,
  NodeListRecordsResponse,
  NodeRenameParams,
  NodeSoftRemoveParams,
  Nodes,
} from './nodes';
import * as RunsAPI from './runs/runs';
import {
  RunGetTreeParams,
  RunGetTreeResponse,
  RunListParams,
  RunListResponse,
  RunRetrieveParams,
  RunStartParams,
  RunStartResponse,
  Runs,
} from './runs/runs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Automatic topic/subtopic taxonomy generation, run history, tree browsing, and node edits
 */
export class Taxonomy extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  nodes: NodesAPI.Nodes = new NodesAPI.Nodes(this._client);

  /**
   * Returns the feedback fields that can be used to generate a taxonomy for a
   * tenant, along with the number of text records and embedded records available per
   * field scope (source_type, source_id, field_id). A field with no attributed
   * source is exposed under the canonical "no source" bucket (empty source_id).
   * Requires Hub embeddings to be configured; otherwise the endpoint returns 503.
   *
   * @example
   * ```ts
   * const response = await client.taxonomy.listFields({
   *   tenant_id: 'org-123',
   * });
   * ```
   */
  listFields(
    query: TaxonomyListFieldsParams,
    options?: RequestOptions,
  ): APIPromise<TaxonomyListFieldsResponse> {
    return this._client.get('/v1/taxonomy/fields', { query, ...options });
  }
}

/**
 * A persisted taxonomy generation run.
 */
export interface Run {
  id: string;

  cluster_count: number;

  created_at: string;

  embedding_count: number;

  field_id: string;

  node_count: number;

  record_count: number;

  /**
   * Taxonomy input scope. `field` covers one (source_type, source_id, field_id)
   * field scope. `directory` covers all text feedback records for the
   * tenant/directory and must not include source_type, source_id, or field_id.
   */
  scope_type: 'field' | 'directory';

  /**
   * Empty string is the canonical "no source" bucket.
   */
  source_id: string;

  source_type: string;

  /**
   * Lifecycle state of a taxonomy run. Allowed transitions are pending ->
   * running|failed|canceled and running -> succeeded|failed|canceled.
   */
  status: 'pending' | 'running' | 'succeeded' | 'failed' | 'canceled';

  tenant_id: string;

  updated_at: string;

  /**
   * Sanitized failure message; present on failed runs.
   */
  error?: string;

  /**
   * Machine-readable reason a taxonomy run failed or a prerequisite was not met.
   */
  error_code?:
    | 'insufficient_data'
    | 'service_unavailable'
    | 'generation_failed'
    | 'invalid_output'
    | 'internal_error';

  /**
   * Human-readable field label; absent when unknown.
   */
  field_label?: string;

  finished_at?: string;

  /**
   * Opaque run metrics recorded by the taxonomy service.
   */
  metrics?: { [key: string]: unknown };

  /**
   * Opaque run parameters recorded by Hub.
   */
  params?: { [key: string]: unknown };

  started_at?: string;
}

/**
 * A node in a taxonomy tree. Non-root nodes have a parent; leaf nodes reference
 * the cluster they summarize.
 */
export interface Node {
  id: string;

  created_at: string;

  label: string;

  /**
   * Depth in the tree; the root is level 0.
   */
  level: number;

  /**
   * Position of a node within the taxonomy tree.
   */
  node_type: 'root' | 'branch' | 'leaf';

  run_id: string;

  sort_order: number;

  updated_at: string;

  /**
   * Child nodes, present when the tree is returned hierarchically.
   */
  children?: Array<Node>;

  /**
   * Cluster this node summarizes; typically present on leaf nodes.
   */
  cluster_id?: string;

  description?: string;

  metadata?: { [key: string]: unknown };

  /**
   * Label as originally generated, before any rename.
   */
  original_label?: string;

  /**
   * Parent node ID; absent for the root node.
   */
  parent_id?: string;

  /**
   * Set when the node has been soft-removed.
   */
  removed_at?: string;

  /**
   * Actor that soft-removed the node.
   */
  removed_by?: string;
}

export interface TaxonomyListFieldsResponse {
  data: Array<TaxonomyListFieldsResponse.Data>;
}

export namespace TaxonomyListFieldsResponse {
  /**
   * A feedback field that can be used for taxonomy generation, with its available
   * input counts.
   */
  export interface Data {
    /**
     * Number of those records that have an embedding.
     */
    embedding_count: number;

    field_id: string;

    /**
     * Number of text feedback records in the scope.
     */
    record_count: number;

    /**
     * Empty string is the canonical "no source" bucket.
     */
    source_id: string;

    source_type: string;

    tenant_id: string;

    field_label?: string;

    source_name?: string;
  }
}

export interface TaxonomyListFieldsParams {
  /**
   * Tenant whose taxonomy-capable fields should be listed.
   */
  tenant_id: string;
}

Taxonomy.Runs = Runs;
Taxonomy.Nodes = Nodes;

export declare namespace Taxonomy {
  export {
    type Run as Run,
    type Node as Node,
    type TaxonomyListFieldsResponse as TaxonomyListFieldsResponse,
    type TaxonomyListFieldsParams as TaxonomyListFieldsParams,
  };

  export {
    Runs as Runs,
    type RunListResponse as RunListResponse,
    type RunGetTreeResponse as RunGetTreeResponse,
    type RunStartResponse as RunStartResponse,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
    type RunGetTreeParams as RunGetTreeParams,
    type RunStartParams as RunStartParams,
  };

  export {
    Nodes as Nodes,
    type NodeListRecordsResponse as NodeListRecordsResponse,
    type NodeListRecordsParams as NodeListRecordsParams,
    type NodeRenameParams as NodeRenameParams,
    type NodeSoftRemoveParams as NodeSoftRemoveParams,
  };
}
