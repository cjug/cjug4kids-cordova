// First argument to 'describe' (which is defined by Jasmine) is the testing module that will
// appear in test reports. The second argument is a callback containing the individual tests.

describe("check", function () {
    // The 'it' function of Jasmine defined an individual test. The first argument is
    // a description of the test that's appended to the module name. Because a module name
    // is typically a noun, like the name of the function being tested, the description for
    // an individual test is typically written in an action-data format. 
	var HTMLInputElements = {};
	
	beforeAll(() => {
	  window.onbeforeunload = () => 'Oh no!';
	});


	
	beforeEach(function() {
		window.localStorage.setItem("playerId", "123");
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
	

    it("test check spot", function () {
        // Invoke the unit being tested as necessary

    	document.getElementById("row").value = "A";
    	document.getElementById("col").value = "1";
        // Check the results; "expect" and toEqual are Jasmine methods.
    	hideandseek.checkSpotButtonAction();
    	expect(cordovaHTTP.post).toHaveBeenCalled();
    	var mostRecentCall = cordovaHTTP.post.calls.mostRecent();
    	expect(mostRecentCall.args[0]).toEqual('http://10.0.2.2:8890/games/hide-and-seek/check');
    	expect(mostRecentCall.args[1]).toEqual({'row': 'A', 'col': '1'});
    	expect(mostRecentCall.args[2]).toEqual({'playerId': '123'});
    });
    
    it("test check spot by row", function() {
    	document.getElementById("row").value = "A";
    	hideandseek.checkSpotByRow();
    	expect(cordovaHTTP.post).toHaveBeenCalled();
    	var mostRecentCall = cordovaHTTP.post.calls.mostRecent();
    	expect(mostRecentCall.args[0]).toEqual('http://10.0.2.2:8890/games/hide-and-seek/check');
    	expect(mostRecentCall.args[1]).toEqual({'row': 'A', 'col': '10'});
    	expect(mostRecentCall.args[2]).toEqual({'playerId': '123'});
    });
    
});