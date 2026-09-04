// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Tenant-scoped enrichment progress (translation, sentiment, emotions)
 */
export class Enrichments extends APIResource {
  /**
   * Clears the terminal failure markers for a tenant so the reconciler will attempt
   * those records again.
   *
   * The automatic sweep deliberately never revives a terminal record: a terminal
   * failure is a property of the record's own text — a content-policy block, a
   * refusal, an input past the model's limit — so re-running it costs a provider
   * call and fails identically. This endpoint is the override for when that premise
   * has changed: the text was edited, or the provider changed its policy.
   *
   * Because of that, it is **rate limited per (tenant, enrichment)**. Clearing is a
   * request to spend a provider call on every record already known to fail, so an
   * unbounded clear would be a cost-amplification loop. A refused call returns
   * `cooling_down` with the remaining wait rather than silently doing nothing.
   *
   * Every requested enrichment gets its own outcome — a tenant can have one cleared,
   * one cooling down and one switched off in the same call. Responds 202: clearing
   * is synchronous, but the retrying is not.
   *
   * @example
   * ```ts
   * const response = await client.tenants.enrichments.retry(
   *   'tenant_id',
   * );
   * ```
   */
  retry(
    tenantID: string,
    body: EnrichmentRetryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EnrichmentRetryResponse> {
    return this._client.post(path`/v1/tenants/${tenantID}/enrichments/retry`, { body, ...options });
  }
}

export interface EnrichmentRetryResponse {
  results: Array<EnrichmentRetryResponse.Result>;

  tenant_id: string;
}

export namespace EnrichmentRetryResponse {
  export interface Result {
    /**
     * How many records had a terminal marker removed. Zero with outcome `cleared` is a
     * real answer: nothing was permanently failed.
     */
    cleared: number;

    enrichment: 'translation' | 'sentiment' | 'emotions';

    /**
     * `cleared` — the markers were removed and the records will be picked up by the
     * next reconcile sweep. `cooling_down` — this enrichment was cleared too recently;
     * see `retry_after_seconds`. `disabled` — the enrichment is not running for this
     * tenant, so clearing would queue work the worker skips; see `disabled_reason`.
     */
    outcome: 'cleared' | 'cooling_down' | 'disabled';

    /**
     * Present only for `disabled`. Same values the enrichment-status endpoint uses, so
     * a consumer needs one vocabulary rather than two.
     */
    disabled_reason?: 'not_configured' | 'switched_off' | 'no_target_language';

    /**
     * Present only for `cooling_down`. How long until this enrichment may be cleared
     * again.
     */
    retry_after_seconds?: number;
  }
}

export interface EnrichmentRetryParams {
  /**
   * Which enrichments to clear. Omit or leave empty for all of them, which is the
   * usual call. An unknown name is rejected rather than ignored, so a typo cannot
   * come back as a successful no-op.
   */
  enrichments?: Array<'translation' | 'sentiment' | 'emotions'>;
}

export declare namespace Enrichments {
  export {
    type EnrichmentRetryResponse as EnrichmentRetryResponse,
    type EnrichmentRetryParams as EnrichmentRetryParams,
  };
}
