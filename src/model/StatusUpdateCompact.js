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
import StatusUpdateCompactAllOf from './StatusUpdateCompactAllOf';

/**
 * The StatusUpdateCompact model module.
 * @module model/StatusUpdateCompact
 * @version 1.0.0
 */
class StatusUpdateCompact {
    /**
     * Constructs a new <code>StatusUpdateCompact</code>.
     * @alias module:model/StatusUpdateCompact
     * @implements module:model/AsanaResource
     * @implements module:model/StatusUpdateCompactAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);StatusUpdateCompactAllOf.initialize(this);
        StatusUpdateCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StatusUpdateCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatusUpdateCompact} obj Optional instance to populate.
     * @return {module:model/StatusUpdateCompact} The populated <code>StatusUpdateCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatusUpdateCompact();
            AsanaResource.constructFromObject(data, obj);
            StatusUpdateCompactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('resource_subtype')) {
                obj['resource_subtype'] = ApiClient.convertToType(data['resource_subtype'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
StatusUpdateCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
StatusUpdateCompact.prototype['resource_type'] = undefined;

/**
 * The title of the status update.
 * @member {String} title
 */
StatusUpdateCompact.prototype['title'] = undefined;

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The `resource_subtype`s for `status` objects represent the type of their parent.
 * @member {module:model/StatusUpdateCompact.ResourceSubtypeEnum} resource_subtype
 */
StatusUpdateCompact.prototype['resource_subtype'] = undefined;


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
// Implement StatusUpdateCompactAllOf interface:
/**
 * The title of the status update.
 * @member {String} title
 */
StatusUpdateCompactAllOf.prototype['title'] = undefined;
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The `resource_subtype`s for `status` objects represent the type of their parent.
 * @member {module:model/StatusUpdateCompactAllOf.ResourceSubtypeEnum} resource_subtype
 */
StatusUpdateCompactAllOf.prototype['resource_subtype'] = undefined;



/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
StatusUpdateCompact['ResourceSubtypeEnum'] = {

    /**
     * value: "project_status_update"
     * @const
     */
    "project_status_update": "project_status_update",

    /**
     * value: "portfolio_status_update"
     * @const
     */
    "portfolio_status_update": "portfolio_status_update",

    /**
     * value: "goal_status_update"
     * @const
     */
    "goal_status_update": "goal_status_update"
};



export default StatusUpdateCompact;

