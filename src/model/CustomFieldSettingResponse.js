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
import CustomFieldResponse from './CustomFieldResponse';
import CustomFieldSettingCompact from './CustomFieldSettingCompact';
import CustomFieldSettingResponseAllOf from './CustomFieldSettingResponseAllOf';
import ProjectCompact from './ProjectCompact';

/**
 * The CustomFieldSettingResponse model module.
 * @module model/CustomFieldSettingResponse
 * @version 1.0.0
 */
class CustomFieldSettingResponse {
    /**
     * Constructs a new <code>CustomFieldSettingResponse</code>.
     * @alias module:model/CustomFieldSettingResponse
     * @implements module:model/CustomFieldSettingCompact
     * @implements module:model/CustomFieldSettingResponseAllOf
     */
    constructor() { 
        CustomFieldSettingCompact.initialize(this);CustomFieldSettingResponseAllOf.initialize(this);
        CustomFieldSettingResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomFieldSettingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldSettingResponse} obj Optional instance to populate.
     * @return {module:model/CustomFieldSettingResponse} The populated <code>CustomFieldSettingResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldSettingResponse();
            CustomFieldSettingCompact.constructFromObject(data, obj);
            CustomFieldSettingResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], ProjectCompact);
            }
            if (data.hasOwnProperty('is_important')) {
                obj['is_important'] = ApiClient.convertToType(data['is_important'], 'Boolean');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], ProjectCompact);
            }
            if (data.hasOwnProperty('custom_field')) {
                obj['custom_field'] = ApiClient.convertToType(data['custom_field'], CustomFieldResponse);
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
CustomFieldSettingResponse.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
CustomFieldSettingResponse.prototype['resource_type'] = undefined;

/**
 * @member {module:model/ProjectCompact} project
 */
CustomFieldSettingResponse.prototype['project'] = undefined;

/**
 * `is_important` is used in the Asana web application to determine if this custom field is displayed in the list/grid view of a project or portfolio.
 * @member {Boolean} is_important
 */
CustomFieldSettingResponse.prototype['is_important'] = undefined;

/**
 * @member {module:model/ProjectCompact} parent
 */
CustomFieldSettingResponse.prototype['parent'] = undefined;

/**
 * @member {module:model/CustomFieldResponse} custom_field
 */
CustomFieldSettingResponse.prototype['custom_field'] = undefined;


// Implement CustomFieldSettingCompact interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
CustomFieldSettingCompact.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
CustomFieldSettingCompact.prototype['resource_type'] = undefined;
// Implement CustomFieldSettingResponseAllOf interface:
/**
 * @member {module:model/ProjectCompact} project
 */
CustomFieldSettingResponseAllOf.prototype['project'] = undefined;
/**
 * `is_important` is used in the Asana web application to determine if this custom field is displayed in the list/grid view of a project or portfolio.
 * @member {Boolean} is_important
 */
CustomFieldSettingResponseAllOf.prototype['is_important'] = undefined;
/**
 * @member {module:model/ProjectCompact} parent
 */
CustomFieldSettingResponseAllOf.prototype['parent'] = undefined;
/**
 * @member {module:model/CustomFieldResponse} custom_field
 */
CustomFieldSettingResponseAllOf.prototype['custom_field'] = undefined;




export default CustomFieldSettingResponse;
