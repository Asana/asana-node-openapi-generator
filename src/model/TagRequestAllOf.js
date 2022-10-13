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
 * The TagRequestAllOf model module.
 * @module model/TagRequestAllOf
 * @version 1.0.0
 */
class TagRequestAllOf {
    /**
     * Constructs a new <code>TagRequestAllOf</code>.
     * @alias module:model/TagRequestAllOf
     */
    constructor() { 
        
        TagRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TagRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagRequestAllOf} obj Optional instance to populate.
     * @return {module:model/TagRequestAllOf} The populated <code>TagRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagRequestAllOf();

            if (data.hasOwnProperty('followers')) {
                obj['followers'] = ApiClient.convertToType(data['followers'], ['String']);
            }
            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = ApiClient.convertToType(data['workspace'], 'String');
            }
        }
        return obj;
    }


}

/**
 * An array of strings identifying users. These can either be the string \"me\", an email, or the gid of a user.
 * @member {Array.<String>} followers
 */
TagRequestAllOf.prototype['followers'] = undefined;

/**
 * Gid of an object.
 * @member {String} workspace
 */
TagRequestAllOf.prototype['workspace'] = undefined;






export default TagRequestAllOf;

