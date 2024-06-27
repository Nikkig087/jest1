/**
 * @jest-environment jsdom 
 */

const buttonClick = require("../button");

/*paragraph from webpage test only

before each test is run this runs
beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>"; 
    
    //this is how we would replace the html text in a webpage, we just put the piece of the webpage we want to test her, in this case it a paragraph witih the id par
});
*/

beforeAll(() => {
let fs = require("fs") // allows us to open, read and write files

// we need to use fs to read the contents of the html and store it in a varible called file contents
let fileContents =fs.readFileSync("index.html","utf-8")

document.open()
document.write(fileContents)
document.close()

});


describe("DOM tests", () => {

 //what we expect
    test("Expects content to change", () => {
    //when
        buttonClick();
        //results
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
            //we want to get the innerhtml of the paragraph with the id of par and we expect it to equal you clicked
    });
});


//so we are checking the content of our Mock DOM paragraph to see does it have the text we expect



    //what we expect
       test("Test if our H1 exsists", () => {
           //results
           expect(document.getElementsByTagName("h1").length).toBe(1);
               /**
                * This test gets all the h1 tags and stores them in an array, if the length of the array is 1 then we have a h1
                */
       });
   