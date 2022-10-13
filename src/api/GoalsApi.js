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
import AddFollowersRequest from '../model/AddFollowersRequest';
import CreateGoalMetricRequest from '../model/CreateGoalMetricRequest';
import DeleteAttachment200Response from '../model/DeleteAttachment200Response';
import ErrorResponse from '../model/ErrorResponse';
import GetGoal200Response from '../model/GetGoal200Response';
import GetGoals200Response from '../model/GetGoals200Response';
import UpdateGoalMetricRequest from '../model/UpdateGoalMetricRequest';
import UpdateGoalRequest from '../model/UpdateGoalRequest';

/**
* Goals service.
* @module api/GoalsApi
* @version 1.0.0
*/
export default class GoalsApi {

    /**
    * Constructs a new GoalsApi. 
    * @alias module:api/GoalsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addFollowers operation.
     * @callback module:api/GoalsApi~addFollowersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGoal200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a collaborator to a goal
     * Adds followers to a goal. Returns the goal the followers were added to. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @param {String} goalGid Globally unique identifier for the goal.
     * @param {module:model/AddFollowersRequest} addFollowersRequest The followers to be added as collaborators
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/GoalsApi~addFollowersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGoal200Response}
     */
    addFollowers(goalGid, addFollowersRequest, opts, callback) {
      opts = opts || {};
      let postBody = addFollowersRequest;
      // verify the required parameter 'goalGid' is set
      if (goalGid === undefined || goalGid === null) {
        throw new Error("Missing the required parameter 'goalGid' when calling addFollowers");
      }
      // verify the required parameter 'addFollowersRequest' is set
      if (addFollowersRequest === undefined || addFollowersRequest === null) {
        throw new Error("Missing the required parameter 'addFollowersRequest' when calling addFollowers");
      }

      let pathParams = {
        'goal_gid': goalGid
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
      let returnType = GetGoal200Response;
      return this.apiClient.callApi(
        '/goals/{goal_gid}/addFollowers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createGoal operation.
     * @callback module:api/GoalsApi~createGoalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGoal200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a goal
     * Creates a new goal in a workspace or team.  Returns the full record of the newly created goal.
     * @param {module:model/UpdateGoalRequest} updateGoalRequest The goal to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     * @param {module:api/GoalsApi~createGoalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGoal200Response}
     */
    createGoal(updateGoalRequest, opts, callback) {
      opts = opts || {};
      let postBody = updateGoalRequest;
      // verify the required parameter 'updateGoalRequest' is set
      if (updateGoalRequest === undefined || updateGoalRequest === null) {
        throw new Error("Missing the required parameter 'updateGoalRequest' when calling createGoal");
      }

      let pathParams = {
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetGoal200Response;
      return this.apiClient.callApi(
        '/goals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createGoalMetric operation.
     * @callback module:api/GoalsApi~createGoalMetricCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGoal200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a goal metric
     * Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.
     * @param {String} goalGid Globally unique identifier for the goal.
     * @param {module:model/CreateGoalMetricRequest} createGoalMetricRequest The goal metric to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/GoalsApi~createGoalMetricCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGoal200Response}
     */
    createGoalMetric(goalGid, createGoalMetricRequest, opts, callback) {
      opts = opts || {};
      let postBody = createGoalMetricRequest;
      // verify the required parameter 'goalGid' is set
      if (goalGid === undefined || goalGid === null) {
        throw new Error("Missing the required parameter 'goalGid' when calling createGoalMetric");
      }
      // verify the required parameter 'createGoalMetricRequest' is set
      if (createGoalMetricRequest === undefined || createGoalMetricRequest === null) {
        throw new Error("Missing the required parameter 'createGoalMetricRequest' when calling createGoalMetric");
      }

      let pathParams = {
        'goal_gid': goalGid
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
      let returnType = GetGoal200Response;
      return this.apiClient.callApi(
        '/goals/{goal_gid}/setMetric', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGoal operation.
     * @callback module:api/GoalsApi~deleteGoalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteAttachment200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a goal
     * A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.  Returns an empty data record.
     * @param {String} goalGid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/GoalsApi~deleteGoalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteAttachment200Response}
     */
    deleteGoal(goalGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'goalGid' is set
      if (goalGid === undefined || goalGid === null) {
        throw new Error("Missing the required parameter 'goalGid' when calling deleteGoal");
      }

      let pathParams = {
        'goal_gid': goalGid
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
        '/goals/{goal_gid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGoal operation.
     * @callback module:api/GoalsApi~getGoalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGoal200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a goal
     * Returns the complete goal record for a single goal.
     * @param {String} goalGid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/GoalsApi~getGoalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGoal200Response}
     */
    getGoal(goalGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'goalGid' is set
      if (goalGid === undefined || goalGid === null) {
        throw new Error("Missing the required parameter 'goalGid' when calling getGoal");
      }

      let pathParams = {
        'goal_gid': goalGid
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
      let returnType = GetGoal200Response;
      return this.apiClient.callApi(
        '/goals/{goal_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGoals operation.
     * @callback module:api/GoalsApi~getGoalsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGoals200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get goals
     * Returns compact goal records.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     * @param {String} opts.portfolio Globally unique identifier for supporting portfolio.
     * @param {String} opts.project Globally unique identifier for supporting project.
     * @param {Boolean} opts.isWorkspaceLevel Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.
     * @param {String} opts.team Globally unique identifier for the team.
     * @param {String} opts.workspace Globally unique identifier for the workspace.
     * @param {Array.<String>} opts.timePeriods Globally unique identifiers for the time periods.
     * @param {module:api/GoalsApi~getGoalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGoals200Response}
     */
    getGoals(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'opt_pretty': opts['optPretty'],
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv'),
        'limit': opts['limit'],
        'offset': opts['offset'],
        'portfolio': opts['portfolio'],
        'project': opts['project'],
        'is_workspace_level': opts['isWorkspaceLevel'],
        'team': opts['team'],
        'workspace': opts['workspace'],
        'time_periods': this.apiClient.buildCollectionParam(opts['timePeriods'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2', 'personalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetGoals200Response;
      return this.apiClient.callApi(
        '/goals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getParentGoalsForGoal operation.
     * @callback module:api/GoalsApi~getParentGoalsForGoalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGoals200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get parent goals from a goal
     * Returns a compact representation of all of the parent goals of a goal.
     * @param {String} goalGid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/GoalsApi~getParentGoalsForGoalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGoals200Response}
     */
    getParentGoalsForGoal(goalGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'goalGid' is set
      if (goalGid === undefined || goalGid === null) {
        throw new Error("Missing the required parameter 'goalGid' when calling getParentGoalsForGoal");
      }

      let pathParams = {
        'goal_gid': goalGid
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
      let returnType = GetGoals200Response;
      return this.apiClient.callApi(
        '/goals/{goal_gid}/parentGoals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeFollowers operation.
     * @callback module:api/GoalsApi~removeFollowersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGoal200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a collaborator from a goal
     * Removes followers from a goal. Returns the goal the followers were removed from. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @param {String} goalGid Globally unique identifier for the goal.
     * @param {module:model/AddFollowersRequest} addFollowersRequest The followers to be removed as collaborators
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/GoalsApi~removeFollowersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGoal200Response}
     */
    removeFollowers(goalGid, addFollowersRequest, opts, callback) {
      opts = opts || {};
      let postBody = addFollowersRequest;
      // verify the required parameter 'goalGid' is set
      if (goalGid === undefined || goalGid === null) {
        throw new Error("Missing the required parameter 'goalGid' when calling removeFollowers");
      }
      // verify the required parameter 'addFollowersRequest' is set
      if (addFollowersRequest === undefined || addFollowersRequest === null) {
        throw new Error("Missing the required parameter 'addFollowersRequest' when calling removeFollowers");
      }

      let pathParams = {
        'goal_gid': goalGid
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
      let returnType = GetGoal200Response;
      return this.apiClient.callApi(
        '/goals/{goal_gid}/removeFollowers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGoal operation.
     * @callback module:api/GoalsApi~updateGoalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGoal200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a goal
     * An existing goal can be updated by making a PUT request on the URL for that goal. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal record.
     * @param {String} goalGid Globally unique identifier for the goal.
     * @param {module:model/UpdateGoalRequest} updateGoalRequest The updated fields for the goal.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/GoalsApi~updateGoalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGoal200Response}
     */
    updateGoal(goalGid, updateGoalRequest, opts, callback) {
      opts = opts || {};
      let postBody = updateGoalRequest;
      // verify the required parameter 'goalGid' is set
      if (goalGid === undefined || goalGid === null) {
        throw new Error("Missing the required parameter 'goalGid' when calling updateGoal");
      }
      // verify the required parameter 'updateGoalRequest' is set
      if (updateGoalRequest === undefined || updateGoalRequest === null) {
        throw new Error("Missing the required parameter 'updateGoalRequest' when calling updateGoal");
      }

      let pathParams = {
        'goal_gid': goalGid
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
      let returnType = GetGoal200Response;
      return this.apiClient.callApi(
        '/goals/{goal_gid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGoalMetric operation.
     * @callback module:api/GoalsApi~updateGoalMetricCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGoal200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a goal metric
     * Updates a goal's existing metric's `current_number_value` if one exists, otherwise responds with a 400 status code.  Returns the complete updated goal metric record.
     * @param {String} goalGid Globally unique identifier for the goal.
     * @param {module:model/UpdateGoalMetricRequest} updateGoalMetricRequest The updated fields for the goal metric.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/GoalsApi~updateGoalMetricCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGoal200Response}
     */
    updateGoalMetric(goalGid, updateGoalMetricRequest, opts, callback) {
      opts = opts || {};
      let postBody = updateGoalMetricRequest;
      // verify the required parameter 'goalGid' is set
      if (goalGid === undefined || goalGid === null) {
        throw new Error("Missing the required parameter 'goalGid' when calling updateGoalMetric");
      }
      // verify the required parameter 'updateGoalMetricRequest' is set
      if (updateGoalMetricRequest === undefined || updateGoalMetricRequest === null) {
        throw new Error("Missing the required parameter 'updateGoalMetricRequest' when calling updateGoalMetric");
      }

      let pathParams = {
        'goal_gid': goalGid
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
      let returnType = GetGoal200Response;
      return this.apiClient.callApi(
        '/goals/{goal_gid}/setMetricCurrentValue', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}