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
 * The ProjectRequestAllOf model module.
 * @module model/ProjectRequestAllOf
 * @version 1.0.0
 */
class ProjectRequestAllOf {
    /**
     * Constructs a new <code>ProjectRequestAllOf</code>.
     * @alias module:model/ProjectRequestAllOf
     */
    constructor() { 
        
        ProjectRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectRequestAllOf} obj Optional instance to populate.
     * @return {module:model/ProjectRequestAllOf} The populated <code>ProjectRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectRequestAllOf();

            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], {'String': 'String'});
            }
            if (data.hasOwnProperty('followers')) {
                obj['followers'] = ApiClient.convertToType(data['followers'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = ApiClient.convertToType(data['team'], 'String');
            }
        }
        return obj;
    }


}

/**
 * An object where each key is a Custom Field GID and each value is an enum GID, string, number, or object.
 * @member {Object.<String, String>} custom_fields
 */
ProjectRequestAllOf.prototype['custom_fields'] = undefined;

/**
 * *Create-only*. Comma separated string of users. Followers are a subset of members who have opted in to receive \"tasks added\" notifications for a project.
 * @member {String} followers
 */
ProjectRequestAllOf.prototype['followers'] = undefined;

/**
 * The current owner of the project, may be null.
 * @member {String} owner
 */
ProjectRequestAllOf.prototype['owner'] = undefined;

/**
 * The team that this project is shared with.
 * @member {String} team
 */
ProjectRequestAllOf.prototype['team'] = undefined;






export default ProjectRequestAllOf;

