(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['charity'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h2 class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n<p class=\"decription\">"
    + alias4(((helper = (helper = helpers.decsription || (depth0 != null ? depth0.decsription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"decsription","hash":{},"data":data}) : helper)))
    + "</p>\n<hr/>\n";
},"useData":true});
templates['wish'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <input type=\"radio\" name=\"wish\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />  <strong>"
    + alias4(((helper = (helper = helpers.item_name || (depth0 != null ? depth0.item_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item_name","hash":{},"data":data}) : helper)))
    + "</strong> - "
    + alias4(((helper = (helper = helpers.item_url || (depth0 != null ? depth0.item_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item_url","hash":{},"data":data}) : helper)))
    + " - $"
    + alias4(((helper = (helper = helpers.estimated_price || (depth0 != null ? depth0.estimated_price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"estimated_price","hash":{},"data":data}) : helper)))
    + "\n";
},"useData":true});
templates['charityprofile'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-4 img-responsive pull-right\">\n      <img src=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.logo : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" alt=\"charity_logo\" class=\"img-rounded\">\n    </div>\n    <div class=\"col-md-8\">\n      <h1 class=\"charity_name\" contenteditable=\"true\"> "
    + alias1(((helper = (helper = helpers.charity_name || (depth0 != null ? depth0.charity_name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"charity_name","hash":{},"data":data}) : helper)))
    + " </h1>\n      <a class=\"url\" contenteditable=\"true\" href=\""
    + alias1(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">Charity Website</a>\n      <p class=\"description\" contenteditable=\"true\"> "
    + alias1(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"description","hash":{},"data":data}) : helper)))
    + " </p>\n      <p class=\"shipping_address\" contenteditable=\"true\"> "
    + alias1(((helper = (helper = helpers.shipping_address || (depth0 != null ? depth0.shipping_address : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"shipping_address","hash":{},"data":data}) : helper)))
    + " </p>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();