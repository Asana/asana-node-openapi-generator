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
import AsanaNamedResourceAllOf from './AsanaNamedResourceAllOf';
import AsanaResource from './AsanaResource';

/**
 * The AsanaNamedResource model module.
 * @module model/AsanaNamedResource
 * @version 1.0.0
 */
class AsanaNamedResource {
    /**
     * Constructs a new <code>AsanaNamedResource</code>.
     * @alias module:model/AsanaNamedResource
     * @implements module:model/AsanaResource
     * @implements module:model/AsanaNamedResourceAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);AsanaNamedResourceAllOf.initialize(this);
        AsanaNamedResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AsanaNamedResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AsanaNamedResource} obj Optional instance to populate.
     * @return {module:model/AsanaNamedResource} The populated <code>AsanaNamedResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AsanaNamedResource();
            AsanaResource.constructFromObject(data, obj);
            AsanaNamedResourceAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
AsanaNamedResource.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
AsanaNamedResource.prototype['resource_type'] = undefined;

/**
 * The name of the object.
 * @member {String} name
 */
AsanaNamedResource.prototype['name'] = undefined;


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
// Implement AsanaNamedResourceAllOf interface:
/**
 * The name of the object.
 * @member {String} name
 */
AsanaNamedResourceAllOf.prototype['name'] = undefined;




export default AsanaNamedResource;

