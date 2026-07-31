// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FeedbackRecordsAPI from '../feedback-records/feedback-records';
import * as TaxonomyAPI from './taxonomy';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Automatic topic/subtopic taxonomy generation, run history, tree browsing, and node edits
 */
export class Nodes extends APIResource {
  /**
   * Returns the feedback records assigned to a node and all of its (visible)
   * descendant nodes, via the clusters those nodes reference. Tenant-scoped; returns
   * 404 if the node does not belong to the tenant or has been removed. An empty
   * `data` therefore means the node genuinely holds no records. The `limit` in the
   * response reflects the applied cap.
   *
   * @example
   * ```ts
   * const response = await client.taxonomy.nodes.listRecords(
   *   '019f177f-9abe-78cd-8008-f40b58e3147d',
   *   { tenant_id: 'org-123' },
   * );
   * ```
   */
  listRecords(
    nodeID: string,
    query: NodeListRecordsParams,
    options?: RequestOptions,
  ): APIPromise<NodeListRecordsResponse> {
    return this._client.get(path`/v1/taxonomy/nodes/${nodeID}/records`, { query, ...options });
  }

  /**
   * Renames a taxonomy node's label and records a rename event attributed to
   * actor_id. Tenant-scoped; returns 404 if the node does not belong to the tenant.
   * While a tenant data purge runs for the same tenant_id, the request is rejected
   * with HTTP 409 (code `tenant_write_conflict`) and may be retried.
   *
   * @example
   * ```ts
   * const node = await client.taxonomy.nodes.rename(
   *   '019f177f-9abe-78cd-8008-f40b58e3147d',
   *   {
   *     actor_id: 'user-42',
   *     label: 'Authentication Problems',
   *     tenant_id: 'org-123',
   *   },
   * );
   * ```
   */
  rename(nodeID: string, body: NodeRenameParams, options?: RequestOptions): APIPromise<TaxonomyAPI.Node> {
    return this._client.patch(path`/v1/taxonomy/nodes/${nodeID}`, { body, ...options });
  }

  /**
   * Soft-removes a taxonomy node (sets removed_at/removed_by) and records a
   * soft_remove event attributed to actor_id. The node is retained for audit but
   * excluded from tree responses. Tenant-scoped; returns 404 if the node does not
   * belong to the tenant. While a tenant data purge runs for the same tenant_id, the
   * request is rejected with HTTP 409 (code `tenant_write_conflict`).
   *
   * @example
   * ```ts
   * const node = await client.taxonomy.nodes.softRemove(
   *   '019f177f-9abe-78cd-8008-f40b58e3147d',
   *   { actor_id: 'actor_id', tenant_id: 'org-123' },
   * );
   * ```
   */
  softRemove(
    nodeID: string,
    params: NodeSoftRemoveParams,
    options?: RequestOptions,
  ): APIPromise<TaxonomyAPI.Node> {
    const { actor_id, tenant_id } = params;
    return this._client.delete(path`/v1/taxonomy/nodes/${nodeID}`, {
      query: { actor_id, tenant_id },
      ...options,
    });
  }
}

export interface NodeListRecordsResponse {
  data: Array<FeedbackRecordsAPI.FeedbackRecordData>;

  /**
   * The applied maximum number of records.
   */
  limit: number;
}

export interface NodeListRecordsParams {
  /**
   * Tenant that owns the node.
   */
  tenant_id: string;

  /**
   * Maximum number of feedback records to return.
   */
  limit?: number;
}

export interface NodeRenameParams {
  actor_id: string;

  /**
   * New node label.
   */
  label: string;

  tenant_id: string;
}

export interface NodeSoftRemoveParams {
  /**
   * Identifier of the actor performing the removal (recorded in the audit event).
   */
  actor_id: string;

  /**
   * Tenant that owns the node.
   */
  tenant_id: string;
}

export declare namespace Nodes {
  export {
    type NodeListRecordsResponse as NodeListRecordsResponse,
    type NodeListRecordsParams as NodeListRecordsParams,
    type NodeRenameParams as NodeRenameParams,
    type NodeSoftRemoveParams as NodeSoftRemoveParams,
  };
}
