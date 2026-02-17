// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { FormbricksHub } from '../client';

export abstract class APIResource {
  protected _client: FormbricksHub;

  constructor(client: FormbricksHub) {
    this._client = client;
  }
}
