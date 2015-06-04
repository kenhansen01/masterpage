var btnSelectSpec = function ($, btnSelect, specResponse) {
    
    var _runSpecs = function() {
        
        describe("navTiles", function() {
        
            var request, pageResponse, pResObj, selected, availableResponse, aResObj, allAvailable, aFiltered;
            
            beforeEach(function() {
                jasmine.Ajax.install();
            });
            
            afterEach(function() {
                jasmine.Ajax.uninstall();
            });
        
            
            describe("getDisplayElements", function() {
                
                it("should get this page from pages library", function() {
                    
                    btnSelect.navTilesItems().getSelectedItems();
                    
                    request = jasmine.Ajax.requests.mostRecent();
                    request.respondWith(TestResponses.selectedItems.success);
                    pageResponse = request.responseText;
                    
                    expect(pageResponse).toBe(TestResponses.selectedItems.success.responseText);
                });    
                                
                describe('makeDisplayTiles', function() {
                    
                    beforeEach(function() {
                        var el = '<div class="nav-tiles-display"></div>';
                        $('#jasmine-specs').append(el);                       
                    });
                    afterEach(function() {
                        $('.nav-tiles-display').remove();
                    });
                    
                    it('should add message to switch to edit mode if page property - "DBS Page Icons JSON Object" is empty', function() {
                        var empty;
                        btnSelect.navTilesItems().makeDisplayTiles(empty);
                        expect($('.nav-tiles-display').children().length).toEqual(1);
                    });
                    
                    it('should add selected tiles described in page property - "DBS Page Icons JSON Object" to the page', function() {
                        pResObj   = JSON.parse(pageResponse);
                        selected  = JSON.parse(pResObj.d.DBS_x0020_Page_x0020_Icons_x0020_JSON_x0020_Object);
                        btnSelect.navTilesItems().makeDisplayTiles(selected);
                        expect($('.nav-tiles-display').children().length).toEqual(selected.results.length);
                    });
                });                
            });
            
            describe('getEditElements', function() {
                beforeEach(function() {
                    var el = '<div class="nav-tiles-edit">'
                            +  '<div id="available-tiles"></div>'
                            +  '<div id="selected-tiles"></div>'
                            +  '<div id="dbs-icon-json"><textarea></textarea></div>'
                            +'</div>';
                    $('#jasmine-specs').append(el);                       
                });
                afterEach(function() {
                    $('.nav-tiles-edit').remove();
                });
                
                it('should get all available tiles from tiles list', function() {
                    
                    var listTitle = 'Site Icon Nav Buttons';
                    
                    btnSelect.navTilesItems().getAvailableItems(listTitle);
                    
                    request = jasmine.Ajax.requests.mostRecent();
                    request.respondWith(TestResponses.availableItemsEdit.success);
                    availableResponse = request.responseText;
                    
                    expect(availableResponse).toBe(TestResponses.availableItemsEdit.success.responseText);

                });
                
                describe('makeEditTiles', function() {
                            
                    it('should compare the selected tiles to the available tiles and return an object containing available tiles minus the selected tiles', function() {
                        aResObj = JSON.parse(availableResponse);
                        allAvailable = $.extend(true, {}, aResObj[0]);
                        aFiltered = btnSelect.navTilesItems().sortItems(allAvailable, selected);
                        
                        expect(aFiltered.d.results.length).toEqual(aResObj[0].d.results.length - selected.results.length);
                        //checks that each item was available and has been removed in the filtered object
                        for(var i = 0, len = selected.results.length; i < len; i++) {
                            var result = selected.results[i];
                            expect(aFiltered.d.results).not.toContain(result);
                            expect(aResObj[0].d.results).toContain(result);
                        };
                    });
                    
                    it('should append selected items to the selected zone and the remaining available to the available zone', function() {
                        btnSelect.navTilesItems().makeEditPanels(aFiltered, selected);
                        expect($('#selected-tiles').children().length).toEqual(selected.results.length);
                        expect($('#available-tiles').children().length).toEqual(aFiltered.d.results.length);
                    });
                    
                    //it('should create 
                    
                });                
            });
        });
    };
    return { runSpecs : _runSpecs }
};

define(['jquery','btn-select', 'testResponses'], btnSelectSpec);