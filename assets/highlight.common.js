var hljs = require("highlight.js/lib/highlight");

hljs.registerLanguage("cs", require("highlight.js/lib/languages/cs"));
hljs.registerLanguage("cpp", require("highlight.js/lib/languages/cpp"));
hljs.registerLanguage("javascript", require("highlight.js/lib/languages/javascript"));
hljs.registerLanguage("typescript", require("highlight.js/lib/languages/typescript"));
hljs.registerLanguage("powershell", require("highlight.js/lib/languages/powershell"));
hljs.registerLanguage("java", require("highlight.js/lib/languages/java"));
hljs.registerLanguage("python", require("highlight.js/lib/languages/python"));
hljs.registerLanguage("ruby", require("highlight.js/lib/languages/ruby"));
hljs.registerLanguage("perl", require("highlight.js/lib/languages/perl"));
hljs.registerLanguage("xml", require("highlight.js/lib/languages/xml"));
hljs.registerLanguage("css", require("highlight.js/lib/languages/css"));
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"));
hljs.registerLanguage("sql", require("highlight.js/lib/languages/sql"));
hljs.registerLanguage("bash", require("highlight.js/lib/languages/bash"));
hljs.registerLanguage("shell", require("highlight.js/lib/languages/shell"));
hljs.registerLanguage("ini", require("highlight.js/lib/languages/ini"));
hljs.registerLanguage("dns", require("highlight.js/lib/languages/dns"));
hljs.registerLanguage("http", require("highlight.js/lib/languages/http"));

module.exports = hljs;
