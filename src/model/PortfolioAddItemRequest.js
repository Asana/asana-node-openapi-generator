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
 * The PortfolioAddItemRequest model module.
 * @module model/PortfolioAddItemRequest
 * @version 1.0.0
 */
class PortfolioAddItemRequest {
    /**
     * Constructs a new <code>PortfolioAddItemRequest</code>.
     * @alias module:model/PortfolioAddItemRequest
     * @param item {String} The item to add to the portfolio.
     */
    constructor(item) { 
        
        PortfolioAddItemRequest.initialize(this, item);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, item) { 
        obj['item'] = item;
    }

    /**
     * Constructs a <code>PortfolioAddItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioAddItemRequest} obj Optional instance to populate.
     * @return {module:model/PortfolioAddItemRequest} The populated <code>PortfolioAddItemRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioAddItemRequest();

            if (data.hasOwnProperty('item')) {
                obj['item'] = ApiClient.convertToType(data['item'], 'String');
            }
            if (data.hasOwnProperty('insert_before')) {
                obj['insert_before'] = ApiClient.convertToType(data['insert_before'], 'String');
            }
            if (data.hasOwnProperty('insert_after')) {
                obj['insert_after'] = ApiClient.convertToType(data['insert_after'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The item to add to the portfolio.
 * @member {String} item
 */
PortfolioAddItemRequest.prototype['item'] = undefined;

/**
 * An id of an item in this portfolio. The new item will be added before the one specified here. `insert_before` and `insert_after` parameters cannot both be specified.
 * @member {String} insert_before
 */
PortfolioAddItemRequest.prototype['insert_before'] = undefined;

/**
 * An id of an item in this portfolio. The new item will be added after the one specified here. `insert_before` and `insert_after` parameters cannot both be specified.
 * @member {String} insert_after
 */
PortfolioAddItemRequest.prototype['insert_after'] = undefined;






export default PortfolioAddItemRequest;

