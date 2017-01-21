window.onload = function(){
	//call .loadTemplate() on target container
	$('#target').loadTemplate(
		//specify temp container
		$('#template'),
		//data to render
		{
			
			power: "super"
			name: "woman"
		}
	);
}