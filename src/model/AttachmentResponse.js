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
import AttachmentCompact from './AttachmentCompact';
import AttachmentResponseAllOf from './AttachmentResponseAllOf';
import TaskCompact from './TaskCompact';

/**
 * The AttachmentResponse model module.
 * @module model/AttachmentResponse
 * @version 1.0.0
 */
class AttachmentResponse {
    /**
     * Constructs a new <code>AttachmentResponse</code>.
     * @alias module:model/AttachmentResponse
     * @implements module:model/AttachmentCompact
     * @implements module:model/AttachmentResponseAllOf
     */
    constructor() { 
        AttachmentCompact.initialize(this);AttachmentResponseAllOf.initialize(this);
        AttachmentResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttachmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentResponse} obj Optional instance to populate.
     * @return {module:model/AttachmentResponse} The populated <code>AttachmentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentResponse();
            AttachmentCompact.constructFromObject(data, obj);
            AttachmentResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('resource_subtype')) {
                obj['resource_subtype'] = ApiClient.convertToType(data['resource_subtype'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('download_url')) {
                obj['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
            }
            if (data.hasOwnProperty('permanent_url')) {
                obj['permanent_url'] = ApiClient.convertToType(data['permanent_url'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], TaskCompact);
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('view_url')) {
                obj['view_url'] = ApiClient.convertToType(data['view_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
AttachmentResponse.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
AttachmentResponse.prototype['resource_type'] = undefined;

/**
 * The name of the file.
 * @member {String} name
 */
AttachmentResponse.prototype['name'] = undefined;

/**
 * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `onedrive`, `box`, `vimeo`, and `external`.
 * @member {String} resource_subtype
 */
AttachmentResponse.prototype['resource_subtype'] = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
AttachmentResponse.prototype['created_at'] = undefined;

/**
 * The URL containing the content of the attachment. *Note:* May be null if the attachment is hosted by [Box](https://www.box.com/) and will be null if the attachment is a Video Message hosted by [Vimeo](https://vimeo.com/). If present, this URL may only be valid for two minutes from the time of retrieval. You should avoid persisting this URL somewhere and just refresh it on demand to ensure you do not keep stale URLs.
 * @member {String} download_url
 */
AttachmentResponse.prototype['download_url'] = undefined;

/**
 * 
 * @member {String} permanent_url
 */
AttachmentResponse.prototype['permanent_url'] = undefined;

/**
 * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `box`, and `vimeo`.
 * @member {String} host
 */
AttachmentResponse.prototype['host'] = undefined;

/**
 * @member {module:model/TaskCompact} parent
 */
AttachmentResponse.prototype['parent'] = undefined;

/**
 * The size of the attachment in bytes. Only present when the `resource_subtype` is `asana`.
 * @member {Number} size
 */
AttachmentResponse.prototype['size'] = undefined;

/**
 * The URL where the attachment can be viewed, which may be friendlier to users in a browser than just directing them to a raw file. May be null if no view URL exists for the service.
 * @member {String} view_url
 */
AttachmentResponse.prototype['view_url'] = undefined;


// Implement AttachmentCompact interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
AttachmentCompact.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
AttachmentCompact.prototype['resource_type'] = undefined;
/**
 * The name of the file.
 * @member {String} name
 */
AttachmentCompact.prototype['name'] = undefined;
/**
 * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `onedrive`, `box`, `vimeo`, and `external`.
 * @member {String} resource_subtype
 */
AttachmentCompact.prototype['resource_subtype'] = undefined;
// Implement AttachmentResponseAllOf interface:
/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
AttachmentResponseAllOf.prototype['created_at'] = undefined;
/**
 * The URL containing the content of the attachment. *Note:* May be null if the attachment is hosted by [Box](https://www.box.com/) and will be null if the attachment is a Video Message hosted by [Vimeo](https://vimeo.com/). If present, this URL may only be valid for two minutes from the time of retrieval. You should avoid persisting this URL somewhere and just refresh it on demand to ensure you do not keep stale URLs.
 * @member {String} download_url
 */
AttachmentResponseAllOf.prototype['download_url'] = undefined;
/**
 * 
 * @member {String} permanent_url
 */
AttachmentResponseAllOf.prototype['permanent_url'] = undefined;
/**
 * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `box`, and `vimeo`.
 * @member {String} host
 */
AttachmentResponseAllOf.prototype['host'] = undefined;
/**
 * @member {module:model/TaskCompact} parent
 */
AttachmentResponseAllOf.prototype['parent'] = undefined;
/**
 * The size of the attachment in bytes. Only present when the `resource_subtype` is `asana`.
 * @member {Number} size
 */
AttachmentResponseAllOf.prototype['size'] = undefined;
/**
 * The URL where the attachment can be viewed, which may be friendlier to users in a browser than just directing them to a raw file. May be null if no view URL exists for the service.
 * @member {String} view_url
 */
AttachmentResponseAllOf.prototype['view_url'] = undefined;




export default AttachmentResponse;

