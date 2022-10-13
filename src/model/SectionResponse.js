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
import ProjectCompact from './ProjectCompact';
import SectionCompact from './SectionCompact';
import SectionResponseAllOf from './SectionResponseAllOf';

/**
 * The SectionResponse model module.
 * @module model/SectionResponse
 * @version 1.0.0
 */
class SectionResponse {
    /**
     * Constructs a new <code>SectionResponse</code>.
     * @alias module:model/SectionResponse
     * @implements module:model/SectionCompact
     * @implements module:model/SectionResponseAllOf
     */
    constructor() { 
        SectionCompact.initialize(this);SectionResponseAllOf.initialize(this);
        SectionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SectionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectionResponse} obj Optional instance to populate.
     * @return {module:model/SectionResponse} The populated <code>SectionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SectionResponse();
            SectionCompact.constructFromObject(data, obj);
            SectionResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ProjectCompact.constructFromObject(data['project']);
            }
            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], [ProjectCompact]);
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
SectionResponse.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
SectionResponse.prototype['resource_type'] = undefined;

/**
 * The name of the section (i.e. the text displayed as the section header).
 * @member {String} name
 */
SectionResponse.prototype['name'] = undefined;

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
SectionResponse.prototype['created_at'] = undefined;

/**
 * @member {module:model/ProjectCompact} project
 */
SectionResponse.prototype['project'] = undefined;

/**
 * *Deprecated - please use project instead*
 * @member {Array.<module:model/ProjectCompact>} projects
 */
SectionResponse.prototype['projects'] = undefined;


// Implement SectionCompact interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
SectionCompact.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
SectionCompact.prototype['resource_type'] = undefined;
/**
 * The name of the section (i.e. the text displayed as the section header).
 * @member {String} name
 */
SectionCompact.prototype['name'] = undefined;
// Implement SectionResponseAllOf interface:
/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
SectionResponseAllOf.prototype['created_at'] = undefined;
/**
 * @member {module:model/ProjectCompact} project
 */
SectionResponseAllOf.prototype['project'] = undefined;
/**
 * *Deprecated - please use project instead*
 * @member {Array.<module:model/ProjectCompact>} projects
 */
SectionResponseAllOf.prototype['projects'] = undefined;




export default SectionResponse;
