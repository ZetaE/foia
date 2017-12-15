var test = require('tape')
var foia = require('./')

var arrayofobjects = [
  { a : 'a' , b : 'b' },
  { c : 'c' , d : 'd' }
];

var emptyarray = [];

test('obj found',function(assert){

  assert.isEqual( foia(arrayofobjects, { a : 'a' , b : 'b'}), 0);
  assert.isEqual( foia(arrayofobjects, { c : 'c' , d : 'd'}), 1);
  assert.end();

});

test('obj not found',function(assert){
  assert.isEqual( foia(arrayofobjects, {}), -1);
  assert.isEqual( foia(arrayofobjects, { obj : 'random' }), -1);
  assert.end();
});

test('empty array', function(assert){
  assert.isEqual( foia(emptyarray , {}), -1);
  assert.isEqual( foia(emptyarray , { a : 'a' }), -1);
  assert.end();
});

test('null values', function(assert){
  assert.isEqual( foia(null , {}), -1);
  assert.isEqual( foia(null , { a : 'a' }), -1);
  assert.isEqual( foia(null , null), -1);
  assert.isEqual( foia([] , null), -1);
  assert.isEqual( foia([{ a : 'a' }] , null), -1);
  assert.isEqual( foia([{ a : 'a' },{ b : 'b' }] , null), -1);
  assert.isEqual( foia([{ a : 'a' },{ b : null }] , null), -1);
  assert.isEqual( foia([{ a : 'a' },{ b : null }] , { b : null }), 1);
  assert.isEqual( foia([{ a : 'a' },{ b : 'b'}] , { c : null }), -1);
  assert.end();
});
