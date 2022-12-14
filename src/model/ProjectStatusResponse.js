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
import ProjectStatusBase from './ProjectStatusBase';
import ProjectStatusResponseAllOf from './ProjectStatusResponseAllOf';
import UserCompact from './UserCompact';

/**
 * The ProjectStatusResponse model module.
 * @module model/ProjectStatusResponse
 * @version 1.0.0
 */
class ProjectStatusResponse {
    /**
     * Constructs a new <code>ProjectStatusResponse</code>.
     * @alias module:model/ProjectStatusResponse
     * @implements module:model/ProjectStatusBase
     * @implements module:model/ProjectStatusResponseAllOf
     * @param text {String} The text content of the status update.
     * @param color {module:model/ProjectStatusResponse.ColorEnum} The color associated with the status update.
     */
    constructor(text, color) { 
        ProjectStatusBase.initialize(this, text, color);ProjectStatusResponseAllOf.initialize(this);
        ProjectStatusResponse.initialize(this, text, color);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, text, color) { 
        obj['text'] = text;
        obj['color'] = color;
    }

    /**
     * Constructs a <code>ProjectStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectStatusResponse} obj Optional instance to populate.
     * @return {module:model/ProjectStatusResponse} The populated <code>ProjectStatusResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectStatusResponse();
            ProjectStatusBase.constructFromObject(data, obj);
            ProjectStatusResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('html_text')) {
                obj['html_text'] = ApiClient.convertToType(data['html_text'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = UserCompact.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = UserCompact.constructFromObject(data['created_by']);
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectStatusResponse.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectStatusResponse.prototype['resource_type'] = undefined;

/**
 * The title of the project status update.
 * @member {String} title
 */
ProjectStatusResponse.prototype['title'] = undefined;

/**
 * The text content of the status update.
 * @member {String} text
 */
ProjectStatusResponse.prototype['text'] = undefined;

/**
 * [Opt In](/docs/input-output-options). The text content of the status update with formatting as HTML.
 * @member {String} html_text
 */
ProjectStatusResponse.prototype['html_text'] = undefined;

/**
 * The color associated with the status update.
 * @member {module:model/ProjectStatusResponse.ColorEnum} color
 */
ProjectStatusResponse.prototype['color'] = undefined;

/**
 * @member {module:model/UserCompact} author
 */
ProjectStatusResponse.prototype['author'] = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
ProjectStatusResponse.prototype['created_at'] = undefined;

/**
 * @member {module:model/UserCompact} created_by
 */
ProjectStatusResponse.prototype['created_by'] = undefined;

/**
 * The time at which this project status was last modified. *Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the project status.*
 * @member {Date} modified_at
 */
ProjectStatusResponse.prototype['modified_at'] = undefined;


// Implement ProjectStatusBase interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectStatusBase.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectStatusBase.prototype['resource_type'] = undefined;
/**
 * The title of the project status update.
 * @member {String} title
 */
ProjectStatusBase.prototype['title'] = undefined;
/**
 * The text content of the status update.
 * @member {String} text
 */
ProjectStatusBase.prototype['text'] = undefined;
/**
 * [Opt In](/docs/input-output-options). The text content of the status update with formatting as HTML.
 * @member {String} html_text
 */
ProjectStatusBase.prototype['html_text'] = undefined;
/**
 * The color associated with the status update.
 * @member {module:model/ProjectStatusBase.ColorEnum} color
 */
ProjectStatusBase.prototype['color'] = undefined;
// Implement ProjectStatusResponseAllOf interface:
/**
 * @member {module:model/UserCompact} author
 */
ProjectStatusResponseAllOf.prototype['author'] = undefined;
/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
ProjectStatusResponseAllOf.prototype['created_at'] = undefined;
/**
 * @member {module:model/UserCompact} created_by
 */
ProjectStatusResponseAllOf.prototype['created_by'] = undefined;
/**
 * The time at which this project status was last modified. *Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the project status.*
 * @member {Date} modified_at
 */
ProjectStatusResponseAllOf.prototype['modified_at'] = undefined;



/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
ProjectStatusResponse['ColorEnum'] = {

    /**
     * value: "green"
     * @const
     */
    "green": "green",

    /**
     * value: "yellow"
     * @const
     */
    "yellow": "yellow",

    /**
     * value: "red"
     * @const
     */
    "red": "red",

    /**
     * value: "blue"
     * @const
     */
    "blue": "blue"
};



export default ProjectStatusResponse;

