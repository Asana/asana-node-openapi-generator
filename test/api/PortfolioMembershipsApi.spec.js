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
    instance = new Asana.PortfolioMembershipsApi();
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

  describe('PortfolioMembershipsApi', function() {
    describe('getPortfolioMembership', function() {
      it('should call getPortfolioMembership successfully', function(done) {
        //uncomment below and update the code to test getPortfolioMembership
        //instance.getPortfolioMembership(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortfolioMemberships', function() {
      it('should call getPortfolioMemberships successfully', function(done) {
        //uncomment below and update the code to test getPortfolioMemberships
        //instance.getPortfolioMemberships(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortfolioMembershipsForPortfolio', function() {
      it('should call getPortfolioMembershipsForPortfolio successfully', function(done) {
        //uncomment below and update the code to test getPortfolioMembershipsForPortfolio
        //instance.getPortfolioMembershipsForPortfolio(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
