# SharePoint Masterpage TDD Modular Branding

## Modular???

Yep. Modular. I create modules with full unit tests, then I use a RequireJS config file to load the modules I want into custom layouts. The custom layout will often have a prerequisite tag for the module to hook into.

This repository is a suggested structure for collection level branding of SharePoint 2013 using the Design Manager for sites that make use of the publishing feature. It includes a couple of modules, one that makes REST calls and one that uses the REST call module to create a tile selector...

The masterpage folder is located at `YOUR-SITE-COLLECTION-URL/_catalogs/masterpage`. I like to keep all of my branding files under a folder named 'custom'.