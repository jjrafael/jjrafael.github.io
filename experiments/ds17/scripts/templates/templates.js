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

  return "		<div class=\"day-wrapper day-one\">\r\n			<div class=\"day-inner\">\r\n				<div class=\"heading\">\r\n					"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\r\n				</div>\r\n				<ul class=\"schedule clearfix\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.agenda : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\r\n			</div>\r\n			<div class=\"day-extra\">\r\n				<div class=\"day-emblem\">DAY <h1>2</h1></div>\r\n			</div>\r\n		</div>\r\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "					<li class=\"clearfix\">\r\n						<div class=\"dot\" data-status=\""
    + alias2(alias1((depth0 != null ? depth0.status : depth0), depth0))
    + "\"></div>\r\n						<div class=\"time\">"
    + alias2(alias1((depth0 != null ? depth0.time : depth0), depth0))
    + "</div>\r\n						<div class=\"subject\">"
    + alias2(alias1((depth0 != null ? depth0.subject : depth0), depth0))
    + "</div>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.speakers : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</li>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "						<div class=\"photo\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.speakers : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\r\n";
},"6":function(depth0,helpers,partials,data) {
    return "							<img src=\"assets/img/speakers/"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + ".jpg\">\r\n";
},"8":function(depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"day-wrapper day-two\">\r\n			<div class=\"day-extra\">\r\n				<div class=\"day-emblem\">DAY <h1>1</h1></div>\r\n			</div>\r\n			<div class=\"day-inner\">\r\n				<div class=\"heading\">\r\n					"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\r\n				</div>\r\n				<ul class=\"schedule clearfix\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.agenda : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\r\n			</div>\r\n		</div>\r\n";
},"10":function(depth0,helpers,partials,data) {
    return "		<div class=\"empty-section\">\r\n	  		<h4>SOON</h4>\r\n	  	</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page-inner\">\r\n	<div class=\"page-heading\">\r\n		<div class=\"heading-wraper\">\r\n			<h1 class=\"title\">Agenda</h1>\r\n			<img src=\"assets/img/object-1.png\" alt=\"Object\" class=\"object\">\r\n		</div>\r\n	</div>\r\n	<div class=\"agenda-wrapper\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.enableAgenda : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "	</div>\r\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["faqs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"page-inner\">\r\n  <div class=\"page-heading\">\r\n    <div class=\"heading-wraper\">\r\n      <h1 class=\"title\">FAQs</h1>\r\n      <img src=\"assets/img/object-1.png\" alt=\"Object\" class=\"object\">\r\n    </div>\r\n  </div>\r\n  <div class=\"faqs-wrapper\">\r\n  	<div class=\"empty-section\">\r\n  		<h4>SOON</h4>\r\n  	</div>\r\n  </div>\r\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["hero"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"page-inner\">\r\n	<div class=\"prlx-wrapper\">\r\n		<div class=\"prlx-item prlx-1\"></div>\r\n		<div class=\"prlx-item prlx-2\"></div>\r\n		<div class=\"prlx-item prlx-3\"></div>\r\n		<div class=\"prlx-item prlx-4\"></div>\r\n		<div class=\"prlx-item prlx-5\"></div>\r\n		<div class=\"prlx-item prlx-6\"></div>\r\n		<div class=\"prlx-item prlx-7\"></div>\r\n		<div class=\"prlx-item prlx-8\"></div>\r\n	</div>\r\n	<div class=\"hero-banner\"></div>\r\n	<div class=\"event-details\">\r\n		<h2 class=\"date\">October 28-29 2017</h2>\r\n		<h2 class=\"venue\">Philippine Trade Training Center</h2>\r\n		<a href=\"#\" data-href=\"ticket\" class=\"button buy-ticket\">Get your tickets now!</a>\r\n	</div>\r\n</div>\r\n";
},"useData":true});
this["SummitHandle"]["templates"]["modal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "			<div class=\"speaker-modal\">\r\n				<div class=\"speaker-img\">\r\n					<div class=\"background\">\r\n						<div class=\"figure\" style=\"display: block; background-image: url(assets/img/speakers/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.image : stack1), depth0))
    + ");\"></div>\r\n					</div>\r\n					<div class=\"overlay\"></div>\r\n				</div>\r\n				<div class=\"speaker-infos\">\r\n					<h4>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h4>\r\n					<div class=\"more-details\">\r\n						<div class=\"link-wrap\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.website : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.facebook : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.twitter : stack1),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.github : stack1),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.linkedin : stack1),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.others : stack1),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\r\n						<div class=\"about-wrap\">\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.about : stack1),{"name":"each","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.website : stack1), depth0))
    + "\" target=\"_blank\">\r\n									<div class=\"link-box\">\r\n										<i class=\"mdi mdi-earth\"></i>\r\n									</div>\r\n								</a>\r\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.facebook : stack1), depth0))
    + "\" target=\"_blank\">\r\n									<div class=\"link-box\">\r\n										<i class=\"mdi mdi-facebook-box\"></i>\r\n									</div>\r\n								</a>\r\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.twitter : stack1), depth0))
    + "\" target=\"_blank\">\r\n									<div class=\"link-box\">\r\n										<i class=\"mdi mdi-twitter\"></i>\r\n									</div>\r\n								</a>\r\n";
},"8":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.github : stack1), depth0))
    + "\" target=\"_blank\">\r\n									<div class=\"link-box\">\r\n										<i class=\"mdi mdi-github\"></i>\r\n									</div>\r\n								</a>\r\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.linkedin : stack1), depth0))
    + "\" target=\"_blank\">\r\n									<div class=\"link-box\">\r\n										<i class=\"mdi mdi-linkedin-box\"></i>\r\n									</div>\r\n								</a>\r\n";
},"12":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.others : stack1), depth0))
    + "\" target=\"_blank\">\r\n									<div class=\"link-box\">\r\n										<i class=\"mdi mdi-link-variant\"></i>\r\n									</div>\r\n								</a>\r\n";
},"14":function(depth0,helpers,partials,data) {
    var stack1;

  return "								<p>"
    + ((stack1 = this.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</p>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"modal\">\r\n	<div class=\"modal-wrapper\">\r\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.module : depth0),"===","speaker",{"name":"ifCond","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"btn-close\">\r\n			<i class=\"mdi mdi-close\"></i>\r\n		</div>\r\n	</div>\r\n</div>\r\n";
},"useData":true});
this["SummitHandle"]["templates"]["nav"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <div class=\"nav-item\" data-menu=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\" data-href=\""
    + alias2(alias1((depth0 != null ? depth0.href : depth0), depth0))
    + "\">\r\n                <h6 class=\"nav-item-text\">"
    + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
    + "</h6>\r\n            </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"nav-inner\">\r\n    <div class=\"brand-wrapper\">\r\n\r\n    </div>\r\n    <div class=\"nav-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"nav-item\" data-menu=\"tickets\" data-href=\"tickets\">\r\n        <h6 class=\"nav-item-text\">Get your tickets!</h6>\r\n    </div>\r\n\r\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["speakers"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "		<div class=\"speaker-item speaker-"
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\" data-id=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\">\r\n			<div class=\"content\">\r\n				<div class=\"background\">\r\n					<div class=\"figure\" style=\"display: block; background-image: url(assets/img/speakers/"
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + ");\"></div>\r\n				</div>\r\n				<div class=\"overlay\"></div>\r\n				<div class=\"text\">\r\n					<h3 class=\"name\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h3>\r\n					<h4 class=\"title\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\r\n					<h4 class=\"company\">"
    + alias2(alias1((depth0 != null ? depth0.company : depth0), depth0))
    + "</h4>\r\n				</div>\r\n			</div>\r\n			<div class=\"btn btn-speaker\">\r\n				<i class=\"mdi mdi-plus\"></i>\r\n			</div>\r\n		</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page-inner\">\r\n	<div class=\"page-heading\">\r\n		<div class=\"heading-wraper\">\r\n			<h1 class=\"title\">Speakers</h1>\r\n			<img src=\"assets/img/object-1.png\" alt=\"Object\" class=\"object\">\r\n		</div>\r\n	</div>\r\n\r\n	<div class=\"speakers-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"speaker-item speaker-last\">\r\n			<div class=\"actions\">\r\n				<h3 class=\"message\">Be part</h3>\r\n				<span class=\"clearfix\" data-href=\"http://devcon.ph/artcles/call-for-presentations-for-devcon-summit-2017-is-now-open\" target=\"_blank\">Yes! I want to be part of next DevCon Summit Speakers panel</span>\r\n			</div>\r\n		</div>\r\n	</div>\r\n\r\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["sponsors"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"page-inner\">\r\n  <div class=\"page-heading\">\r\n    <div class=\"heading-wraper\">\r\n      <h1 class=\"title\">Sponsors</h1>\r\n      <img src=\"assets/img/object-1.png\" alt=\"Object\" class=\"object\">\r\n    </div>\r\n  </div>\r\n  <div class=\"sponsors-wrapper\">\r\n  	<div class=\"empty-section\">\r\n  		<h4>SOON</h4>\r\n  	</div>\r\n  </div>\r\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["tickets"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "  		<div class=\"standard-tix\">\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.standard : stack1),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  		</div>\r\n  		<div class=\"promo-tix\">\r\n  			<div class=\"tix-head\"></div>\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.promo : stack1),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  		</div>\r\n  		<div class=\"eventbrite-wrapper\">\r\n  			"
    + ((stack1 = this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.embed : stack1), depth0)) != null ? stack1 : "")
    + "\r\n  		</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "  				<div class=\"tix-wrap\">\r\n  					<div class=\"tix-img\" style=\"background-image: url(assets/img/tickets/"
    + alias2(alias1((depth0 != null ? depth0.img : depth0), depth0))
    + ".jpg)\">\r\n              <div class=\"days\">"
    + alias2(alias1((depth0 != null ? depth0.days : depth0), depth0))
    + "</div>\r\n  						<h4>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h4>\r\n  					</div>\r\n  					<div class=\"tix-details\">\r\n  						<div class=\"price\">PHP "
    + alias2(alias1((depth0 != null ? depth0.price : depth0), depth0))
    + "</div>\r\n  					</div>\r\n  				</div>\r\n";
},"4":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "  				<div class=\"tix-wrap\">\r\n  					<div class=\"tix-img\" style=\"background-image: url(assets/img/tickets/"
    + alias2(alias1((depth0 != null ? depth0.img : depth0), depth0))
    + ".jpg)\">\r\n              <div class=\"days\">"
    + alias2(alias1((depth0 != null ? depth0.days : depth0), depth0))
    + "</div>\r\n  						<h4>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h4>\r\n              <div class=\"details\">"
    + alias2(alias1((depth0 != null ? depth0.details : depth0), depth0))
    + "</div>\r\n  					</div>\r\n  					<div class=\"tix-details\">\r\n  						<div class=\"price\">PHP "
    + alias2(alias1((depth0 != null ? depth0.price : depth0), depth0))
    + "</div>\r\n              <div class=\"save\">Save upto PHP "
    + alias2(alias1((depth0 != null ? depth0.save : depth0), depth0))
    + "</div>\r\n  					</div>\r\n  				</div>\r\n";
},"6":function(depth0,helpers,partials,data) {
    return "  		<h4>Eventbrite is disabled</h4>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page-inner\">\r\n  <div class=\"page-heading\">\r\n    <div class=\"heading-wraper\">\r\n      <h1 class=\"title\">Tickets</h1>\r\n      <img src=\"assets/img/object-1.png\" alt=\"Object\" class=\"object\">\r\n    </div>\r\n  </div>\r\n  <div class=\"tickets-wrapper\">\r\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.enableEventbrite : depth0),"===",true,{"name":"ifCond","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["venue"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"page-inner\">\r\n  <div class=\"page-heading\">\r\n    <div class=\"heading-wraper\">\r\n      <h1 class=\"title\">Venue</h1>\r\n      <img src=\"assets/img/object-1.png\" alt=\"Object\" class=\"object\">\r\n    </div>\r\n  </div>\r\n  <div class=\"venue-wrapper\">\r\n  	<div class=\"map-wrapper\">\r\n  		\r\n  	</div>\r\n  	<div class=\"map-details\">\r\n  		<h1>World Trade Center</h1>\r\n  		<p>WTCMM Bldg, Gil Puyat Avenue Extension corner Diosdado Macapagal Blvd., Pasay City, Metro Manila 1300, Pasay, Metro Manila, Philippines</p>\r\n  		<div class=\"directions-wrap hidden\">\r\n  			<h4>Get Directions</h4>\r\n  			<div class=\"direction\">\r\n  				<b>From Makati</b>\r\n  				Ride MRT going to Taft, Lorem Ipsum blah blah then turn left till\r\n  				you reach World Trade Center\r\n  			</div>\r\n  		</div>\r\n  	</div>\r\n  </div>\r\n</div>";
},"useData":true});
this["SummitHandle"]["templates"]["whyattend"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "		<div class=\"reason-item\" data-target=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "			<div class=\"whyattend-inner\" data-reason=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\">\r\n				<div class=\"bigtext\" data-key=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</div>\r\n				<p>"
    + alias2(alias1((depth0 != null ? depth0.paragraph : depth0), depth0))
    + "</p>\r\n			</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page-inner\">\r\n	<div class=\"about-event\">\r\n		<h1 class=\"title\">DEVCON SUMMIT 2017</h1>\r\n		<h3 class=\"subtitle\">A Call for Innovation</h3>\r\n		<p class=\"description\">Now on its 7th year, let us put our heads together for the upcoming Biggest Developer Conference in the Philippines and be in the loop of the latest trends and tricks of the trade of today's technology!</p>\r\n	</div>\r\n	<div class=\"reason-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n	<div class=\"whyattend-wrapper\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n</div>\r\n";
},"useData":true});