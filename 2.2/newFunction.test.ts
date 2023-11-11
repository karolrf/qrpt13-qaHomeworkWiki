//!Here we are importing our function called myFunciton from our newFunction.ts file so we can use it in our test.
import { myFunction } from "./newFunction";

describe("myFunction", () => {
  it("returns the word 'true' if I pass the function the number 5", () => {
    expect(myFunction(5)).toBe("true");
  });
  it("returns the word 'false' if I pass in a number less than 5", () => {
    expect(myFunction(1)).toBe("false");
  });
  it("returns the word 'big' if I pass in a numbewr greater than 5", () => {
    expect(myFunction(100)).toBe("big");
  });
  it("returns the word 'negative' if a negative number is passed in", () => {
    expect(myFunction(-1)).toBe("negative");
  });
});


import { blockBuster } from "./newFunction";

describe('Testing blockBuster', () => {
  it("should return the movie set for Movie One", () => {
    expect(blockBuster("movie One")).toBe("Coco"); 
  }); 
  it("should return the movie set for Movie Two", () => {
    expect(blockBuster("movie Two")).toBe("The Boy Who Harnessed The Wind"); 
  }); 
  it("should return the movie set for Movie Three", () => {
    expect(blockBuster("movie Three")).toBe("I'm Thinking of Ending Things"); 
  }); 
  it("should return the movie set for Movie Four", () => {
    expect(blockBuster("movie Four")).toBe("Oppenheimer"); 
  });
  it("should return the movie set for movie five", () => {
    expect(blockBuster("movie Five")).toBe("Top Gun: Maverick"); 
  }); 
  it("should return the default", () => {
    expect(blockBuster("Barbie")).toBe("I'm sorry we do not have Barbie!"); 
  });
}); 