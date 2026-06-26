// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Tenant-scoped enrichment settings
 */
export class Settings extends APIResource {
  /**
   * Returns the enrichment settings for the specified tenant_id. A tenant that has
   * not configured any settings yet returns HTTP 200 with default (unset) values
   * rather than 404; consumers decide the fallback behavior for unset values.
   * Settings are tenant-scoped and never shared across tenants.
   *
   * @example
   * ```ts
   * const setting = await client.tenants.settings.retrieve(
   *   'org-123',
   * );
   * ```
   */
  retrieve(tenantID: string, options?: RequestOptions): APIPromise<SettingRetrieveResponse> {
    return this._client.get(path`/v1/tenants/${tenantID}/settings`, options);
  }

  /**
   * Partially updates the enrichment settings for the specified tenant_id using RFC
   * 7396 JSON Merge Patch semantics (media type application/merge-patch+json;
   * application/json is also accepted). For each member: a value sets that setting,
   * JSON null removes it (e.g. `{"target_language": null}` clears the target
   * language), and an omitted member is left unchanged. The tenant_id is taken from
   * the path, so a request can only ever modify its own tenant's settings.
   * target_language is normalized to a canonical BCP-47 locale (e.g. "en-us" becomes
   * "en-US"); an empty string is rejected (send null to remove it). While a tenant
   * data purge runs for the same tenant_id, this write is rejected with HTTP 409
   * (code `tenant_write_conflict`) and may be retried.
   *
   * @example
   * ```ts
   * const setting = await client.tenants.settings.update(
   *   'org-123',
   * );
   * ```
   */
  update(
    tenantID: string,
    body: SettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SettingUpdateResponse> {
    return this._client.patch(path`/v1/tenants/${tenantID}/settings`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/merge-patch+json' }, options?.headers]),
    });
  }
}

export interface SettingRetrieveResponse {
  /**
   * Tenant-scoped enrichment configuration. Fields are optional; absent fields use
   * server defaults.
   */
  settings: SettingRetrieveResponse.Settings;

  /**
   * Tenant ID the settings belong to
   */
  tenant_id: string;
}

export namespace SettingRetrieveResponse {
  /**
   * Tenant-scoped enrichment configuration. Fields are optional; absent fields use
   * server defaults.
   */
  export interface Settings {
    /**
     * Normalized BCP-47 locale (e.g. "en-US") that language enrichment translates
     * feedback records and topic labels into. Absent or empty means not configured.
     */
    target_language?: string;
  }
}

export interface SettingUpdateResponse {
  /**
   * Tenant-scoped enrichment configuration. Fields are optional; absent fields use
   * server defaults.
   */
  settings: SettingUpdateResponse.Settings;

  /**
   * Tenant ID the settings belong to
   */
  tenant_id: string;
}

export namespace SettingUpdateResponse {
  /**
   * Tenant-scoped enrichment configuration. Fields are optional; absent fields use
   * server defaults.
   */
  export interface Settings {
    /**
     * Normalized BCP-47 locale (e.g. "en-US") that language enrichment translates
     * feedback records and topic labels into. Absent or empty means not configured.
     */
    target_language?: string;
  }
}

export interface SettingUpdateParams {
  /**
   * Target BCP-47 locale to translate into; normalized to a canonical form (e.g.
   * "en-us" becomes "en-US"). Send null to remove it; omit to leave it unchanged. An
   * empty string is rejected.
   */
  target_language?: string | null;
}

export declare namespace Settings {
  export {
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
