var app = angular.module('app', ['ngRoute', 'ngAnimate', 'route-segment', 'view-segment', 'moduleNavBar', 'appControllersDev', 'appDirectivesDev'
   ,'myApp.filters'
   ,'myApp.services'
   ,'myApp.directives'
   ,'myApp.controllers'
   ,'UserAppIO'   //this is from file appUserIO
	]);

app.config(function($routeSegmentProvider, $routeProvider) {
    
    // Configuring provider options
    
    $routeSegmentProvider.options.autoLoadTemplates = true;
    
    // Setting routes. This consists of two parts:
    // 1. `when` is similar to vanilla $route `when` but takes segment name instead of params hash
    // 2. traversing through segment tree to set it up
  
    $routeSegmentProvider
        .when('/',          'h0')   
      
        .when('/product',          'h01')
        .when('/product/prefs',    'h01.prefs')
        .when('/product/:id',      'h01.itemInfo.tab1')
        .when('/product/:id/X',    'h01.itemInfo.tab1')
        .when('/product/:id/Y',    'h01.itemInfo.tab2')

        .when('/myAccount',          'a01')
        .when('/myAccount/:id',      'a01.deptInfo.xtab1')
        .when('/myAccount/:id/X',    'a01.deptInfo.xtab1')
        .when('/myAccount/:id/Y',    'a01.deptInfo.xtab2')

        .when('/section2',          'h2')
        .when('/section2/:id',      'h2.itemInfo')
        
        .when('/featuredCompanies',          'h3')
        .when('/support',          'h4')

	    .when('/login', 'sL')   
	    .when('/registerUser', 'sRU') 
	    .when('/registerAccount', 'sRA') 
    

		.when('/about', 'fAbout')
		.when('/vendors', 'fVendors')
		.when('/terms', 'fTerms')
		.when('/privacy', 'fPrivacy')
		//.when('/support', 'fSupport')
		.when('/faq', 'fFAQ')
		.when('/contact', 'fContact')


        .segment('h01', {
            templateUrl: 'templates/product.html',
            controller: MainCtrl})
            
        .within()
            
            .segment('home', {
                templateUrl: 'templates/product/home.html'})
 
				
            .segment('itemInfo', {
                templateUrl: 'templates/product/item.html',
                controller: ProductItemCtrl,
                dependencies: ['id']})
                
            .within() 
                
                .segment('tab1', {
                    templateUrl: 'templates/product/tabs/tab1.html'})

                .segment('tab2', {
                    templateUrl: 'templates/product/tabs/tab2.html'})
					
            .up()
               
        .up()

		.segment('h2', {
            templateUrl: 'templates/section2.html',
            controller: MainCtrl})
            
        .within()
            
            .segment('itemInfo', {
                templateUrl: 'templates/section2/item.html',
                dependencies: ['id']})
                
        .up()

        .segment('a01', {
            templateUrl: 'templates/myAccount.html',
            controller: MainCtrl})
            
        .within()
            
            .segment('deptInfo', {
                templateUrl: 'templates/myAccount/item.html',
                controller: MyAccountItemCtrl,
                dependencies: ['id']})
                
            .within() 
                
                .segment('xtab1', {
                    templateUrl: 'templates/myAccount/tabs/xtab1.html'})
               
            .up()
               
        .up()

        .segment('h0', {
            templateUrl: 'templates/homePage.html'})

        .segment('h3', {
            templateUrl: 'templates/featuredCompanies.html'})

  
        .segment('h4', {
            templateUrl: 'templates/support.html'})
			
		.segment('sL', {
			templateUrl: 'templates/login.html', public: true})

		.segment('sRU', {
			templateUrl: 'templates/registerUser.html', public: true})

        .segment('sRA', {
            templateUrl: 'templates/registerAccount.html', public: true})

		.segment('fAbout', {
			templateUrl: 'templates/about.html'})

		.segment('fVendors', {
			templateUrl: 'templates/vendors.html'})

		.segment('fTerms', {
			templateUrl: 'templates/terms.html'})

		.segment('fPrivacy', {
			templateUrl: 'templates/privacy.html'})

		.segment('fFAQ', {
			templateUrl: 'templates/faq.html'})

		.segment('fContact', {
			templateUrl: 'templates/contact.html'})


			
    // Also, we can add new item in a deep separately. This is useful when working with
    // routes in every module individually
            
    $routeSegmentProvider
                    
        .when('/product/:id/Z',    'h01.itemInfo.tab3')  
        
        .within('h01')
            .within('itemInfo')
                .segment('tab3', {
                    templateUrl: 'templates/product/tabs/tab3.html'})

    $routeSegmentProvider
                    
        .when('/myAccount/:id/Z',    'a01.deptInfo.xtab1')  
        
        .within('a01')
            .within('deptInfo')
                .segment('xtab3', {
                    templateUrl: 'templates/myAccount/tabs/tab3.html'})
					
    // This is some usage of `resolve`, `untilResolved` and `resolveFailed` features
                    
    $routeSegmentProvider

        .when('/invalid-template', 'h01.invalidTemplate')
        .when('/invalid-data', 'h01.invalidData')
        .when('/slow-data', 'h01.slowDataSimple')
        .when('/slow-data-loading', 'h01.slowDataLoading')
        .when('/inline-view', 'h01.inlineParent.inlineChildren')
        .when('/product/:id/slow',    'h01.itemInfo.tabSlow')
        
        .within('h01')
            .segment('invalidTemplate', {
                templateUrl: 'this-does-not-exist.html',    // 404
                resolveFailed: {
                    templateUrl: 'templates/error.html',
                    controller: 'ErrorCtrl'
                }
            })
            .segment('invalidData', {
                templateUrl: 'templates/product/home.html',     // Correct!
                resolve: {
                    data: function($q) {
                        return $q.reject('ERROR DESCRIPTION');     // Failed to load data
                    }
                },
                resolveFailed: {
                    templateUrl: 'templates/error.html',
                    controller: 'ErrorCtrl'
                }
            })
            .segment('slowDataSimple', {
                templateUrl: 'templates/product/slow-data.html',
                controller: 'SlowDataCtrl',
                resolve: {
                    data: function($timeout, loader) {
                        loader.show = true;
                        return $timeout(function() { return 'SLOW DATA CONTENT'; }, 2000);
                    }
                }
            })
            .segment('slowDataLoading', {
                templateUrl: 'templates/product/slow-data.html',
                controller: 'SlowDataCtrl',
                resolve: {
                    data: function($timeout) {
                        return $timeout(function() { return 'SLOW DATA CONTENT'; }, 2000);
                    }
                },
                untilResolved: {
                    templateUrl: 'templates/loading.html'
                }
            })
            .segment('inlineParent', {
                templateUrl: 'templates/product/inline-view.html'
            })
            .within()
                .segment('inlineChildren', {
                    // no template here
                    controller: 'SlowDataCtrl',
                    resolve: {
                        data: function($timeout) {
                            return $timeout(function() { return 'SLOW DATA CONTENT'; }, 2000);
                        }
                    },
                    untilResolved: {
                        templateUrl: 'templates/loading.html'
                    }
                })
                .up()

            .within('itemInfo')
                .segment('tabSlow', {
                    templateUrl: 'templates/product/slow-data.html',
                    controller: 'SlowDataCtrl',
                    resolve: {
                        data: function($timeout) {
                            return $timeout(function() { return 'SLOW DATA CONTENT'; }, 2000);
                        }
                    },
                    untilResolved: {
                        templateUrl: 'templates/loading.html'
                    }
                })

     $routeProvider.otherwise({redirectTo: '/product'}); 

})

 
app.run(function($rootScope, user) {
	// Initiate the user service with a UserApp App Id
    //user.init({ appId: '52c994cd601c5' });
}) ;


app.value('loader', {show: false});

function MainCtrl($scope, $routeSegment, loader) {

    $scope.$routeSegment = $routeSegment;
    $scope.loader = loader;

    $scope.$on('routeSegmentChange', function() {
        loader.show = false;
    })
}
