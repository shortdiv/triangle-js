describe("TRIANGLE", function(){

  describe("which triangle", function(){
    it("should return scalene given 3 unequal lengths", function(){
      expect(which_triangle(3,4,5)).toEqual("scalene")
    });
  });

  describe("side is valid", function(){
    it("should return false if one side given is not a number", function(){
      expect(side_is_valid("hello")).toEqual(false);
    });

    it("should return false if one side is equal to or less than zero", function(){
      expect(side_is_valid(0)).toEqual(false);
    })
  });

  describe("triangle is valid", function(){
    it("should return invalid if any of the sides is invalid", function(){
      expect(triangle_is_valid(3,4,0)).toEqual("Triangle has an invalid side!");
    })
  })


});
