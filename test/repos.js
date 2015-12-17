"use strict";

var assert = require( "assert" );
var request = require( "supertest" );
var app = require( "./server" );

module.exports = function ()
{
    var server;
    before( function ( done )
    {
        app( function ( err, res )
        {
             server = res;
             done( err );
        } );
    } );

    it( "should redirect from repos page", function ( done )
    {
        request( server )
            .get( "/repos" )
            .expect( 302, done );
    } );
};
