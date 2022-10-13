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
    instance = new Asana.GoalBaseAllOf();
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

  describe('GoalBaseAllOf', function() {
    it('should create an instance of GoalBaseAllOf', function() {
      // uncomment below and update the code to test GoalBaseAllOf
      //var instance = new Asana.GoalBaseAllOf();
      //expect(instance).to.be.a(Asana.GoalBaseAllOf);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Asana.GoalBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property htmlNotes (base name: "html_notes")', function() {
      // uncomment below and update the code to test the property htmlNotes
      //var instance = new Asana.GoalBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new Asana.GoalBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property dueOn (base name: "due_on")', function() {
      // uncomment below and update the code to test the property dueOn
      //var instance = new Asana.GoalBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property startOn (base name: "start_on")', function() {
      // uncomment below and update the code to test the property startOn
      //var instance = new Asana.GoalBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Asana.GoalBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property isWorkspaceLevel (base name: "is_workspace_level")', function() {
      // uncomment below and update the code to test the property isWorkspaceLevel
      //var instance = new Asana.GoalBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property liked (base name: "liked")', function() {
      // uncomment below and update the code to test the property liked
      //var instance = new Asana.GoalBaseAllOf();
      //expect(instance).to.be();
    });

  });

}));