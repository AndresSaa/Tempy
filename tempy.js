(function(){

	var tempy = function ( html, data ) {
		for ( var value in data )
			html = html.replace( new RegExp( '{'+value+'}', 'g' ), data[value] );
		return html;
	};

}).call(this);