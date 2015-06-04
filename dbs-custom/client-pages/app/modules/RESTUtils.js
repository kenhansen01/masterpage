"use strict";

var restUtils = function ($) {

    //#region private vars

    //var _callCount = 0;

    //#endregion private vars


    function _getPromise(url, headers) {
        
        return _doCall(url, headers, "", "GET")
    }

    function _deletePromise(url, headers, eTag) {
        return _postPromiseInternal(url, headers, "", "DELETE", eTag);
    }

    function _postPromise(url, headers, body) {
        return _postPromiseInternal(url, headers, body);
    }

    function _postPromiseInternal(url, passedheaders, body, action, eTag) {
        //local variable to store headers passed to actual AJAX call
        var localHeaders = {};

        //Serialize the body so it can be passed to the AJAX call and also so we can set the Content-Length header
        var bodyString = JSON.stringify(body);

        //Get each passed header into localHeaders
        for (var key in passedheaders) {
          if (passedheaders.hasOwnProperty(key)) {
            localHeaders[key] = passedheaders[key];
          }
        }

        //Request Digest header
        localHeaders["X-RequestDigest"] = $("#__REQUESTDIGEST").val();

        //Content Length header
        if (body) {
            localHeaders["Content-Length"] = bodyString.length;
        }
        else {
            localHeaders["Content-Length"] = 0;
        }

        //Verb-tunneling for other verbs which may be blocked by firewalls
        if (action && action.length > 0) {
            localHeaders["X-HTTP-Method"] = action;

            //If-Match header, used passed value or default to *
            if (eTag && eTag.length > 0) {
                localHeaders["IF-MATCH"] = eTag;
            }
            else {
                localHeaders["IF-MATCH"] = "*";
            }
        }

        
        //Make the call
        return _doCall(url, localHeaders, bodyString, "POST")
    }

    function _doCall(url, passedheaders, bodyString, verb) {
        //Make sure we have an ACCEPT header, set it if not
        if (!passedheaders || !passedheaders.Accept || passedheaders.Accept.length === 0) {
            passedheaders["Accept"] = "application/json;odata=verbose";
        }

        var dfd = $.ajax({
            url: encodeURI(url),   //Make sure to encode the URI
            type: verb,
            contentType: "application/json;odata=verbose",
            data: bodyString,
            headers: passedheaders
        });

        //Everything returns a Promise
        return dfd.promise();
    }

    //Utility function to return a fulfilled promise, used only for testing and prototyping
    function _returnResolvedPromise() {
        var dfd = $.Deferred();
        dfd.resolve();
        return dfd.promise();
    }



    var publics = {
        Get: _getPromise,
        Post: _postPromise,
        Delete : _deletePromise,
        ReturnResolvedPromise: _returnResolvedPromise,   
        //getCallCount: function () { return _callCount; }

    }

    return publics;

};

define(['jquery'], restUtils);