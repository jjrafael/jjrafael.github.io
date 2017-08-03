this["SummitHandle"] = this["SummitHandle"] || {};
this["SummitHandle"]["templates"] = this["SummitHandle"]["templates"] || {};
this["SummitHandle"]["templates"]["agenda"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.day : depth0),"===","1",{"name":"ifCond","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"day-wrapper day-one\">\n			<div class=\"day-inner\">\n				<div class=\"heading\">\n					"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\n				</div>\n				<ul class=\"schedule clearfix\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.agenda : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n			</div>\n			<div class=\"day-extra\">\n				<div class=\"day-emblem\">DAY <h1>2</h1></div>\n			</div>\n		</div>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "					<li class=\"clearfix\">\n						<div class=\"dot\" data-status=\""
    + alias2(alias1((depth0 != null ? depth0.status : depth0), depth0))
    + "\"></div>\n						<div class=\"time\">"
    + alias2(alias1((depth0 != null ? depth0.time : depth0), depth0))
    + "</div>\n						<div class=\"subject\">"
    + alias2(alias1((depth0 != null ? depth0.subject : depth0), depth0))
    + "</div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.speakers : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</li>\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "						<div class=\"photo\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.speakers : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "							<img src=\"assets/img/speakers/"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + ".jpg\">\n";
},"8":function(depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"day-wrapper day-two\">\n			<div class=\"day-extra\">\n				<div class=\"day-emblem\">DAY <h1>1</h1></div>\n			</div>\n			<div class=\"day-inner\">\n				<div class=\"heading\">\n					"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\n				</div>\n				<ul class=\"schedule clearfix\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.agenda : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n			</div>\n		</div>\n";
},"10":function(depth0,helpers,partials,data) {
    return "		<div class=\"empty-section\">\n	  		<h4>SOON</h4>\n	  	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page-inner\">\n	<div class=\"page-heading\">\n		<div class=\"heading-wraper\">\n			<h1 class=\"title\">Agenda</h1>\n			<img src=\"assets/img/object-1.png\" alt=\"Object\" class=\"object\">\n		</div>\n	</div>\n	<div class=\"agenda-wrapper\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.enableAgenda : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["faqs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"page-inner\">\n  <div class=\"page-heading\">\n    <div class=\"heading-wraper\">\n      <h1 class=\"title\">FAQs</h1>\n      <img src=\"assets/img/object-1.png\" alt=\"Object\" class=\"object\">\n    </div>\n  </div>\n  <div class=\"faqs-wrapper\">\n  	<div class=\"empty-section\">\n  		<h4>SOON</h4>\n  	</div>\n  </div>\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["hero"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"page-inner\">\n	<div class=\"prlx-wrapper\">\n		<div class=\"prlx-item prlx-1\"></div>\n		<div class=\"prlx-item prlx-2\"></div>\n		<div class=\"prlx-item prlx-3\"></div>\n		<div class=\"prlx-item prlx-4\"></div>\n		<div class=\"prlx-item prlx-5\"></div>\n		<div class=\"prlx-item prlx-6\"></div>\n		<div class=\"prlx-item prlx-7\"></div>\n		<div class=\"prlx-item prlx-8\"></div>\n	</div>\n	<div class=\"hero-banner\"></div>\n	<div class=\"event-details\">\n		<h2 class=\"date\">October 28-29 2017</h2>\n		<h2 class=\"venue\">Philippine Trade Training Center</h2>\n		<a href=\"#\" data-href=\"ticket\" class=\"button buy-ticket\">Get your tickets now!</a>\n	</div>\n</div>\n";
},"useData":true});
this["SummitHandle"]["templates"]["modal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "			<div class=\"speaker-modal\">\n				<div class=\"speaker-img\">\n					<div class=\"background\">\n						<div class=\"figure\" style=\"display: block; background-image: url(assets/img/speakers/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.image : stack1), depth0))
    + ");\"></div>\n					</div>\n					<div class=\"overlay\"></div>\n				</div>\n				<div class=\"speaker-infos\">\n					<h4>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h4>\n					<div class=\"more-details\">\n						<div class=\"link-wrap\">\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.website : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.facebook : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.twitter : stack1),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.github : stack1),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.linkedin : stack1),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.others : stack1),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\n						<div class=\"about-wrap\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.about : stack1),{"name":"each","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\n					</div>\n				</div>\n			</div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.website : stack1), depth0))
    + "\" target=\"_blank\">\n									<div class=\"link-box\">\n										<i class=\"mdi mdi-earth\"></i>\n									</div>\n								</a>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.facebook : stack1), depth0))
    + "\" target=\"_blank\">\n									<div class=\"link-box\">\n										<i class=\"mdi mdi-facebook-box\"></i>\n									</div>\n								</a>\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.twitter : stack1), depth0))
    + "\" target=\"_blank\">\n									<div class=\"link-box\">\n										<i class=\"mdi mdi-twitter\"></i>\n									</div>\n								</a>\n";
},"8":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.github : stack1), depth0))
    + "\" target=\"_blank\">\n									<div class=\"link-box\">\n										<i class=\"mdi mdi-github\"></i>\n									</div>\n								</a>\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.linkedin : stack1), depth0))
    + "\" target=\"_blank\">\n									<div class=\"link-box\">\n										<i class=\"mdi mdi-linkedin-box\"></i>\n									</div>\n								</a>\n";
},"12":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.others : stack1), depth0))
    + "\" target=\"_blank\">\n									<div class=\"link-box\">\n										<i class=\"mdi mdi-link-variant\"></i>\n									</div>\n								</a>\n";
},"14":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<p>"
    + ((stack1 = this.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"modal\">\n	<div class=\"modal-wrapper\">\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.module : depth0),"===","speaker",{"name":"ifCond","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"btn-close\">\n			<i class=\"mdi mdi-close\"></i>\n		</div>\n	</div>\n</div>\n";
},"useData":true});
this["SummitHandle"]["templates"]["nav"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <div class=\"nav-item\" data-menu=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\" data-href=\""
    + alias2(alias1((depth0 != null ? depth0.href : depth0), depth0))
    + "\">\n                <h6 class=\"nav-item-text\">"
    + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
    + "</h6>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"nav-inner\">\n    <div class=\"brand-wrapper\">\n\n    </div>\n    <div class=\"nav-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"nav-item\" data-menu=\"tickets\" data-href=\"tickets\">\n        <h6 class=\"nav-item-text\">Get your tickets!</h6>\n    </div>\n\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["speakers"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "		<div class=\"speaker-item speaker-"
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\" data-id=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\">\n			<div class=\"content\">\n				<div class=\"background\">\n					<div class=\"figure\" style=\"display: block; background-image: url(assets/img/speakers/"
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + ");\"></div>\n				</div>\n				<div class=\"overlay\"></div>\n				<div class=\"text\">\n					<h3 class=\"name\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h3>\n					<h4 class=\"title\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\n					<h4 class=\"company\">"
    + alias2(alias1((depth0 != null ? depth0.company : depth0), depth0))
    + "</h4>\n				</div>\n			</div>\n			<div class=\"btn btn-speaker\">\n				<i class=\"mdi mdi-plus\"></i>\n			</div>\n		</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page-inner\">\n	<div class=\"page-heading\">\n		<div class=\"heading-wraper\">\n			<h1 class=\"title\">Speakers</h1>\n			<img src=\"assets/img/object-1.png\" alt=\"Object\" class=\"object\">\n		</div>\n	</div>\n\n	<div class=\"speakers-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"speaker-item speaker-last\">\n			<div class=\"actions\">\n				<h3 class=\"message\">Be part</h3>\n				<span class=\"clearfix\" data-href=\"http://bit.ly/DevConSummit2017CallForSpeakers\" target=\"_blank\">Yes! I want to be part of next Developers Connect Summit Speakers panel</span>\n			</div>\n		</div>\n	</div>\n\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["sponsors"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"page-inner\">\n  <div class=\"page-heading\">\n    <div class=\"heading-wraper\">\n      <h1 class=\"title\">Sponsors</h1>\n      <img src=\"assets/img/object-1.png\" alt=\"Object\" class=\"object\">\n    </div>\n  </div>\n  <div class=\"sponsors-wrapper\">\n  	<div class=\"empty-section\">\n  		<h4>SOON</h4>\n  	</div>\n  </div>\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["tickets"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "  		<div class=\"standard-tix\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.standard : stack1),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  		</div>\n  		<div class=\"promo-tix\">\n  			<div class=\"tix-head\"></div>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.promo : stack1),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  		</div>\n  		<div class=\"eventbrite-wrapper\">\n  			"
    + ((stack1 = this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.embed : stack1), depth0)) != null ? stack1 : "")
    + "\n  		</div>\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "  				<div class=\"tix-wrap\">\n  					<div class=\"tix-img\" style=\"background-image: url(assets/img/tickets/"
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + ".jpg)\">\n  						<h4>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h4>\n  					</div>\n  					<div class=\"tix-details\">\n  						<div class=\"price\">PHP "
    + alias2(alias1((depth0 != null ? depth0.price : depth0), depth0))
    + "</div>\n  					</div>\n  				</div>\n";
},"4":function(depth0,helpers,partials,data) {
    return "  		<h4>Eventbrite is disabled</h4>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page-inner\">\n  <div class=\"page-heading\">\n    <div class=\"heading-wraper\">\n      <h1 class=\"title\">Tickets</h1>\n      <img src=\"assets/img/object-1.png\" alt=\"Object\" class=\"object\">\n    </div>\n  </div>\n  <div class=\"tickets-wrapper\">\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.enableEventbrite : depth0),"===",true,{"name":"ifCond","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["venue"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"page-inner\">\n  <div class=\"page-heading\">\n    <div class=\"heading-wraper\">\n      <h1 class=\"title\">Venue</h1>\n      <img src=\"assets/img/object-1.png\" alt=\"Object\" class=\"object\">\n    </div>\n  </div>\n\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["whyattend"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "		<div class=\"reason-item\" data-target=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</div>\n";
},"3":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "			<div class=\"whyattend-inner\" data-reason=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\">\n				<div class=\"bigtext\" data-key=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</div>\n				<p>"
    + alias2(alias1((depth0 != null ? depth0.paragraph : depth0), depth0))
    + "</p>\n			</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page-inner\">\n	<div class=\"about-event\">\n		<h1 class=\"title\">DEVCON SUMMIT 2017</h1>\n		<h3 class=\"subtitle\">A Call for Innovation</h3>\n		<p class=\"description\">Now on its 7th year, let us put our heads together for the upcoming Biggest Developer Conference in the Philippines and be in the loop of the latest trends and tricks of the trade of today's technology!</p>\n	</div>\n	<div class=\"reason-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"whyattend-wrapper\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true});