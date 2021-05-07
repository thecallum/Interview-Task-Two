/*
    I havent done any testing in Vue/JavaScript, so I have outlined how I would run the tests.
*/

function postcode_whenInvalid_showsErrorMessage(postcode) {
    // setup
    var vueInstance = ();

    // run method 
    var result = vueInstance.postcodeIsValid(postcode);

    // test result
    Assert.that(result).isTrue();
}

const invalidPostcodes = []

invalidPostcodes.forEach(postcode => {
    postcode_whenInvalid_showsErrorMessage(postcode)
});

