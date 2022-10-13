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
import GoalRelationshipCompactAllOf from './GoalRelationshipCompactAllOf';
import ProjectCompact from './ProjectCompact';

/**
 * The GoalRelationshipCompact model module.
 * @module model/GoalRelationshipCompact
 * @version 1.0.0
 */
class GoalRelationshipCompact {
    /**
     * Constructs a new <code>GoalRelationshipCompact</code>.
     * @alias module:model/GoalRelationshipCompact
     * @implements module:model/AsanaResource
     * @implements module:model/GoalRelationshipCompactAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);GoalRelationshipCompactAllOf.initialize(this);
        GoalRelationshipCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GoalRelationshipCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoalRelationshipCompact} obj Optional instance to populate.
     * @return {module:model/GoalRelationshipCompact} The populated <code>GoalRelationshipCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoalRelationshipCompact();
            AsanaResource.constructFromObject(data, obj);
            GoalRelationshipCompactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('resource_subtype')) {
                obj['resource_subtype'] = ApiClient.convertToType(data['resource_subtype'], 'String');
            }
            if (data.hasOwnProperty('supporting_resource')) {
                obj['supporting_resource'] = ApiClient.convertToType(data['supporting_resource'], ProjectCompact);
            }
            if (data.hasOwnProperty('contribution_weight')) {
                obj['contribution_weight'] = ApiClient.convertToType(data['contribution_weight'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
GoalRelationshipCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
GoalRelationshipCompact.prototype['resource_type'] = undefined;

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 * @member {module:model/GoalRelationshipCompact.ResourceSubtypeEnum} resource_subtype
 */
GoalRelationshipCompact.prototype['resource_subtype'] = undefined;

/**
 * @member {module:model/ProjectCompact} supporting_resource
 */
GoalRelationshipCompact.prototype['supporting_resource'] = undefined;

/**
 * The weight that the supporting resource's progress contributes to the supported goal's progress. This can only be 0 or 1.
 * @member {Number} contribution_weight
 */
GoalRelationshipCompact.prototype['contribution_weight'] = undefined;


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
// Implement GoalRelationshipCompactAllOf interface:
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 * @member {module:model/GoalRelationshipCompactAllOf.ResourceSubtypeEnum} resource_subtype
 */
GoalRelationshipCompactAllOf.prototype['resource_subtype'] = undefined;
/**
 * @member {module:model/ProjectCompact} supporting_resource
 */
GoalRelationshipCompactAllOf.prototype['supporting_resource'] = undefined;
/**
 * The weight that the supporting resource's progress contributes to the supported goal's progress. This can only be 0 or 1.
 * @member {Number} contribution_weight
 */
GoalRelationshipCompactAllOf.prototype['contribution_weight'] = undefined;



/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
GoalRelationshipCompact['ResourceSubtypeEnum'] = {

    /**
     * value: "subgoal"
     * @const
     */
    "subgoal": "subgoal",

    /**
     * value: "supporting_work"
     * @const
     */
    "supporting_work": "supporting_work"
};



export default GoalRelationshipCompact;

