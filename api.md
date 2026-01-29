# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> string</code>

# FeedbackRecords

Types:

- <code><a href="./src/resources/feedback-records.ts">FeedbackRecordData</a></code>
- <code><a href="./src/resources/feedback-records.ts">FeedbackRecordListResponse</a></code>
- <code><a href="./src/resources/feedback-records.ts">FeedbackRecordBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/feedback-records">client.feedbackRecords.<a href="./src/resources/feedback-records.ts">create</a>({ ...params }) -> FeedbackRecordData</code>
- <code title="get /v1/feedback-records/{id}">client.feedbackRecords.<a href="./src/resources/feedback-records.ts">retrieve</a>(id) -> FeedbackRecordData</code>
- <code title="patch /v1/feedback-records/{id}">client.feedbackRecords.<a href="./src/resources/feedback-records.ts">update</a>(id, { ...params }) -> FeedbackRecordData</code>
- <code title="get /v1/feedback-records">client.feedbackRecords.<a href="./src/resources/feedback-records.ts">list</a>({ ...params }) -> FeedbackRecordListResponse</code>
- <code title="delete /v1/feedback-records/{id}">client.feedbackRecords.<a href="./src/resources/feedback-records.ts">delete</a>(id) -> void</code>
- <code title="delete /v1/feedback-records">client.feedbackRecords.<a href="./src/resources/feedback-records.ts">bulkDelete</a>({ ...params }) -> FeedbackRecordBulkDeleteResponse</code>
