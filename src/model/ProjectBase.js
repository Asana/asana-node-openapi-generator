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
import CustomFieldSettingResponse from './CustomFieldSettingResponse';
import ProjectBaseAllOf from './ProjectBaseAllOf';
import ProjectCompact from './ProjectCompact';
import ProjectStatusResponse from './ProjectStatusResponse';
import StatusUpdateCompact from './StatusUpdateCompact';
import UserCompact from './UserCompact';
import WorkspaceCompact from './WorkspaceCompact';

/**
 * The ProjectBase model module.
 * @module model/ProjectBase
 * @version 1.0.0
 */
class ProjectBase {
    /**
     * Constructs a new <code>ProjectBase</code>.
     * @alias module:model/ProjectBase
     * @implements module:model/ProjectCompact
     * @implements module:model/ProjectBaseAllOf
     */
    constructor() { 
        ProjectCompact.initialize(this);ProjectBaseAllOf.initialize(this);
        ProjectBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectBase} obj Optional instance to populate.
     * @return {module:model/ProjectBase} The populated <code>ProjectBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectBase();
            ProjectCompact.constructFromObject(data, obj);
            ProjectBaseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('current_status')) {
                obj['current_status'] = ApiClient.convertToType(data['current_status'], ProjectStatusResponse);
            }
            if (data.hasOwnProperty('current_status_update')) {
                obj['current_status_update'] = ApiClient.convertToType(data['current_status_update'], StatusUpdateCompact);
            }
            if (data.hasOwnProperty('custom_field_settings')) {
                obj['custom_field_settings'] = ApiClient.convertToType(data['custom_field_settings'], [CustomFieldSettingResponse]);
            }
            if (data.hasOwnProperty('default_view')) {
                obj['default_view'] = ApiClient.convertToType(data['default_view'], 'String');
            }
            if (data.hasOwnProperty('due_date')) {
                obj['due_date'] = ApiClient.convertToType(data['due_date'], 'Date');
            }
            if (data.hasOwnProperty('due_on')) {
                obj['due_on'] = ApiClient.convertToType(data['due_on'], 'Date');
            }
            if (data.hasOwnProperty('html_notes')) {
                obj['html_notes'] = ApiClient.convertToType(data['html_notes'], 'String');
            }
            if (data.hasOwnProperty('is_template')) {
                obj['is_template'] = ApiClient.convertToType(data['is_template'], 'Boolean');
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [UserCompact]);
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'Date');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
            if (data.hasOwnProperty('start_on')) {
                obj['start_on'] = ApiClient.convertToType(data['start_on'], 'Date');
            }
            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = ApiClient.convertToType(data['workspace'], WorkspaceCompact);
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectBase.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectBase.prototype['resource_type'] = undefined;

/**
 * Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
 * @member {String} name
 */
ProjectBase.prototype['name'] = undefined;

/**
 * True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
 * @member {Boolean} archived
 */
ProjectBase.prototype['archived'] = undefined;

/**
 * Color of the project.
 * @member {module:model/ProjectBase.ColorEnum} color
 */
ProjectBase.prototype['color'] = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
ProjectBase.prototype['created_at'] = undefined;

/**
 * *Deprecated: new integrations should prefer the `current_status_update` resource.*
 * @member {module:model/ProjectStatusResponse} current_status
 */
ProjectBase.prototype['current_status'] = undefined;

/**
 * The latest `status_update` posted to this project.
 * @member {module:model/StatusUpdateCompact} current_status_update
 */
ProjectBase.prototype['current_status_update'] = undefined;

/**
 * Array of Custom Field Settings (in compact form).
 * @member {Array.<module:model/CustomFieldSettingResponse>} custom_field_settings
 */
ProjectBase.prototype['custom_field_settings'] = undefined;

/**
 * The default view (list, board, calendar, or timeline) of a project.
 * @member {module:model/ProjectBase.DefaultViewEnum} default_view
 */
ProjectBase.prototype['default_view'] = undefined;

/**
 * *Deprecated: new integrations should prefer the `due_on` field.*
 * @member {Date} due_date
 */
ProjectBase.prototype['due_date'] = undefined;

/**
 * The day on which this project is due. This takes a date with format YYYY-MM-DD.
 * @member {Date} due_on
 */
ProjectBase.prototype['due_on'] = undefined;

/**
 * [Opt In](/docs/input-output-options). The notes of the project with formatting as HTML.
 * @member {String} html_notes
 */
ProjectBase.prototype['html_notes'] = undefined;

/**
 * [Opt In](/docs/input-output-options). *Deprecated - please use a project template endpoint instead (more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432)).* Determines if the project is a template.
 * @member {Boolean} is_template
 */
ProjectBase.prototype['is_template'] = undefined;

/**
 * Array of users who are members of this project.
 * @member {Array.<module:model/UserCompact>} members
 */
ProjectBase.prototype['members'] = undefined;

/**
 * The time at which this project was last modified. *Note: This does not currently reflect any changes in associations such as tasks or comments that may have been added or removed from the project.*
 * @member {Date} modified_at
 */
ProjectBase.prototype['modified_at'] = undefined;

/**
 * Free-form textual information associated with the project (ie., its description).
 * @member {String} notes
 */
ProjectBase.prototype['notes'] = undefined;

/**
 * True if the project is public to its team.
 * @member {Boolean} public
 */
ProjectBase.prototype['public'] = undefined;

/**
 * The day on which work for this project begins, or null if the project has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, `start_on` and `due_on` cannot be the same date.*
 * @member {Date} start_on
 */
ProjectBase.prototype['start_on'] = undefined;

/**
 * @member {module:model/WorkspaceCompact} workspace
 */
ProjectBase.prototype['workspace'] = undefined;


// Implement ProjectCompact interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
ProjectCompact.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
ProjectCompact.prototype['resource_type'] = undefined;
/**
 * Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
 * @member {String} name
 */
ProjectCompact.prototype['name'] = undefined;
// Implement ProjectBaseAllOf interface:
/**
 * True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
 * @member {Boolean} archived
 */
ProjectBaseAllOf.prototype['archived'] = undefined;
/**
 * Color of the project.
 * @member {module:model/ProjectBaseAllOf.ColorEnum} color
 */
ProjectBaseAllOf.prototype['color'] = undefined;
/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
ProjectBaseAllOf.prototype['created_at'] = undefined;
/**
 * *Deprecated: new integrations should prefer the `current_status_update` resource.*
 * @member {module:model/ProjectStatusResponse} current_status
 */
ProjectBaseAllOf.prototype['current_status'] = undefined;
/**
 * The latest `status_update` posted to this project.
 * @member {module:model/StatusUpdateCompact} current_status_update
 */
ProjectBaseAllOf.prototype['current_status_update'] = undefined;
/**
 * Array of Custom Field Settings (in compact form).
 * @member {Array.<module:model/CustomFieldSettingResponse>} custom_field_settings
 */
ProjectBaseAllOf.prototype['custom_field_settings'] = undefined;
/**
 * The default view (list, board, calendar, or timeline) of a project.
 * @member {module:model/ProjectBaseAllOf.DefaultViewEnum} default_view
 */
ProjectBaseAllOf.prototype['default_view'] = undefined;
/**
 * *Deprecated: new integrations should prefer the `due_on` field.*
 * @member {Date} due_date
 */
ProjectBaseAllOf.prototype['due_date'] = undefined;
/**
 * The day on which this project is due. This takes a date with format YYYY-MM-DD.
 * @member {Date} due_on
 */
ProjectBaseAllOf.prototype['due_on'] = undefined;
/**
 * [Opt In](/docs/input-output-options). The notes of the project with formatting as HTML.
 * @member {String} html_notes
 */
ProjectBaseAllOf.prototype['html_notes'] = undefined;
/**
 * [Opt In](/docs/input-output-options). *Deprecated - please use a project template endpoint instead (more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432)).* Determines if the project is a template.
 * @member {Boolean} is_template
 */
ProjectBaseAllOf.prototype['is_template'] = undefined;
/**
 * Array of users who are members of this project.
 * @member {Array.<module:model/UserCompact>} members
 */
ProjectBaseAllOf.prototype['members'] = undefined;
/**
 * The time at which this project was last modified. *Note: This does not currently reflect any changes in associations such as tasks or comments that may have been added or removed from the project.*
 * @member {Date} modified_at
 */
ProjectBaseAllOf.prototype['modified_at'] = undefined;
/**
 * Free-form textual information associated with the project (ie., its description).
 * @member {String} notes
 */
ProjectBaseAllOf.prototype['notes'] = undefined;
/**
 * True if the project is public to its team.
 * @member {Boolean} public
 */
ProjectBaseAllOf.prototype['public'] = undefined;
/**
 * The day on which work for this project begins, or null if the project has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, `start_on` and `due_on` cannot be the same date.*
 * @member {Date} start_on
 */
ProjectBaseAllOf.prototype['start_on'] = undefined;
/**
 * @member {module:model/WorkspaceCompact} workspace
 */
ProjectBaseAllOf.prototype['workspace'] = undefined;



/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
ProjectBase['ColorEnum'] = {

    /**
     * value: "dark-pink"
     * @const
     */
    "dark-pink": "dark-pink",

    /**
     * value: "dark-green"
     * @const
     */
    "dark-green": "dark-green",

    /**
     * value: "dark-blue"
     * @const
     */
    "dark-blue": "dark-blue",

    /**
     * value: "dark-red"
     * @const
     */
    "dark-red": "dark-red",

    /**
     * value: "dark-teal"
     * @const
     */
    "dark-teal": "dark-teal",

    /**
     * value: "dark-brown"
     * @const
     */
    "dark-brown": "dark-brown",

    /**
     * value: "dark-orange"
     * @const
     */
    "dark-orange": "dark-orange",

    /**
     * value: "dark-purple"
     * @const
     */
    "dark-purple": "dark-purple",

    /**
     * value: "dark-warm-gray"
     * @const
     */
    "dark-warm-gray": "dark-warm-gray",

    /**
     * value: "light-pink"
     * @const
     */
    "light-pink": "light-pink",

    /**
     * value: "light-green"
     * @const
     */
    "light-green": "light-green",

    /**
     * value: "light-blue"
     * @const
     */
    "light-blue": "light-blue",

    /**
     * value: "light-red"
     * @const
     */
    "light-red": "light-red",

    /**
     * value: "light-teal"
     * @const
     */
    "light-teal": "light-teal",

    /**
     * value: "light-brown"
     * @const
     */
    "light-brown": "light-brown",

    /**
     * value: "light-orange"
     * @const
     */
    "light-orange": "light-orange",

    /**
     * value: "light-purple"
     * @const
     */
    "light-purple": "light-purple",

    /**
     * value: "light-warm-gray"
     * @const
     */
    "light-warm-gray": "light-warm-gray"
};


/**
 * Allowed values for the <code>default_view</code> property.
 * @enum {String}
 * @readonly
 */
ProjectBase['DefaultViewEnum'] = {

    /**
     * value: "list"
     * @const
     */
    "list": "list",

    /**
     * value: "board"
     * @const
     */
    "board": "board",

    /**
     * value: "calendar"
     * @const
     */
    "calendar": "calendar",

    /**
     * value: "timeline"
     * @const
     */
    "timeline": "timeline"
};



export default ProjectBase;

