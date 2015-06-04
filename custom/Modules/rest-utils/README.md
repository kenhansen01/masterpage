# RESTUtils Module

## Requirements

* SharePoint 2013
* jQuery
* Jasmine Standalone (jasmine.js, jasmine-html.js, jasmine.css, mock-ajax.js - version 2.3.4)
* RequireJS 

## Testing

This RESTUtils Module can be plugged into any layout page that is set up to use RequireJS and Jasmine (for testing). To run the tests open `./tests/jasmine-runner/spec-runner.aspx`. You should see:

![Jasmine Test Results](/images/rest-jasmine-tests.png)
Format: ![Alt Text](url)

## Using

Since this is a utility module it needs to be added to your RequireJS config file. Be sure to define it when other modules call it.