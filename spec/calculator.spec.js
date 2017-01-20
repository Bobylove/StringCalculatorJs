var StringCalculator = require('../lib/calculator').StringCalculator;

describe("StringCalculator execution", function () {

    it("should return 0 when input is null", function () {
        expect(StringCalculator(null)).toBe(0);
    });

   	it("should return 0 when input is empty",function (){
   		expect(StringCalculator("")).toBe(0);
    });

  	it("should return 0 when input is '0'",function (){
		expect(StringCalculator("0")).toBe(0);
 	});

  	it("should return 1 when input is '1'", function () {
  		expect(StringCalculator("1")).toBe(1);
  	});

  	it("should return 3 when input is '1+2'",function () {
  		expect(StringCalculator("1+2")).toBe(3);
  	});
  		it("should return 8 when input is 'bloublou'",function () {
  		expect(StringCalculator("bloublou")).toBe(8);
  	});

});