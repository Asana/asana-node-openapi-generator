# Asana.StoryBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] [readonly] 
**resourceType** | **String** | The base type of this resource. | [optional] [readonly] 
**createdAt** | **Date** | The time at which this resource was created. | [optional] [readonly] 
**resourceSubtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. | [optional] [readonly] 
**text** | **String** | The plain text of the comment to add. Cannot be used with html_text. | [optional] 
**htmlText** | **String** | [Opt In](/docs/input-output-options). HTML formatted text for a comment. This will not include the name of the creator. | [optional] 
**isPinned** | **Boolean** | *Conditional*. Whether the story should be pinned on the resource. | [optional] 
**stickerName** | **String** | The name of the sticker in this story. &#x60;null&#x60; if there is no sticker. | [optional] 



## Enum: StickerNameEnum


* `green_checkmark` (value: `"green_checkmark"`)

* `people_dancing` (value: `"people_dancing"`)

* `dancing_unicorn` (value: `"dancing_unicorn"`)

* `heart` (value: `"heart"`)

* `party_popper` (value: `"party_popper"`)

* `people_waving_flags` (value: `"people_waving_flags"`)

* `splashing_narwhal` (value: `"splashing_narwhal"`)

* `trophy` (value: `"trophy"`)

* `yeti_riding_unicorn` (value: `"yeti_riding_unicorn"`)

* `celebrating_people` (value: `"celebrating_people"`)

* `determined_climbers` (value: `"determined_climbers"`)

* `phoenix_spreading_love` (value: `"phoenix_spreading_love"`)




