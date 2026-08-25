// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Tenant-scoped enrichment progress (translation, sentiment, emotions)
 */
export class EnrichmentStatus extends APIResource {
  /**
   * Returns a tenant's enrichment progress across the record-level enrichments
   * (translation, sentiment, emotions). For each, `enabled` reports whether the
   * enrichment is active for the tenant (deployment-configured and switched on /
   * with a resolvable target language), and `eligible`/`done` are directory-level
   * counts of feedback records that qualify and that have been enriched — the UI
   * derives "in progress" as `eligible - done`, of which `failed` is retryable and
   * `failed_terminal` never will be. When an enrichment is not enabled its counts
   * are zero and `disabled_reason` names the gate that closed it, so the UI can
   * explain _why_ rather than silently hiding the enrichment. `as_of` is when the
   * counts were computed, which lets a polling client derive throughput and an ETA
   * without the Hub computing either. The response contains counts only (no record
   * identifiers or content).
   */
  retrieve(
    query: EnrichmentStatusRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<EnrichmentStatusRetrieveResponse> {
    return this._client.get('/v1/enrichment-status', { query, ...options });
  }
}

/**
 * One enrichment's progress for a tenant. When `enabled` is false, `eligible` and
 * `done` are zero.
 */
export interface TypeStatus {
  /**
   * Eligible records that have been enriched.
   */
  done: number;

  /**
   * Feedback records that qualify for this enrichment.
   */
  eligible: number;

  /**
   * Whether the enrichment is active for the tenant (deployment-configured and
   * switched on / with a resolvable target language).
   */
  enabled: boolean;

  /**
   * Eligible records whose last enrichment attempt gave up but which a retry could
   * still rescue — a provider outage, a timeout. Counted only while the record is
   * still un-enriched, so a later success removes it without any cleanup.
   */
  failed: number;

  /**
   * Eligible records the provider will never accept, because the outcome is a
   * property of the record's own text — a content-policy block, a refusal, an input
   * past the model's limit. Retrying these cannot help; they resolve only if the
   * text changes.
   */
  failed_terminal: number;

  /**
   * Which gate switched the enrichment off. Present exactly when `enabled` is false,
   * and absent otherwise. `not_configured` — the deployment has no provider/model
   * for this enrichment, so it is off for every tenant and only an operator can fix
   * it. `switched_off` — the tenant turned it off (sentiment and emotions only).
   * `no_target_language` — translation is configured but neither the tenant's
   * `target_language` nor the deployment default resolves (translation only; it has
   * no on/off switch, so an absent target is its off state).
   */
  disabled_reason?: 'not_configured' | 'switched_off' | 'no_target_language';
}

/**
 * A tenant's enrichment progress across the record-level enrichments. Counts are
 * directory-level totals.
 */
export interface EnrichmentStatusRetrieveResponse {
  /**
   * When the counts were computed (UTC), not when the response was serialized. The
   * endpoint is polled, so two responses are enough to derive throughput and an ETA
   * client-side from the change in `done` over the change in `as_of` — the Hub
   * computes neither.
   */
  as_of: string;

  /**
   * One enrichment's progress for a tenant. When `enabled` is false, `eligible` and
   * `done` are zero.
   */
  emotions: TypeStatus;

  /**
   * One enrichment's progress for a tenant. When `enabled` is false, `eligible` and
   * `done` are zero.
   */
  sentiment: TypeStatus;

  tenant_id: string;

  /**
   * One enrichment's progress for a tenant. When `enabled` is false, `eligible` and
   * `done` are zero.
   */
  translation: TypeStatus;
}

export interface EnrichmentStatusRetrieveParams {
  /**
   * Tenant whose enrichment status should be returned.
   */
  tenant_id: string;
}

export declare namespace EnrichmentStatus {
  export {
    type TypeStatus as TypeStatus,
    type EnrichmentStatusRetrieveResponse as EnrichmentStatusRetrieveResponse,
    type EnrichmentStatusRetrieveParams as EnrichmentStatusRetrieveParams,
  };
}
