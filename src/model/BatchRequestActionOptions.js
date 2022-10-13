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
 * The BatchRequestActionOptions model module.
 * @module model/BatchRequestActionOptions
 * @version 1.0.0
 */
class BatchRequestActionOptions {
    /**
     * Constructs a new <code>BatchRequestActionOptions</code>.
     * Pagination (&#x60;limit&#x60; and &#x60;offset&#x60;) and output options (&#x60;fields&#x60; or &#x60;expand&#x60;) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.
     * @alias module:model/BatchRequestActionOptions
     */
    constructor() { 
        
        BatchRequestActionOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BatchRequestActionOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchRequestActionOptions} obj Optional instance to populate.
     * @return {module:model/BatchRequestActionOptions} The populated <code>BatchRequestActionOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchRequestActionOptions();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Pagination limit for the request.
 * @member {Number} limit
 */
BatchRequestActionOptions.prototype['limit'] = undefined;

/**
 * Pagination offset for the request.
 * @member {Number} offset
 */
BatchRequestActionOptions.prototype['offset'] = undefined;

/**
 * The fields to retrieve in the request.
 * @member {Array.<String>} fields
 */
BatchRequestActionOptions.prototype['fields'] = undefined;






export default BatchRequestActionOptions;

