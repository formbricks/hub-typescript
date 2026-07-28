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
   * derives "in progress" as `eligible - done`. When an enrichment is not enabled
   * its counts are zero. The response contains counts only (no record identifiers or
   * content).
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
}

/**
 * A tenant's enrichment progress across the record-level enrichments. Counts are
 * directory-level totals.
 */
export interface EnrichmentStatusRetrieveResponse {
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
