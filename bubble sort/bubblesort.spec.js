describe('Bubble Sort', function(){
  
  beforeEach(function(){
  	spyOn(window, 'swap').and.callThrough();
  	spyOn(window, 'compare').and.callThrough();
  });

  afterEach(function(){
  	console.log('Swaps performed: ' + swap.calls.count());
  	console.log('Comparisons made: ' + compare.calls.count());
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of length 1', function(){
  	expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles an array of length > 1', function(){
  	expect( bubbleSort([1, 7, 5, 6, 2]) ).toEqual( [1, 2, 5, 6, 7] );
  });

  it('handles an array of length > 1', function(){
  	expect( bubbleSort([98, 53, 5, 6, 2, 27, 45, 3]) ).toEqual( [2, 3, 5, 6, 27, 45, 53, 98] );
  });


});