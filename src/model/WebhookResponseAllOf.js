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
import WebhookFilter from './WebhookFilter';

/**
 * The WebhookResponseAllOf model module.
 * @module model/WebhookResponseAllOf
 * @version 1.0.0
 */
class WebhookResponseAllOf {
    /**
     * Constructs a new <code>WebhookResponseAllOf</code>.
     * @alias module:model/WebhookResponseAllOf
     */
    constructor() { 
        
        WebhookResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookResponseAllOf} obj Optional instance to populate.
     * @return {module:model/WebhookResponseAllOf} The populated <code>WebhookResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookResponseAllOf();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('last_failure_at')) {
                obj['last_failure_at'] = ApiClient.convertToType(data['last_failure_at'], 'Date');
            }
            if (data.hasOwnProperty('last_failure_content')) {
                obj['last_failure_content'] = ApiClient.convertToType(data['last_failure_content'], 'String');
            }
            if (data.hasOwnProperty('last_success_at')) {
                obj['last_success_at'] = ApiClient.convertToType(data['last_success_at'], 'Date');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [WebhookFilter]);
            }
        }
        return obj;
    }


}

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
WebhookResponseAllOf.prototype['created_at'] = undefined;

/**
 * The timestamp when the webhook last received an error when sending an event to the target.
 * @member {Date} last_failure_at
 */
WebhookResponseAllOf.prototype['last_failure_at'] = undefined;

/**
 * The contents of the last error response sent to the webhook when attempting to deliver events to the target.
 * @member {String} last_failure_content
 */
WebhookResponseAllOf.prototype['last_failure_content'] = undefined;

/**
 * The timestamp when the webhook last successfully sent an event to the target.
 * @member {Date} last_success_at
 */
WebhookResponseAllOf.prototype['last_success_at'] = undefined;

/**
 * Whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.
 * @member {Array.<module:model/WebhookFilter>} filters
 */
WebhookResponseAllOf.prototype['filters'] = undefined;






export default WebhookResponseAllOf;

