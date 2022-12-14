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
import TeamResponse from './TeamResponse';

/**
 * The UpdateTeam200Response model module.
 * @module model/UpdateTeam200Response
 * @version 1.0.0
 */
class UpdateTeam200Response {
    /**
     * Constructs a new <code>UpdateTeam200Response</code>.
     * @alias module:model/UpdateTeam200Response
     */
    constructor() { 
        
        UpdateTeam200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateTeam200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTeam200Response} obj Optional instance to populate.
     * @return {module:model/UpdateTeam200Response} The populated <code>UpdateTeam200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTeam200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = TeamResponse.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TeamResponse} data
 */
UpdateTeam200Response.prototype['data'] = undefined;






export default UpdateTeam200Response;

