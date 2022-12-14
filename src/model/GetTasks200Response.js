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
import TaskCompact from './TaskCompact';

/**
 * The GetTasks200Response model module.
 * @module model/GetTasks200Response
 * @version 1.0.0
 */
class GetTasks200Response {
    /**
     * Constructs a new <code>GetTasks200Response</code>.
     * @alias module:model/GetTasks200Response
     */
    constructor() { 
        
        GetTasks200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTasks200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTasks200Response} obj Optional instance to populate.
     * @return {module:model/GetTasks200Response} The populated <code>GetTasks200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTasks200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [TaskCompact]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/TaskCompact>} data
 */
GetTasks200Response.prototype['data'] = undefined;






export default GetTasks200Response;

