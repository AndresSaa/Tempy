(function (factory) {
    
    if (typeof define === 'function' && define.amd)
        // AMD (Register as an anonymous module)
        define( factory );
    else if (typeof exports === 'object')
        // Node/CommonJS
        module.exports = factory();
    else
        // Browser globals
        window.Tempy =  factory();

}(function(){

	var Tempy = function ( html, data ) {
		for ( var value in data )
			html = html.replace( new RegExp( '{'+value+'}', 'g' ), data[value] );
		return html;
	};
	
	return Tempy;

}));
