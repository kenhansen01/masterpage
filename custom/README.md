# SharePoint Masterpage TDD Modular Branding

## Modular???

Yep. Modular. I create modules with full unit tests, then I use a RequireJS config file to load the modules I want into custom layouts. The custom layout will often have a prerequisite tag for the module to hook into.

The neat thing about this, is that I now have a way to write a module at the collection level and then as I build out my custom layouts I am able to do really minimal modifications to the HTML (and therefore the ASPX). I just plug it into the config file, add the call in the start file and it just works.

Did I mention the testing? So much SharePoint Development has zero coverage, and it makes me a little crazy, so here's a way to fix a portion of that.

## Things you should know:

The code shown in this repo has a number of requirements for you to use it. First is SharePoint 2103 (O365 should work too). You will also need Jasmine and RequireJS. I make heavy use of the REST endpoints (because I prefer them), but I'm not afraid to use the CSOM when that is a better choice.

## What is this good for?

This repository is a suggested structure for collection level branding of SharePoint 2013 using the Design Manager for sites that make use of the publishing feature. It includes a couple of modules, one that makes REST calls and one that uses the REST call module to create a tile selector...

The masterpage folder is located at `YOUR-SITE-COLLECTION-URL/_catalogs/masterpage`. I like to keep all of my branding files under a folder named 'custom'.