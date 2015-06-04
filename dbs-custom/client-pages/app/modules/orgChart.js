"use strict";

var orgChart = function ($, restUtils) {
    
    var url     =    _spPageContextInfo.webAbsoluteUrl + '/_api/web',
        headers =   { 
                        'accept': 'application/json;odata=verbose',
                        'content-type': 'application/json;odata=verbose'
                    },
        body    =   { 'query' : {'__metadata': { 'type': 'SP.CamlQuery' }, "ViewXml": "<View></View>" } },
        request;
    
    function getListItems () {
        restUtils.Get(url, headers)
            .done(data){};
    }
};
define(['jquery', 'restUtils'], orgChart);