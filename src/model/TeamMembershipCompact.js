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
import AsanaResource from './AsanaResource';
import TeamCompact from './TeamCompact';
import TeamMembershipCompactAllOf from './TeamMembershipCompactAllOf';
import UserCompact from './UserCompact';

/**
 * The TeamMembershipCompact model module.
 * @module model/TeamMembershipCompact
 * @version 1.0.0
 */
class TeamMembershipCompact {
    /**
     * Constructs a new <code>TeamMembershipCompact</code>.
     * @alias module:model/TeamMembershipCompact
     * @implements module:model/AsanaResource
     * @implements module:model/TeamMembershipCompactAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);TeamMembershipCompactAllOf.initialize(this);
        TeamMembershipCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamMembershipCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamMembershipCompact} obj Optional instance to populate.
     * @return {module:model/TeamMembershipCompact} The populated <code>TeamMembershipCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamMembershipCompact();
            AsanaResource.constructFromObject(data, obj);
            TeamMembershipCompactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = UserCompact.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = TeamCompact.constructFromObject(data['team']);
            }
            if (data.hasOwnProperty('is_guest')) {
                obj['is_guest'] = ApiClient.convertToType(data['is_guest'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
TeamMembershipCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
TeamMembershipCompact.prototype['resource_type'] = undefined;

/**
 * @member {module:model/UserCompact} user
 */
TeamMembershipCompact.prototype['user'] = undefined;

/**
 * @member {module:model/TeamCompact} team
 */
TeamMembershipCompact.prototype['team'] = undefined;

/**
 * Describes if the user is a guest in the team.
 * @member {Boolean} is_guest
 */
TeamMembershipCompact.prototype['is_guest'] = undefined;


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
// Implement TeamMembershipCompactAllOf interface:
/**
 * @member {module:model/UserCompact} user
 */
TeamMembershipCompactAllOf.prototype['user'] = undefined;
/**
 * @member {module:model/TeamCompact} team
 */
TeamMembershipCompactAllOf.prototype['team'] = undefined;
/**
 * Describes if the user is a guest in the team.
 * @member {Boolean} is_guest
 */
TeamMembershipCompactAllOf.prototype['is_guest'] = undefined;




export default TeamMembershipCompact;

