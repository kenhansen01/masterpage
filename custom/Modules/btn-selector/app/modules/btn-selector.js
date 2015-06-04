'use strict';

var navTiles = function($, restUtils) {
    
    var navTilesItems = function() {
        // private edit panel maker
        // this will appear when the page is in edit mode
        // edit mode must have zones with id 'available-tiles' and 'selected-tiles'
        var _editPanel = function(items, parent) {
             // available items object is items.d.results selected is items.results or null
            if(items != null && typeof items.results === 'undefined') {
                var itemsResults    = items.d.results,
                    buttonClasses   = 'button-items col-sm-6',
                    inputClasses    = 'col-sm-12 ms-hidden';
            }
            else {
                if (items === null || items.results.length === 0)
                    parent.append('<div class="col-sm-12">Drag Items Here</div>');
                else {
                    var itemsResults  = items.results,
                        buttonClasses = 'button-items col-sm-12',
                        inputClasses  = 'col-sm-12';
                }
            }        
            
            if(items != null && typeof itemsResults != 'undefined') {
                for(var i = 0; i < itemsResults.length; i++) {
                    // create available items elements
                    var item         =    itemsResults[i],
                        itemName     =    item.Title,
                        itemColor    =    item.Background_x0020_Color,
                        itemEl       =    $("<div class='"+ buttonClasses +"'>"+ itemName+"</div>"),
                        itemUrlEdit  =    $("<input class='"+ inputClasses +"' type='text' name='edit-url' "
                                            +     "id='"+ itemName +"-url' "
                                            +    "placeholder='"+ item.Link_x0020_for_x0020_this_x0020_icon +"' "
                                            +     "value='"+ item.Link_x0020_for_x0020_this_x0020_icon +"' />");
                    // add url input as hidden element that appears when dragged
                    itemEl.append(itemUrlEdit);
                    itemEl.css({
                        'background-color': 'rgb('+itemColor+')',
                        'color': '#fff'
                    });
                    // add to DOM        
                    parent.append(itemEl);
                }
            }
        };
        
        // private display panel maker
        // this appears when not in edit mode
        // requires div with class 'nav-tiles-display'
        var _displayPanel = function(items, parent) {
            var selectedItems = items || {'results':[]},
                tileObjects = [];
            if(selectedItems.results.length === 0)
                parent.append('<h1>Edit This Page To Select Tiles</h1>');
            else {
                //var itemResults = items.results;
                for(var i = 0; i < items.results.length; i++) {
                    // create elements
                    var item            =    items.results[i],
                        itemName        =    item.Title,
                        itemColor       =    'rgb('+ item.Background_x0020_Color +')',
                        itemLink        =    item.Link_x0020_for_x0020_this_x0020_icon,
                        itemIcon        =    item.FieldValuesAsText.FileRef,
                        itemContainer   =    $('<a class="our-nav-tile col-md-4 col-xs-6" href="'
                                              + itemLink +'" />'),
                        itemNavBlock    =    $('<div class="our-nav-block" />'),
                        itemNavContent  =    $('<div class="our-nav-content" />'),
                        itemIcon        =    $('<div class="our-nav-icon">'
                                              +    '<img src="'+ itemIcon +'" alt="" />'
                                              +'</div>'),
                        itemTitle       =    $('<div class="our-nav-title"><h2>'+ itemName +'</h2></div>');
                        
                    //itemContainer.append(itemNavBlock);
                    itemNavContent.append([itemIcon, itemTitle]);
                    itemNavBlock.css('background-color', itemColor).append(itemNavContent); 
                    itemContainer.append(itemNavBlock);
                    tileObjects.push(itemContainer);                                                            
                }
                parent.append(tileObjects);
            }
        };
        
        // function to get all available icon items in JSON - parse to return object
        var _getAvailableItems = function(listTitle) {            
            var baseUrl = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('"+listTitle+"')/getitems",
                query   = "?$select=Title,Background_x0020_Color,Link_x0020_for_x0020_this_x0020_icon,"
                          + "FieldValuesAsText/FileRef&$expand=FieldValuesAsText",
                url     = baseUrl + query,
                body    = { 'query' : {'__metadata': { 'type': 'SP.CamlQuery' }, "ViewXml": "<View></View>" } },
                headers =    {
                                "accept": "application/json; odata=verbose",
                                "content-type": "application/json; odata=verbose"
                             },
                aItems  = restUtils.Post(url, headers, body);
            
            return aItems;
        };
        // function to get all selected icon items in JSON - parse to return object
        var _getSelectedItems = function(specPageId) {
            var pageId  = specPageId || _spPageContextInfo.pageItemId,
                url     = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Pages')/items("+ pageId + ")",
                headers = {
                            "accept": "application/json; odata=verbose",
                            "content-type": "application/json; odata=verbose"
                          },
                sItems  = restUtils.Get(url, headers);
            
            return sItems;
                
        };
        
        // private function to create selected items object by comparing string names 
        // using the Title in available.d.results and text node from selected tile in edit mode
        // sets url in new object based on the field in the edit screen
        var _parseSelectedItems = function(availableItemObject, selectedItems) {
            
            var sItemsObjOrdered = {'results':[]};
            
            for(var i = 0; i < selectedItems.length; i++) {
                var itemName  =    selectedItems[i].name,
                    itemUrl   =    selectedItems[i].url;
                
                for(var j = 0; j < availableItemObject.d.results.length; j++) {
                    var aItemName = availableItemObject.d.results[j].Title;
                    if (itemName === aItemName){
                        availableItemObject.d.results[j].Link_x0020_for_x0020_this_x0020_icon = itemUrl;
                        sItemsObjOrdered.results.push(availableItemObject.d.results[j]);
                    }
                }
            }        
            var sObjJSON = JSON.stringify(sItemsObjOrdered);
            return sObjJSON.toString();
        };    
        
        // function to set selected icon items in JSON object
        // this sets the value in the field on the edit screen and will update on page save.
        var _setSelectedItems = function(availableItems) {
            
            var selectedItems = [];
            
            $('#selected-tiles .button-items').each(function(){ 
                selectedItems.push({
                    name : $(this).text(),
                    url  : $(this).children('input')[0].value
                }); 
            });
            
            var aObj       = $.extend(true, {}, availableItems[0]),
                sItemsJSON = _parseSelectedItems(aObj, selectedItems);
            
            $('#icon-json textarea').text(sItemsJSON);
            
            return false;            
        };
    
        // function to compare selected and available and to select which area to place them in in edit
        // removes items in selected from display in available
        var _sortItems = function(available, selected) { 
            
            var selectedItems = selected || {'results':[]};
            
            if(selectedItems.results.length === 0)
                return available;
            else {
                for( var i = 0; i < selectedItems.results.length; i++ ) {
                    var sItem = selectedItems.results[i],
                        sTitle = sItem.Title;
                        
                    for( var j = available.d.results.length-1; j > -1; j-- ) {
                        var aItem = available.d.results[j],
                            aTitle = aItem.Title;
                            
                        if (sTitle === aTitle) {
                            available.d.results.splice(j, 1);
                            break;
                        }
                    }                
                }
                return available;
            }
        };
    
        // function to make Edit panels
        var _makeEditPanels = function(availableSorted, selected) {
            var editEl          = $('div.nav-tiles-edit'),        
                availableParent = $('#available-tiles'),
                selectedParent  = $('#selected-tiles');
            _editPanel(availableSorted, availableParent);
            _editPanel(selected, selectedParent);
            return false;
        };
        // function to make Display tiles
        var _makeDisplayTiles = function(selected) {
            var displayEl = $('div.nav-tiles-display');
            _displayPanel(selected, displayEl);
        };
        
        var publics = {
            getAvailableItems   : _getAvailableItems,
            getSelectedItems    : _getSelectedItems,
            setSelectedItems    : _setSelectedItems,
            sortItems           : _sortItems,
            makeEditPanels      : _makeEditPanels,
            makeDisplayTiles    : _makeDisplayTiles
        };
        return publics;
    };
    
    var sorting = function() {
        var _enableSorting = function(sortZones, sortSelector) {
            $(sortZones).sortable({
                connectWith: sortSelector,
                helper: 'clone',
                // toggle size of element from available to selected and visibility of url input
                receive: function( event, ui ) {
                    if (ui.sender.attr('id') === 'available-tiles'){
                        ui.item.removeClass('col-sm-6').addClass('col-sm-12');
                        ui.item.children('input').removeClass('ms-hidden');
                    }
                    else{
                        ui.item.removeClass('col-sm-12').addClass('col-sm-6');
                        ui.item.children('input').addClass('ms-hidden');
                    }    
                },
                update: function( event, ui ) {
                    
                }
            });
        };
        
        var publics = { enableSorting : _enableSorting };
        
        return publics;
    };
       
    // public init function
    var init = function() {
        var _listTitle         = 'Site Icon Nav Buttons',
            iconEditTextArea   = $('#icon-json textarea'),
            items              = navTilesItems(),
            sort               = sorting();
        
        if(iconEditTextArea.length > 0) {        
            
            var selectedItems  =     items.getSelectedItems(),
                availableItems =     items.getAvailableItems( _listTitle );
            
            $.when(selectedItems, availableItems).done(function(sdata, adata){
                
                var sItemsObj  = sdata[0].d,
                    selected   = JSON.parse(sItemsObj.Page_x0020_Icons_x0020_JSON),
                    aObj       = $.extend(true, {}, adata[0]),
                    sorted     = items.sortItems(aObj, selected);
                
                items.makeEditPanels(sorted, selected);
                sort.enableSorting('#available-tiles, #selected-tiles','.connected-sortable');
                $('#selection-submit').click(function(){
                    items.setSelectedItems(adata);
                });
            })
            .fail(function(e) { alert(e.message); });        
        }
        else {
            
            var selectedItems = items.getSelectedItems();        
            
            selectedItems
                .done(function(sdata) {
                    var sItemsObj = sdata.d,
                        selected  = JSON.parse(sItemsObj.Page_x0020_Icons_x0020_JSON);
                    items.makeDisplayTiles(selected);
                })
                .fail(function(e) { alert(e.message); });
        }
            
    };
    
    var publics = { 
        init : init,
        sorting : sorting,
        navTilesItems : navTilesItems 
    };
    return publics;
}

define(['jquery', 'restUtils'], navTiles);