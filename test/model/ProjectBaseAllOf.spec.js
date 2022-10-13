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
    instance = new Asana.ProjectBaseAllOf();
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

  describe('ProjectBaseAllOf', function() {
    it('should create an instance of ProjectBaseAllOf', function() {
      // uncomment below and update the code to test ProjectBaseAllOf
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be.a(Asana.ProjectBaseAllOf);
    });

    it('should have the property archived (base name: "archived")', function() {
      // uncomment below and update the code to test the property archived
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property currentStatus (base name: "current_status")', function() {
      // uncomment below and update the code to test the property currentStatus
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property currentStatusUpdate (base name: "current_status_update")', function() {
      // uncomment below and update the code to test the property currentStatusUpdate
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property customFieldSettings (base name: "custom_field_settings")', function() {
      // uncomment below and update the code to test the property customFieldSettings
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property defaultView (base name: "default_view")', function() {
      // uncomment below and update the code to test the property defaultView
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "due_date")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property dueOn (base name: "due_on")', function() {
      // uncomment below and update the code to test the property dueOn
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property htmlNotes (base name: "html_notes")', function() {
      // uncomment below and update the code to test the property htmlNotes
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property isTemplate (base name: "is_template")', function() {
      // uncomment below and update the code to test the property isTemplate
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property members (base name: "members")', function() {
      // uncomment below and update the code to test the property members
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property modifiedAt (base name: "modified_at")', function() {
      // uncomment below and update the code to test the property modifiedAt
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property _public (base name: "public")', function() {
      // uncomment below and update the code to test the property _public
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property startOn (base name: "start_on")', function() {
      // uncomment below and update the code to test the property startOn
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

    it('should have the property workspace (base name: "workspace")', function() {
      // uncomment below and update the code to test the property workspace
      //var instance = new Asana.ProjectBaseAllOf();
      //expect(instance).to.be();
    });

  });

}));
