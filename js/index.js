window.onload = function() {
  //Grab the inline template
  var template = document.getElementById('template').innerHTML;

  //Parse it (optional, only necessary if template is to be used again)
  Mustache.parse(template);

  //Render the data into the template
  var rendered = Mustache.render(template, {name: "woman", power: "super"});

  //Overwrite the contents of #target with the rendered HTML
  document.getElementById('target').innerHTML = rendered;
}