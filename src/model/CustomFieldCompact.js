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
import CustomFieldCompactAllOf from './CustomFieldCompactAllOf';
import CustomFieldCompactAllOfDateValue from './CustomFieldCompactAllOfDateValue';
import EnumOption from './EnumOption';

/**
 * The CustomFieldCompact model module.
 * @module model/CustomFieldCompact
 * @version 1.0.0
 */
class CustomFieldCompact {
    /**
     * Constructs a new <code>CustomFieldCompact</code>.
     * @alias module:model/CustomFieldCompact
     * @implements module:model/AsanaResource
     * @implements module:model/CustomFieldCompactAllOf
     */
    constructor() { 
        AsanaResource.initialize(this);CustomFieldCompactAllOf.initialize(this);
        CustomFieldCompact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomFieldCompact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldCompact} obj Optional instance to populate.
     * @return {module:model/CustomFieldCompact} The populated <code>CustomFieldCompact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldCompact();
            AsanaResource.constructFromObject(data, obj);
            CustomFieldCompactAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('enum_options')) {
                obj['enum_options'] = ApiClient.convertToType(data['enum_options'], [EnumOption]);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('date_value')) {
                obj['date_value'] = CustomFieldCompactAllOfDateValue.constructFromObject(data['date_value']);
            }
            if (data.hasOwnProperty('enum_value')) {
                obj['enum_value'] = ApiClient.convertToType(data['enum_value'], EnumOption);
            }
            if (data.hasOwnProperty('multi_enum_values')) {
                obj['multi_enum_values'] = ApiClient.convertToType(data['multi_enum_values'], [EnumOption]);
            }
            if (data.hasOwnProperty('number_value')) {
                obj['number_value'] = ApiClient.convertToType(data['number_value'], 'Number');
            }
            if (data.hasOwnProperty('text_value')) {
                obj['text_value'] = ApiClient.convertToType(data['text_value'], 'String');
            }
            if (data.hasOwnProperty('display_value')) {
                obj['display_value'] = ApiClient.convertToType(data['display_value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
CustomFieldCompact.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
CustomFieldCompact.prototype['resource_type'] = undefined;

/**
 * The name of the custom field.
 * @member {String} name
 */
CustomFieldCompact.prototype['name'] = undefined;

/**
 * The type of the custom field. Must be one of the given values. 
 * @member {module:model/CustomFieldCompact.ResourceSubtypeEnum} resource_subtype
 */
CustomFieldCompact.prototype['resource_subtype'] = undefined;

/**
 * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values. 
 * @member {module:model/CustomFieldCompact.TypeEnum} type
 */
CustomFieldCompact.prototype['type'] = undefined;

/**
 * *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/docs/create-an-enum-option).
 * @member {Array.<module:model/EnumOption>} enum_options
 */
CustomFieldCompact.prototype['enum_options'] = undefined;

/**
 * *Conditional*. Determines if the custom field is enabled or not.
 * @member {Boolean} enabled
 */
CustomFieldCompact.prototype['enabled'] = undefined;

/**
 * @member {module:model/CustomFieldCompactAllOfDateValue} date_value
 */
CustomFieldCompact.prototype['date_value'] = undefined;

/**
 * @member {module:model/EnumOption} enum_value
 */
CustomFieldCompact.prototype['enum_value'] = undefined;

/**
 * *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
 * @member {Array.<module:model/EnumOption>} multi_enum_values
 */
CustomFieldCompact.prototype['multi_enum_values'] = undefined;

/**
 * *Conditional*. This number is the value of a `number` custom field.
 * @member {Number} number_value
 */
CustomFieldCompact.prototype['number_value'] = undefined;

/**
 * *Conditional*. This string is the value of a `text` custom field.
 * @member {String} text_value
 */
CustomFieldCompact.prototype['text_value'] = undefined;

/**
 * A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
 * @member {String} display_value
 */
CustomFieldCompact.prototype['display_value'] = undefined;


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
// Implement CustomFieldCompactAllOf interface:
/**
 * The name of the custom field.
 * @member {String} name
 */
CustomFieldCompactAllOf.prototype['name'] = undefined;
/**
 * The type of the custom field. Must be one of the given values. 
 * @member {module:model/CustomFieldCompactAllOf.ResourceSubtypeEnum} resource_subtype
 */
CustomFieldCompactAllOf.prototype['resource_subtype'] = undefined;
/**
 * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values. 
 * @member {module:model/CustomFieldCompactAllOf.TypeEnum} type
 */
CustomFieldCompactAllOf.prototype['type'] = undefined;
/**
 * *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/docs/create-an-enum-option).
 * @member {Array.<module:model/EnumOption>} enum_options
 */
CustomFieldCompactAllOf.prototype['enum_options'] = undefined;
/**
 * *Conditional*. Determines if the custom field is enabled or not.
 * @member {Boolean} enabled
 */
CustomFieldCompactAllOf.prototype['enabled'] = undefined;
/**
 * @member {module:model/CustomFieldCompactAllOfDateValue} date_value
 */
CustomFieldCompactAllOf.prototype['date_value'] = undefined;
/**
 * @member {module:model/EnumOption} enum_value
 */
CustomFieldCompactAllOf.prototype['enum_value'] = undefined;
/**
 * *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
 * @member {Array.<module:model/EnumOption>} multi_enum_values
 */
CustomFieldCompactAllOf.prototype['multi_enum_values'] = undefined;
/**
 * *Conditional*. This number is the value of a `number` custom field.
 * @member {Number} number_value
 */
CustomFieldCompactAllOf.prototype['number_value'] = undefined;
/**
 * *Conditional*. This string is the value of a `text` custom field.
 * @member {String} text_value
 */
CustomFieldCompactAllOf.prototype['text_value'] = undefined;
/**
 * A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
 * @member {String} display_value
 */
CustomFieldCompactAllOf.prototype['display_value'] = undefined;



/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldCompact['ResourceSubtypeEnum'] = {

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "enum"
     * @const
     */
    "enum": "enum",

    /**
     * value: "multi_enum"
     * @const
     */
    "multi_enum": "multi_enum",

    /**
     * value: "number"
     * @const
     */
    "number": "number",

    /**
     * value: "date"
     * @const
     */
    "date": "date",

    /**
     * value: "people"
     * @const
     */
    "people": "people"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldCompact['TypeEnum'] = {

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "enum"
     * @const
     */
    "enum": "enum",

    /**
     * value: "multi_enum"
     * @const
     */
    "multi_enum": "multi_enum",

    /**
     * value: "number"
     * @const
     */
    "number": "number"
};



export default CustomFieldCompact;

