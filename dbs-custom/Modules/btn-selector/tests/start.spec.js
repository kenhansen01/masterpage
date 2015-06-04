var startModule = function ( $, btnSelectSpec ) {

    function init() {
        btnSelectSpec.runSpecs();
    };    
        
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', init);
};

ExecuteOrDelayUntilBodyLoaded(function () {
    define(['jquery','btn-select-spec','jquery-ui', 'twitter'], startModule);
});