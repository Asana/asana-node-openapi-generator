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
import AsanaResource from './AsanaResource';
import UserCompactAllOf from './UserCompactAllOf';

/**
 * The UserCompact model module.
 * @module model/UserCompact
 * @version 1.0.0
 */
class UserCompact {
    /**
     * Constructs a new <code>UserCompact</code>.
     * @alias module:model/UserCompact
     * @implements module:model/AsanaResource
     * @implements module:model/UserCompactAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);UserCompactAllOf.initialize(this);
        UserCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserCompact} obj Optional instance to populate.
     * @return {module:model/UserCompact} The populated <code>UserCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCompact();
            AsanaResource.constructFromObject(data, obj);
            UserCompactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
UserCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
UserCompact.prototype['resource_type'] = undefined;

/**
 * *Read-only except when same user as requester*. The user’s name.
 * @member {String} name
 */
UserCompact.prototype['name'] = undefined;


// Implement AsanaResource interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
AsanaResource.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
AsanaResource.prototype['resource_type'] = undefined;
// Implement UserCompactAllOf interface:
/**
 * *Read-only except when same user as requester*. The user’s name.
 * @member {String} name
 */
UserCompactAllOf.prototype['name'] = undefined;




export default UserCompact;
