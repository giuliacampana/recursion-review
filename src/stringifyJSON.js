// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // return a stringified object
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }



  if (Array.isArray(obj)) {
    if(obj.length) {
      var arr= [] 
      
      obj.forEach(function(element) {
        arr.push(stringifyJSON(element))
      });

      return '[' + arr.join(',') + ']';

    } else {

      return '[]'

    }

  }

  if (typeof obj === 'object') {

    if(obj=== null || undefined) {
        return ''+ obj;
    }
    
    var keys= Object.keys(obj)  

    if (keys.length) {
      
      var str=''
      for (var i=0; i< keys.length; i++) {
        var key = keys[i];

        if (typeof obj[key]=== 'function' || typeof obj[key]=== undefined) {
          
            return '{}';
        } 
        
        
        if (i < keys.length - 1) {
          str += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[key])+ ',';
        }

        if (i === keys.length - 1) {
          str += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[key]);
        }
      }
      
      return '{'+ str + '}';

    } else {
      return '{}';
    }

  }

  return ''+ obj;  
};
