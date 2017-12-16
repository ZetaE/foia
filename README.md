# foia
Find Object In an Array of objects

## installation
```javascript
npm install foia
```

## usage
```javascript

var arrayofobjects = [
  { a : 'a' , b : 'b' },
  { c : 'c' , d : 'd' }
];

var foundobjindex = foia(arrayofobjects,{ a: 'a' , b : 'b'});
var notfoundobjindex = foia(arrayofobjects,{ a: 'b' , b : 'a'});

//foundobjindex : 0
//notfoundobjindex : -1

```
