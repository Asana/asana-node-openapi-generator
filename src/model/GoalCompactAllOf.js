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
import UserCompact from './UserCompact';

/**
 * The GoalCompactAllOf model module.
 * @module model/GoalCompactAllOf
 * @version 1.0.0
 */
class GoalCompactAllOf {
    /**
     * Constructs a new <code>GoalCompactAllOf</code>.
     * @alias module:model/GoalCompactAllOf
     */
    constructor() { 
        
        GoalCompactAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GoalCompactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoalCompactAllOf} obj Optional instance to populate.
     * @return {module:model/GoalCompactAllOf} The populated <code>GoalCompactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoalCompactAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], UserCompact);
            }
        }
        return obj;
    }


}

/**
 * The name of the goal.
 * @member {String} name
 */
GoalCompactAllOf.prototype['name'] = undefined;

/**
 * @member {module:model/UserCompact} owner
 */
GoalCompactAllOf.prototype['owner'] = undefined;






export default GoalCompactAllOf;

