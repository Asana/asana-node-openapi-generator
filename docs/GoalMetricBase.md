# Asana.GoalMetricBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**resourceSubtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. | [optional] [readonly] 
**precision** | **Number** | *Conditional*. Only relevant for goal metrics of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive. For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%. | [optional] 
**unit** | **String** | A supported unit of measure for the goal metric, or none. | [optional] 
**currencyCode** | **String** | ISO 4217 currency code to format this custom field. This will be null if the &#x60;unit&#x60; is not &#x60;currency&#x60;. | [optional] 
**initialNumberValue** | **Number** | This number is the start value of a goal metric of type number. | [optional] 
**targetNumberValue** | **Number** | This number is the end value of a goal metric of type number. This number cannot equal &#x60;initial_number_value&#x60;. | [optional] 
**currentNumberValue** | **Number** | This number is the current value of a goal metric of type number. | [optional] 
**currentDisplayValue** | **String** | This string is the current value of a goal metric of type string. | [optional] [readonly] 
**progressSource** | **String** | This field defines how the progress value of a goal metric is being calculated. A goal&#39;s progress can be provided manually by the user, or calculated automatically from contributing subgoals or projects. | [optional] 



## Enum: ResourceSubtypeEnum


* `number` (value: `"number"`)





## Enum: UnitEnum


* `none` (value: `"none"`)

* `currency` (value: `"currency"`)

* `percentage` (value: `"percentage"`)





## Enum: ProgressSourceEnum


* `manual` (value: `"manual"`)

* `subgoal_progress` (value: `"subgoal_progress"`)

* `project_task_completion` (value: `"project_task_completion"`)

* `project_milestone_completion` (value: `"project_milestone_completion"`)




