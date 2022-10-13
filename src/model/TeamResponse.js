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
import TeamCompact from './TeamCompact';
import TeamResponseAllOf from './TeamResponseAllOf';
import WorkspaceCompact from './WorkspaceCompact';

/**
 * The TeamResponse model module.
 * @module model/TeamResponse
 * @version 1.0.0
 */
class TeamResponse {
    /**
     * Constructs a new <code>TeamResponse</code>.
     * @alias module:model/TeamResponse
     * @implements module:model/TeamCompact
     * @implements module:model/TeamResponseAllOf
     */
    constructor() { 
        TeamCompact.initialize(this);TeamResponseAllOf.initialize(this);
        TeamResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamResponse} obj Optional instance to populate.
     * @return {module:model/TeamResponse} The populated <code>TeamResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamResponse();
            TeamCompact.constructFromObject(data, obj);
            TeamResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('html_description')) {
                obj['html_description'] = ApiClient.convertToType(data['html_description'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], WorkspaceCompact);
            }
            if (data.hasOwnProperty('permalink_url')) {
                obj['permalink_url'] = ApiClient.convertToType(data['permalink_url'], 'String');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TeamResponse.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TeamResponse.prototype['resource_type'] = undefined;

/**
 * The name of the team.
 * @member {String} name
 */
TeamResponse.prototype['name'] = undefined;

/**
 * [Opt In](/docs/input-output-options). The description of the team. 
 * @member {String} description
 */
TeamResponse.prototype['description'] = undefined;

/**
 * [Opt In](/docs/input-output-options). The description of the team with formatting as HTML. 
 * @member {String} html_description
 */
TeamResponse.prototype['html_description'] = undefined;

/**
 * @member {module:model/WorkspaceCompact} organization
 */
TeamResponse.prototype['organization'] = undefined;

/**
 * A url that points directly to the object within Asana.
 * @member {String} permalink_url
 */
TeamResponse.prototype['permalink_url'] = undefined;

/**
 * The visibility of the team to users in the same organization 
 * @member {module:model/TeamResponse.VisibilityEnum} visibility
 */
TeamResponse.prototype['visibility'] = undefined;


// Implement TeamCompact interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TeamCompact.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TeamCompact.prototype['resource_type'] = undefined;
/**
 * The name of the team.
 * @member {String} name
 */
TeamCompact.prototype['name'] = undefined;
// Implement TeamResponseAllOf interface:
/**
 * [Opt In](/docs/input-output-options). The description of the team. 
 * @member {String} description
 */
TeamResponseAllOf.prototype['description'] = undefined;
/**
 * [Opt In](/docs/input-output-options). The description of the team with formatting as HTML. 
 * @member {String} html_description
 */
TeamResponseAllOf.prototype['html_description'] = undefined;
/**
 * @member {module:model/WorkspaceCompact} organization
 */
TeamResponseAllOf.prototype['organization'] = undefined;
/**
 * A url that points directly to the object within Asana.
 * @member {String} permalink_url
 */
TeamResponseAllOf.prototype['permalink_url'] = undefined;
/**
 * The visibility of the team to users in the same organization 
 * @member {module:model/TeamResponseAllOf.VisibilityEnum} visibility
 */
TeamResponseAllOf.prototype['visibility'] = undefined;



/**
 * Allowed values for the <code>visibility</code> property.
 * @enum {String}
 * @readonly
 */
TeamResponse['VisibilityEnum'] = {

    /**
     * value: "secret"
     * @const
     */
    "secret": "secret",

    /**
     * value: "request_to_join"
     * @const
     */
    "request_to_join": "request_to_join",

    /**
     * value: "public"
     * @const
     */
    "public": "public"
};



export default TeamResponse;

