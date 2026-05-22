// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Tenant-scoped data purge operations
 */
export class Tenants extends APIResource {
  /**
   * Permanently deletes Hub-owned data for the specified tenant_id. This endpoint is
   * intended for tenant/account offboarding after the tenant has been deprovisioned
   * and upstream writes for that tenant have stopped. This includes feedback
   * records, derived embeddings, and webhooks for the tenant. This operation is
   * synchronous and idempotent; repeated calls return zero counts after the tenant
   * data has already been deleted. Concurrent writes for the same tenant_id are not
   * serialized by Hub in this version. No webhook events are published as part of
   * this purge operation.
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

export declare namespace Tenants {
  export { type TenantDeleteDataResponse as TenantDeleteDataResponse };
}
