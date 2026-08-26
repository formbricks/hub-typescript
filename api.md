# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> string</code>

# FeedbackRecords

Types:

- <code><a href="./src/resources/feedback-records/feedback-records.ts">FeedbackRecordData</a></code>
- <code><a href="./src/resources/feedback-records/feedback-records.ts">FeedbackRecordListResponse</a></code>
- <code><a href="./src/resources/feedback-records/feedback-records.ts">FeedbackRecordBulkDeleteResponse</a></code>
- <code><a href="./src/resources/feedback-records/feedback-records.ts">FeedbackRecordCountResponse</a></code>
- <code><a href="./src/resources/feedback-records/feedback-records.ts">FeedbackRecordRetrieveSimilarResponse</a></code>

Methods:

- <code title="post /v1/feedback-records">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">create</a>({ ...params }) -> FeedbackRecordData</code>
- <code title="get /v1/feedback-records/{id}">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">retrieve</a>(id) -> FeedbackRecordData</code>
- <code title="patch /v1/feedback-records/{id}">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">update</a>(id, { ...params }) -> FeedbackRecordData</code>
- <code title="get /v1/feedback-records">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">list</a>({ ...params }) -> FeedbackRecordListResponse</code>
- <code title="delete /v1/feedback-records/{id}">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">delete</a>(id) -> void</code>
- <code title="delete /v1/feedback-records">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">bulkDelete</a>({ ...params }) -> FeedbackRecordBulkDeleteResponse</code>
- <code title="get /v1/feedback-records/count">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">count</a>({ ...params }) -> FeedbackRecordCountResponse</code>
- <code title="get /v1/feedback-records/{id}/similar">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">retrieveSimilar</a>(id, { ...params }) -> FeedbackRecordRetrieveSimilarResponse</code>

## Search

Types:

- <code><a href="./src/resources/feedback-records/search.ts">SearchPerformSemanticSearchResponse</a></code>

Methods:

- <code title="post /v1/feedback-records/search/semantic">client.feedbackRecords.search.<a href="./src/resources/feedback-records/search.ts">performSemanticSearch</a>({ ...params }) -> SearchPerformSemanticSearchResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookRetrieveResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="post /v1/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="get /v1/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">retrieve</a>(id) -> WebhookRetrieveResponse</code>
- <code title="patch /v1/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(id, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /v1/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>({ ...params }) -> WebhookListResponse</code>
- <code title="delete /v1/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(id) -> void</code>

# Tenants

Types:

- <code><a href="./src/resources/tenants/tenants.ts">TenantDeleteDataResponse</a></code>
- <code><a href="./src/resources/tenants/tenants.ts">TenantPurgeFeedbackRecordsResponse</a></code>

Methods:

- <code title="delete /v1/tenants/{tenant_id}/data">client.tenants.<a href="./src/resources/tenants/tenants.ts">deleteData</a>(tenantID) -> TenantDeleteDataResponse</code>
- <code title="delete /v1/tenants/{tenant_id}/feedback-records">client.tenants.<a href="./src/resources/tenants/tenants.ts">purgeFeedbackRecords</a>(tenantID) -> TenantPurgeFeedbackRecordsResponse</code>

## Settings

Types:

- <code><a href="./src/resources/tenants/settings.ts">SettingRetrieveResponse</a></code>
- <code><a href="./src/resources/tenants/settings.ts">SettingUpdateResponse</a></code>

Methods:

- <code title="get /v1/tenants/{tenant_id}/settings">client.tenants.settings.<a href="./src/resources/tenants/settings.ts">retrieve</a>(tenantID) -> SettingRetrieveResponse</code>
- <code title="patch /v1/tenants/{tenant_id}/settings">client.tenants.settings.<a href="./src/resources/tenants/settings.ts">update</a>(tenantID, { ...params }) -> SettingUpdateResponse</code>

# Taxonomy

Types:

- <code><a href="./src/resources/taxonomy/taxonomy.ts">Run</a></code>
- <code><a href="./src/resources/taxonomy/taxonomy.ts">Node</a></code>
- <code><a href="./src/resources/taxonomy/taxonomy.ts">TaxonomyListFieldsResponse</a></code>

Methods:

- <code title="get /v1/taxonomy/fields">client.taxonomy.<a href="./src/resources/taxonomy/taxonomy.ts">listFields</a>({ ...params }) -> TaxonomyListFieldsResponse</code>

## Runs

Types:

- <code><a href="./src/resources/taxonomy/runs/runs.ts">RunListResponse</a></code>
- <code><a href="./src/resources/taxonomy/runs/runs.ts">RunGetTreeResponse</a></code>
- <code><a href="./src/resources/taxonomy/runs/runs.ts">RunRetrieveRecordCountsResponse</a></code>
- <code><a href="./src/resources/taxonomy/runs/runs.ts">RunStartResponse</a></code>

Methods:

- <code title="get /v1/taxonomy/runs/{run_id}">client.taxonomy.runs.<a href="./src/resources/taxonomy/runs/runs.ts">retrieve</a>(runID, { ...params }) -> Run</code>
- <code title="get /v1/taxonomy/runs">client.taxonomy.runs.<a href="./src/resources/taxonomy/runs/runs.ts">list</a>({ ...params }) -> RunListResponse</code>
- <code title="get /v1/taxonomy/runs/{run_id}/tree">client.taxonomy.runs.<a href="./src/resources/taxonomy/runs/runs.ts">getTree</a>(runID, { ...params }) -> RunGetTreeResponse</code>
- <code title="get /v1/taxonomy/runs/{run_id}/record-counts">client.taxonomy.runs.<a href="./src/resources/taxonomy/runs/runs.ts">retrieveRecordCounts</a>(runID, { ...params }) -> RunRetrieveRecordCountsResponse</code>
- <code title="post /v1/taxonomy/runs">client.taxonomy.runs.<a href="./src/resources/taxonomy/runs/runs.ts">start</a>({ ...params }) -> RunStartResponse</code>

### Active

Types:

- <code><a href="./src/resources/taxonomy/runs/active.ts">ActiveGetTreeResponse</a></code>

Methods:

- <code title="get /v1/taxonomy/runs/active/tree">client.taxonomy.runs.active.<a href="./src/resources/taxonomy/runs/active.ts">getTree</a>({ ...params }) -> ActiveGetTreeResponse</code>

## Nodes

Types:

- <code><a href="./src/resources/taxonomy/nodes.ts">NodeListRecordsResponse</a></code>

Methods:

- <code title="get /v1/taxonomy/nodes/{node_id}/records">client.taxonomy.nodes.<a href="./src/resources/taxonomy/nodes.ts">listRecords</a>(nodeID, { ...params }) -> NodeListRecordsResponse</code>
- <code title="patch /v1/taxonomy/nodes/{node_id}">client.taxonomy.nodes.<a href="./src/resources/taxonomy/nodes.ts">rename</a>(nodeID, { ...params }) -> Node</code>
- <code title="delete /v1/taxonomy/nodes/{node_id}">client.taxonomy.nodes.<a href="./src/resources/taxonomy/nodes.ts">softRemove</a>(nodeID, { ...params }) -> Node</code>

# EnrichmentStatus

Types:

- <code><a href="./src/resources/enrichment-status.ts">TypeStatus</a></code>
- <code><a href="./src/resources/enrichment-status.ts">EnrichmentStatusRetrieveResponse</a></code>

Methods:

- <code title="get /v1/enrichment-status">client.enrichmentStatus.<a href="./src/resources/enrichment-status.ts">retrieve</a>({ ...params }) -> EnrichmentStatusRetrieveResponse</code>
