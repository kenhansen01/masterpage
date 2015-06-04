var startModule = function ( $, btnSelect ) {

    function init() {
        btnSelect.init();
    };    
        
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', init);
};

ExecuteOrDelayUntilBodyLoaded(function () {
    define(['jquery','btn-select','jquery-ui', 'twitter'], startModule);
});