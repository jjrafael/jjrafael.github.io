this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["Templates"] = this["Handlebars"]["Templates"] || {};

this["Handlebars"]["Templates"]["experiences"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "	<div class=\"xp-container\">\r\n		<div class=\"graph-wrap\">\r\n			<h1>"
    + escapeExpression(lambda((depth0 != null ? depth0.projects : depth0), depth0))
    + "</h1>\r\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.company : depth0), "===", "elfam merks", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "			<div class=\"graph-inner\">\r\n				<div class=\"bar-wrap\" data-field=\"dev\" data-perc=\""
    + escapeExpression(lambda((depth0 != null ? depth0['lvl-dev'] : depth0), depth0))
    + "\">\r\n					<div class=\"bar\"></div>\r\n				</div>\r\n				<div class=\"bar-wrap\" data-field=\"des\" data-perc=\""
    + escapeExpression(lambda((depth0 != null ? depth0['lvl-des'] : depth0), depth0))
    + "\">\r\n					<div class=\"bar\"></div>\r\n				</div>\r\n				<div class=\"bar-wrap\" data-field=\"illus\" data-perc=\""
    + escapeExpression(lambda((depth0 != null ? depth0['lvl-illus'] : depth0), depth0))
    + "\">\r\n					<div class=\"bar\"></div>\r\n				</div>\r\n				<div class=\"bar-wrap\" data-field=\"others\" data-perc=\""
    + escapeExpression(lambda((depth0 != null ? depth0['lvl-others'] : depth0), depth0))
    + "\">\r\n					<div class=\"bar\"></div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"details\">\r\n			<h4>"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\r\n			<h5 class=\"xp-company\">"
    + escapeExpression(lambda((depth0 != null ? depth0.company : depth0), depth0))
    + " </h5>\r\n			<h5 class=\"xp-city\">"
    + escapeExpression(lambda((depth0 != null ? depth0.city : depth0), depth0))
    + "</h5>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.years : depth0), {"name":"each","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\r\n	</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
  return "				<h5>illustrations</h5>\r\n";
  },"4":function(depth0,helpers,partials,data) {
  return "				<h5>projects</h5>\r\n";
  },"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				<h6 class=\"xp-year\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</h6>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"xp-wrapper\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.data : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	<div class=\"xp-footer\">\r\n		<div class=\"xp-status\" data-field=\"dev\">\r\n			Development\r\n		</div>\r\n		<div class=\"xp-status\" data-field=\"des\">\r\n			UI Design\r\n		</div>\r\n		<div class=\"xp-status\" data-field=\"illus\">\r\n			GD/Illustrations\r\n		</div>\r\n		<div class=\"xp-status\" data-field=\"others\">\r\n			Others (Database, Server-side, Marketing)\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});

this["Handlebars"]["Templates"]["home"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                <img src=\""
    + escapeExpression(lambda((depth0 != null ? depth0.image : depth0), depth0))
    + "\" class=\"home-img\"/>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"brand\">\r\n    <div class=\"brand-canvas\">\r\n        <!-- <div class=\"brand-images\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.data : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"580\" viewBox=\"0 0 0 0\">\r\n            <defs>\r\n                <clipPath id=\"brandPath\">\r\n                    <path id=\"XMLID_17_\" stroke=\"#50E381\" stroke-width=\"5\" d=\"M63,15c0,0,280.9,0,298.5,0c0,66.9-0.7,304.4-298.5,304.4c0-38.2,0-52.9,0-52.9S295.3,265.7,295.3,65\r\n                    c-42.6,0-77.2,0-77.2,0S218.9,191.5,63,191.5c0-44.1,0-54.4,0-54.4s88.2,0.7,88.2-72.1C128.4,65,63,65,63,65V15z\"/>\r\n                    <path id=\"XMLID_16_\" d=\"M63,319.7c125.7-0.3,124.3,73.3,124.3,73.3s45.3,0,65.8,0C253.1,257.4,63,267.8,63,267.8V319.7z\"/>\r\n                </clipPath>\r\n            </defs>\r\n        </svg> -->\r\n        <div class=\"brand-img\"></div>\r\n    </div>\r\n</div>\r\n<div class=\"brand-intro\">\r\n    <h1>HELLO, I'M JJ RAFAEL</h1>\r\n    <h2>\r\n        Developer + Designer\r\n        <!-- <span class=\"plus\">+</span> -->\r\n    </h2>\r\n</div>";
},"useData":true});

this["Handlebars"]["Templates"]["nav"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        <div class=\"nav-item\" data-menu=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\">\r\n            <h3 class=\"nav-item-text\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</h3>\r\n        </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<nav class=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.isOpen : stack1), depth0))
    + "\">\r\n    <div class=\"nav-inner\">\r\n        <div class=\"nav-close\">\r\n            <div class=\"nav-close-line\"></div>\r\n            <div class=\"nav-close-line\"></div>\r\n        </div>\r\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.menu : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n    \r\n</nav>";
},"useData":true});

this["Handlebars"]["Templates"]["project"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<div class=\"details-container\" data-type=\""
    + escapeExpression(lambda((depth0 != null ? depth0.type : depth0), depth0))
    + "\" data-id=\""
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\r\n	<div class=\"details-inner\">\r\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "===", "img-only", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.program(5, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\r\n</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "			<div class=\"img-wrap\">\r\n				<img src=\""
    + escapeExpression(lambda((depth0 != null ? depth0.image : depth0), depth0))
    + "\" />\r\n			</div>\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				<h4>"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\r\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "			<div class=\"img-wrap\">\r\n				<img src=\""
    + escapeExpression(lambda((depth0 != null ? depth0.image : depth0), depth0))
    + "\" />\r\n			</div>\r\n			<div class=\"details-wrap\">\r\n				<h4>"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\r\n				<p>"
    + escapeExpression(lambda((depth0 != null ? depth0.paragraph : depth0), depth0))
    + "</p>\r\n			</div>\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.footnote : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				<div class=\"subdetails\">\r\n					"
    + escapeExpression(lambda((depth0 != null ? depth0.footnote : depth0), depth0))
    + "\r\n				</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.cards : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});

this["Handlebars"]["Templates"]["projects"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "	<div class=\"project-container\" id=\""
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\r\n		<div class=\"left-column\">\r\n			<div class=\"image-container\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.images : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</div>	\r\n			<div class=\"overview\">\r\n				<h4>"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\r\n				<p>"
    + escapeExpression(lambda((depth0 != null ? depth0.paragraph : depth0), depth0))
    + "</p>\r\n				<div class=\"suboverview\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.link : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.note : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"mid-column\">\r\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.hasMore : depth0), "===", "true", {"name":"ifCond","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\r\n		<div class=\"right-column\">\r\n			<div class=\"brand-container\" style=\"background-color: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.colors : depth0)) != null ? stack1.primary : stack1), depth0))
    + "; background: linear-gradient(135deg, "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.colors : depth0)) != null ? stack1.primary : stack1), depth0))
    + " 0%, "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.colors : depth0)) != null ? stack1.secondary : stack1), depth0))
    + " 100%);\">\r\n				<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.client : depth0)) != null ? stack1.img : stack1), depth0))
    + "\" data-link=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.client : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.client : depth0)) != null ? stack1.name : stack1), depth0))
    + "\"/>\r\n			</div>\r\n			<div class=\"roles-wrapper\">\r\n				<ul>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.roles : depth0), {"name":"each","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "				</ul>\r\n			</div>\r\n			<div class=\"date\">\r\n				"
    + escapeExpression(lambda((depth0 != null ? depth0.date : depth0), depth0))
    + "\r\n			</div>\r\n			<div class=\"tools\">\r\n				<ul>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tools : depth0), {"name":"each","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</ul>\r\n			</div>\r\n		</div>\r\n	</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "					<img src=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\"/>\r\n";
},"4":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						<a href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.link : depth0), depth0))
    + "\" target=\"_blank\">Link</a>\r\n";
},"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						<p>"
    + escapeExpression(lambda((depth0 != null ? depth0.note : depth0), depth0))
    + "</p>\r\n";
},"8":function(depth0,helpers,partials,data) {
  return "				<div class=\"btn-more\">\r\n					<i class=\"mdi mdi-plus\"></i>\r\n					more details\r\n				</div>\r\n				<div class=\"details-wrapper\"></div>\r\n";
  },"10":function(depth0,helpers,partials,data) {
  return "				<div class=\"btn-more disabled\"></div>\r\n";
  },"12":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						<li>"
    + escapeExpression(lambda(depth0, depth0))
    + "</li>\r\n";
},"14":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						<li class=\"tool-item\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"projects-inner clearfix\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.data : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});

this["Handlebars"]["Templates"]["talk"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"talk-wrapper\">\r\n	<div class=\"talk-left\">\r\n		<div class=\"talk-inner\">\r\n			<h1>Hi again!</h1>\r\n			<h4>I'm Manila-based Developer and Designer. I’ve been on this field for almost 5 years and I graduated BSIT. My expertise are everything Front-end Dev, Interface Design and Illustrations. Had an opportunity to fly to Singapore and Thailand, where I did work on some projects and understands users across SE Asia. And yes, I belong to the small group of humans that can do both visuals and codes. Currently I'm working on UI System and React Components for Project Phoenix that was developed using ReactJS, and the new website for DevCon Summit 2017.</h4>\r\n		</div>\r\n		<div class=\"collage-wrap\"></div>\r\n	</div>\r\n	<div class=\"talk-right\">\r\n		<div class=\"collage-wrap\"></div>\r\n		<div class=\"talk-inner\">\r\n			<h1>Let's talk!</h1>\r\n			<div class=\"contact-wrapper\">\r\n				<div class=\"contact-item\" data-item=\"email\">\r\n					<i class=\"mdi mdi-email\" title=\"Email\"></i>\r\n					<a href=\"mailto:jessiejamesrafael@gmail.com?subject=Inquiry%from%Portfolio\" target=\"_blank\">jessiejamesrafael@gmail</a>\r\n				</div>\r\n				<div class=\"contact-item\" data-item=\"instagram\">\r\n					<i class=\"mdi mdi-instagram\" title=\"Instagram\"></i>\r\n					<a href=\"http://instagram.com/jjrafael\" target=\"_blank\">@jessiejrafael</a>\r\n				</div>\r\n				<div class=\"contact-item\" data-item=\"instagram\">\r\n					<i class=\"mdi mdi-github-circle\" title=\"Github\"></i>\r\n					<a href=\"http://jjrafel.github.com\" target=\"_blank\">Github</a>\r\n				</div>\r\n				<div class=\"contact-item\" data-item=\"deviantart\">\r\n					<i class=\"mdi mdi-deviantart\" title=\"DeviantArt\"></i>\r\n					<a href=\"http://jjrafael.deviantart.com\" target=\"_blank\">DeviantArt</a>\r\n				</div>\r\n				<div class=\"contact-item\" data-item=\"linkedin\">\r\n					<i class=\"mdi mdi-linkedin-box\" title=\"LinkedIn\"></i>\r\n					<a href=\"http://linkedin.com/jessiejamesrafael\" target=\"_blank\">LinkedIn</a>\r\n				</div>\r\n				<div class=\"contact-item\" data-item=\"cv\">\r\n					<i class=\"mdi mdi-file-pdf\" target=\"_blank\" title=\"CV\"></i>\r\n					<a href=\"assets/jjr-cv.pdf\" target=\"_blank\">Get my latest CV</a>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>";
  },"useData":true});