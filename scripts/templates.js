this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["Templates"] = this["Handlebars"]["Templates"] || {};

this["Handlebars"]["Templates"]["experiences"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "	<div class=\"xp-container\">\n		<div class=\"graph-wrap\">\n			<h1>"
    + escapeExpression(lambda((depth0 != null ? depth0.projects : depth0), depth0))
    + "</h1>\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.company : depth0), "===", "elfam merks", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "			<div class=\"graph-inner\">\n				<div class=\"bar-wrap\" data-field=\"dev\" data-perc=\""
    + escapeExpression(lambda((depth0 != null ? depth0['lvl-dev'] : depth0), depth0))
    + "\">\n					<div class=\"bar\"></div>\n				</div>\n				<div class=\"bar-wrap\" data-field=\"des\" data-perc=\""
    + escapeExpression(lambda((depth0 != null ? depth0['lvl-des'] : depth0), depth0))
    + "\">\n					<div class=\"bar\"></div>\n				</div>\n				<div class=\"bar-wrap\" data-field=\"illus\" data-perc=\""
    + escapeExpression(lambda((depth0 != null ? depth0['lvl-illus'] : depth0), depth0))
    + "\">\n					<div class=\"bar\"></div>\n				</div>\n				<div class=\"bar-wrap\" data-field=\"others\" data-perc=\""
    + escapeExpression(lambda((depth0 != null ? depth0['lvl-others'] : depth0), depth0))
    + "\">\n					<div class=\"bar\"></div>\n				</div>\n			</div>\n		</div>\n		<div class=\"details\">\n			<h4>"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\n			<h5 class=\"xp-company\">"
    + escapeExpression(lambda((depth0 != null ? depth0.company : depth0), depth0))
    + " </h5>\n			<h5 class=\"xp-city\">"
    + escapeExpression(lambda((depth0 != null ? depth0.city : depth0), depth0))
    + "</h5>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.years : depth0), {"name":"each","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n	</div>\n";
},"2":function(depth0,helpers,partials,data) {
  return "				<h5>illustrations</h5>\n";
  },"4":function(depth0,helpers,partials,data) {
  return "				<h5>projects</h5>\n";
  },"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				<h6 class=\"xp-year\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</h6>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"xp-wrapper\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.data : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	<div class=\"xp-footer hide\">\n		<div class=\"xp-status\" data-field=\"dev\">\n			Development\n		</div>\n		<div class=\"xp-status\" data-field=\"des\">\n			UI Design\n		</div>\n		<div class=\"xp-status\" data-field=\"illus\">\n			GD/Illustrations\n		</div>\n		<div class=\"xp-status\" data-field=\"others\">\n			Others (Database, Server-side, Marketing)\n		</div>\n	</div>\n</div>";
},"useData":true});

this["Handlebars"]["Templates"]["home"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                <img src=\""
    + escapeExpression(lambda((depth0 != null ? depth0.image : depth0), depth0))
    + "\" class=\"home-img\"/>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"brand\">\n    <div class=\"brand-canvas\">\n        <!-- <div class=\"brand-images\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.data : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"580\" viewBox=\"0 0 0 0\">\n            <defs>\n                <clipPath id=\"brandPath\">\n                    <path id=\"XMLID_17_\" stroke=\"#50E381\" stroke-width=\"5\" d=\"M63,15c0,0,280.9,0,298.5,0c0,66.9-0.7,304.4-298.5,304.4c0-38.2,0-52.9,0-52.9S295.3,265.7,295.3,65\n                    c-42.6,0-77.2,0-77.2,0S218.9,191.5,63,191.5c0-44.1,0-54.4,0-54.4s88.2,0.7,88.2-72.1C128.4,65,63,65,63,65V15z\"/>\n                    <path id=\"XMLID_16_\" d=\"M63,319.7c125.7-0.3,124.3,73.3,124.3,73.3s45.3,0,65.8,0C253.1,257.4,63,267.8,63,267.8V319.7z\"/>\n                </clipPath>\n            </defs>\n        </svg> -->\n        <div class=\"brand-img\"></div>\n    </div>\n</div>\n<div class=\"brand-intro\">\n    <h1>HELLO, I'M JJ RAFAEL</h1>\n    <h2>\n        Developer + Designer\n        <!-- <span class=\"plus\">+</span> -->\n    </h2>\n</div>";
},"useData":true});

this["Handlebars"]["Templates"]["nav"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        <div class=\"nav-item\" data-menu=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\">\n            <h3 class=\"nav-item-text\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</h3>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<nav class=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.isOpen : stack1), depth0))
    + "\">\n    <div class=\"nav-inner\">\n        <div class=\"nav-close\">\n            <div class=\"nav-close-line\"></div>\n            <div class=\"nav-close-line\"></div>\n        </div>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.menu : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    \n</nav>";
},"useData":true});

this["Handlebars"]["Templates"]["project"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<div class=\"details-container\" data-type=\""
    + escapeExpression(lambda((depth0 != null ? depth0.type : depth0), depth0))
    + "\" data-id=\""
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n	<div class=\"details-inner\">\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "===", "img-only", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.program(5, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "			<div class=\"img-wrap\" style=\"background-image: url("
    + escapeExpression(lambda((depth0 != null ? depth0.image : depth0), depth0))
    + ")\"></div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				<h4>"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "			<div class=\"img-wrap\" style=\"background-image: url("
    + escapeExpression(lambda((depth0 != null ? depth0.image : depth0), depth0))
    + ")\"></div>\n			<div class=\"details-wrap\">\n				<h4>"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\n				<p>"
    + escapeExpression(lambda((depth0 != null ? depth0.paragraph : depth0), depth0))
    + "</p>\n			</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.footnote : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				<div class=\"subdetails\">\n					"
    + escapeExpression(lambda((depth0 != null ? depth0.footnote : depth0), depth0))
    + "\n				</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.cards : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});

this["Handlebars"]["Templates"]["projects"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "	<div class=\"project-container\" id=\""
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n		<div class=\"left-column\">\n			<div class=\"image-container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.images : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</div>	\n			<div class=\"overview\">\n				<h4>"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\n				<p>"
    + escapeExpression(lambda((depth0 != null ? depth0.paragraph : depth0), depth0))
    + "</p>\n				<div class=\"suboverview\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.link : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.note : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "				</div>\n			</div>\n		</div>\n		<div class=\"mid-column\" data-type=\""
    + escapeExpression(lambda((depth0 != null ? depth0.detailsType : depth0), depth0))
    + "\">\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.hasMore : depth0), "===", "true", {"name":"ifCond","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n		<div class=\"right-column\">\n			<div class=\"brand-container\" style=\"background-color: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.colors : depth0)) != null ? stack1.primary : stack1), depth0))
    + "; background: linear-gradient(135deg, "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.colors : depth0)) != null ? stack1.primary : stack1), depth0))
    + " 0%, "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.colors : depth0)) != null ? stack1.secondary : stack1), depth0))
    + " 100%);\">\n				<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.client : depth0)) != null ? stack1.img : stack1), depth0))
    + "\" data-link=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.client : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.client : depth0)) != null ? stack1.name : stack1), depth0))
    + "\"/>\n			</div>\n			<div class=\"roles-wrapper\">\n				<ul>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.roles : depth0), {"name":"each","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "				</ul>\n			</div>\n			<div class=\"date\">\n				"
    + escapeExpression(lambda((depth0 != null ? depth0.date : depth0), depth0))
    + "\n			</div>\n			<div class=\"tools\">\n				<ul>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tools : depth0), {"name":"each","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</ul>\n			</div>\n		</div>\n	</div>\n";
},"2":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "					<img src=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\"/>\n";
},"4":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						<a href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.link : depth0), depth0))
    + "\" target=\"_blank\">Link</a>\n";
},"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						<p>"
    + escapeExpression(lambda((depth0 != null ? depth0.note : depth0), depth0))
    + "</p>\n";
},"8":function(depth0,helpers,partials,data) {
  return "				<div class=\"btn-more\">\n					<i class=\"mdi mdi-plus\"></i>\n					more details\n				</div>\n				<div class=\"details-wrapper\"></div>\n";
  },"10":function(depth0,helpers,partials,data) {
  return "				<div class=\"btn-more disabled\"></div>\n";
  },"12":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						<li>"
    + escapeExpression(lambda(depth0, depth0))
    + "</li>\n";
},"14":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						<li class=\"tool-item\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"projects-inner clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.data : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});

this["Handlebars"]["Templates"]["talk"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"talk-wrapper\">\n	<div class=\"talk-left\">\n		<div class=\"talk-inner\">\n			<h1>Hi again!</h1>\n			<h4>\n				I'm Manila-based Developer and Designer. I’ve been on this field for almost 10 years, graduated BSIT. My expertise are everything Front-end Dev, UI/UX and Illustrations. Had an opportunity to work on projects based in the US, UK, Singapore, Thailand and Manila. And yes, I belong to the small group of humans that can do both visuals and engineering. I recently worked on \"headhuntr.io\", a recruitment and candidate management platform integrated with data algorithms, scheduled calls and comprehensive profile information; and I also developed a game called \"Alias\", a real-time board game interconnected with multiple active devices using modern dev stack, react and firebase. I'm Looking for a FRESH NEW collaborations, shoot me a message!\n			</h4>\n		</div>\n		<div class=\"collage-wrap\"></div>\n	</div>\n	<div class=\"talk-right\">\n		<div class=\"collage-wrap\"></div>\n		<div class=\"talk-inner\">\n			<h1>Let's talk!</h1>\n			<div class=\"contact-wrapper\">\n				<div class=\"contact-item\" data-item=\"email\">\n					<i class=\"mdi mdi-email\" title=\"Email\"></i>\n					<a href=\"mailto:jessiejamesrafael@gmail.com?subject=Inquiry%from%Portfolio\" target=\"_blank\">jessiejamesrafael@gmail</a>\n				</div>\n				<div class=\"contact-item\" data-item=\"instagram\">\n					<i class=\"mdi mdi-instagram\" title=\"Instagram\"></i>\n					<a href=\"http://instagram.com/jjrafael.works\" target=\"_blank\">@jjrafael.works</a>\n				</div>\n				<div class=\"contact-item\" data-item=\"instagram\">\n					<i class=\"mdi mdi-instagram\" title=\"Instagram\"></i>\n					<a href=\"http://instagram.com/jessiejrafael\" target=\"_blank\">@jessiejrafael</a>\n				</div>\n				<div class=\"contact-item\" data-item=\"instagram\">\n					<i class=\"mdi mdi-github-circle\" title=\"Github\"></i>\n					<a href=\"http://jjrafael.github.com\" target=\"_blank\">Github</a>\n				</div>\n				<div class=\"contact-item\" data-item=\"linkedin\">\n					<i class=\"mdi mdi-linkedin-box\" title=\"LinkedIn\"></i>\n					<a href=\"http://linkedin.com/jessiejamesrafael\" target=\"_blank\">LinkedIn</a>\n				</div>\n				<div class=\"contact-item\" data-item=\"cv\">\n					<i class=\"mdi mdi-file-pdf\" target=\"_blank\" title=\"CV\"></i>\n					<a href=\"assets/jjr-cv-2023.pdf\" target=\"_blank\">Get my latest CV</a>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>";
  },"useData":true});

this["Handlebars"]["Templates"]["tools"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                <div class=\"tag\" data-category="
    + escapeExpression(lambda((depth0 != null ? depth0.category : depth0), depth0))
    + " data-tool=\""
    + escapeExpression(lambda((depth0 != null ? depth0.label : depth0), depth0))
    + "\"\\>\n                    "
    + escapeExpression(lambda((depth0 != null ? depth0.label : depth0), depth0))
    + "\n                    <span class=\"years\">\n                        "
    + escapeExpression(lambda((depth0 != null ? depth0.years : depth0), depth0))
    + " YRS\n                    </span>\n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"tools-wrapper\">\n    <div class=\"tools-inner\">\n        <h3>Filter projects by Category</h3>\n        <h4>\n            Select categories or tools to filter projects that are more relevant to what you're looking for\n        </h4>\n        <div class=\"tabs tabs-category clearfix\">\n            <div class=\"tab\" data-category=\"dev\">\n                Front-End Dev\n            </div>\n            <div class=\"tab\" data-category=\"des\">\n                UI/UX\n            </div>\n            <div class=\"tab\" data-category=\"illus\">\n                Illustrations\n            </div>\n            <div class=\"tab\" data-category=\"others\">\n                Others\n            </div>\n        </div>\n    </div>\n    <div class=\"tools-inner\">\n        <h3>Or filter by specific tools</h3>\n        <h4>\n            Below are the most relevant or latest tools I have used or attained\n        </h4>\n        <div class=\"tags tags-tools\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.data : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["Templates"]["walkthru"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "				<div class=\"block-wrap\" id=\""
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n					<div class=\"img-wrap\"  style=\"background-image: url("
    + escapeExpression(lambda((depth0 != null ? depth0.image : depth0), depth0))
    + ")\"></div>\n					<div class=\"details-wrap\">\n						<h4>"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\n						<p>"
    + escapeExpression(lambda((depth0 != null ? depth0.paragraph : depth0), depth0))
    + "</p>\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.id : depth0), "===", "hhi-1-block7", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "					</div>\n				</div>\n";
},"2":function(depth0,helpers,partials,data) {
  return "							<div class=\"subdetails-wrap\">\n								<div class=\"subdetails\">\n									<h4>Obsidian (Fortune 100 Gaming Company)</h4>\n									<p>\"I really like the UI and ease of use of the headhuntr.io platform in finding specialized gaming-qualified candidates. </p>\n									<h5>- Recruiter</h5>\n								</div>\n								<div class=\"subdetails\">\n									<h4>Apple</h4>\n									<p>\"I have been in the industry for over 20 years, and I haven’t seen any recruiting platform that looks this good and is so intuitive to use.\" </p>\n									<h5>- Lead Recruiter</h5>\n								</div>\n								<div class=\"subdetails\">\n									<h4>Iron Mountain</h4>\n									<p>\"The look and feel of the headhuntr.io platform are the best that I have seen. The layout of the features like the Must Haves, filters, and likely-to-jump indicator enables anyone to find qualified candidates faster.\" </p>\n									<h5>- Suzanne Hovhannesian, VP of Talent</h5>\n								</div>\n							</div>\n";
  },"4":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						<div class=\"block-wrap\" id=\""
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n							<div class=\"img-wrap\"  style=\"background-image: url("
    + escapeExpression(lambda((depth0 != null ? depth0.image : depth0), depth0))
    + ")\"></div>\n							<div class=\"details-wrap\">\n								<h4>"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\n								<p>"
    + escapeExpression(lambda((depth0 != null ? depth0.paragraph : depth0), depth0))
    + "</p>\n							</div>\n						</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"walkthru-container\" data-type=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.type : stack1), depth0))
    + "\" data-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n	<div class=\"walkthru-banner\" style=\"background-image: url("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.banner : stack1), depth0))
    + ")\">\n		<div class=\"banner-header\">\n			<div class=\"banner-title\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.title : stack1), depth0))
    + "</div>\n			<div class=\"banner-meta\">\n				<div class=\"banner-logo\" style=\"background-image: url("
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.client : stack1)) != null ? stack1.img : stack1), depth0))
    + ")\"></div>\n				<div class=\"banner-subtitle\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.subtitle : stack1), depth0))
    + "</div>\n				<div class=\"banner-date\">Project Date: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.date : stack1), depth0))
    + "</div>\n				<div class=\"banner-updated\">Page Updated: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1['updated-date'] : stack1), depth0))
    + "</div>\n			</div>\n		</div>\n	</div>\n	<div class=\"walkthru-summary\">\n		<div class=\"title\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.summary : stack1)) != null ? stack1.title : stack1), depth0))
    + "</div>\n		<p>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.summary : stack1)) != null ? stack1.paragraph : stack1), depth0))
    + "</p>\n	</div>\n	<div class=\"walkthru-inner\">\n		<div class=\"walkthru-fadeBlock\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.fadeBlock : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n		<div class=\"walkthru-divider1\">\n			<div class=\"title\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.divider1 : stack1)) != null ? stack1.title : stack1), depth0))
    + "</div>\n			<p>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.divider1 : stack1)) != null ? stack1.paragraph : stack1), depth0))
    + "</p>\n		</div>\n		<div class=\"walkthru-scrollBlock\">\n			<div class=\"block-outer\">\n				<div class=\"block-subouter\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.scrollBlock : stack1), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</div>\n			</div>\n		</div>\n	</div>\n	<footer>\n        <div class=\"btn-wrapper\">\n			<div class=\"btn-projects\">View all Projects</div>\n        </div>\n        <div class=\"footer-inner\">\n            <h6 class=\"copyr\">JJRAFAEL © 2023</h6>\n        </div>\n    </footer>\n</div>";
},"useData":true});