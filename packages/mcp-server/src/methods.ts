// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.health.check',
    fullyQualifiedName: 'health.check',
    httpMethod: 'get',
    httpPath: '/health',
  },
  {
    clientCallName: 'client.feedbackRecords.create',
    fullyQualifiedName: 'feedbackRecords.create',
    httpMethod: 'post',
    httpPath: '/v1/feedback-records',
  },
  {
    clientCallName: 'client.feedbackRecords.retrieve',
    fullyQualifiedName: 'feedbackRecords.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/feedback-records/{id}',
  },
  {
    clientCallName: 'client.feedbackRecords.update',
    fullyQualifiedName: 'feedbackRecords.update',
    httpMethod: 'patch',
    httpPath: '/v1/feedback-records/{id}',
  },
  {
    clientCallName: 'client.feedbackRecords.list',
    fullyQualifiedName: 'feedbackRecords.list',
    httpMethod: 'get',
    httpPath: '/v1/feedback-records',
  },
  {
    clientCallName: 'client.feedbackRecords.delete',
    fullyQualifiedName: 'feedbackRecords.delete',
    httpMethod: 'delete',
    httpPath: '/v1/feedback-records/{id}',
  },
  {
    clientCallName: 'client.feedbackRecords.bulkDelete',
    fullyQualifiedName: 'feedbackRecords.bulkDelete',
    httpMethod: 'delete',
    httpPath: '/v1/feedback-records',
  },
  {
    clientCallName: 'client.feedbackRecords.count',
    fullyQualifiedName: 'feedbackRecords.count',
    httpMethod: 'get',
    httpPath: '/v1/feedback-records/count',
  },
  {
    clientCallName: 'client.feedbackRecords.retrieveSimilar',
    fullyQualifiedName: 'feedbackRecords.retrieveSimilar',
    httpMethod: 'get',
    httpPath: '/v1/feedback-records/{id}/similar',
  },
  {
    clientCallName: 'client.feedbackRecords.search.performSemanticSearch',
    fullyQualifiedName: 'feedbackRecords.search.performSemanticSearch',
    httpMethod: 'post',
    httpPath: '/v1/feedback-records/search/semantic',
  },
  {
    clientCallName: 'client.webhooks.create',
    fullyQualifiedName: 'webhooks.create',
    httpMethod: 'post',
    httpPath: '/v1/webhooks',
  },
  {
    clientCallName: 'client.webhooks.retrieve',
    fullyQualifiedName: 'webhooks.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/webhooks/{id}',
  },
  {
    clientCallName: 'client.webhooks.update',
    fullyQualifiedName: 'webhooks.update',
    httpMethod: 'patch',
    httpPath: '/v1/webhooks/{id}',
  },
  {
    clientCallName: 'client.webhooks.list',
    fullyQualifiedName: 'webhooks.list',
    httpMethod: 'get',
    httpPath: '/v1/webhooks',
  },
  {
    clientCallName: 'client.webhooks.delete',
    fullyQualifiedName: 'webhooks.delete',
    httpMethod: 'delete',
    httpPath: '/v1/webhooks/{id}',
  },
  {
    clientCallName: 'client.tenants.deleteData',
    fullyQualifiedName: 'tenants.deleteData',
    httpMethod: 'delete',
    httpPath: '/v1/tenants/{tenant_id}/data',
  },
  {
    clientCallName: 'client.tenants.purgeFeedbackRecords',
    fullyQualifiedName: 'tenants.purgeFeedbackRecords',
    httpMethod: 'delete',
    httpPath: '/v1/tenants/{tenant_id}/feedback-records',
  },
  {
    clientCallName: 'client.tenants.settings.retrieve',
    fullyQualifiedName: 'tenants.settings.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/tenants/{tenant_id}/settings',
  },
  {
    clientCallName: 'client.tenants.settings.update',
    fullyQualifiedName: 'tenants.settings.update',
    httpMethod: 'patch',
    httpPath: '/v1/tenants/{tenant_id}/settings',
  },
  {
    clientCallName: 'client.tenants.enrichments.retry',
    fullyQualifiedName: 'tenants.enrichments.retry',
    httpMethod: 'post',
    httpPath: '/v1/tenants/{tenant_id}/enrichments/retry',
  },
  {
    clientCallName: 'client.taxonomy.listFields',
    fullyQualifiedName: 'taxonomy.listFields',
    httpMethod: 'get',
    httpPath: '/v1/taxonomy/fields',
  },
  {
    clientCallName: 'client.taxonomy.runs.retrieve',
    fullyQualifiedName: 'taxonomy.runs.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/taxonomy/runs/{run_id}',
  },
  {
    clientCallName: 'client.taxonomy.runs.list',
    fullyQualifiedName: 'taxonomy.runs.list',
    httpMethod: 'get',
    httpPath: '/v1/taxonomy/runs',
  },
  {
    clientCallName: 'client.taxonomy.runs.getTree',
    fullyQualifiedName: 'taxonomy.runs.getTree',
    httpMethod: 'get',
    httpPath: '/v1/taxonomy/runs/{run_id}/tree',
  },
  {
    clientCallName: 'client.taxonomy.runs.retrieveRecordCounts',
    fullyQualifiedName: 'taxonomy.runs.retrieveRecordCounts',
    httpMethod: 'get',
    httpPath: '/v1/taxonomy/runs/{run_id}/record-counts',
  },
  {
    clientCallName: 'client.taxonomy.runs.start',
    fullyQualifiedName: 'taxonomy.runs.start',
    httpMethod: 'post',
    httpPath: '/v1/taxonomy/runs',
  },
  {
    clientCallName: 'client.taxonomy.runs.active.getTree',
    fullyQualifiedName: 'taxonomy.runs.active.getTree',
    httpMethod: 'get',
    httpPath: '/v1/taxonomy/runs/active/tree',
  },
  {
    clientCallName: 'client.taxonomy.nodes.listRecords',
    fullyQualifiedName: 'taxonomy.nodes.listRecords',
    httpMethod: 'get',
    httpPath: '/v1/taxonomy/nodes/{node_id}/records',
  },
  {
    clientCallName: 'client.taxonomy.nodes.rename',
    fullyQualifiedName: 'taxonomy.nodes.rename',
    httpMethod: 'patch',
    httpPath: '/v1/taxonomy/nodes/{node_id}',
  },
  {
    clientCallName: 'client.taxonomy.nodes.softRemove',
    fullyQualifiedName: 'taxonomy.nodes.softRemove',
    httpMethod: 'delete',
    httpPath: '/v1/taxonomy/nodes/{node_id}',
  },
  {
    clientCallName: 'client.enrichmentStatus.retrieve',
    fullyQualifiedName: 'enrichmentStatus.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/enrichment-status',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
