(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['charity'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row\">\n<h2 class=\"name\"><a href=\"/charity/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"profile-link\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></h2>\n<p class=\"description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n<img class=\"logo\" src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" />\n<br />\n";
},"useData":true});
templates['charityprofile'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "true";
},"3":function(container,depth0,helpers,partials,data) {
    return "false";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.profileEditable || (depth0 != null ? depth0.profileEditable : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profileEditable","hash":{},"data":data}) : helper)))
    + "\n"
    + alias4(((helper = (helper = helpers.profileEditableString || (depth0 != null ? depth0.profileEditableString : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profileEditableString","hash":{},"data":data}) : helper)))
    + "\n\n\n<div class=\"container\">\n\n  <div class=\"container\">\n    <h1 id=\"charity_name\" class=\"text-center\" contenteditable="
    + alias4(((helper = (helper = helpers.profileEditable || (depth0 != null ? depth0.profileEditable : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profileEditable","hash":{},"data":data}) : helper)))
    + "> "
    + alias4(((helper = (helper = helpers.charity_name || (depth0 != null ? depth0.charity_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"charity_name","hash":{},"data":data}) : helper)))
    + " </h1>\n    <p class=\"text-center\"><a id=\"url\" href=\""
    + alias4(((helper = (helper = helpers.charity_website || (depth0 != null ? depth0.charity_website : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"charity_website","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(((helper = (helper = helpers.charity_website || (depth0 != null ? depth0.charity_website : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"charity_website","hash":{},"data":data}) : helper)))
    + " </a></p>\n    <p id=\"description\" class=\"text-center\" contenteditable="
    + alias4(((helper = (helper = helpers.profileEditableString || (depth0 != null ? depth0.profileEditableString : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profileEditableString","hash":{},"data":data}) : helper)))
    + "> "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + " </p>\n    <p id=\"shipping_address\" class=\"text-center\" contenteditable=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.profileEditable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\"> "
    + alias4(((helper = (helper = helpers.shipping_address || (depth0 != null ? depth0.shipping_address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shipping_address","hash":{},"data":data}) : helper)))
    + " </p>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"img-responsive text-center\">\n        <img src=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.logo : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" alt=\"charity_logo\" class=\"img-rounded center-block\">\n      </div>\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});
templates['wish'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <input type=\"radio\" name=\"wish\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" /> <strong>"
    + alias4(((helper = (helper = helpers.item_name || (depth0 != null ? depth0.item_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item_name","hash":{},"data":data}) : helper)))
    + "</strong>\n    </div>\n\n    <div class=\"wishlist col-md-3\">\n      "
    + alias4(((helper = (helper = helpers.item_url || (depth0 != null ? depth0.item_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item_url","hash":{},"data":data}) : helper)))
    + "\n    </div>\n\n    <div class=\"wishlist col-md-3\">\n       $"
    + alias4(((helper = (helper = helpers.estimated_price || (depth0 != null ? depth0.estimated_price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"estimated_price","hash":{},"data":data}) : helper)))
    + "\n    </div>\n\n  </div>\n\n</div>\n";
},"useData":true});
})();