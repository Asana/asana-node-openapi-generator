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
 * The GoalMetricBaseAllOf model module.
 * @module model/GoalMetricBaseAllOf
 * @version 1.0.0
 */
class GoalMetricBaseAllOf {
    /**
     * Constructs a new <code>GoalMetricBaseAllOf</code>.
     * @alias module:model/GoalMetricBaseAllOf
     */
    constructor() { 
        
        GoalMetricBaseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GoalMetricBaseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoalMetricBaseAllOf} obj Optional instance to populate.
     * @return {module:model/GoalMetricBaseAllOf} The populated <code>GoalMetricBaseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoalMetricBaseAllOf();

            if (data.hasOwnProperty('resource_subtype')) {
                obj['resource_subtype'] = ApiClient.convertToType(data['resource_subtype'], 'String');
            }
            if (data.hasOwnProperty('precision')) {
                obj['precision'] = ApiClient.convertToType(data['precision'], 'Number');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('initial_number_value')) {
                obj['initial_number_value'] = ApiClient.convertToType(data['initial_number_value'], 'Number');
            }
            if (data.hasOwnProperty('target_number_value')) {
                obj['target_number_value'] = ApiClient.convertToType(data['target_number_value'], 'Number');
            }
            if (data.hasOwnProperty('current_number_value')) {
                obj['current_number_value'] = ApiClient.convertToType(data['current_number_value'], 'Number');
            }
            if (data.hasOwnProperty('current_display_value')) {
                obj['current_display_value'] = ApiClient.convertToType(data['current_display_value'], 'String');
            }
            if (data.hasOwnProperty('progress_source')) {
                obj['progress_source'] = ApiClient.convertToType(data['progress_source'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 * @member {module:model/GoalMetricBaseAllOf.ResourceSubtypeEnum} resource_subtype
 */
GoalMetricBaseAllOf.prototype['resource_subtype'] = undefined;

/**
 * *Conditional*. Only relevant for goal metrics of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive. For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%.
 * @member {Number} precision
 */
GoalMetricBaseAllOf.prototype['precision'] = undefined;

/**
 * A supported unit of measure for the goal metric, or none.
 * @member {module:model/GoalMetricBaseAllOf.UnitEnum} unit
 */
GoalMetricBaseAllOf.prototype['unit'] = undefined;

/**
 * ISO 4217 currency code to format this custom field. This will be null if the `unit` is not `currency`.
 * @member {String} currency_code
 */
GoalMetricBaseAllOf.prototype['currency_code'] = undefined;

/**
 * This number is the start value of a goal metric of type number.
 * @member {Number} initial_number_value
 */
GoalMetricBaseAllOf.prototype['initial_number_value'] = undefined;

/**
 * This number is the end value of a goal metric of type number. This number cannot equal `initial_number_value`.
 * @member {Number} target_number_value
 */
GoalMetricBaseAllOf.prototype['target_number_value'] = undefined;

/**
 * This number is the current value of a goal metric of type number.
 * @member {Number} current_number_value
 */
GoalMetricBaseAllOf.prototype['current_number_value'] = undefined;

/**
 * This string is the current value of a goal metric of type string.
 * @member {String} current_display_value
 */
GoalMetricBaseAllOf.prototype['current_display_value'] = undefined;

/**
 * This field defines how the progress value of a goal metric is being calculated. A goal's progress can be provided manually by the user, or calculated automatically from contributing subgoals or projects.
 * @member {module:model/GoalMetricBaseAllOf.ProgressSourceEnum} progress_source
 */
GoalMetricBaseAllOf.prototype['progress_source'] = undefined;





/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
GoalMetricBaseAllOf['ResourceSubtypeEnum'] = {

    /**
     * value: "number"
     * @const
     */
    "number": "number"
};


/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
GoalMetricBaseAllOf['UnitEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "currency"
     * @const
     */
    "currency": "currency",

    /**
     * value: "percentage"
     * @const
     */
    "percentage": "percentage"
};


/**
 * Allowed values for the <code>progress_source</code> property.
 * @enum {String}
 * @readonly
 */
GoalMetricBaseAllOf['ProgressSourceEnum'] = {

    /**
     * value: "manual"
     * @const
     */
    "manual": "manual",

    /**
     * value: "subgoal_progress"
     * @const
     */
    "subgoal_progress": "subgoal_progress",

    /**
     * value: "project_task_completion"
     * @const
     */
    "project_task_completion": "project_task_completion",

    /**
     * value: "project_milestone_completion"
     * @const
     */
    "project_milestone_completion": "project_milestone_completion"
};



export default GoalMetricBaseAllOf;

