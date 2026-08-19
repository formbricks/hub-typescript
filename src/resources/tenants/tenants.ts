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

  /**
   * Permanently deletes every feedback record for the specified tenant_id,
   * everything derived from those records — embeddings and the enrichment stored on
   * each record (sentiment, emotions, translations) — and the taxonomy built on
   * them: runs, clusters, nodes, cluster memberships, active-run pointers and node
   * events.
   *
   * This is intended for emptying a dataset that stays in use, so it removes the
   * tenant's DATA but never its CONFIGURATION: webhooks and tenant settings are left
   * untouched. That is the difference from `DELETE /v1/tenants/{tenant_id}/data`,
   * which additionally deletes both and is meant for offboarding a deprovisioned
   * tenant.
   *
   * The taxonomy is removed rather than preserved because it describes records that
   * no longer exist: its per-node counts are derived from memberships and would all
   * read zero, while a run's own stored counters (`record_count`, `cluster_count`, a
   * cluster's `size`) are historical and would keep advertising the old numbers. A
   * new taxonomy can be generated once the dataset has enough feedback again; manual
   * node renames and removals are per-run and do not survive a regeneration in any
   * case.
   *
   * The tenant is a required path segment, so it cannot be omitted the way a filter
   * on a collection delete could be — dropping it routes elsewhere rather than
   * widening the operation to every tenant.
   *
   * Asynchronous: the request schedules the purge and returns 202 immediately,
   * because the deletion is unbounded and can outlive a request. There is therefore
   * no deleted count in the response. Poll
   * `GET /v1/feedback-records/count?tenant_id=...` to observe progress.
   *
   * The purge removes only the records that existed when it started — it takes a
   * high-water mark up front — so feedback ingested while it runs is never deleted.
   * For a dataset that is no longer receiving feedback the count reaching zero means
   * the purge is complete; for one still ingesting, a nonzero count is those newer
   * records. Note this means the count alone cannot distinguish "finished" from
   * "failed" on an active dataset.
   *
   * Idempotent and safe to repeat. Requesting a purge while one is already running
   * for the same tenant joins the running purge rather than queueing a second one,
   * and still returns 202. A purge requested after an earlier one finished starts a
   * new run.
   *
   * Records are deleted in committed batches, so a purge interrupted by a restart or
   * a timeout keeps the progress it made and resumes on retry; the taxonomy is
   * removed in a final step once the records are gone. While each step runs, the
   * tenant's write lock is held exclusively and Hub-owned writes for that tenant are
   * rejected with HTTP 409 (code `tenant_write_conflict`); the lock is released
   * between steps, and writes for other tenants are never affected. This does not
   * apply to the request below — scheduling a purge takes no lock, so this endpoint
   * does not return 409. A batch that cannot acquire the lock is retried by the job
   * queue without any caller action, up to a bounded number of attempts.
   *
   * No webhook events are published for a purge, and no webhooks are deleted.
   * Enrichment jobs already queued for purged records no-op when they run, since the
   * record they reference is gone.
   *
   * @example
   * ```ts
   * const response = await client.tenants.purgeFeedbackRecords(
   *   'org-123',
   * );
   * ```
   */
  purgeFeedbackRecords(
    tenantID: string,
    options?: RequestOptions,
  ): APIPromise<TenantPurgeFeedbackRecordsResponse> {
    return this._client.delete(path`/v1/tenants/${tenantID}/feedback-records`, options);
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

export interface TenantPurgeFeedbackRecordsResponse {
  /**
   * Always `accepted`. The purge runs in the background, so this reports that the
   * work was scheduled, not that it finished — poll `GET /v1/feedback-records/count`
   * for the tenant to observe completion.
   */
  status: 'accepted';

  /**
   * Tenant ID whose feedback records are being purged
   */
  tenant_id: string;

  /**
   * Human-readable confirmation
   */
  message?: string;
}

Tenants.Settings = Settings;

export declare namespace Tenants {
  export {
    type TenantDeleteDataResponse as TenantDeleteDataResponse,
    type TenantPurgeFeedbackRecordsResponse as TenantPurgeFeedbackRecordsResponse,
  };

  export {
    Settings as Settings,
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
