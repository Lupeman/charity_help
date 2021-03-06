(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['wish'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row\">\n\n  <div class=\"col-xs-1\">\n  </div>\n\n  <div class=\"col-xs-1\">\n    <input type=\"checkbox\" class=\"wish-selector\" name=\"wish\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />\n  </div>\n\n  <div class=\"col-xs-8\">\n    <strong>"
    + alias4(((helper = (helper = helpers.item_name || (depth0 != null ? depth0.item_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item_name","hash":{},"data":data}) : helper)))
    + "</strong>\n    <br/ >"
    + alias4(((helper = (helper = helpers.item_url || (depth0 != null ? depth0.item_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item_url","hash":{},"data":data}) : helper)))
    + "\n  </div>\n\n  <div class=\"wishlist col-xs-2\">\n     $"
    + alias4(((helper = (helper = helpers.estimated_price || (depth0 != null ? depth0.estimated_price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"estimated_price","hash":{},"data":data}) : helper)))
    + "\n  </div>\n\n</div>\n";
},"useData":true});
templates['charity'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row\">\n  <div class=\"col-md-3 search_name\">\n    <h2 class=\"name_search\"><a href=\"/charities/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"profile-link\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></h2>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-3 search_logo\">\n    <img class=\"logo_search\" src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" />\n  </div>\n  <div class=\"col-md-9 search_descripton\">\n    <p class=\"description_search\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "<a href=\"/charities/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"more\"> learn more....</a></p>\n  </div>\n</div>\n<hr>\n</br>\n";
},"useData":true});
templates['charityprofile'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "<div class=\"row\">\n\n  <div class=\"col-xs-3\">\n    <div class=\"img-responsive text-center logo-container\">\n        <img src=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.logo : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" alt=\"charity_logo\" class=\"img-rounded center-block charity-logo\">\n    </div>\n  </div>\n\n  <div class=\"col-xs-6\">\n    <h1 id=\"charity_name\" class=\"text-center\" contenteditable=\""
    + alias1(((helper = (helper = helpers.isProfileEditable || (depth0 != null ? depth0.isProfileEditable : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"isProfileEditable","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias1(((helper = (helper = helpers.charity_name || (depth0 != null ? depth0.charity_name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"charity_name","hash":{},"data":data}) : helper)))
    + " </h1>\n    <p class=\"text-center\"><a id=\"url\" href=\""
    + alias1(((helper = (helper = helpers.charity_website || (depth0 != null ? depth0.charity_website : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"charity_website","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias1(((helper = (helper = helpers.charity_website || (depth0 != null ? depth0.charity_website : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"charity_website","hash":{},"data":data}) : helper)))
    + " </a></p>\n    <p id=\"description\" class=\"text-center\" contenteditable= "
    + alias1(((helper = (helper = helpers.isProfileEditable || (depth0 != null ? depth0.isProfileEditable : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"isProfileEditable","hash":{},"data":data}) : helper)))
    + "> "
    + alias1(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"description","hash":{},"data":data}) : helper)))
    + " </p>\n    <p id=\"shipping_address\" class=\"text-center\" contenteditable=\""
    + alias1(((helper = (helper = helpers.isProfileEditable || (depth0 != null ? depth0.isProfileEditable : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"isProfileEditable","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias1(((helper = (helper = helpers.shipping_address || (depth0 != null ? depth0.shipping_address : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"shipping_address","hash":{},"data":data}) : helper)))
    + " </p>\n  </div>\n\n</div>\n";
},"useData":true});
})();