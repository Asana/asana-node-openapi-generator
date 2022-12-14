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
import ErrorResponse from '../model/ErrorResponse';
import GetProjectMembership200Response from '../model/GetProjectMembership200Response';
import GetProjectMembershipsForProject200Response from '../model/GetProjectMembershipsForProject200Response';

/**
* ProjectMemberships service.
* @module api/ProjectMembershipsApi
* @version 1.0.0
*/
export default class ProjectMembershipsApi {

    /**
    * Constructs a new ProjectMembershipsApi. 
    * @alias module:api/ProjectMembershipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getProjectMembership operation.
     * @callback module:api/ProjectMembershipsApi~getProjectMembershipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetProjectMembership200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a project membership
     * Returns the complete project record for a single project membership.
     * @param {String} projectMembershipGid 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {module:api/ProjectMembershipsApi~getProjectMembershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetProjectMembership200Response}
     */
    getProjectMembership(projectMembershipGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectMembershipGid' is set
      if (projectMembershipGid === undefined || projectMembershipGid === null) {
        throw new Error("Missing the required parameter 'projectMembershipGid' when calling getProjectMembership");
      }

      let pathParams = {
        'project_membership_gid': projectMembershipGid
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
      let returnType = GetProjectMembership200Response;
      return this.apiClient.callApi(
        '/project_memberships/{project_membership_gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProjectMembershipsForProject operation.
     * @callback module:api/ProjectMembershipsApi~getProjectMembershipsForProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetProjectMembershipsForProject200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get memberships from a project
     * Returns the compact project membership records for the project.
     * @param {String} projectGid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {String} opts.user A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
     * @param {Boolean} opts.optPretty Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array.<String>} opts.optFields Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     * @param {module:api/ProjectMembershipsApi~getProjectMembershipsForProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetProjectMembershipsForProject200Response}
     */
    getProjectMembershipsForProject(projectGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectGid' is set
      if (projectGid === undefined || projectGid === null) {
        throw new Error("Missing the required parameter 'projectGid' when calling getProjectMembershipsForProject");
      }

      let pathParams = {
        'project_gid': projectGid
      };
      let queryParams = {
        'user': opts['user'],
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
      let returnType = GetProjectMembershipsForProject200Response;
      return this.apiClient.callApi(
        '/projects/{project_gid}/project_memberships', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
