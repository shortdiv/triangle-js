describe("TRIANGLE", function(){
  describe("which triangle", function(){
    it("should return the triangle given 3 lengths", function(){
      expect(which_triangle(3,4,5)).toEqual("scalene")
    })
  })
})