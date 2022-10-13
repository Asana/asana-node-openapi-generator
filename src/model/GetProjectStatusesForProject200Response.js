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

import ApiClient from '../ApiClient';
import ProjectStatusCompact from './ProjectStatusCompact';

/**
 * The GetProjectStatusesForProject200Response model module.
 * @module model/GetProjectStatusesForProject200Response
 * @version 1.0.0
 */
class GetProjectStatusesForProject200Response {
    /**
     * Constructs a new <code>GetProjectStatusesForProject200Response</code>.
     * @alias module:model/GetProjectStatusesForProject200Response
     */
    constructor() { 
        
        GetProjectStatusesForProject200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProjectStatusesForProject200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProjectStatusesForProject200Response} obj Optional instance to populate.
     * @return {module:model/GetProjectStatusesForProject200Response} The populated <code>GetProjectStatusesForProject200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProjectStatusesForProject200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ProjectStatusCompact]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ProjectStatusCompact>} data
 */
GetProjectStatusesForProject200Response.prototype['data'] = undefined;






export default GetProjectStatusesForProject200Response;
