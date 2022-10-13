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
 * The TeamRemoveUserRequest model module.
 * @module model/TeamRemoveUserRequest
 * @version 1.0.0
 */
class TeamRemoveUserRequest {
    /**
     * Constructs a new <code>TeamRemoveUserRequest</code>.
     * A user identification object for specification with the addUser/removeUser endpoints.
     * @alias module:model/TeamRemoveUserRequest
     */
    constructor() { 
        
        TeamRemoveUserRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamRemoveUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamRemoveUserRequest} obj Optional instance to populate.
     * @return {module:model/TeamRemoveUserRequest} The populated <code>TeamRemoveUserRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamRemoveUserRequest();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
 * @member {String} user
 */
TeamRemoveUserRequest.prototype['user'] = undefined;






export default TeamRemoveUserRequest;

