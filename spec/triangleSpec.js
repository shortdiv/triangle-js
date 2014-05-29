describe("TRIANGLE", function(){
  describe("which triangle", function(){
    it("should return scalene given 3 unequal lengths", function(){
      expect(which_triangle(3,4,5)).toEqual("scalene")
    })
  })
})