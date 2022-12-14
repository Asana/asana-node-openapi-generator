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
 * The TaskBaseAllOfExternal model module.
 * @module model/TaskBaseAllOfExternal
 * @version 1.0.0
 */
class TaskBaseAllOfExternal {
    /**
     * Constructs a new <code>TaskBaseAllOfExternal</code>.
     * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options). The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation &#x60;external:custom_gid&#x60; to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
     * @alias module:model/TaskBaseAllOfExternal
     */
    constructor() { 
        
        TaskBaseAllOfExternal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskBaseAllOfExternal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskBaseAllOfExternal} obj Optional instance to populate.
     * @return {module:model/TaskBaseAllOfExternal} The populated <code>TaskBaseAllOfExternal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskBaseAllOfExternal();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} gid
 */
TaskBaseAllOfExternal.prototype['gid'] = undefined;

/**
 * @member {String} data
 */
TaskBaseAllOfExternal.prototype['data'] = undefined;






export default TaskBaseAllOfExternal;

