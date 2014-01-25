var app = angular.module('appControllersDev', []);

function MyAccountCtrl($scope, $routeSegment) {
    
    $scope.$routeSegment = $routeSegment;
    $scope.test = { btnClicked: false };
    $scope.navItems = [ "Inventory","Implants","Reports","Order History","Users", "Profile" ];
}

function MyAccountItemCtrl($scope, $routeSegment) {

    $scope.$routeSegment = $routeSegment;
    $scope.item = { id: $routeSegment.$routeParams.id };
    $scope.test = { textValue: '' };
}


function ProductCtrl($scope, $routeSegment) {
    
    $scope.$routeSegment = $routeSegment;
    $scope.test = { btnClicked: false };
    $scope.items = [ 'Alloys','Bleeching & Whitening', 'Cement & Liners', 'Crown & Bridge','Equipment',  'Finishing & Polishing', 'Gloves','Implant Products', 'Instrutments' ];
    //$scope.items = [ 1,2,3,4,5 ];
}

function ProductItemCtrl($scope, $routeSegment) {

    $scope.$routeSegment = $routeSegment;
    $scope.item = { id: $routeSegment.$routeParams.id };
    $scope.test = { textValue: '' };
}

function Section2Ctrl($scope, $routeSegment) {

    $scope.$routeSegment = $routeSegment;
    $scope.test = { textValue: '' };
    $scope.items = [ 1,2,3,4,5,6,7,8,9 ];
}

function ErrorCtrl($scope, error) {
    $scope.error = error;
}

function SlowDataCtrl($scope, data, loader) {
    loader.show = false;
    $scope.data = data;
}

function RegisterUserCtrl($scope, $routeSegment) {
    $scope.person ={}; 
    $scope.person.selectedAccountType = null;
    $scope.person.selectedProvince = null;
    $scope.person.selectedSecurityQuestionsPublicUser = null;;

    $scope.person.accountType = [ { 'item' : 'Dental Professional'},{ 'item' : 'Public User' }];
        
    $scope.person.province = [ { 'item' : 'Alberta'},{ 'item' : 'British Columbia'},{ 'item' : 'Manitoba'},{ 'item' : 'New Brunswick'},{ 'item' : 'Newfoundland and Labrador'},{ 'item' : 'Nova Scotia'},{  'item': 'Northwest Territories'},{ 'item' : 'Nunavut'},{ 'item' : 'Ontario'},{ 'item' : 'Prince Edward Island'},{ 'item' : 'Quebec'},{ 'item' : 'Saskatchewan'},{ 'item' : 'Yukon'}];


    $scope.person.securityQuestionsPublicUser = [ {'item' : "1. Who is the mascot of your favourite sports team?"},{ 'item' : "2. In what city were you born?"},{ 'item' : "3. On what street did you grow up?"},{ 'item' : "4. What is your mother's maiden name?"},{ 'item' : "5. What was the name of your first pet?"},{ 'item' : "6. What is the name of your oldest sibling?" }];
    
    $scope.sendForm = function() {
        alert('Register User - form is valid, sending request...');
    }; 
    
    $scope.reset = function() {
        // Reset field to pristine state, its initial state!        
        $scope.person.selectedAccountType = null;
        $scope.person.firstName = null;
        $scope.person.lastName = null;
        $scope.person.occupation = null;
        $scope.person.address = null;
        $scope.person.unitSuite = null;
        $scope.person.city = null;
        $scope.person.selectedProvince = null;
        $scope.person.postalCode = null;
        $scope.person.telephone = null;
        $scope.person.email = null;
        $scope.person.username = null;
        $scope.person.password = null;
        $scope.person.confirmPassword = null;
        $scope.person.selectedSecurityQuestionsPublicUser = null;
        $scope.person.securityAnswer = null;
    };    
}

function RegisterAccountCtrl($scope, $routeSegment) {
    $scope.company ={}; 
    $scope.company.selectedTypeOfPractice;
    $scope.company.selectedProvince;
    $scope.company.selectedPosition;    
    $scope.company.selectedSecurityQuestionsPro;    
    
    $scope.company.typeOfPractice = [ { 'item' : 'General Dentistry'},{ 'item' : 'Endodontics'},{ 'item' : 'Pediatrics'},{ 'item' : 'Oral Surgery'},{ 'item' : 'Periodontics'},{ 'item' : 'Prostodontics'},{ 'item' : 'Orthodontist'},{ 'item' : 'Denturist'},{ 'item' : 'Other' }];
    
    $scope.company.position = [ { 'item' : 'Owner'},{ 'item' : 'Associate'},{  'item' : 'Dental Assistant'},{ 'item' : 'Hygienist'},{ 'item' : 'Receptionist'},{  'item' : 'Office Manager'},{  'item' : 'Other' } ];
    
    $scope.company.province = [ { 'item' : 'Alberta'},{ 'item' : 'British Columbia'},{ 'item' : 'Manitoba'},{ 'item' : 'New Brunswick'},{ 'item' : 'Newfoundland and Labrador'},{ 'item' : 'Nova Scotia'},{  'item': 'Northwest Territories'},{ 'item' : 'Nunavut'},{ 'item' : 'Ontario'},{ 'item' : 'Prince Edward Island'},{ 'item' : 'Quebec'},{ 'item' : 'Saskatchewan'},{ 'item' : 'Yukon'}];

    $scope.company.securityQuestionsDentalPro = [ {'item' : "1. What year did you graduate from dental school?"},{ 'item' : "2. In what city did you attend dental school?"},{ 'item' : "3. Who is the mascot of your favourite sports team?"},{ 'item' : "4. On what street did you grow up?"},{ 'item' : "5. What is your mother's maiden name?"},{ 'item' : "6. What was the name of your first pet?" }];

    $scope.sendForm = function() {
        alert('Register Account - form is valid, sending request...');
    };
    
    $scope.reset = function() {
        // Reset field to pristine state, its initial state!        
        $scope.company.selectedTypeOfPractice = null;
        $scope.company.companyName = null;
        $scope.company.firstName = null;
        $scope.company.lastName = null;
        $scope.company.licenseNum = null;
        $scope.company.selectedPosition = null;       
        $scope.company.address = null;
        $scope.company.unitSuite = null;
        $scope.company.city = null;
        $scope.company.selectedProvince = null;
        $scope.company.postalCode = null;
        $scope.company.telephone = null;
        $scope.company.email = null;
        $scope.company.username = null;
        $scope.company.password = null;
        $scope.company.confirmPassword = null;
        $scope.company.selectedSecurityQuestionsPro = null;
        $scope.company.securityAnswer = null;
    };        
}