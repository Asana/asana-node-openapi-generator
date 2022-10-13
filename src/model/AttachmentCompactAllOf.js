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
 * The AttachmentCompactAllOf model module.
 * @module model/AttachmentCompactAllOf
 * @version 1.0.0
 */
class AttachmentCompactAllOf {
    /**
     * Constructs a new <code>AttachmentCompactAllOf</code>.
     * An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
     * @alias module:model/AttachmentCompactAllOf
     */
    constructor() { 
        
        AttachmentCompactAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttachmentCompactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentCompactAllOf} obj Optional instance to populate.
     * @return {module:model/AttachmentCompactAllOf} The populated <code>AttachmentCompactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentCompactAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('resource_subtype')) {
                obj['resource_subtype'] = ApiClient.convertToType(data['resource_subtype'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the file.
 * @member {String} name
 */
AttachmentCompactAllOf.prototype['name'] = undefined;

/**
 * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `onedrive`, `box`, `vimeo`, and `external`.
 * @member {String} resource_subtype
 */
AttachmentCompactAllOf.prototype['resource_subtype'] = undefined;






export default AttachmentCompactAllOf;

