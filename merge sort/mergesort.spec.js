describe('Split Array function', function() {
  
  it('is able to split an odd array into two halves', function() {
    expect( split([1, 2, 3, 4, 5]) ).toEqual( [[1,2],[3,4,5]] ); 
  });

  it('is able to split an even array into two halves', function() {
    expect( split([1, 2, 3, 4]) ).toEqual( [[1,2],[3,4]] ); 
  });

});

describe('Merge Sort', function(){
  
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([1,4,8], [2, 6, 10]) ).toEqual( [1,2,4,6,8,10] );
  });

  it("is able to sort an even-numbered array by merging!", function(){
    expect( mergeSort([4,100,25,6,2,78]) ).toEqual( [2,4,6,25,78,100] );
  })

  it("is able to sort an odd-numbered array by merging!", function(){
    expect( mergeSort([4,100,25,6,2,78,69]) ).toEqual( [2,4,6,25,69,78,100] );
  })

});
