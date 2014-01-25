var app = angular.module('appDirectivesDev', []);

// directive that prevents submit if there are still form errors
app.directive('validSubmit', [ '$parse', function($parse) {
		return {
			// we need a form controller to be on the same element as this directive
			// in other words: this directive can only be used on a &lt;form&gt;
			require: 'form',
			// one time action per form
			link: function(scope, element, iAttrs, form) {
				form.$submitted = false;
				// get a hold of the function that handles submission when form is valid
				var fn = $parse(iAttrs.validSubmit);
				
				// register DOM event handler and wire into Angular's lifecycle with scope.$apply
				element.on('submit', function(event) {
					scope.$apply(function() {
						// on submit event, set submitted to true (like the previous trick)
                        console.log('log something at submit');
                        console.log('password : '+$('#password').val());
                        console.log('confirm password : '+$('#confirmPassword').val());
                        
                        
						form.$submitted = true;
                        // Test for whether password and confirm password are the same
                        if ( form.$submitted == true && $('#password').val() == $('#confirmPassword').val() )   {
                            // if form is valid, execute the submission handler function and reset form submission state
                            if (form.$valid) {
                                fn(scope, { $event : event });
                                form.$submitted = false;
                            }
                        }  else  {
                            alert("Password and Confirm Password don't match");
                            form.$submitted = false;
                            $('#alertMsg').val("Password and Confirm Password don't match !!"); 
                        }
					});
				});
			}
		};
	}
]);