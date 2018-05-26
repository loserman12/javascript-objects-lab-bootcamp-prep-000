var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
<<<<<<< HEAD
  var newObj = Object.assign({}, object); 
    return delete object.key;
 }
 
 function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key];
    return object;
 }
  
=======
  return newObj = Object
  
}
>>>>>>> fc306b3e4989ef2772a4764d74aeadb4cd9d6c40
