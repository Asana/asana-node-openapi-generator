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
import ProjectStatusCompactAllOf from './ProjectStatusCompactAllOf';

/**
 * The ProjectStatusCompact model module.
 * @module model/ProjectStatusCompact
 * @version 1.0.0
 */
class ProjectStatusCompact {
    /**
     * Constructs a new <code>ProjectStatusCompact</code>.
     * @alias module:model/ProjectStatusCompact
     * @implements module:model/AsanaResource
     * @implements module:model/ProjectStatusCompactAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);ProjectStatusCompactAllOf.initialize(this);
        ProjectStatusCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectStatusCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectStatusCompact} obj Optional instance to populate.
     * @return {module:model/ProjectStatusCompact} The populated <code>ProjectStatusCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectStatusCompact();
            AsanaResource.constructFromObject(data, obj);
            ProjectStatusCompactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectStatusCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectStatusCompact.prototype['resource_type'] = undefined;

/**
 * The title of the project status update.
 * @member {String} title
 */
ProjectStatusCompact.prototype['title'] = undefined;


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
// Implement ProjectStatusCompactAllOf interface:
/**
 * The title of the project status update.
 * @member {String} title
 */
ProjectStatusCompactAllOf.prototype['title'] = undefined;




export default ProjectStatusCompact;

