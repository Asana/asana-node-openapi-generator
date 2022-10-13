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
import CustomFieldBase from './CustomFieldBase';
import CustomFieldCompactAllOfDateValue from './CustomFieldCompactAllOfDateValue';
import CustomFieldResponseAllOf from './CustomFieldResponseAllOf';
import EnumOption from './EnumOption';
import UserCompact from './UserCompact';

/**
 * The CustomFieldResponse model module.
 * @module model/CustomFieldResponse
 * @version 1.0.0
 */
class CustomFieldResponse {
    /**
     * Constructs a new <code>CustomFieldResponse</code>.
     * @alias module:model/CustomFieldResponse
     * @implements module:model/CustomFieldBase
     * @implements module:model/CustomFieldResponseAllOf
     */
    constructor() { 
        CustomFieldBase.initialize(this);CustomFieldResponseAllOf.initialize(this);
        CustomFieldResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomFieldResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldResponse} obj Optional instance to populate.
     * @return {module:model/CustomFieldResponse} The populated <code>CustomFieldResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldResponse();
            CustomFieldBase.constructFromObject(data, obj);
            CustomFieldResponseAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('precision')) {
                obj['precision'] = ApiClient.convertToType(data['precision'], 'Number');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('custom_label')) {
                obj['custom_label'] = ApiClient.convertToType(data['custom_label'], 'String');
            }
            if (data.hasOwnProperty('custom_label_position')) {
                obj['custom_label_position'] = ApiClient.convertToType(data['custom_label_position'], 'String');
            }
            if (data.hasOwnProperty('is_global_to_workspace')) {
                obj['is_global_to_workspace'] = ApiClient.convertToType(data['is_global_to_workspace'], 'Boolean');
            }
            if (data.hasOwnProperty('has_notifications_enabled')) {
                obj['has_notifications_enabled'] = ApiClient.convertToType(data['has_notifications_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = UserCompact.constructFromObject(data['created_by']);
            }
            if (data.hasOwnProperty('people_value')) {
                obj['people_value'] = ApiClient.convertToType(data['people_value'], [UserCompact]);
            }
        }
        return obj;
    }


}

/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
CustomFieldResponse.prototype['gid'] = undefined;

/**
 * The base type of this resource.
 * @member {String} resource_type
 */
CustomFieldResponse.prototype['resource_type'] = undefined;

/**
 * The name of the custom field.
 * @member {String} name
 */
CustomFieldResponse.prototype['name'] = undefined;

/**
 * The type of the custom field. Must be one of the given values. 
 * @member {module:model/CustomFieldResponse.ResourceSubtypeEnum} resource_subtype
 */
CustomFieldResponse.prototype['resource_subtype'] = undefined;

/**
 * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values. 
 * @member {module:model/CustomFieldResponse.TypeEnum} type
 */
CustomFieldResponse.prototype['type'] = undefined;

/**
 * *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/docs/create-an-enum-option).
 * @member {Array.<module:model/EnumOption>} enum_options
 */
CustomFieldResponse.prototype['enum_options'] = undefined;

/**
 * *Conditional*. Determines if the custom field is enabled or not.
 * @member {Boolean} enabled
 */
CustomFieldResponse.prototype['enabled'] = undefined;

/**
 * @member {module:model/CustomFieldCompactAllOfDateValue} date_value
 */
CustomFieldResponse.prototype['date_value'] = undefined;

/**
 * @member {module:model/EnumOption} enum_value
 */
CustomFieldResponse.prototype['enum_value'] = undefined;

/**
 * *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
 * @member {Array.<module:model/EnumOption>} multi_enum_values
 */
CustomFieldResponse.prototype['multi_enum_values'] = undefined;

/**
 * *Conditional*. This number is the value of a `number` custom field.
 * @member {Number} number_value
 */
CustomFieldResponse.prototype['number_value'] = undefined;

/**
 * *Conditional*. This string is the value of a `text` custom field.
 * @member {String} text_value
 */
CustomFieldResponse.prototype['text_value'] = undefined;

/**
 * A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
 * @member {String} display_value
 */
CustomFieldResponse.prototype['display_value'] = undefined;

/**
 * [Opt In](/docs/input-output-options). The description of the custom field.
 * @member {String} description
 */
CustomFieldResponse.prototype['description'] = undefined;

/**
 * Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive. For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%. The identifier format will always have a precision of 0.
 * @member {Number} precision
 */
CustomFieldResponse.prototype['precision'] = undefined;

/**
 * The format of this custom field.
 * @member {module:model/CustomFieldResponse.FormatEnum} format
 */
CustomFieldResponse.prototype['format'] = undefined;

/**
 * ISO 4217 currency code to format this custom field. This will be null if the `format` is not `currency`.
 * @member {String} currency_code
 */
CustomFieldResponse.prototype['currency_code'] = undefined;

/**
 * This is the string that appears next to the custom field value. This will be null if the `format` is not `custom`.
 * @member {String} custom_label
 */
CustomFieldResponse.prototype['custom_label'] = undefined;

/**
 * Only relevant for custom fields with `custom` format. This depicts where to place the custom label. This will be null if the `format` is not `custom`.
 * @member {module:model/CustomFieldResponse.CustomLabelPositionEnum} custom_label_position
 */
CustomFieldResponse.prototype['custom_label_position'] = undefined;

/**
 * This flag describes whether this custom field is available to every container in the workspace. Before project-specific custom fields, this field was always true.
 * @member {Boolean} is_global_to_workspace
 */
CustomFieldResponse.prototype['is_global_to_workspace'] = undefined;

/**
 * *Conditional*. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field.
 * @member {Boolean} has_notifications_enabled
 */
CustomFieldResponse.prototype['has_notifications_enabled'] = undefined;

/**
 * @member {module:model/UserCompact} created_by
 */
CustomFieldResponse.prototype['created_by'] = undefined;

/**
 * *Conditional*. Only relevant for custom fields of type `people`. This array of [compact user](/docs/user-compact) objects reflects the values of a `people` custom field.
 * @member {Array.<module:model/UserCompact>} people_value
 */
CustomFieldResponse.prototype['people_value'] = undefined;


// Implement CustomFieldBase interface:
/**
 * Globally unique identifier of the resource, as a string.
 * @member {String} gid
 */
CustomFieldBase.prototype['gid'] = undefined;
/**
 * The base type of this resource.
 * @member {String} resource_type
 */
CustomFieldBase.prototype['resource_type'] = undefined;
/**
 * The name of the custom field.
 * @member {String} name
 */
CustomFieldBase.prototype['name'] = undefined;
/**
 * The type of the custom field. Must be one of the given values. 
 * @member {module:model/CustomFieldBase.ResourceSubtypeEnum} resource_subtype
 */
CustomFieldBase.prototype['resource_subtype'] = undefined;
/**
 * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values. 
 * @member {module:model/CustomFieldBase.TypeEnum} type
 */
CustomFieldBase.prototype['type'] = undefined;
/**
 * *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/docs/create-an-enum-option).
 * @member {Array.<module:model/EnumOption>} enum_options
 */
CustomFieldBase.prototype['enum_options'] = undefined;
/**
 * *Conditional*. Determines if the custom field is enabled or not.
 * @member {Boolean} enabled
 */
CustomFieldBase.prototype['enabled'] = undefined;
/**
 * @member {module:model/CustomFieldCompactAllOfDateValue} date_value
 */
CustomFieldBase.prototype['date_value'] = undefined;
/**
 * @member {module:model/EnumOption} enum_value
 */
CustomFieldBase.prototype['enum_value'] = undefined;
/**
 * *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
 * @member {Array.<module:model/EnumOption>} multi_enum_values
 */
CustomFieldBase.prototype['multi_enum_values'] = undefined;
/**
 * *Conditional*. This number is the value of a `number` custom field.
 * @member {Number} number_value
 */
CustomFieldBase.prototype['number_value'] = undefined;
/**
 * *Conditional*. This string is the value of a `text` custom field.
 * @member {String} text_value
 */
CustomFieldBase.prototype['text_value'] = undefined;
/**
 * A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
 * @member {String} display_value
 */
CustomFieldBase.prototype['display_value'] = undefined;
/**
 * [Opt In](/docs/input-output-options). The description of the custom field.
 * @member {String} description
 */
CustomFieldBase.prototype['description'] = undefined;
/**
 * Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive. For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%. The identifier format will always have a precision of 0.
 * @member {Number} precision
 */
CustomFieldBase.prototype['precision'] = undefined;
/**
 * The format of this custom field.
 * @member {module:model/CustomFieldBase.FormatEnum} format
 */
CustomFieldBase.prototype['format'] = undefined;
/**
 * ISO 4217 currency code to format this custom field. This will be null if the `format` is not `currency`.
 * @member {String} currency_code
 */
CustomFieldBase.prototype['currency_code'] = undefined;
/**
 * This is the string that appears next to the custom field value. This will be null if the `format` is not `custom`.
 * @member {String} custom_label
 */
CustomFieldBase.prototype['custom_label'] = undefined;
/**
 * Only relevant for custom fields with `custom` format. This depicts where to place the custom label. This will be null if the `format` is not `custom`.
 * @member {module:model/CustomFieldBase.CustomLabelPositionEnum} custom_label_position
 */
CustomFieldBase.prototype['custom_label_position'] = undefined;
/**
 * This flag describes whether this custom field is available to every container in the workspace. Before project-specific custom fields, this field was always true.
 * @member {Boolean} is_global_to_workspace
 */
CustomFieldBase.prototype['is_global_to_workspace'] = undefined;
/**
 * *Conditional*. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field.
 * @member {Boolean} has_notifications_enabled
 */
CustomFieldBase.prototype['has_notifications_enabled'] = undefined;
// Implement CustomFieldResponseAllOf interface:
/**
 * @member {module:model/UserCompact} created_by
 */
CustomFieldResponseAllOf.prototype['created_by'] = undefined;
/**
 * *Conditional*. Only relevant for custom fields of type `people`. This array of [compact user](/docs/user-compact) objects reflects the values of a `people` custom field.
 * @member {Array.<module:model/UserCompact>} people_value
 */
CustomFieldResponseAllOf.prototype['people_value'] = undefined;



/**
 * Allowed values for the <code>resource_subtype</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldResponse['ResourceSubtypeEnum'] = {

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
CustomFieldResponse['TypeEnum'] = {

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


/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldResponse['FormatEnum'] = {

    /**
     * value: "currency"
     * @const
     */
    "currency": "currency",

    /**
     * value: "identifier"
     * @const
     */
    "identifier": "identifier",

    /**
     * value: "percentage"
     * @const
     */
    "percentage": "percentage",

    /**
     * value: "custom"
     * @const
     */
    "custom": "custom",

    /**
     * value: "none"
     * @const
     */
    "none": "none"
};


/**
 * Allowed values for the <code>custom_label_position</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldResponse['CustomLabelPositionEnum'] = {

    /**
     * value: "prefix"
     * @const
     */
    "prefix": "prefix",

    /**
     * value: "suffix"
     * @const
     */
    "suffix": "suffix"
};



export default CustomFieldResponse;
