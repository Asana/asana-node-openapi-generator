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
import UserCompact from './UserCompact';

/**
 * The TeamMembershipCompactAllOf model module.
 * @module model/TeamMembershipCompactAllOf
 * @version 1.0.0
 */
class TeamMembershipCompactAllOf {
    /**
     * Constructs a new <code>TeamMembershipCompactAllOf</code>.
     * This object represents a user&#39;s connection to a team.
     * @alias module:model/TeamMembershipCompactAllOf
     */
    constructor() { 
        
        TeamMembershipCompactAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamMembershipCompactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamMembershipCompactAllOf} obj Optional instance to populate.
     * @return {module:model/TeamMembershipCompactAllOf} The populated <code>TeamMembershipCompactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamMembershipCompactAllOf();

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






export default TeamMembershipCompactAllOf;

