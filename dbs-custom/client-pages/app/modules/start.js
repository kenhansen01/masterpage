var startModule = function ( $, specRest ) {

    function RunTests() {
        specRest.runSpecs();
    };    
        
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', RunTests);
};

ExecuteOrDelayUntilBodyLoaded(function () {
    define(['jquery','specRESTUtils'], startModule);
});