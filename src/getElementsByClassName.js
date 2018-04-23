// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className,node
) {
  
  node= node || document.body;
  // create results array to push into
  var results =[]
  // if className matches givenName
  if(node.classList){
      if(node.classList.contains(className)) {
          results.push(node);
      }
  }
      
  for(var i = 0; i < node.children.length; i++) {
      var child= getElementsByClassName(className, node.children[i]);
      results= results.concat(child);
  }
  

  return results;
};
