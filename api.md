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
- <code><a href="./src/resources/feedback-records/feedback-records.ts">FeedbackRecordRetrieveSimilarResponse</a></code>

Methods:

- <code title="post /v1/feedback-records">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">create</a>({ ...params }) -> FeedbackRecordData</code>
- <code title="get /v1/feedback-records/{id}">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">retrieve</a>(id) -> FeedbackRecordData</code>
- <code title="patch /v1/feedback-records/{id}">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">update</a>(id, { ...params }) -> FeedbackRecordData</code>
- <code title="get /v1/feedback-records">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">list</a>({ ...params }) -> FeedbackRecordListResponse</code>
- <code title="delete /v1/feedback-records/{id}">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">delete</a>(id) -> void</code>
- <code title="delete /v1/feedback-records">client.feedbackRecords.<a href="./src/resources/feedback-records/feedback-records.ts">bulkDelete</a>({ ...params }) -> FeedbackRecordBulkDeleteResponse</code>
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
