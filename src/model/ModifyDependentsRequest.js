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

/**
 * The ModifyDependentsRequest model module.
 * @module model/ModifyDependentsRequest
 * @version 1.0.0
 */
class ModifyDependentsRequest {
    /**
     * Constructs a new <code>ModifyDependentsRequest</code>.
     * A set of dependent tasks.
     * @alias module:model/ModifyDependentsRequest
     */
    constructor() { 
        
        ModifyDependentsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModifyDependentsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyDependentsRequest} obj Optional instance to populate.
     * @return {module:model/ModifyDependentsRequest} The populated <code>ModifyDependentsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModifyDependentsRequest();

            if (data.hasOwnProperty('dependents')) {
                obj['dependents'] = ApiClient.convertToType(data['dependents'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * An array of task gids that are dependents of the given task.
 * @member {Array.<String>} dependents
 */
ModifyDependentsRequest.prototype['dependents'] = undefined;






export default ModifyDependentsRequest;
