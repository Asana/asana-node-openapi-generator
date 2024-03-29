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
import DeleteAttachment200Response from '../model/DeleteAttachment200Response';
import ErrorResponse from '../model/ErrorResponse';
import GetStoriesForTask200Response from '../model/GetStoriesForTask200Response';
import GetStory200Response from '../model/GetStory200Response';
import UpdateStoryRequest from '../model/UpdateStoryRequest';

/**
* Stories service.
* @module api/StoriesApi
* @version 1.0.0
*/
export default class StoriesApi {

    /**
    * Constructs a new StoriesApi. 
    * @alias module:api/StoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createStoryForTask operation.
     * @callback module:api/StoriesApi~createStoryForTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStory200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a story on a task
     * Adds a story to a task. This endpoint currently only allows for comment stories to be created. The comment will be authored by the currently authenticated user, and timestamped when the server receives the request.  Returns the full record for the new story added to the task.
     * @param {String} taskGid The task to operate on.
     * @param {module:model/UpdateStoryRequest} updateStoryRequest The story to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/StoriesApi~createStoryForTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStory200Response}
     */
    createStoryForTask(taskGid, updateStoryRequest, opts, callback) {
      opts = opts || {};
      let postBody = updateStoryRequest;
      // verify the required parameter 'taskGid' is set
      if (taskGid === undefined || taskGid === null) {
        throw new Error("Missing the required parameter 'taskGid' when calling createStoryForTask");
      }
      // verify the required parameter 'updateStoryRequest' is set
      if (updateStoryRequest === undefined || updateStoryRequest === null) {
        throw new Error("Missing the required parameter 'updateStoryRequest' when calling createStoryForTask");
      }

      let pathParams = {
        'task_gid': taskGid
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
      let returnType = GetStory200Response;
      return this.apiClient.callApi(
        '/tasks/{task_gid}/stories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteStory operation.
     * @callback module:api/StoriesApi~deleteStoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteAttachment200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a story
     * Deletes a story. A user can only delete stories they have created.  Returns an empty data record.
     * @param {String} storyGid Globally unique identifier for the story.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/StoriesApi~deleteStoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteAttachment200Response}
     */
    deleteStory(storyGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'storyGid' is set
      if (storyGid === undefined || storyGid === null) {
        throw new Error("Missing the required parameter 'storyGid' when calling deleteStory");
      }

      let pathParams = {
        'story_gid': storyGid
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
        '/stories/{story_gid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStoriesForTask operation.
     * @callback module:api/StoriesApi~getStoriesForTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStoriesForTask200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get stories from a task
     * Returns the compact records for all stories on the task.
     * @param {String} taskGid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     * @param {module:api/StoriesApi~getStoriesForTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStoriesForTask200Response}
     */
    getStoriesForTask(taskGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'taskGid' is set
      if (taskGid === undefined || taskGid === null) {
        throw new Error("Missing the required parameter 'taskGid' when calling getStoriesForTask");
      }

      let pathParams = {
        'task_gid': taskGid
      };
      let queryParams = {
        'opt_pretty': opts['optPretty'],
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv'),
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2', 'personalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetStoriesForTask200Response;
      return this.apiClient.callApi(
        '/tasks/{task_gid}/stories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStory operation.
     * @callback module:api/StoriesApi~getStoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStory200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a story
     * Returns the full record for a single story.
     * @param {String} storyGid Globally unique identifier for the story.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     * @param {module:api/StoriesApi~getStoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStory200Response}
     */
    getStory(storyGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'storyGid' is set
      if (storyGid === undefined || storyGid === null) {
        throw new Error("Missing the required parameter 'storyGid' when calling getStory");
      }

      let pathParams = {
        'story_gid': storyGid
      };
      let queryParams = {
        'opt_pretty': opts['optPretty'],
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv'),
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2', 'personalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetStory200Response;
      return this.apiClient.callApi(
        '/stories/{story_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateStory operation.
     * @callback module:api/StoriesApi~updateStoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStory200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a story
     * Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, and only comment stories and attachment stories can be pinned. Only one of `text` and `html_text` can be specified.
     * @param {String} storyGid Globally unique identifier for the story.
     * @param {module:model/UpdateStoryRequest} updateStoryRequest The comment story to update.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/StoriesApi~updateStoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStory200Response}
     */
    updateStory(storyGid, updateStoryRequest, opts, callback) {
      opts = opts || {};
      let postBody = updateStoryRequest;
      // verify the required parameter 'storyGid' is set
      if (storyGid === undefined || storyGid === null) {
        throw new Error("Missing the required parameter 'storyGid' when calling updateStory");
      }
      // verify the required parameter 'updateStoryRequest' is set
      if (updateStoryRequest === undefined || updateStoryRequest === null) {
        throw new Error("Missing the required parameter 'updateStoryRequest' when calling updateStory");
      }

      let pathParams = {
        'story_gid': storyGid
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
      let returnType = GetStory200Response;
      return this.apiClient.callApi(
        '/stories/{story_gid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
