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
 * The RemoveMembersRequest model module.
 * @module model/RemoveMembersRequest
 * @version 1.0.0
 */
class RemoveMembersRequest {
    /**
     * Constructs a new <code>RemoveMembersRequest</code>.
     * @alias module:model/RemoveMembersRequest
     * @param members {String} An array of strings identifying users. These can either be the string \"me\", an email, or the gid of a user.
     */
    constructor(members) { 
        
        RemoveMembersRequest.initialize(this, members);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, members) { 
        obj['members'] = members;
    }

    /**
     * Constructs a <code>RemoveMembersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoveMembersRequest} obj Optional instance to populate.
     * @return {module:model/RemoveMembersRequest} The populated <code>RemoveMembersRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoveMembersRequest();

            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], 'String');
            }
        }
        return obj;
    }


}

/**
 * An array of strings identifying users. These can either be the string \"me\", an email, or the gid of a user.
 * @member {String} members
 */
RemoveMembersRequest.prototype['members'] = undefined;






export default RemoveMembersRequest;
