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
import Like from './Like';
import TaskBaseAllOfExternal from './TaskBaseAllOfExternal';
import TaskBaseAllOfMemberships from './TaskBaseAllOfMemberships';
import UserCompact from './UserCompact';

/**
 * The TaskBaseAllOf model module.
 * @module model/TaskBaseAllOf
 * @version 1.0.0
 */
class TaskBaseAllOf {
    /**
     * Constructs a new <code>TaskBaseAllOf</code>.
     * @alias module:model/TaskBaseAllOf
     */
    constructor() { 
        
        TaskBaseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskBaseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskBaseAllOf} obj Optional instance to populate.
     * @return {module:model/TaskBaseAllOf} The populated <code>TaskBaseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskBaseAllOf();

            if (data.hasOwnProperty('approval_status')) {
                obj['approval_status'] = ApiClient.convertToType(data['approval_status'], 'String');
            }
            if (data.hasOwnProperty('assignee_status')) {
                obj['assignee_status'] = ApiClient.convertToType(data['assignee_status'], 'String');
            }
            if (data.hasOwnProperty('completed')) {
                obj['completed'] = ApiClient.convertToType(data['completed'], 'Boolean');
            }
            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
            }
            if (data.hasOwnProperty('completed_by')) {
                obj['completed_by'] = UserCompact.constructFromObject(data['completed_by']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('dependencies')) {
                obj['dependencies'] = ApiClient.convertToType(data['dependencies'], [AsanaResource]);
            }
            if (data.hasOwnProperty('dependents')) {
                obj['dependents'] = ApiClient.convertToType(data['dependents'], [AsanaResource]);
            }
            if (data.hasOwnProperty('due_at')) {
                obj['due_at'] = ApiClient.convertToType(data['due_at'], 'Date');
            }
            if (data.hasOwnProperty('due_on')) {
                obj['due_on'] = ApiClient.convertToType(data['due_on'], 'Date');
            }
            if (data.hasOwnProperty('external')) {
                obj['external'] = TaskBaseAllOfExternal.constructFromObject(data['external']);
            }
            if (data.hasOwnProperty('html_notes')) {
                obj['html_notes'] = ApiClient.convertToType(data['html_notes'], 'String');
            }
            if (data.hasOwnProperty('hearted')) {
                obj['hearted'] = ApiClient.convertToType(data['hearted'], 'Boolean');
            }
            if (data.hasOwnProperty('hearts')) {
                obj['hearts'] = ApiClient.convertToType(data['hearts'], [Like]);
            }
            if (data.hasOwnProperty('is_rendered_as_separator')) {
                obj['is_rendered_as_separator'] = ApiClient.convertToType(data['is_rendered_as_separator'], 'Boolean');
            }
            if (data.hasOwnProperty('liked')) {
                obj['liked'] = ApiClient.convertToType(data['liked'], 'Boolean');
            }
            if (data.hasOwnProperty('likes')) {
                obj['likes'] = ApiClient.convertToType(data['likes'], [Like]);
            }
            if (data.hasOwnProperty('memberships')) {
                obj['memberships'] = ApiClient.convertToType(data['memberships'], [TaskBaseAllOfMemberships]);
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('num_hearts')) {
                obj['num_hearts'] = ApiClient.convertToType(data['num_hearts'], 'Number');
            }
            if (data.hasOwnProperty('num_likes')) {
                obj['num_likes'] = ApiClient.convertToType(data['num_likes'], 'Number');
            }
            if (data.hasOwnProperty('num_subtasks')) {
                obj['num_subtasks'] = ApiClient.convertToType(data['num_subtasks'], 'Number');
            }
            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Date');
            }
            if (data.hasOwnProperty('start_on')) {
                obj['start_on'] = ApiClient.convertToType(data['start_on'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * *Conditional* Reflects the approval status of this task. This field is kept in sync with `completed`, meaning `pending` translates to false while `approved`, `rejected`, and `changes_requested` translate to true. If you set completed to true, this field will be set to `approved`.
 * @member {module:model/TaskBaseAllOf.ApprovalStatusEnum} approval_status
 */
TaskBaseAllOf.prototype['approval_status'] = undefined;

/**
 * *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to \"inbox\" or \"upcoming\" inserts it at the top of the section, while the other options will insert at the bottom.
 * @member {module:model/TaskBaseAllOf.AssigneeStatusEnum} assignee_status
 */
TaskBaseAllOf.prototype['assignee_status'] = undefined;

/**
 * True if the task is currently marked complete, false if not.
 * @member {Boolean} completed
 */
TaskBaseAllOf.prototype['completed'] = undefined;

/**
 * The time at which this task was completed, or null if the task is incomplete.
 * @member {Date} completed_at
 */
TaskBaseAllOf.prototype['completed_at'] = undefined;

/**
 * @member {module:model/UserCompact} completed_by
 */
TaskBaseAllOf.prototype['completed_by'] = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
TaskBaseAllOf.prototype['created_at'] = undefined;

/**
 * [Opt In](/docs/input-output-options). Array of resources referencing tasks that this task depends on. The objects contain only the gid of the dependency.
 * @member {Array.<module:model/AsanaResource>} dependencies
 */
TaskBaseAllOf.prototype['dependencies'] = undefined;

/**
 * [Opt In](/docs/input-output-options). Array of resources referencing tasks that depend on this task. The objects contain only the ID of the dependent.
 * @member {Array.<module:model/AsanaResource>} dependents
 */
TaskBaseAllOf.prototype['dependents'] = undefined;

/**
 * The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
 * @member {Date} due_at
 */
TaskBaseAllOf.prototype['due_at'] = undefined;

/**
 * The localized date on which this task is due, or null if the task has no due date. This takes a date with `YYYY-MM-DD` format and should not be used together with `due_at`.
 * @member {Date} due_on
 */
TaskBaseAllOf.prototype['due_on'] = undefined;

/**
 * @member {module:model/TaskBaseAllOfExternal} external
 */
TaskBaseAllOf.prototype['external'] = undefined;

/**
 * [Opt In](/docs/input-output-options). The notes of the text with formatting as HTML.
 * @member {String} html_notes
 */
TaskBaseAllOf.prototype['html_notes'] = undefined;

/**
 * *Deprecated - please use liked instead* True if the task is hearted by the authorized user, false if not.
 * @member {Boolean} hearted
 */
TaskBaseAllOf.prototype['hearted'] = undefined;

/**
 * *Deprecated - please use likes instead* Array of likes for users who have hearted this task.
 * @member {Array.<module:model/Like>} hearts
 */
TaskBaseAllOf.prototype['hearts'] = undefined;

/**
 * [Opt In](/docs/input-output-options). In some contexts tasks can be rendered as a visual separator; for instance, subtasks can appear similar to [sections](/docs/asana-sections) without being true `section` objects. If a `task` object is rendered this way in any context it will have the property `is_rendered_as_separator` set to `true`.
 * @member {Boolean} is_rendered_as_separator
 */
TaskBaseAllOf.prototype['is_rendered_as_separator'] = undefined;

/**
 * True if the task is liked by the authorized user, false if not.
 * @member {Boolean} liked
 */
TaskBaseAllOf.prototype['liked'] = undefined;

/**
 * Array of likes for users who have liked this task.
 * @member {Array.<module:model/Like>} likes
 */
TaskBaseAllOf.prototype['likes'] = undefined;

/**
 * *Create-only*. Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the `addProject` and `removeProject` endpoints. Note that over time, more types of memberships may be added to this property.
 * @member {Array.<module:model/TaskBaseAllOfMemberships>} memberships
 */
TaskBaseAllOf.prototype['memberships'] = undefined;

/**
 * The time at which this task was last modified.  *Note: This does not currently reflect any changes in associations such as projects or comments that may have been added or removed from the task.*
 * @member {Date} modified_at
 */
TaskBaseAllOf.prototype['modified_at'] = undefined;

/**
 * Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
 * @member {String} name
 */
TaskBaseAllOf.prototype['name'] = undefined;

/**
 * Free-form textual information associated with the task (i.e. its description).
 * @member {String} notes
 */
TaskBaseAllOf.prototype['notes'] = undefined;

/**
 * *Deprecated - please use likes instead* The number of users who have hearted this task.
 * @member {Number} num_hearts
 */
TaskBaseAllOf.prototype['num_hearts'] = undefined;

/**
 * The number of users who have liked this task.
 * @member {Number} num_likes
 */
TaskBaseAllOf.prototype['num_likes'] = undefined;

/**
 * [Opt In](/docs/input-output-options). The number of subtasks on this task. 
 * @member {Number} num_subtasks
 */
TaskBaseAllOf.prototype['num_subtasks'] = undefined;

/**
 * Date and time on which work begins for the task, or null if the task has no start time. This takes an ISO 8601 date string in UTC and should not be used together with `start_on`. *Note: `due_at` must be present in the request when setting or unsetting the `start_at` parameter.*
 * @member {Date} start_at
 */
TaskBaseAllOf.prototype['start_at'] = undefined;

/**
 * The day on which work begins for the task , or null if the task has no start date. This takes a date with `YYYY-MM-DD` format and should not be used together with `start_at`. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter.*
 * @member {Date} start_on
 */
TaskBaseAllOf.prototype['start_on'] = undefined;





/**
 * Allowed values for the <code>approval_status</code> property.
 * @enum {String}
 * @readonly
 */
TaskBaseAllOf['ApprovalStatusEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "approved"
     * @const
     */
    "approved": "approved",

    /**
     * value: "rejected"
     * @const
     */
    "rejected": "rejected",

    /**
     * value: "changes_requested"
     * @const
     */
    "changes_requested": "changes_requested"
};


/**
 * Allowed values for the <code>assignee_status</code> property.
 * @enum {String}
 * @readonly
 */
TaskBaseAllOf['AssigneeStatusEnum'] = {

    /**
     * value: "today"
     * @const
     */
    "today": "today",

    /**
     * value: "upcoming"
     * @const
     */
    "upcoming": "upcoming",

    /**
     * value: "later"
     * @const
     */
    "later": "later",

    /**
     * value: "new"
     * @const
     */
    "new": "new",

    /**
     * value: "inbox"
     * @const
     */
    "inbox": "inbox"
};



export default TaskBaseAllOf;
