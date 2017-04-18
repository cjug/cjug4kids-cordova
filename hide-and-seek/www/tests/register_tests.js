// First argument to 'describe' (which is defined by Jasmine) is the testing module that will
// appear in test reports. The second argument is a callback containing the individual tests.

describe("registerPlayer", function () {
    // The 'it' function of Jasmine defined an individual test. The first argument is
    // a description of the test that's appended to the module name. Because a module name
    // is typically a noun, like the name of the function being tested, the description for
    // an individual test is typically written in an action-data format. 
	var HTMLInputElements = {};
	
	beforeAll(() => {
	  window.onbeforeunload = () => 'Oh no!';
	});


	
	beforeEach(function() {
		window.cordovaHTTP = {};
    	window.cordovaHTTP.post = function(){};
    	spyOn(cordovaHTTP,'post');
    	spyOn(document, 'getElementById').and.callFake(function(ID) {
    	   if(!HTMLInputElements[ID]) {
    	      var newElement = document.createElement('input');
    	      HTMLInputElements[ID] = newElement;
    	   }
    	   return HTMLInputElements[ID];
    	});
    	spyOn(hideandseek, 'redirectTo');
	});
	

    it("test player registration", function () {
        // Invoke the unit being tested as necessary
    	
    	document.getElementById("playerName").value = "test"
    	document.getElementById("team").value = "team1";
    	document.getElementById("row").value = "A";
    	document.getElementById("col").value = "1";
        // Check the results; "expect" and toEqual are Jasmine methods.
    	hideandseek.registerPlayer();
    	expect(cordovaHTTP.post).toHaveBeenCalled();
    	var mostRecentCall = cordovaHTTP.post.calls.mostRecent();
    	expect(mostRecentCall.args[0]).toEqual('http://10.0.2.2:8890/games/hide-and-seek/register');
    	expect(mostRecentCall.args[1]).toEqual({'name': 'test', 'team': 'team1', 'pos': {'row': 'A', 'col': '1'}});
    });
    
    it("test process registration", function(){
    	var jsonResponse = {'data': '{"id": "123"}', 'status': 200};
    	hideandseek.processPlayerRegistration(jsonResponse);
    	
    	expect(window.localStorage.getItem('playerId')).toEqual('123');
    	var redirectArgs = hideandseek.redirectTo.calls.argsFor(0);
    	expect(redirectArgs[0]).toEqual('check.html');
    });
});