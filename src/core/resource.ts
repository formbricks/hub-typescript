// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Hub } from '../client';

export abstract class APIResource {
  protected _client: Hub;

  constructor(client: Hub) {
    this._client = client;
  }
}
