var H = require("hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg");t.b("\n" + i);t.b("  version=\"1.1\"");t.b("\n" + i);t.b("  xmlns=\"http://www.w3.org/2000/svg\"");t.b("\n" + i);t.b("  xmlns:xlink=\"http://www.w3.org/1999/xlink\"");t.b("\n" + i);t.b("  height=\"192px\"");t.b("\n" + i);t.b("  width=\"192px\">");t.b("\n" + i);t.b("  <g>");t.b("\n" + i);t.b("    <circle cx=\"60\" cy=\"120\" r=\"42\" fill=\"#ED867D\" stroke-width=\"12\" stroke=\"#fff\"  />");t.b("\n" + i);t.b("    <circle cx=\"96\" cy=\"60\" r=\"42\" fill=\"#6FB682\" stroke-width=\"12\" stroke=\"#fff\"  />");t.b("\n" + i);t.b("    <circle cx=\"132\" cy=\"120\" r=\"42\" fill=\"#4285F4\" stroke-width=\"12\" stroke=\"#fff\"  />");t.b("\n" + i);t.b("  </g>");t.b("\n" + i);t.b("</svg>");return t.fl(); },partials: {}, subs: {  }});return T; }();