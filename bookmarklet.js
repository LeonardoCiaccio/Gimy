
/*

	Standard for building bookmarklet

		- Compress HTML source  : https://htmlcompressor.com/compressor/
		- Encode to B64			: https://www.base64encode.org/
		- Build bookmarklets 	: http://chriszarate.github.io/bookmarkleter/	

*/

( function(){
	
	try{

	// --> Personalizzazioni per i bookmarklets
	
		var currenttemplatename = "gimy:simple"

		,template = "PHRhYmxlIHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjA7Zm9udC1zaXplOjEwMCU7Zm9udC1mYW1pbHk6J0F2ZW5pciBOZXh0JywmcXVvdDtIZWx2ZXRpY2EgTmV1ZSZxdW90OywmcXVvdDtIZWx2ZXRpY2EmcXVvdDssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MS42NTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiNlZmVmZWY7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6bm9uZTt3aWR0aDoxMDAlIWltcG9ydGFudCI+DQo8dGJvZHk+DQo8dHIgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtmb250LXNpemU6MTAwJTtmb250LWZhbWlseTonQXZlbmlyIE5leHQnLCZxdW90O0hlbHZldGljYSBOZXVlJnF1b3Q7LCZxdW90O0hlbHZldGljYSZxdW90OyxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxLjY1O2hlaWdodDo1MCUiPg0KPHRkIHN0eWxlPSJtYXJnaW46MCBhdXRvIWltcG9ydGFudDtwYWRkaW5nOjA7Zm9udC1zaXplOjEwMCU7Zm9udC1mYW1pbHk6J0F2ZW5pciBOZXh0JywmcXVvdDtIZWx2ZXRpY2EgTmV1ZSZxdW90OywmcXVvdDtIZWx2ZXRpY2EmcXVvdDssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MS42NTtkaXNwbGF5OmJsb2NrIWltcG9ydGFudDtjbGVhcjpib3RoIWltcG9ydGFudDttYXgtd2lkdGg6NTgwcHghaW1wb3J0YW50Ij4NCjx0YWJsZSBzdHlsZT0ibWFyZ2luOjA7bWFyZ2luLXRvcDozMHB4O3BhZGRpbmc6MDtmb250LXNpemU6MTAwJTtmb250LWZhbWlseTonQXZlbmlyIE5leHQnLCZxdW90O0hlbHZldGljYSBOZXVlJnF1b3Q7LCZxdW90O0hlbHZldGljYSZxdW90OyxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxLjY1O2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTt3aWR0aDoxMDAlIWltcG9ydGFudCI+DQo8dGJvZHk+DQo8dHIgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtmb250LXNpemU6MTAwJTtmb250LWZhbWlseTonQXZlbmlyIE5leHQnLCZxdW90O0hlbHZldGljYSBOZXVlJnF1b3Q7LCZxdW90O0hlbHZldGljYSZxdW90OyxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxLjY1Ij4NCjx0ZCBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOjA7Zm9udC1zaXplOjEwMCU7Zm9udC1mYW1pbHk6JnF1b3Q7QXZlbmlyIE5leHQmcXVvdDssJnF1b3Q7SGVsdmV0aWNhIE5ldWUmcXVvdDssSGVsdmV0aWNhLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjEuNjU7Y29sb3I6d2hpdGU7YmFja2dyb3VuZDp0cmFuc3BhcmVudCI+DQo8aW1nIHNyYz0iaHR0cHM6Ly9sZW9uYXJkb2NpYWNjaW8uZ2l0aHViLmlvL0dpbXkvdGVtcGxhdGVzL2ltZ3MvZW1haWwuYXQucG5nIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHN0eWxlPSJwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItcmFkaXVzOjUwJTttYXJnaW4tcmlnaHQ6MCI+DQo8L3RkPg0KPC90cj4NCjx0ciBzdHlsZT0ibWFyZ2luOjA7cGFkZGluZzowO2ZvbnQtc2l6ZToxMDAlO2ZvbnQtZmFtaWx5OidBdmVuaXIgTmV4dCcsJnF1b3Q7SGVsdmV0aWNhIE5ldWUmcXVvdDssJnF1b3Q7SGVsdmV0aWNhJnF1b3Q7LEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjEuNjUiPg0KPHRkIHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjMwcHggMzVweDtmb250LXNpemU6MTAwJTtsaW5lLWhlaWdodDoxLjY1O2JhY2tncm91bmQ6d2hpdGU7Ym9yZGVyLXJhZGl1czoxMHB4O2JveC1zaGFkb3c6YmxhY2sgMCAwIDE1cHggLTVweCI+DQo8aDIgc3R5bGU9Im1hcmdpbjoyMHB4IDA7cGFkZGluZzowO2ZvbnQtc2l6ZToyOHB4O2xpbmUtaGVpZ2h0OjEuMjUiPjxmb250IGZhY2U9ImNvbWljIHNhbnMgbXMsIHNhbnMtc2VyaWYiPlNhbHZlLDwvZm9udD48L2gyPg0KPHAgc3R5bGU9Im1hcmdpbjowIDAgMjBweDtwYWRkaW5nOjA7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MS42NTtmb250LXdlaWdodDpub3JtYWwiPjxmb250IGZhY2U9ImNvbWljIHNhbnMgbXMsIHNhbnMtc2VyaWYiPkNvcnBvIGRlbCBtZXNzYWdnaW8gLi4uPC9mb250PjwvcD4NCjxwIHN0eWxlPSJmb250LWZhbWlseTomcXVvdDtBdmVuaXIgTmV4dCZxdW90OywmcXVvdDtIZWx2ZXRpY2EgTmV1ZSZxdW90OyxIZWx2ZXRpY2EsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAyMHB4O3BhZGRpbmc6MDtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDoxLjY1O2ZvbnQtd2VpZ2h0Om5vcm1hbCI+DQo8ZW0gc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtmb250LXNpemU6MTAwJTtmb250LWZhbWlseTonQXZlbmlyIE5leHQnLCZxdW90O0hlbHZldGljYSBOZXVlJnF1b3Q7LCZxdW90O0hlbHZldGljYSZxdW90OyxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxLjY1Ij4NCkEgcHJlc3RvICENCjwvZW0+DQo8L3A+DQo8L3RkPg0KPC90cj4NCjwvdGJvZHk+DQo8L3RhYmxlPg0KPC90ZD4NCjwvdHI+DQo8dHIgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtmb250LXNpemU6MTAwJTtmb250LWZhbWlseTonQXZlbmlyIE5leHQnLCZxdW90O0hlbHZldGljYSBOZXVlJnF1b3Q7LCZxdW90O0hlbHZldGljYSZxdW90OyxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxLjY1O2hlaWdodDo1MCUiPg0KPHRkIHN0eWxlPSJtYXJnaW46MCBhdXRvIWltcG9ydGFudDtwYWRkaW5nOjA7Zm9udC1zaXplOjEwMCU7Zm9udC1mYW1pbHk6J0F2ZW5pciBOZXh0JywmcXVvdDtIZWx2ZXRpY2EgTmV1ZSZxdW90OywmcXVvdDtIZWx2ZXRpY2EmcXVvdDssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MS42NTtkaXNwbGF5OmJsb2NrIWltcG9ydGFudDtjbGVhcjpib3RoIWltcG9ydGFudDttYXgtd2lkdGg6NTgwcHghaW1wb3J0YW50Ij4NCjx0YWJsZSBzdHlsZT0ibWFyZ2luOjA7cGFkZGluZzowO2ZvbnQtc2l6ZToxMDAlO2ZvbnQtZmFtaWx5OidBdmVuaXIgTmV4dCcsJnF1b3Q7SGVsdmV0aWNhIE5ldWUmcXVvdDssJnF1b3Q7SGVsdmV0aWNhJnF1b3Q7LEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjEuNjU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO3dpZHRoOjEwMCUhaW1wb3J0YW50Ij4NCjx0Ym9keT4NCjx0ciBzdHlsZT0ibWFyZ2luOjA7cGFkZGluZzowO2ZvbnQtc2l6ZToxMDAlO2ZvbnQtZmFtaWx5OidBdmVuaXIgTmV4dCcsJnF1b3Q7SGVsdmV0aWNhIE5ldWUmcXVvdDssJnF1b3Q7SGVsdmV0aWNhJnF1b3Q7LEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjEuNjUiPg0KPHRkIGFsaWduPSJjZW50ZXIiIHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjA7Zm9udC1zaXplOjEwMCU7Zm9udC1mYW1pbHk6J0F2ZW5pciBOZXh0JywmcXVvdDtIZWx2ZXRpY2EgTmV1ZSZxdW90OywmcXVvdDtIZWx2ZXRpY2EmcXVvdDssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MS42NTtiYWNrZ3JvdW5kOjA7cGFkZGluZy10b3A6MTVweCI+DQo8ZW0gc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtmb250LXNpemU6MTAwJTtmb250LWZhbWlseTonQXZlbmlyIE5leHQnLCZxdW90O0hlbHZldGljYSBOZXVlJnF1b3Q7LCZxdW90O0hlbHZldGljYSZxdW90OyxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxLjY1Ij4NCkJ1b24gbGF2b3JvICENCjwvZW0+DQo8L3RkPg0KPC90cj4NCjwvdGJvZHk+DQo8L3RhYmxlPg0KPC90ZD4NCjwvdHI+DQo8L3Rib2R5Pg0KPC90YWJsZT4="

	// <-- // --> Procedure comuni

		,signature = "data-gimy"

		,attrsignature = "[data-gimy]"

		,gimy 	   = document.body.querySelector( attrsignature );

		if( gimy ){

		// --> Prelevo il nome del template

			var templatename = gimy.getAttribute( signature );

		// --> Se ho già salvato il template chiedo se vuole utilizzarlo

			if( templatename && localStorage ){

				if( localStorage[ templatename ] && confirm( "New version available, use new version ?" ) ){

					gimy.innerHTML = atob( localStorage[ templatename ] );

				}else if( confirm( "Save current version ?" ) ){

					localStorage[ templatename ] = btoa( gimy.innerHTML );

					alert( "Saved !" );

				}else if( confirm( "Overwrite current template ?" ) ){

					gimy.innerHTML = atob( template );

				}

			}else{

				gimy.innerHTML = atob( template );

			}

		}else{

			var g = document.body.querySelectorAll( "*" )

			,f = false;

			for( var i = 0; i < g.length; i++ ){

				if( g[ i ].textContent.trim().match( /gimy/gi ) && g[ i ].textContent === g[ i ].innerHTML ){

				// --> Aggiungo anche la signature

					g[ i ].innerHTML = "<div " + signature + "='" + currenttemplatename + "'>" + atob( template ) + "</div>";

					f = true;

				}

			}

			if( !f )alert( "Type \" gimy \" inside new message" );

		}

	}catch( e ){

		alert( e );

	}

} )();