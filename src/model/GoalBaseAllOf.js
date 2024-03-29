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
 * The GoalBaseAllOf model module.
 * @module model/GoalBaseAllOf
 * @version 1.0.0
 */
class GoalBaseAllOf {
    /**
     * Constructs a new <code>GoalBaseAllOf</code>.
     * @alias module:model/GoalBaseAllOf
     */
    constructor() { 
        
        GoalBaseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GoalBaseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoalBaseAllOf} obj Optional instance to populate.
     * @return {module:model/GoalBaseAllOf} The populated <code>GoalBaseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoalBaseAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('html_notes')) {
                obj['html_notes'] = ApiClient.convertToType(data['html_notes'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('due_on')) {
                obj['due_on'] = ApiClient.convertToType(data['due_on'], 'String');
            }
            if (data.hasOwnProperty('start_on')) {
                obj['start_on'] = ApiClient.convertToType(data['start_on'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('is_workspace_level')) {
                obj['is_workspace_level'] = ApiClient.convertToType(data['is_workspace_level'], 'Boolean');
            }
            if (data.hasOwnProperty('liked')) {
                obj['liked'] = ApiClient.convertToType(data['liked'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The name of the goal.
 * @member {String} name
 */
GoalBaseAllOf.prototype['name'] = undefined;

/**
 * The notes of the goal with formatting as HTML.
 * @member {String} html_notes
 */
GoalBaseAllOf.prototype['html_notes'] = undefined;

/**
 * Free-form textual information associated with the goal (i.e. its description).
 * @member {String} notes
 */
GoalBaseAllOf.prototype['notes'] = undefined;

/**
 * The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
 * @member {String} due_on
 */
GoalBaseAllOf.prototype['due_on'] = undefined;

/**
 * The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
 * @member {String} start_on
 */
GoalBaseAllOf.prototype['start_on'] = undefined;

/**
 * The current status of this goal. When the goal is open, its status can be `green`, `yellow`, and `red` to reflect \"On Track\", \"At Risk\", and \"Off Track\", respectively. When the goal is closed, the value can be `missed`, `achieved`, `partial`, or `dropped`. *Note* you can only write to this property if `metric` is set.
 * @member {String} status
 */
GoalBaseAllOf.prototype['status'] = undefined;

/**
 * *Conditional*. This property is only present when the `workspace` provided is an organization. Whether the goal belongs to the `workspace` (and is listed as part of the workspace’s goals) or not. If it isn’t a workspace-level goal, it is a team-level goal, and is associated with the goal’s team.
 * @member {Boolean} is_workspace_level
 */
GoalBaseAllOf.prototype['is_workspace_level'] = undefined;

/**
 * True if the goal is liked by the authorized user, false if not.
 * @member {Boolean} liked
 */
GoalBaseAllOf.prototype['liked'] = undefined;






export default GoalBaseAllOf;

