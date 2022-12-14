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
import WorkspaceCompact from './WorkspaceCompact';

/**
 * The OrganizationExportCompactAllOf model module.
 * @module model/OrganizationExportCompactAllOf
 * @version 1.0.0
 */
class OrganizationExportCompactAllOf {
    /**
     * Constructs a new <code>OrganizationExportCompactAllOf</code>.
     * An *organization_export* object represents a request to export the complete data of an Organization in JSON format.
     * @alias module:model/OrganizationExportCompactAllOf
     */
    constructor() { 
        
        OrganizationExportCompactAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationExportCompactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationExportCompactAllOf} obj Optional instance to populate.
     * @return {module:model/OrganizationExportCompactAllOf} The populated <code>OrganizationExportCompactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationExportCompactAllOf();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('download_url')) {
                obj['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = WorkspaceCompact.constructFromObject(data['organization']);
            }
        }
        return obj;
    }


}

/**
 * The time at which this resource was created.
 * @member {Date} created_at
 */
OrganizationExportCompactAllOf.prototype['created_at'] = undefined;

/**
 * Download this URL to retreive the full export of the organization in JSON format. It will be compressed in a gzip (.gz) container.  *Note: May be null if the export is still in progress or failed.  If present, this URL may only be valid for 1 hour from the time of retrieval. You should avoid persisting this URL somewhere and rather refresh on demand to ensure you do not keep stale URLs.*
 * @member {String} download_url
 */
OrganizationExportCompactAllOf.prototype['download_url'] = undefined;

/**
 * The current state of the export.
 * @member {module:model/OrganizationExportCompactAllOf.StateEnum} state
 */
OrganizationExportCompactAllOf.prototype['state'] = undefined;

/**
 * @member {module:model/WorkspaceCompact} organization
 */
OrganizationExportCompactAllOf.prototype['organization'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
OrganizationExportCompactAllOf['StateEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "started"
     * @const
     */
    "started": "started",

    /**
     * value: "finished"
     * @const
     */
    "finished": "finished",

    /**
     * value: "error"
     * @const
     */
    "error": "error"
};



export default OrganizationExportCompactAllOf;

