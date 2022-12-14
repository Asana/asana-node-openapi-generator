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
import ProjectCompact from './ProjectCompact';
import SectionCompact from './SectionCompact';
import TagCompact from './TagCompact';
import TaskCompact from './TaskCompact';
import UserCompact from './UserCompact';
import WorkspaceCompact from './WorkspaceCompact';

/**
 * The TaskResponseAllOf model module.
 * @module model/TaskResponseAllOf
 * @version 1.0.0
 */
class TaskResponseAllOf {
    /**
     * Constructs a new <code>TaskResponseAllOf</code>.
     * @alias module:model/TaskResponseAllOf
     */
    constructor() { 
        
        TaskResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskResponseAllOf} obj Optional instance to populate.
     * @return {module:model/TaskResponseAllOf} The populated <code>TaskResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskResponseAllOf();

            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = ApiClient.convertToType(data['assignee'], UserCompact);
            }
            if (data.hasOwnProperty('assignee_section')) {
                obj['assignee_section'] = ApiClient.convertToType(data['assignee_section'], SectionCompact);
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], [CustomFieldResponse]);
            }
            if (data.hasOwnProperty('followers')) {
                obj['followers'] = ApiClient.convertToType(data['followers'], [UserCompact]);
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], TaskCompact);
            }
            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], [ProjectCompact]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [TagCompact]);
            }
            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = ApiClient.convertToType(data['workspace'], WorkspaceCompact);
            }
            if (data.hasOwnProperty('permalink_url')) {
                obj['permalink_url'] = ApiClient.convertToType(data['permalink_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserCompact} assignee
 */
TaskResponseAllOf.prototype['assignee'] = undefined;

/**
 * @member {module:model/SectionCompact} assignee_section
 */
TaskResponseAllOf.prototype['assignee_section'] = undefined;

/**
 * Array of custom field values applied to the task. These represent the custom field values recorded on this project for a particular custom field. For example, these custom field values will contain an `enum_value` property for custom fields of type `enum`, a `text_value` property for custom fields of type `text`, and so on. Please note that the `gid` returned on each custom field value *is identical* to the `gid` of the custom field, which allows referencing the custom field metadata through the `/custom_fields/custom_field-gid` endpoint.
 * @member {Array.<module:model/CustomFieldResponse>} custom_fields
 */
TaskResponseAllOf.prototype['custom_fields'] = undefined;

/**
 * Array of users following this task.
 * @member {Array.<module:model/UserCompact>} followers
 */
TaskResponseAllOf.prototype['followers'] = undefined;

/**
 * @member {module:model/TaskCompact} parent
 */
TaskResponseAllOf.prototype['parent'] = undefined;

/**
 * *Create-only.* Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the addProject and removeProject endpoints.
 * @member {Array.<module:model/ProjectCompact>} projects
 */
TaskResponseAllOf.prototype['projects'] = undefined;

/**
 * Array of tags associated with this task. In order to change tags on an existing task use `addTag` and `removeTag`.
 * @member {Array.<module:model/TagCompact>} tags
 */
TaskResponseAllOf.prototype['tags'] = undefined;

/**
 * @member {module:model/WorkspaceCompact} workspace
 */
TaskResponseAllOf.prototype['workspace'] = undefined;

/**
 * A url that points directly to the object within Asana.
 * @member {String} permalink_url
 */
TaskResponseAllOf.prototype['permalink_url'] = undefined;






export default TaskResponseAllOf;

