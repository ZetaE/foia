module.exports = function findObjectInArray(arraytosearch, obj) {
  var keys = [];
  var values = [];

  for(const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)){
      keys.push(key);
      values.push(obj[key]);
    }
  }
  var objlength = keys.length;
  for (var i = 0; i < arraytosearch.length; i++) {
    var counter = 0;
    for (var j = 0; j < objlength; j++){
      if(arraytosearch[i][keys[j]] === values[j]){
        counter++;
      }
      else{
        break;
      }
    }
		if (counter === objlength){
      return i;
    }
  }
  return -1;
}
