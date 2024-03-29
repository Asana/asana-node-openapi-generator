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
import AddSupportingRelationshipRequest from '../model/AddSupportingRelationshipRequest';
import DeleteAttachment200Response from '../model/DeleteAttachment200Response';
import ErrorResponse from '../model/ErrorResponse';
import GetGoalRelationship200Response from '../model/GetGoalRelationship200Response';
import GetGoalRelationships200Response from '../model/GetGoalRelationships200Response';
import RemoveSupportingRelationshipRequest from '../model/RemoveSupportingRelationshipRequest';
import UpdateGoalRelationshipRequest from '../model/UpdateGoalRelationshipRequest';

/**
* GoalRelationships service.
* @module api/GoalRelationshipsApi
* @version 1.0.0
*/
export default class GoalRelationshipsApi {

    /**
    * Constructs a new GoalRelationshipsApi. 
    * @alias module:api/GoalRelationshipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addSupportingRelationship operation.
     * @callback module:api/GoalRelationshipsApi~addSupportingRelationshipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGoalRelationship200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a supporting goal relationship
     * Creates a goal relationship by adding a supporting resource to a given goal.  Returns the newly created goal relationship record.
     * @param {String} goalGid Globally unique identifier for the goal.
     * @param {module:model/AddSupportingRelationshipRequest} addSupportingRelationshipRequest The supporting resource to be added to the goal
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/GoalRelationshipsApi~addSupportingRelationshipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGoalRelationship200Response}
     */
    addSupportingRelationship(goalGid, addSupportingRelationshipRequest, opts, callback) {
      opts = opts || {};
      let postBody = addSupportingRelationshipRequest;
      // verify the required parameter 'goalGid' is set
      if (goalGid === undefined || goalGid === null) {
        throw new Error("Missing the required parameter 'goalGid' when calling addSupportingRelationship");
      }
      // verify the required parameter 'addSupportingRelationshipRequest' is set
      if (addSupportingRelationshipRequest === undefined || addSupportingRelationshipRequest === null) {
        throw new Error("Missing the required parameter 'addSupportingRelationshipRequest' when calling addSupportingRelationship");
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
      let returnType = GetGoalRelationship200Response;
      return this.apiClient.callApi(
        '/goals/{goal_gid}/addSupportingRelationship', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGoalRelationship operation.
     * @callback module:api/GoalRelationshipsApi~getGoalRelationshipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGoalRelationship200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a goal relationship
     * Returns the complete updated goal relationship record for a single goal relationship.
     * @param {String} goalRelationshipGid Globally unique identifier for the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/GoalRelationshipsApi~getGoalRelationshipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGoalRelationship200Response}
     */
    getGoalRelationship(goalRelationshipGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'goalRelationshipGid' is set
      if (goalRelationshipGid === undefined || goalRelationshipGid === null) {
        throw new Error("Missing the required parameter 'goalRelationshipGid' when calling getGoalRelationship");
      }

      let pathParams = {
        'goal_relationship_gid': goalRelationshipGid
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
      let returnType = GetGoalRelationship200Response;
      return this.apiClient.callApi(
        '/goal_relationships/{goal_relationship_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGoalRelationships operation.
     * @callback module:api/GoalRelationshipsApi~getGoalRelationshipsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGoalRelationships200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get goal relationships
     * Returns compact goal relationship records.
     * @param {String} supportedGoal Globally unique identifier for the supported goal in the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {String} opts.resourceSubtype If provided, filter to goal relationships with a given resource_subtype.
     * @param {module:api/GoalRelationshipsApi~getGoalRelationshipsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGoalRelationships200Response}
     */
    getGoalRelationships(supportedGoal, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'supportedGoal' is set
      if (supportedGoal === undefined || supportedGoal === null) {
        throw new Error("Missing the required parameter 'supportedGoal' when calling getGoalRelationships");
      }

      let pathParams = {
      };
      let queryParams = {
        'opt_pretty': opts['optPretty'],
        'opt_fields': this.apiClient.buildCollectionParam(opts['optFields'], 'csv'),
        'supported_goal': supportedGoal,
        'resource_subtype': opts['resourceSubtype']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2', 'personalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetGoalRelationships200Response;
      return this.apiClient.callApi(
        '/goal_relationships', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeSupportingRelationship operation.
     * @callback module:api/GoalRelationshipsApi~removeSupportingRelationshipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteAttachment200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a supporting goal relationship
     * Removes a goal relationship for a given parent goal.
     * @param {String} goalGid Globally unique identifier for the goal.
     * @param {module:model/RemoveSupportingRelationshipRequest} removeSupportingRelationshipRequest The supporting resource to be removed from the goal
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/GoalRelationshipsApi~removeSupportingRelationshipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteAttachment200Response}
     */
    removeSupportingRelationship(goalGid, removeSupportingRelationshipRequest, opts, callback) {
      opts = opts || {};
      let postBody = removeSupportingRelationshipRequest;
      // verify the required parameter 'goalGid' is set
      if (goalGid === undefined || goalGid === null) {
        throw new Error("Missing the required parameter 'goalGid' when calling removeSupportingRelationship");
      }
      // verify the required parameter 'removeSupportingRelationshipRequest' is set
      if (removeSupportingRelationshipRequest === undefined || removeSupportingRelationshipRequest === null) {
        throw new Error("Missing the required parameter 'removeSupportingRelationshipRequest' when calling removeSupportingRelationship");
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
      let returnType = DeleteAttachment200Response;
      return this.apiClient.callApi(
        '/goals/{goal_gid}/removeSupportingRelationship', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGoalRelationship operation.
     * @callback module:api/GoalRelationshipsApi~updateGoalRelationshipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGoalRelationship200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a goal relationship
     * An existing goal relationship can be updated by making a PUT request on the URL for that goal relationship. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal relationship record.
     * @param {String} goalRelationshipGid Globally unique identifier for the goal relationship.
     * @param {module:model/UpdateGoalRelationshipRequest} updateGoalRelationshipRequest The updated fields for the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/GoalRelationshipsApi~updateGoalRelationshipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGoalRelationship200Response}
     */
    updateGoalRelationship(goalRelationshipGid, updateGoalRelationshipRequest, opts, callback) {
      opts = opts || {};
      let postBody = updateGoalRelationshipRequest;
      // verify the required parameter 'goalRelationshipGid' is set
      if (goalRelationshipGid === undefined || goalRelationshipGid === null) {
        throw new Error("Missing the required parameter 'goalRelationshipGid' when calling updateGoalRelationship");
      }
      // verify the required parameter 'updateGoalRelationshipRequest' is set
      if (updateGoalRelationshipRequest === undefined || updateGoalRelationshipRequest === null) {
        throw new Error("Missing the required parameter 'updateGoalRelationshipRequest' when calling updateGoalRelationship");
      }

      let pathParams = {
        'goal_relationship_gid': goalRelationshipGid
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
      let returnType = GetGoalRelationship200Response;
      return this.apiClient.callApi(
        '/goal_relationships/{goal_relationship_gid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
