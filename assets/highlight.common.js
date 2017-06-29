var hljs = require("highlight.js/lib/highlight");

hljs.registerLanguage("powershell", require("highlight.js/lib/languages/powershell"));
hljs.registerLanguage("bash", require("highlight.js/lib/languages/bash"));
hljs.registerLanguage("shell", require("highlight.js/lib/languages/shell"));
hljs.registerLanguage("cs", require("highlight.js/lib/languages/cs"));
hljs.registerLanguage("cpp", require("highlight.js/lib/languages/cpp"));
hljs.registerLanguage("perl", require("highlight.js/lib/languages/perl"));
hljs.registerLanguage("python", require("highlight.js/lib/languages/python"));
hljs.registerLanguage("ruby", require("highlight.js/lib/languages/ruby"));
hljs.registerLanguage("fsharp", require("highlight.js/lib/languages/fsharp"));
hljs.registerLanguage("java", require("highlight.js/lib/languages/java"));
hljs.registerLanguage("sql", require("highlight.js/lib/languages/sql"));
hljs.registerLanguage("css", require("highlight.js/lib/languages/css"));
hljs.registerLanguage("less", require("highlight.js/lib/languages/less"));
hljs.registerLanguage("scss", require("highlight.js/lib/languages/scss"));
hljs.registerLanguage("ini", require("highlight.js/lib/languages/ini"));
hljs.registerLanguage("http", require("highlight.js/lib/languages/http"));
hljs.registerLanguage("dns", require("highlight.js/lib/languages/dns"));
hljs.registerLanguage("javascript", require("highlight.js/lib/languages/javascript"));
hljs.registerLanguage("typescript", require("highlight.js/lib/languages/typescript"));
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"));
hljs.registerLanguage("xml", require("highlight.js/lib/languages/xml"));

module.exports = hljs;
