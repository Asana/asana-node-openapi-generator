# Asana.AuditLogEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the &#x60;AuditLogEvent&#x60;, as a string. | [optional] 
**createdAt** | **Date** | The time the event was created. | [optional] 
**eventType** | **String** | The type of the event. | [optional] 
**eventCategory** | **String** | The category that this &#x60;event_type&#x60; belongs to. | [optional] 
**actor** | [**AuditLogEventActor**](AuditLogEventActor.md) |  | [optional] 
**resource** | [**AuditLogEventResource**](AuditLogEventResource.md) |  | [optional] 
**details** | **Object** |  | [optional] 
**context** | [**AuditLogEventContext**](AuditLogEventContext.md) |  | [optional] 


