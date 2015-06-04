define(function () {
    var rconfig = {
        baseUrl: '/sites/teams/_catalogs/masterpage/dbs-custom/',
        deps: [
                  'spruntime_js','sp_js'
              ],
        paths: {
            // SharePoint Runtime & Core
            // Register any SharePoint Library if it is required to be processed first
            'spruntime_js'  : window.location.origin + '/_layouts/15/sp.runtime',
            'sp_js'         : window.location.origin + '/_layouts/15/sp',
            
            //RequireJS plugins
            'domReady'      : 'Scripts/lib/require/domReady', // to make sure DOM is loaded
            'text'          : 'Scripts/lib/require/text',         // to use html templates
            
            // Frameworks
            'jquery-nc'     : 'Scripts/lib/jquery-nc',
            'jquery'        : 'Scripts/lib/jquery.min',
            'jquery-ui'     : 'Scripts/lib/jquery-ui.min',
            'twitter'       : 'Scripts/lib/twitter',
            
            // Test Frameworks
            'jasmine'       : 'Scripts/lib/jasmine/jasmine',
            'jasmine-html'  : 'Scripts/lib/jasmine/jasmine-html',
            'jasmine-boot'  : 'Scripts/lib/jasmine/boot',
            'mock-ajax'     : 'Scripts/lib/jasmine/mock-ajax',
            
            //Modules
            'boot'          : 'Modules/btn-selector/tests/start.spec',
            'btn-select'    : 'Modules/btn-selector/app/modules/btn-selector',
            'restUtils'     : 'Modules/rest-utils/app/RESTUtils',
            
                        
            // Test Modules
            'btn-select-spec' : 'Modules/btn-selector/tests/modules/btn-selector.spec',
            'testResponses' : 'Modules/btn-selector/tests/modules/helpers/test_responses'
        },
        map: {
            // give all modules jQuery no-conflict
            '*'             : { 'jquery': 'jquery-nc' },
            
            // prevent unresolved dependency on jquery for jquery-nc
            'jquery-nc'     : { 'jquery': 'jquery' }
        },
        shim: {
            'twitter'       : 'twitter',
            'jasmine-html'  : { deps: ['jasmine'] },
            'jasmine-boot'  : { deps: ['jasmine', 'jasmine-html'] },
            'testResponses' : 'testResponses'
        },
    };
    requirejs.config(rconfig);
    requirejs(['jasmine-boot'], function () {
        requirejs(['mock-ajax'], function() {
            requirejs(['boot'], function () {
                // trigger Jasmine
                window.executeTests();
            });
        });
    });
});