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
import ProjectStatusBase from './ProjectStatusBase';

/**
 * The CreateProjectStatusForProjectRequest model module.
 * @module model/CreateProjectStatusForProjectRequest
 * @version 1.0.0
 */
class CreateProjectStatusForProjectRequest {
    /**
     * Constructs a new <code>CreateProjectStatusForProjectRequest</code>.
     * @alias module:model/CreateProjectStatusForProjectRequest
     */
    constructor() { 
        
        CreateProjectStatusForProjectRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateProjectStatusForProjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProjectStatusForProjectRequest} obj Optional instance to populate.
     * @return {module:model/CreateProjectStatusForProjectRequest} The populated <code>CreateProjectStatusForProjectRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProjectStatusForProjectRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ProjectStatusBase.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ProjectStatusBase} data
 */
CreateProjectStatusForProjectRequest.prototype['data'] = undefined;






export default CreateProjectStatusForProjectRequest;

