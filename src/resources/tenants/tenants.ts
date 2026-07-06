// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SettingsAPI from './settings';
import { SettingRetrieveResponse, SettingUpdateParams, SettingUpdateResponse, Settings } from './settings';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Tenant-scoped data purge operations
 */
export class Tenants extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Permanently deletes Hub-owned data for the specified tenant_id. This endpoint is
   * intended for tenant/account offboarding after the tenant has been deprovisioned
   * and upstream writes for that tenant have stopped. This includes feedback
   * records, derived embeddings, taxonomy data, and webhooks for the tenant. This
   * operation is synchronous and idempotent; repeated calls return zero counts after
   * the tenant data has already been deleted.
   *
   * The purge is serialized against tenant-owned writes: while it runs, Hub-owned
   * writes for the same tenant_id are rejected with HTTP 409 (code
   * `tenant_write_conflict`); writes for other tenants are unaffected. If
   * tenant-owned writes are in flight when the purge starts, the purge waits up to a
   * configured lock timeout for them to drain and then returns a retryable 409.
   *
   * No webhook events are published as part of this purge operation, and writes
   * rejected during the purge publish no events. Webhook deliveries already in
   * flight when the purge commits complete normally, and previously enqueued
   * delivery jobs no-op after the purge (their queued payloads are removed by the
   * job queue's retention pruning rather than by this endpoint).
   *
   * @example
   * ```ts
   * const response = await client.tenants.deleteData('org-123');
   * ```
   */
  deleteData(tenantID: string, options?: RequestOptions): APIPromise<TenantDeleteDataResponse> {
    return this._client.delete(path`/v1/tenants/${tenantID}/data`, options);
  }
}

export interface TenantDeleteDataResponse {
  /**
   * Number of embedding rows deleted
   */
  deleted_embeddings: number;

  /**
   * Number of feedback records deleted
   */
  deleted_feedback_records: number;

  /**
   * Number of taxonomy active-run rows deleted
   */
  deleted_taxonomy_active_runs: number;

  /**
   * Number of taxonomy cluster memberships deleted
   */
  deleted_taxonomy_cluster_memberships: number;

  /**
   * Number of taxonomy clusters deleted
   */
  deleted_taxonomy_clusters: number;

  /**
   * Number of taxonomy node events deleted
   */
  deleted_taxonomy_node_events: number;

  /**
   * Number of taxonomy nodes deleted
   */
  deleted_taxonomy_nodes: number;

  /**
   * Number of taxonomy runs deleted
   */
  deleted_taxonomy_runs: number;

  /**
   * Number of webhooks deleted
   */
  deleted_webhooks: number;

  /**
   * Human-readable status message
   */
  message: string;

  /**
   * Tenant ID whose data was deleted
   */
  tenant_id: string;
}

Tenants.Settings = Settings;

export declare namespace Tenants {
  export { type TenantDeleteDataResponse as TenantDeleteDataResponse };

  export {
    Settings as Settings,
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
