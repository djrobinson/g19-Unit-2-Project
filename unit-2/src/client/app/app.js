'use strict';

console.log('Angular Main Ready To Go!')

/* The main app with route configurations */

angular.module('petApp', ['ngRoute', 'door3.css'])
.config(function($routeProvider){
    console.log('Angular Config Ready To Go!');
    $routeProvider

    /* THESE ARE THE USER RELATED ROUTES */
    // .when('/profile/new', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'UsrProfCtrl'
    // })
    .when('/profile/:id', {
        templateUrl: '/app/views/petTest.html',
        css: '/styles/css/main.css',
        controller: 'UsrProfCtrl'
    })
    // .when('/profile/:id/edit', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'UsrProfCtrl'
    // })
    // .when('/profile/:id/delete', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'UsrProfCtrl'
    // })
    /* THESE ARE THE PET RELATED ROUTES */
    .when('/pets/new', {
        templateUrl: '/app/views/initial_questionaire.html',
        css: '/styles/css/main.css',
        controller: 'MainPetCtrl'
    })
    .when('/pets/main', {
        templateUrl: '/app/views/singlePet.html',
        css: '/styles/css/main.css',
        controller: 'MainPetCtrl'
    })
    .when('/pet/:id', {
        templateUrl: '/app/views/petTest.html',
        controller: 'SinglePetCtrl'
    })
    .when('/pet/:id/edit', {
        templateUrl: '/app/views/putTestForm.html',
        css: '/styles/css/main.css',
        controller: 'SinglePetCtrl'
    })
    .when('/pet/:id/delete', {
        templateUrl: '/app/views/petTest.html',
        css: '../styles/css/main.css',
        controller: 'SinglePetCtrl'
    })
    /* THESE ARE THE VETERINARIAN RELATED ROUTES */
    .when('/vets', {
        templateUrl: '/app/views/petTest.html',
        css: '/styles/css/main.css',
        controller: 'MainVetCtrl'
    })
    // .when('/vet/:id', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'MainVetCtrl'
    // })
    // .when('/vet/new', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'MainVetCtrl'
    // })
    // .when('/vet/:id/edit', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'SingleVetCtrl'
    // })
    // .when('/delete', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'SingleVetCtrl'
    // })
    /* THESE ARE THE VET VISIT ROUTES */
    // .when('/vetvisit/new', {
    //     templateUrl: '/app/views/petTest.html',
    //     css: '/styles/css/main.css',
    //     controller: 'MainVetVisitCtrl'
    // })
    .when('/vetvisits', {
        templateUrl: '/app/views/petTest.html',
        css: '/styles/css/main.css',
        controller: 'MainVetVisitCtrl'
    })
    // .when('/vetvisit/:id', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'SingleVetVisitCtrl'
    // })
    // .when('/vetvisit/:id/edit', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'SingleVetVisitCtrl'
    // })
    // .when('/vetvisit/:id/delete', {
    //     templateUrl: '[view html]',
    //     css: '[view css stylesheet]',
    //     controller: 'SingleVetVisitCtrl'
    // })

    /* DANNY LOGIN TEST AREA */
    .when('/dannytest', {
        templateUrl: '/app/views/dannyTest.html',
        controller: 'LoginCtrl'
    });
});