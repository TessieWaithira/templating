window.onload = function() {
  //Grab the inline template
  var template = document.getElementById('template').innerHTML;
  
  //compile the template
  var compile_template = Handlebars.compile(template);

  //Render the data into the template
  var rendered = compile_template({name: "woman", power: "super"});

  //Overwrite the contents of #target with the rendered HTML
  document.getElementById('target').innerHTML = rendered;
}