(function() {
    ExecuteOrDelayUntilBodyLoaded(function () {
        SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
        
            describe("orgChart", function() {
                
                var baseUrl     =    _spPageContextInfo.siteAbsoluteUrl + '/_api/web',
                    listUrl     =   baseUrl + "/lists/getbytitle('OrgChart')/items",
                    headers     =   { 
                                        'accept': 'application/json;odata=verbose',
                                        'content-type': 'application/json;odata=verbose'
                                    },
                    body        =   { 'query' : {'__metadata': { 'type': 'SP.CamlQuery' }, "ViewXml": "<View></View>" } },
                    orgChart    =   new dbs.orgChart(),
                    request;
                
                beforeEach(function() {
                    jasmine.Ajax.install();
                });
                
                afterEach(function() {
                    jasmine.Ajax.uninstall();
                });
                
                it("should get the items from a list named OrgChart at the site collection", function() {
                    var getListItems = jasmine.createSpy('success');
                    
                    orgChart.getItems();
                    
                    request = jasmine.Ajax.requests.mostRecent();
                    
                    expect(request.url).toBe(listUrl);
                });
            });        
        
        });
    });
})();