var specRESTUtils = function (restUtils) {
    
    var _runSpecs = function() {
        
        describe("RESTUtils", function() {
        
            var url     =    _spPageContextInfo.webAbsoluteUrl + '/_api/web',
                headers     =   { 
                                    'accept': 'application/json;odata=verbose',
                                    'content-type': 'application/json;odata=verbose'
                                },
                body        =   { 'query' : {'__metadata': { 'type': 'SP.CamlQuery' }, "ViewXml": "<View></View>" } },
                //restUtils   =   new restUtilities(),
                request;
            
            beforeEach(function() {
                jasmine.Ajax.install();
            });
            
            afterEach(function() {
                jasmine.Ajax.uninstall();
            });
        
            
            describe("getPromise", function() {
                it("Makes an ajax GET request to passed url", function() {
                    var getTest = jasmine.createSpy("success");
                    
                    restUtils.Get(url, headers);
                    
                    request = jasmine.Ajax.requests.mostRecent();
                    
                    expect(request.url).toBe(url);
                    expect(request.method).toBe('GET');
                    expect(getTest).not.toHaveBeenCalled();
                });
            });
            
            describe("deletePromise", function() {
                it("Makes an ajax POST call with the DELETE verb", function() {
                    var delTest = jasmine.createSpy("success");
                    
                    restUtils.Delete(url, headers, "*");
                    
                    request = jasmine.Ajax.requests.mostRecent();
                    
                    expect(request.url).toBe(url);
                    expect(request.method).toBe('POST');
                    expect(request.requestHeaders["X-HTTP-Method"]).toBe("DELETE");
                    expect(request.requestHeaders["IF-MATCH"]).toBe("*");
                    expect(delTest).not.toHaveBeenCalled();                        
                });
            });
            
            describe("postPromise", function() {
                it("Makes an ajax POST call with body text", function() {
                    var postTest = jasmine.createSpy("success");
                    
                    restUtils.Post(url, headers, body);
                    
                    request = jasmine.Ajax.requests.mostRecent();
                    
                    expect(request.url).toBe(url);
                    expect(request.method).toBe('POST');
                    expect(request.params).toBe(JSON.stringify(body));
                });
            });
        });
    };
    return { runSpecs : _runSpecs }
};

define(['restUtils'], specRESTUtils);

/************************************************************************************
(function() {
    ExecuteOrDelayUntilBodyLoaded(function () {
        SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
        
            describe("RESTUtils", function() {
        
                var url     =    _spPageContextInfo.webAbsoluteUrl + '/_api/web',
                    headers     =   { 
                                        'accept': 'application/json;odata=verbose',
                                        'content-type': 'application/json;odata=verbose'
                                    },
                    body        =   { 'query' : {'__metadata': { 'type': 'SP.CamlQuery' }, "ViewXml": "<View></View>" } },
                    restUtils   =   new dbs.restUtils(),
                    request;
                
                beforeEach(function() {
                    jasmine.Ajax.install();
                });
                
                afterEach(function() {
                    jasmine.Ajax.uninstall();
                });
            
                
                describe("getPromise", function() {
                    it("Makes an ajax GET request to passed url", function() {
                        var getTest = jasmine.createSpy("success");
                        
                        restUtils.Get(url, headers);
                        
                        request = jasmine.Ajax.requests.mostRecent();
                        
                        expect(request.url).toBe(url);
                        expect(request.method).toBe('GET');
                        expect(getTest).not.toHaveBeenCalled();
                    });
                });
                
                describe("deletePromise", function() {
                    it("Makes an ajax POST call with the DELETE verb", function() {
                        var delTest = jasmine.createSpy("success");
                        
                        restUtils.Delete(url, headers, "*");
                        
                        request = jasmine.Ajax.requests.mostRecent();
                        
                        expect(request.url).toBe(url);
                        expect(request.method).toBe('POST');
                        expect(request.requestHeaders["X-HTTP-Method"]).toBe("DELETE");
                        expect(request.requestHeaders["IF-MATCH"]).toBe("*");
                        expect(delTest).not.toHaveBeenCalled();                        
                    });
                });
                
                describe("postPromise", function() {
                    it("Makes an ajax POST call with body text", function() {
                        var postTest = jasmine.createSpy("success");
                        
                        restUtils.Post(url, headers, body);
                        
                        request = jasmine.Ajax.requests.mostRecent();
                        
                        expect(request.url).toBe(url);
                        expect(request.method).toBe('POST');
                        expect(request.params).toBe(JSON.stringify(body));
                    });
                });
            });
            
        });
    });
})();
*************************************************************************/