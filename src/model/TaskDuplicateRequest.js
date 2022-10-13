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
 * The TaskDuplicateRequest model module.
 * @module model/TaskDuplicateRequest
 * @version 1.0.0
 */
class TaskDuplicateRequest {
    /**
     * Constructs a new <code>TaskDuplicateRequest</code>.
     * @alias module:model/TaskDuplicateRequest
     */
    constructor() { 
        
        TaskDuplicateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskDuplicateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskDuplicateRequest} obj Optional instance to populate.
     * @return {module:model/TaskDuplicateRequest} The populated <code>TaskDuplicateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskDuplicateRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('include')) {
                obj['include'] = ApiClient.convertToType(data['include'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the new task.
 * @member {String} name
 */
TaskDuplicateRequest.prototype['name'] = undefined;

/**
 * The fields that will be duplicated to the new task.
 * @member {module:model/TaskDuplicateRequest.IncludeEnum} include
 */
TaskDuplicateRequest.prototype['include'] = undefined;





/**
 * Allowed values for the <code>include</code> property.
 * @enum {String}
 * @readonly
 */
TaskDuplicateRequest['IncludeEnum'] = {

    /**
     * value: "notes"
     * @const
     */
    "notes": "notes",

    /**
     * value: "assignee"
     * @const
     */
    "assignee": "assignee",

    /**
     * value: "subtasks"
     * @const
     */
    "subtasks": "subtasks",

    /**
     * value: "attachments"
     * @const
     */
    "attachments": "attachments",

    /**
     * value: "tags"
     * @const
     */
    "tags": "tags",

    /**
     * value: "followers"
     * @const
     */
    "followers": "followers",

    /**
     * value: "projects"
     * @const
     */
    "projects": "projects",

    /**
     * value: "dates"
     * @const
     */
    "dates": "dates",

    /**
     * value: "dependencies"
     * @const
     */
    "dependencies": "dependencies",

    /**
     * value: "parent"
     * @const
     */
    "parent": "parent"
};



export default TaskDuplicateRequest;

