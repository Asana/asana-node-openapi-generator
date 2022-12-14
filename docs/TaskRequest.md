# Asana.TaskRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**name** | **String** | Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer. | [optional] 
**resourceSubtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The resource_subtype &#x60;milestone&#x60; represent a single moment in time. This means tasks with this subtype cannot have a start_date. | [optional] 
**approvalStatus** | **String** | *Conditional* Reflects the approval status of this task. This field is kept in sync with &#x60;completed&#x60;, meaning &#x60;pending&#x60; translates to false while &#x60;approved&#x60;, &#x60;rejected&#x60;, and &#x60;changes_requested&#x60; translate to true. If you set completed to true, this field will be set to &#x60;approved&#x60;. | [optional] 
**assigneeStatus** | **String** | *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to \&quot;inbox\&quot; or \&quot;upcoming\&quot; inserts it at the top of the section, while the other options will insert at the bottom. | [optional] 
**completed** | **Boolean** | True if the task is currently marked complete, false if not. | [optional] 
**completedAt** | **Date** | The time at which this task was completed, or null if the task is incomplete. | [optional] [readonly] 
**completedBy** | [**UserCompact**](UserCompact.md) |  | [optional] 
**createdAt** | **Date** | The time at which this resource was created. | [optional] [readonly] 
**dependencies** | [**[AsanaResource]**](AsanaResource.md) | [Opt In](/docs/input-output-options). Array of resources referencing tasks that this task depends on. The objects contain only the gid of the dependency. | [optional] [readonly] 
**dependents** | [**[AsanaResource]**](AsanaResource.md) | [Opt In](/docs/input-output-options). Array of resources referencing tasks that depend on this task. The objects contain only the ID of the dependent. | [optional] [readonly] 
**dueAt** | **Date** | The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with &#x60;due_on&#x60;. | [optional] 
**dueOn** | **Date** | The localized date on which this task is due, or null if the task has no due date. This takes a date with &#x60;YYYY-MM-DD&#x60; format and should not be used together with &#x60;due_at&#x60;. | [optional] 
**external** | [**TaskBaseAllOfExternal**](TaskBaseAllOfExternal.md) |  | [optional] 
**htmlNotes** | **String** | [Opt In](/docs/input-output-options). The notes of the text with formatting as HTML. | [optional] 
**hearted** | **Boolean** | *Deprecated - please use liked instead* True if the task is hearted by the authorized user, false if not. | [optional] [readonly] 
**hearts** | [**[Like]**](Like.md) | *Deprecated - please use likes instead* Array of likes for users who have hearted this task. | [optional] [readonly] 
**isRenderedAsSeparator** | **Boolean** | [Opt In](/docs/input-output-options). In some contexts tasks can be rendered as a visual separator; for instance, subtasks can appear similar to [sections](/docs/asana-sections) without being true &#x60;section&#x60; objects. If a &#x60;task&#x60; object is rendered this way in any context it will have the property &#x60;is_rendered_as_separator&#x60; set to &#x60;true&#x60;. | [optional] [readonly] 
**liked** | **Boolean** | True if the task is liked by the authorized user, false if not. | [optional] 
**likes** | [**[Like]**](Like.md) | Array of likes for users who have liked this task. | [optional] [readonly] 
**memberships** | [**[TaskBaseAllOfMemberships]**](TaskBaseAllOfMemberships.md) | *Create-only*. Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the &#x60;addProject&#x60; and &#x60;removeProject&#x60; endpoints. Note that over time, more types of memberships may be added to this property. | [optional] [readonly] 
**modifiedAt** | **Date** | The time at which this task was last modified.  *Note: This does not currently reflect any changes in associations such as projects or comments that may have been added or removed from the task.* | [optional] [readonly] 
**notes** | **String** | Free-form textual information associated with the task (i.e. its description). | [optional] 
**numHearts** | **Number** | *Deprecated - please use likes instead* The number of users who have hearted this task. | [optional] [readonly] 
**numLikes** | **Number** | The number of users who have liked this task. | [optional] [readonly] 
**numSubtasks** | **Number** | [Opt In](/docs/input-output-options). The number of subtasks on this task.  | [optional] [readonly] 
**startAt** | **Date** | Date and time on which work begins for the task, or null if the task has no start time. This takes an ISO 8601 date string in UTC and should not be used together with &#x60;start_on&#x60;. *Note: &#x60;due_at&#x60; must be present in the request when setting or unsetting the &#x60;start_at&#x60; parameter.* | [optional] 
**startOn** | **Date** | The day on which work begins for the task , or null if the task has no start date. This takes a date with &#x60;YYYY-MM-DD&#x60; format and should not be used together with &#x60;start_at&#x60;. *Note: &#x60;due_on&#x60; or &#x60;due_at&#x60; must be present in the request when setting or unsetting the &#x60;start_on&#x60; parameter.* | [optional] 
**assignee** | **String** | Gid of a user. | [optional] 
**assigneeSection** | **String** | The *assignee section* is a subdivision of a project that groups tasks together in the assignee&#39;s \&quot;My Tasks\&quot; list. It can either be a header above a list of tasks in a list view or a column in a board view of \&quot;My Tasks.\&quot; The &#x60;assignee_section&#x60; property will be returned in the response only if the request was sent by the user who is the assignee of the task. Note that you can only write to &#x60;assignee_section&#x60; with the gid of an existing section visible in the user&#39;s \&quot;My Tasks\&quot; list. | [optional] 
**customFields** | **{String: String}** | An object where each key is a Custom Field GID and each value is an enum GID, string, number, object, or array. | [optional] 
**followers** | **[String]** | *Create-Only* An array of strings identifying users. These can either be the string \&quot;me\&quot;, an email, or the gid of a user. In order to change followers on an existing task use &#x60;addFollowers&#x60; and &#x60;removeFollowers&#x60;. | [optional] 
**parent** | **String** | Gid of a task. | [optional] 
**projects** | **[String]** | *Create-Only* Array of project gids. In order to change projects on an existing task use &#x60;addProject&#x60; and &#x60;removeProject&#x60;. | [optional] 
**tags** | **[String]** | *Create-Only* Array of tag gids. In order to change tags on an existing task use &#x60;addTag&#x60; and &#x60;removeTag&#x60;. | [optional] 
**workspace** | **String** | Gid of a workspace. | [optional] 



## Enum: ResourceSubtypeEnum


* `default_task` (value: `"default_task"`)

* `milestone` (value: `"milestone"`)

* `section` (value: `"section"`)

* `approval` (value: `"approval"`)





## Enum: ApprovalStatusEnum


* `pending` (value: `"pending"`)

* `approved` (value: `"approved"`)

* `rejected` (value: `"rejected"`)

* `changes_requested` (value: `"changes_requested"`)





## Enum: AssigneeStatusEnum


* `today` (value: `"today"`)

* `upcoming` (value: `"upcoming"`)

* `later` (value: `"later"`)

* `new` (value: `"new"`)

* `inbox` (value: `"inbox"`)




