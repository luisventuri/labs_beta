window.Ember.TEMPLATES.application=Ember.Handlebars.compile("window.Ember.TEMPLATES[\"application\"] = Ember.Handlebars.compile(\"<!-- HEADER -->\\n<div class='outer' id='header_wrap'>\\n  <header class='inner'>\\n    {{#linkTo 'index'}}<h1 id=\\\"project_title\\\">ZENLABS<span style=\\\"display:inline-block; font-size:14px; text-shadow:none; margin-left: 4px;\\\">Beta</span></h1>{{/linkTo}}\\n  </header>\\n  <div id='top-nav'>\\n    <ul id='navbar'>\\n      <li>{{#linkTo 'index'}}Home{{/linkTo}}</li>\\n      <li>{{#linkTo 'getstarted'}}Getting Started{{/linkTo}}</li>\\n      <li>{{#linkTo 'extensions'}}App Directory{{/linkTo}}</li>\\n      <li><a href=\\\"http://developer.zendesk.com/\\\" target= \\\"_blank\\\">Developer Site</a></li>\\n    </ul>\\n  </div>\\n</div>\\n<div class='container' id='main'>\\n  <div class='content'>\\n    {{outlet}}\\n  </div>\\n</div>\\n\");\n");