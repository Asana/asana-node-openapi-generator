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
import ProjectResponse from './ProjectResponse';

/**
 * The CreateProject201Response model module.
 * @module model/CreateProject201Response
 * @version 1.0.0
 */
class CreateProject201Response {
    /**
     * Constructs a new <code>CreateProject201Response</code>.
     * @alias module:model/CreateProject201Response
     */
    constructor() { 
        
        CreateProject201Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateProject201Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProject201Response} obj Optional instance to populate.
     * @return {module:model/CreateProject201Response} The populated <code>CreateProject201Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProject201Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ProjectResponse.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ProjectResponse} data
 */
CreateProject201Response.prototype['data'] = undefined;






export default CreateProject201Response;

