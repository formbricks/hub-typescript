// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Webhook subscription management
 */
export class Webhooks extends APIResource {
  /**
   * Creates a new webhook endpoint. When events occur (e.g.
   * feedback*record.created), the Hub POSTs a signed payload to the webhook URL. If
   * signing_key is omitted, a key is auto-generated (Standard Webhooks format,
   * whsec*...). See WebhookDeliveryPayload for the payload structure sent to your
   * URL.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.create({
   *   url: 'https://example.com/hub-events',
   *   enabled: true,
   *   event_types: [
   *     'feedback_record.created',
   *     'feedback_record.updated',
   *     'feedback_record.deleted',
   *   ],
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    return this._client.post('/v1/webhooks', { body, ...options });
  }

  /**
   * Retrieves a single webhook endpoint by its UUID
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.retrieve(
   *   '018e1234-5678-9abc-def0-123456789abc',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WebhookRetrieveResponse> {
    return this._client.get(path`/v1/webhooks/${id}`, options);
  }

  /**
   * Updates specific fields of a webhook endpoint
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.update(
   *   '018e1234-5678-9abc-def0-123456789abc',
   * );
   * ```
   */
  update(id: string, body: WebhookUpdateParams, options?: RequestOptions): APIPromise<WebhookUpdateResponse> {
    return this._client.patch(path`/v1/webhooks/${id}`, { body, ...options });
  }

  /**
   * Lists webhook endpoints with optional filters and pagination
   *
   * @example
   * ```ts
   * const webhooks = await client.webhooks.list();
   * ```
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListResponse> {
    return this._client.get('/v1/webhooks', { query, ...options });
  }

  /**
   * Permanently deletes a webhook endpoint. It will no longer receive events.
   *
   * @example
   * ```ts
   * await client.webhooks.delete(
   *   '018e1234-5678-9abc-def0-123456789abc',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/webhooks/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WebhookCreateResponse {
  /**
   * Webhook ID (UUID)
   */
  id: string;

  /**
   * When the webhook was created
   */
  created_at: string;

  /**
   * Whether the webhook is active
   */
  enabled: boolean;

  /**
   * Key used to sign payloads (Standard Webhooks)
   */
  signing_key: string;

  /**
   * When the webhook was last updated
   */
  updated_at: string;

  /**
   * URL that receives webhook POSTs
   */
  url: string;

  /**
   * Read-only. When the webhook was disabled. Omitted when null. Cleared when the
   * webhook is re-enabled via PATCH.
   */
  disabled_at?: string | null;

  /**
   * Read-only. Set by the system when the webhook was disabled (e.g. after 410 Gone
   * or max delivery failures). Omitted when null.
   */
  disabled_reason?: string | null;

  /**
   * Event types this webhook subscribes to (empty = all)
   */
  event_types?: Array<
    | 'feedback_record.created'
    | 'feedback_record.updated'
    | 'feedback_record.deleted'
    | 'webhook.created'
    | 'webhook.updated'
    | 'webhook.deleted'
  >;

  /**
   * Tenant/organization identifier
   */
  tenant_id?: string;
}

export interface WebhookRetrieveResponse {
  /**
   * Webhook ID (UUID)
   */
  id: string;

  /**
   * When the webhook was created
   */
  created_at: string;

  /**
   * Whether the webhook is active
   */
  enabled: boolean;

  /**
   * Key used to sign payloads (Standard Webhooks)
   */
  signing_key: string;

  /**
   * When the webhook was last updated
   */
  updated_at: string;

  /**
   * URL that receives webhook POSTs
   */
  url: string;

  /**
   * Read-only. When the webhook was disabled. Omitted when null. Cleared when the
   * webhook is re-enabled via PATCH.
   */
  disabled_at?: string | null;

  /**
   * Read-only. Set by the system when the webhook was disabled (e.g. after 410 Gone
   * or max delivery failures). Omitted when null.
   */
  disabled_reason?: string | null;

  /**
   * Event types this webhook subscribes to (empty = all)
   */
  event_types?: Array<
    | 'feedback_record.created'
    | 'feedback_record.updated'
    | 'feedback_record.deleted'
    | 'webhook.created'
    | 'webhook.updated'
    | 'webhook.deleted'
  >;

  /**
   * Tenant/organization identifier
   */
  tenant_id?: string;
}

export interface WebhookUpdateResponse {
  /**
   * Webhook ID (UUID)
   */
  id: string;

  /**
   * When the webhook was created
   */
  created_at: string;

  /**
   * Whether the webhook is active
   */
  enabled: boolean;

  /**
   * Key used to sign payloads (Standard Webhooks)
   */
  signing_key: string;

  /**
   * When the webhook was last updated
   */
  updated_at: string;

  /**
   * URL that receives webhook POSTs
   */
  url: string;

  /**
   * Read-only. When the webhook was disabled. Omitted when null. Cleared when the
   * webhook is re-enabled via PATCH.
   */
  disabled_at?: string | null;

  /**
   * Read-only. Set by the system when the webhook was disabled (e.g. after 410 Gone
   * or max delivery failures). Omitted when null.
   */
  disabled_reason?: string | null;

  /**
   * Event types this webhook subscribes to (empty = all)
   */
  event_types?: Array<
    | 'feedback_record.created'
    | 'feedback_record.updated'
    | 'feedback_record.deleted'
    | 'webhook.created'
    | 'webhook.updated'
    | 'webhook.deleted'
  >;

  /**
   * Tenant/organization identifier
   */
  tenant_id?: string;
}

export interface WebhookListResponse {
  /**
   * List of webhooks
   */
  data: Array<WebhookListResponse.Data>;

  /**
   * Limit used in query
   */
  limit: number;

  /**
   * Opaque cursor for the next page (keyset paging). Present only when there may be
   * more results. Use as the cursor query param for the next page.
   */
  next_cursor?: string;
}

export namespace WebhookListResponse {
  export interface Data {
    /**
     * Webhook ID (UUID)
     */
    id: string;

    /**
     * When the webhook was created
     */
    created_at: string;

    /**
     * Whether the webhook is active
     */
    enabled: boolean;

    /**
     * Key used to sign payloads (Standard Webhooks)
     */
    signing_key: string;

    /**
     * When the webhook was last updated
     */
    updated_at: string;

    /**
     * URL that receives webhook POSTs
     */
    url: string;

    /**
     * Read-only. When the webhook was disabled. Omitted when null. Cleared when the
     * webhook is re-enabled via PATCH.
     */
    disabled_at?: string | null;

    /**
     * Read-only. Set by the system when the webhook was disabled (e.g. after 410 Gone
     * or max delivery failures). Omitted when null.
     */
    disabled_reason?: string | null;

    /**
     * Event types this webhook subscribes to (empty = all)
     */
    event_types?: Array<
      | 'feedback_record.created'
      | 'feedback_record.updated'
      | 'feedback_record.deleted'
      | 'webhook.created'
      | 'webhook.updated'
      | 'webhook.deleted'
    >;

    /**
     * Tenant/organization identifier
     */
    tenant_id?: string;
  }
}

export interface WebhookCreateParams {
  /**
   * URL to receive webhook POSTs. Must be an HTTP or HTTPS URL. NULL bytes not
   * allowed.
   */
  url: string;

  /**
   * Whether the webhook is active (default true)
   */
  enabled?: boolean;

  /**
   * Event types this webhook subscribes to. Each value must be one of
   * WebhookEventType. If empty, the webhook receives all event types.
   */
  event_types?: Array<
    | 'feedback_record.created'
    | 'feedback_record.updated'
    | 'feedback_record.deleted'
    | 'webhook.created'
    | 'webhook.updated'
    | 'webhook.deleted'
  >;

  /**
   * Optional. If omitted, a key is auto-generated (whsec\_...). Used to sign
   * payloads (Standard Webhooks). When provided, max 255 characters; NULL bytes not
   * allowed.
   */
  signing_key?: string;

  /**
   * Tenant/organization identifier. NULL bytes not allowed.
   */
  tenant_id?: string;
}

export interface WebhookUpdateParams {
  /**
   * Enable or disable the webhook
   */
  enabled?: boolean;

  /**
   * New list of event types (use empty array to clear). Each value must be one of
   * WebhookEventType.
   */
  event_types?: Array<
    | 'feedback_record.created'
    | 'feedback_record.updated'
    | 'feedback_record.deleted'
    | 'webhook.created'
    | 'webhook.updated'
    | 'webhook.deleted'
  >;

  /**
   * New signing key. NULL bytes not allowed.
   */
  signing_key?: string;

  /**
   * Omit or send null to leave unchanged. Send empty string to clear (store as
   * null).
   */
  tenant_id?: string | null;

  /**
   * New webhook URL. Must be an HTTP or HTTPS URL. NULL bytes not allowed.
   */
  url?: string;
}

export interface WebhookListParams {
  /**
   * Omit for the first page. For the next page, use the exact value from the
   * previous response's next_cursor. Opaque (base64-encoded); keyset pagination.
   */
  cursor?: string;

  /**
   * Filter by enabled status
   */
  enabled?: boolean;

  /**
   * Number of results to return (max 1000)
   */
  limit?: number;

  /**
   * Filter by tenant ID. NULL bytes not allowed.
   */
  tenant_id?: string;
}

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };
}
