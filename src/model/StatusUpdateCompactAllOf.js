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
 * The StatusUpdateCompactAllOf model module.
 * @module model/StatusUpdateCompactAllOf
 * @version 1.0.0
 */
class StatusUpdateCompactAllOf {
    /**
     * Constructs a new <code>StatusUpdateCompactAllOf</code>.
     * A *status update* is an update on the progress of a particular project, portfolio, or goal, and is sent out to all of its parent&#39;s followers when created. These updates include both text describing the update and a &#x60;status_type&#x60; intended to represent the overall state of the project.
     * @alias module:model/StatusUpdateCompactAllOf
     */
    constructor() { 
        
        StatusUpdateCompactAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StatusUpdateCompactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatusUpdateCompactAllOf} obj Optional instance to populate.
     * @return {module:model/StatusUpdateCompactAllOf} The populated <code>StatusUpdateCompactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatusUpdateCompactAllOf();

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
StatusUpdateCompactAllOf['ResourceSubtypeEnum'] = {

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



export default StatusUpdateCompactAllOf;

