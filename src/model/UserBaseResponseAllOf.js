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
import UserBaseResponseAllOfPhoto from './UserBaseResponseAllOfPhoto';

/**
 * The UserBaseResponseAllOf model module.
 * @module model/UserBaseResponseAllOf
 * @version 1.0.0
 */
class UserBaseResponseAllOf {
    /**
     * Constructs a new <code>UserBaseResponseAllOf</code>.
     * @alias module:model/UserBaseResponseAllOf
     */
    constructor() { 
        
        UserBaseResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserBaseResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserBaseResponseAllOf} obj Optional instance to populate.
     * @return {module:model/UserBaseResponseAllOf} The populated <code>UserBaseResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserBaseResponseAllOf();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = UserBaseResponseAllOfPhoto.constructFromObject(data['photo']);
            }
        }
        return obj;
    }


}

/**
 * The user's email address.
 * @member {String} email
 */
UserBaseResponseAllOf.prototype['email'] = undefined;

/**
 * @member {module:model/UserBaseResponseAllOfPhoto} photo
 */
UserBaseResponseAllOf.prototype['photo'] = undefined;






export default UserBaseResponseAllOf;

