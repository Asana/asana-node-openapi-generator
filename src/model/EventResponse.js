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
import EventResponseChange from './EventResponseChange';
import EventResponseParent from './EventResponseParent';
import EventResponseResource from './EventResponseResource';
import EventResponseUser from './EventResponseUser';

/**
 * The EventResponse model module.
 * @module model/EventResponse
 * @version 1.0.0
 */
class EventResponse {
    /**
     * Constructs a new <code>EventResponse</code>.
     * An *event* is an object representing a change to a resource that was observed by an event subscription or delivered asynchronously to the target location of an active webhook.  The event may be triggered by a different &#x60;user&#x60; than the subscriber. For example, if user A subscribes to a task and user B modified it, the event’s user will be user B. Note: Some events are generated by the system, and will have &#x60;null&#x60; as the user. API consumers should make sure to handle this case.  The &#x60;resource&#x60; that triggered the event may be different from the one that the events were requested for or the webhook is subscribed to. For example, a subscription to a project will contain events for tasks contained within the project.  **Note:** pay close attention to the relationship between the fields &#x60;Event.action&#x60; and &#x60;Event.change.action&#x60;. &#x60;Event.action&#x60; represents the action taken on the resource itself, and &#x60;Event.change.action&#x60; represents how the information within the resource&#39;s fields have been modified.  For instance, consider these scenarios:   * When at task is added to a project, &#x60;Event.action&#x60; will be &#x60;added&#x60;, &#x60;Event.parent&#x60; will be on object with the &#x60;id&#x60; and &#x60;type&#x60; of the project, and there will be no &#x60;change&#x60; field.   * When an assignee is set on the task, &#x60;Event.parent&#x60; will be &#x60;null&#x60;, &#x60;Event.action&#x60; will be &#x60;changed&#x60;, &#x60;Event.change.action&#x60; will be &#x60;changed&#x60;, and &#x60;new_value&#x60; will be an object with the user&#39;s &#x60;id&#x60; and &#x60;type&#x60;.   * When a collaborator is added to the task, &#x60;Event.parent&#x60; will be &#x60;null&#x60;, &#x60;Event.action&#x60; will be &#x60;changed&#x60;, &#x60;Event.change.action&#x60; will be &#x60;added&#x60;, and &#x60;added_value&#x60; will be an object with the user&#39;s &#x60;id&#x60; and &#x60;type&#x60;.
     * @alias module:model/EventResponse
     */
    constructor() { 
        
        EventResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventResponse} obj Optional instance to populate.
     * @return {module:model/EventResponse} The populated <code>EventResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventResponse();

            if (data.hasOwnProperty('user')) {
                obj['user'] = EventResponseUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = EventResponseResource.constructFromObject(data['resource']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = EventResponseParent.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('change')) {
                obj['change'] = EventResponseChange.constructFromObject(data['change']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EventResponseUser} user
 */
EventResponse.prototype['user'] = undefined;

/**
 * @member {module:model/EventResponseResource} resource
 */
EventResponse.prototype['resource'] = undefined;

/**
 * *Deprecated: Refer to the resource_type of the resource.* The type of the resource that generated the event.
 * @member {String} type
 */
EventResponse.prototype['type'] = undefined;

/**
 * The type of action taken on the **resource** that triggered the event.  This can be one of `changed`, `added`, `removed`, `deleted`, or `undeleted` depending on the nature of the event.
 * @member {String} action
 */
EventResponse.prototype['action'] = undefined;

/**
 * @member {module:model/EventResponseParent} parent
 */
EventResponse.prototype['parent'] = undefined;

/**
 * The timestamp when the event occurred.
 * @member {Date} created_at
 */
EventResponse.prototype['created_at'] = undefined;

/**
 * @member {module:model/EventResponseChange} change
 */
EventResponse.prototype['change'] = undefined;






export default EventResponse;

