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
    instance = new Asana.Preview();
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

  describe('Preview', function() {
    it('should create an instance of Preview', function() {
      // uncomment below and update the code to test Preview
      //var instance = new Asana.Preview();
      //expect(instance).to.be.a(Asana.Preview);
    });

    it('should have the property fallback (base name: "fallback")', function() {
      // uncomment below and update the code to test the property fallback
      //var instance = new Asana.Preview();
      //expect(instance).to.be();
    });

    it('should have the property footer (base name: "footer")', function() {
      // uncomment below and update the code to test the property footer
      //var instance = new Asana.Preview();
      //expect(instance).to.be();
    });

    it('should have the property header (base name: "header")', function() {
      // uncomment below and update the code to test the property header
      //var instance = new Asana.Preview();
      //expect(instance).to.be();
    });

    it('should have the property headerLink (base name: "header_link")', function() {
      // uncomment below and update the code to test the property headerLink
      //var instance = new Asana.Preview();
      //expect(instance).to.be();
    });

    it('should have the property htmlText (base name: "html_text")', function() {
      // uncomment below and update the code to test the property htmlText
      //var instance = new Asana.Preview();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instance = new Asana.Preview();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Asana.Preview();
      //expect(instance).to.be();
    });

    it('should have the property titleLink (base name: "title_link")', function() {
      // uncomment below and update the code to test the property titleLink
      //var instance = new Asana.Preview();
      //expect(instance).to.be();
    });

  });

}));
