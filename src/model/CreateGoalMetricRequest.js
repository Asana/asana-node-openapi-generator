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
import GoalMetricBase from './GoalMetricBase';

/**
 * The CreateGoalMetricRequest model module.
 * @module model/CreateGoalMetricRequest
 * @version 1.0.0
 */
class CreateGoalMetricRequest {
    /**
     * Constructs a new <code>CreateGoalMetricRequest</code>.
     * @alias module:model/CreateGoalMetricRequest
     */
    constructor() { 
        
        CreateGoalMetricRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateGoalMetricRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateGoalMetricRequest} obj Optional instance to populate.
     * @return {module:model/CreateGoalMetricRequest} The populated <code>CreateGoalMetricRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateGoalMetricRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = GoalMetricBase.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GoalMetricBase} data
 */
CreateGoalMetricRequest.prototype['data'] = undefined;






export default CreateGoalMetricRequest;

