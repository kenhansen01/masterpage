// map jq as jquery to keep jQuery and $ out of global space
define(['jquery'], function ($) {
    return $.noConflict();
});