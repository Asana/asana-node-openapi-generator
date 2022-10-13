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
import ProjectMembershipCompactAllOf from './ProjectMembershipCompactAllOf';
import UserCompact from './UserCompact';

/**
 * The ProjectMembershipCompact model module.
 * @module model/ProjectMembershipCompact
 * @version 1.0.0
 */
class ProjectMembershipCompact {
    /**
     * Constructs a new <code>ProjectMembershipCompact</code>.
     * @alias module:model/ProjectMembershipCompact
     * @implements module:model/AsanaResource
     * @implements module:model/ProjectMembershipCompactAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);ProjectMembershipCompactAllOf.initialize(this);
        ProjectMembershipCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectMembershipCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectMembershipCompact} obj Optional instance to populate.
     * @return {module:model/ProjectMembershipCompact} The populated <code>ProjectMembershipCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectMembershipCompact();
            AsanaResource.constructFromObject(data, obj);
            ProjectMembershipCompactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = UserCompact.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectMembershipCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectMembershipCompact.prototype['resource_type'] = undefined;

/**
 * @member {module:model/UserCompact} user
 */
ProjectMembershipCompact.prototype['user'] = undefined;


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
// Implement ProjectMembershipCompactAllOf interface:
/**
 * @member {module:model/UserCompact} user
 */
ProjectMembershipCompactAllOf.prototype['user'] = undefined;




export default ProjectMembershipCompact;
