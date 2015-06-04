define(function () {
    var rconfig = {
        baseUrl: '/sites/YOURCOLLECTION/_catalogs/masterpage/custom/',
        deps: [
                  'spruntime_js','sp_js'
              ],
        paths: {
            // SharePoint Runtime & Core
            // Register any SharePoint Library if it is required to be processed first
            'spruntime_js'  : window.location.origin + '/_layouts/15/sp.runtime',
            'sp_js'         : window.location.origin + '/_layouts/15/sp',
            
            // RequireJS plugins
            'domReady'      : 'Scripts/lib/require/domReady', // to make sure DOM is loaded
            'text'          : 'Scripts/lib/require/text',     // to use html templates
            
            // Frameworks
            'jquery-nc'     : 'Scripts/lib/jquery-nc',
            'jquery'        : 'Scripts/lib/jquery.min',
            'jquery-ui'     : 'Scripts/lib/jquery-ui.min',
            
            // Standalone Scripts
            'twitter'       : 'Scripts/lib/twitter',
            'css'           : 'Scripts/lib/css-loader',
            
            // Modules
            'boot'          : 'Modules/btn-selector/app/start', // for production this will relative to the layout
            'btn-select'    : 'Modules/btn-selector/app/modules/btn-selector',
            'restUtils'     : 'Modules/rest-utils/app/RESTUtils',
        },
        map: {
            // give all modules jQuery no-conflict
            '*'             : { 'jquery': 'jquery-nc' },
            
            // prevent unresolved dependency on jquery for jquery-nc
            'jquery-nc'     : { 'jquery': 'jquery' }
        },
        shim: {
            'twitter'       : 'twitter',
            'css'           : 'css'
        },
    };
    requirejs.config(rconfig);
    requirejs(['sp_js','css'], function() {
        loadCss(rconfig.baseUrl + 'Modules/btn-selector/app/css/btn-selector.css');
        requirejs(['boot'], function () {});
    });
});