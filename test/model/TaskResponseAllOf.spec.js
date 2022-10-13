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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Asana);
  }
}(this, function(expect, Asana) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Asana.TaskResponseAllOf();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TaskResponseAllOf', function() {
    it('should create an instance of TaskResponseAllOf', function() {
      // uncomment below and update the code to test TaskResponseAllOf
      //var instance = new Asana.TaskResponseAllOf();
      //expect(instance).to.be.a(Asana.TaskResponseAllOf);
    });

    it('should have the property assignee (base name: "assignee")', function() {
      // uncomment below and update the code to test the property assignee
      //var instance = new Asana.TaskResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property assigneeSection (base name: "assignee_section")', function() {
      // uncomment below and update the code to test the property assigneeSection
      //var instance = new Asana.TaskResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "custom_fields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new Asana.TaskResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property followers (base name: "followers")', function() {
      // uncomment below and update the code to test the property followers
      //var instance = new Asana.TaskResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instance = new Asana.TaskResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property projects (base name: "projects")', function() {
      // uncomment below and update the code to test the property projects
      //var instance = new Asana.TaskResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new Asana.TaskResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property workspace (base name: "workspace")', function() {
      // uncomment below and update the code to test the property workspace
      //var instance = new Asana.TaskResponseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property permalinkUrl (base name: "permalink_url")', function() {
      // uncomment below and update the code to test the property permalinkUrl
      //var instance = new Asana.TaskResponseAllOf();
      //expect(instance).to.be();
    });

  });

}));
