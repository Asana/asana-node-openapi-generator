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
import GoalRemoveSupportingRelationshipRequest from './GoalRemoveSupportingRelationshipRequest';

/**
 * The RemoveSupportingRelationshipRequest model module.
 * @module model/RemoveSupportingRelationshipRequest
 * @version 1.0.0
 */
class RemoveSupportingRelationshipRequest {
    /**
     * Constructs a new <code>RemoveSupportingRelationshipRequest</code>.
     * @alias module:model/RemoveSupportingRelationshipRequest
     */
    constructor() { 
        
        RemoveSupportingRelationshipRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RemoveSupportingRelationshipRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoveSupportingRelationshipRequest} obj Optional instance to populate.
     * @return {module:model/RemoveSupportingRelationshipRequest} The populated <code>RemoveSupportingRelationshipRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoveSupportingRelationshipRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = GoalRemoveSupportingRelationshipRequest.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GoalRemoveSupportingRelationshipRequest} data
 */
RemoveSupportingRelationshipRequest.prototype['data'] = undefined;






export default RemoveSupportingRelationshipRequest;

