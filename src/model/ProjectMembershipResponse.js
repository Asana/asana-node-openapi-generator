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
import ProjectCompact from './ProjectCompact';
import ProjectMembershipCompact from './ProjectMembershipCompact';
import ProjectMembershipResponseAllOf from './ProjectMembershipResponseAllOf';
import UserCompact from './UserCompact';

/**
 * The ProjectMembershipResponse model module.
 * @module model/ProjectMembershipResponse
 * @version 1.0.0
 */
class ProjectMembershipResponse {
    /**
     * Constructs a new <code>ProjectMembershipResponse</code>.
     * @alias module:model/ProjectMembershipResponse
     * @implements module:model/ProjectMembershipCompact
     * @implements module:model/ProjectMembershipResponseAllOf
     */
    constructor() { 
        ProjectMembershipCompact.initialize(this);ProjectMembershipResponseAllOf.initialize(this);
        ProjectMembershipResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectMembershipResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectMembershipResponse} obj Optional instance to populate.
     * @return {module:model/ProjectMembershipResponse} The populated <code>ProjectMembershipResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectMembershipResponse();
            ProjectMembershipCompact.constructFromObject(data, obj);
            ProjectMembershipResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = UserCompact.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ProjectCompact.constructFromObject(data['project']);
            }
            if (data.hasOwnProperty('write_access')) {
                obj['write_access'] = ApiClient.convertToType(data['write_access'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectMembershipResponse.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectMembershipResponse.prototype['resource_type'] = undefined;

/**
 * @member {module:model/UserCompact} user
 */
ProjectMembershipResponse.prototype['user'] = undefined;

/**
 * @member {module:model/ProjectCompact} project
 */
ProjectMembershipResponse.prototype['project'] = undefined;

/**
 * Whether the user has full access to the project or has comment-only access.
 * @member {module:model/ProjectMembershipResponse.WriteAccessEnum} write_access
 */
ProjectMembershipResponse.prototype['write_access'] = undefined;


// Implement ProjectMembershipCompact interface:
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
// Implement ProjectMembershipResponseAllOf interface:
/**
 * @member {module:model/ProjectCompact} project
 */
ProjectMembershipResponseAllOf.prototype['project'] = undefined;
/**
 * Whether the user has full access to the project or has comment-only access.
 * @member {module:model/ProjectMembershipResponseAllOf.WriteAccessEnum} write_access
 */
ProjectMembershipResponseAllOf.prototype['write_access'] = undefined;



/**
 * Allowed values for the <code>write_access</code> property.
 * @enum {String}
 * @readonly
 */
ProjectMembershipResponse['WriteAccessEnum'] = {

    /**
     * value: "full_write"
     * @const
     */
    "full_write": "full_write",

    /**
     * value: "comment_only"
     * @const
     */
    "comment_only": "comment_only"
};



export default ProjectMembershipResponse;

