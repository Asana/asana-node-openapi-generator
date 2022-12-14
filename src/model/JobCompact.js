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
import JobCompactAllOf from './JobCompactAllOf';
import ProjectCompact from './ProjectCompact';
import ProjectTemplateCompact from './ProjectTemplateCompact';
import TaskCompact from './TaskCompact';

/**
 * The JobCompact model module.
 * @module model/JobCompact
 * @version 1.0.0
 */
class JobCompact {
    /**
     * Constructs a new <code>JobCompact</code>.
     * @alias module:model/JobCompact
     * @implements module:model/AsanaResource
     * @implements module:model/JobCompactAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);JobCompactAllOf.initialize(this);
        JobCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobCompact} obj Optional instance to populate.
     * @return {module:model/JobCompact} The populated <code>JobCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobCompact();
            AsanaResource.constructFromObject(data, obj);
            JobCompactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('resource_subtype')) {
                obj['resource_subtype'] = ApiClient.convertToType(data['resource_subtype'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('new_project')) {
                obj['new_project'] = ProjectCompact.constructFromObject(data['new_project']);
            }
            if (data.hasOwnProperty('new_task')) {
                obj['new_task'] = TaskCompact.constructFromObject(data['new_task']);
            }
            if (data.hasOwnProperty('new_project_template')) {
                obj['new_project_template'] = ProjectTemplateCompact.constructFromObject(data['new_project_template']);
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
JobCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
JobCompact.prototype['resource_type'] = undefined;

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 * @member {String} resource_subtype
 */
JobCompact.prototype['resource_subtype'] = undefined;

/**
 * The current status of this job. The value is one of: `not_started`, `in_progress`, `succeeded`, or `failed`.
 * @member {module:model/JobCompact.StatusEnum} status
 */
JobCompact.prototype['status'] = undefined;

/**
 * @member {module:model/ProjectCompact} new_project
 */
JobCompact.prototype['new_project'] = undefined;

/**
 * @member {module:model/TaskCompact} new_task
 */
JobCompact.prototype['new_task'] = undefined;

/**
 * @member {module:model/ProjectTemplateCompact} new_project_template
 */
JobCompact.prototype['new_project_template'] = undefined;


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
// Implement JobCompactAllOf interface:
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 * @member {String} resource_subtype
 */
JobCompactAllOf.prototype['resource_subtype'] = undefined;
/**
 * The current status of this job. The value is one of: `not_started`, `in_progress`, `succeeded`, or `failed`.
 * @member {module:model/JobCompactAllOf.StatusEnum} status
 */
JobCompactAllOf.prototype['status'] = undefined;
/**
 * @member {module:model/ProjectCompact} new_project
 */
JobCompactAllOf.prototype['new_project'] = undefined;
/**
 * @member {module:model/TaskCompact} new_task
 */
JobCompactAllOf.prototype['new_task'] = undefined;
/**
 * @member {module:model/ProjectTemplateCompact} new_project_template
 */
JobCompactAllOf.prototype['new_project_template'] = undefined;



/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
JobCompact['StatusEnum'] = {

    /**
     * value: "not_started"
     * @const
     */
    "not_started": "not_started",

    /**
     * value: "in_progress"
     * @const
     */
    "in_progress": "in_progress",

    /**
     * value: "succeeded"
     * @const
     */
    "succeeded": "succeeded",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed"
};



export default JobCompact;

