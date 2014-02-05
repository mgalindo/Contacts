module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
//        'node_modules/chai/chai.js',
//        'node_modules/sinon/lib/sinon.js',
//        'node_modules/sinon/lib/sinon/assert.js',
//        'node_modules/sinon/lib/sinon/collection.js',
//        'node_modules/sinon/lib/sinon/match.js',
//        'node_modules/sinon/lib/sinon/spy.js',
//        'node_modules/sinon/lib/sinon/stub.js',
//        'node_modules/sinon-chai/lib/sinon-chai.js',
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js',
      'app/js/app.js'
    ],

    exclude : [
      'app/lib/angular/angular-loader.js',
      'app/lib/angular/*.min.js',
      'app/lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
