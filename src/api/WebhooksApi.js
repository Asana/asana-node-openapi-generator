/**
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml).
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateWebhook201Response from '../model/CreateWebhook201Response';
import CreateWebhookRequest from '../model/CreateWebhookRequest';
import DeleteAttachment200Response from '../model/DeleteAttachment200Response';
import ErrorResponse from '../model/ErrorResponse';
import GetWebhooks200Response from '../model/GetWebhooks200Response';
import UpdateWebhookRequest from '../model/UpdateWebhookRequest';

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 1.0.0
*/
export default class WebhooksApi {

    /**
    * Constructs a new WebhooksApi. 
    * @alias module:api/WebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createWebhook operation.
     * @callback module:api/WebhooksApi~createWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateWebhook201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Establish a webhook
     * Establishing a webhook is a two-part process. First, a simple HTTP POST request initiates the creation similar to creating any other resource.  Next, in the middle of this request comes the confirmation handshake. When a webhook is created, we will send a test POST to the target with an `X-Hook-Secret` header. The target must respond with a `200 OK` or `204 No Content` and a matching `X-Hook-Secret` header to confirm that this webhook subscription is indeed expected. We strongly recommend storing this secret to be used to verify future webhook event signatures.  The POST request to create the webhook will then return with the status of the request. If you do not acknowledge the webhook’s confirmation handshake it will fail to setup, and you will receive an error in response to your attempt to create it. This means you need to be able to receive and complete the webhook *while* the POST request is in-flight (in other words, have a server that can handle requests asynchronously).  Invalid hostnames like localhost will recieve a 403 Forbidden status code.  ``` # Request curl -H \"Authorization: Bearer <personal_access_token>\" \\ -X POST https://app.asana.com/api/1.0/webhooks \\ -d \"resource=8675309\" \\ -d \"target=https://example.com/receive-webhook/7654\" ```  ``` # Handshake sent to https://example.com/ POST /receive-webhook/7654 X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81 ```  ``` # Handshake response sent by example.com HTTP/1.1 200 X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81 ```  ``` # Response HTTP/1.1 201 {   \"data\": {     \"gid\": \"43214\",     \"resource\": {       \"gid\": \"8675309\",       \"name\": \"Bugs\"     },     \"target\": \"https://example.com/receive-webhook/7654\",     \"active\": false,     \"last_success_at\": null,     \"last_failure_at\": null,     \"last_failure_content\": null   } } ```
     * @param {module:model/CreateWebhookRequest} createWebhookRequest The webhook workspace and target.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/WebhooksApi~createWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateWebhook201Response}
     */
    createWebhook(createWebhookRequest, opts, callback) {
      opts = opts || {};
      let postBody = createWebhookRequest;
      // verify the required parameter 'createWebhookRequest' is set
      if (createWebhookRequest === undefined || createWebhookRequest === null) {
        throw new Error("Missing the required parameter 'createWebhookRequest' when calling createWebhook");
      }

      let pathParams = {
      };
      let queryParams = {
        'opt_pretty': opts['optPretty'],
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2', 'personalAccessToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateWebhook201Response;
      return this.apiClient.callApi(
        '/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebhook operation.
     * @callback module:api/WebhooksApi~deleteWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteAttachment200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a webhook
     * This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.
     * @param {String} webhookGid Globally unique identifier for the webhook.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/WebhooksApi~deleteWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteAttachment200Response}
     */
    deleteWebhook(webhookGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'webhookGid' is set
      if (webhookGid === undefined || webhookGid === null) {
        throw new Error("Missing the required parameter 'webhookGid' when calling deleteWebhook");
      }

      let pathParams = {
        'webhook_gid': webhookGid
      };
      let queryParams = {
        'opt_pretty': opts['optPretty'],
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2', 'personalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteAttachment200Response;
      return this.apiClient.callApi(
        '/webhooks/{webhook_gid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhook operation.
     * @callback module:api/WebhooksApi~getWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateWebhook201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a webhook
     * Returns the full record for the given webhook.
     * @param {String} webhookGid Globally unique identifier for the webhook.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/WebhooksApi~getWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateWebhook201Response}
     */
    getWebhook(webhookGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'webhookGid' is set
      if (webhookGid === undefined || webhookGid === null) {
        throw new Error("Missing the required parameter 'webhookGid' when calling getWebhook");
      }

      let pathParams = {
        'webhook_gid': webhookGid
      };
      let queryParams = {
        'opt_pretty': opts['optPretty'],
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2', 'personalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CreateWebhook201Response;
      return this.apiClient.callApi(
        '/webhooks/{webhook_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhooks operation.
     * @callback module:api/WebhooksApi~getWebhooksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetWebhooks200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get multiple webhooks
     * Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.
     * @param {String} workspace The workspace to query for webhooks in.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     * @param {String} opts.resource Only return webhooks for the given resource.
     * @param {module:api/WebhooksApi~getWebhooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetWebhooks200Response}
     */
    getWebhooks(workspace, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling getWebhooks");
      }

      let pathParams = {
      };
      let queryParams = {
        'opt_pretty': opts['optPretty'],
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv'),
        'limit': opts['limit'],
        'offset': opts['offset'],
        'workspace': workspace,
        'resource': opts['resource']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2', 'personalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetWebhooks200Response;
      return this.apiClient.callApi(
        '/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWebhook operation.
     * @callback module:api/WebhooksApi~updateWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateWebhook201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a webhook
     * An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook's previous `filters` array will be completely overwritten by the `filters` sent in the PUT request. 
     * @param {String} webhookGid Globally unique identifier for the webhook.
     * @param {module:model/UpdateWebhookRequest} updateWebhookRequest The updated filters for the webhook.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/WebhooksApi~updateWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateWebhook201Response}
     */
    updateWebhook(webhookGid, updateWebhookRequest, opts, callback) {
      opts = opts || {};
      let postBody = updateWebhookRequest;
      // verify the required parameter 'webhookGid' is set
      if (webhookGid === undefined || webhookGid === null) {
        throw new Error("Missing the required parameter 'webhookGid' when calling updateWebhook");
      }
      // verify the required parameter 'updateWebhookRequest' is set
      if (updateWebhookRequest === undefined || updateWebhookRequest === null) {
        throw new Error("Missing the required parameter 'updateWebhookRequest' when calling updateWebhook");
      }

      let pathParams = {
        'webhook_gid': webhookGid
      };
      let queryParams = {
        'opt_pretty': opts['optPretty'],
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2', 'personalAccessToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateWebhook201Response;
      return this.apiClient.callApi(
        '/webhooks/{webhook_gid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}