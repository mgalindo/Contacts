'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('contactApp.services'));


  describe('contact service', function() {
    it('should have a service', inject(function(ContactService) {

      expect(ContactService).not.toBe(undefined);

    }));

      it('should have a Method get', inject(function(ContactService) {

          expect(ContactService.get).not.toBe(undefined);


      }));

  });
});
