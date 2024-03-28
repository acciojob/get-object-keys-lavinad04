Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage:
const obj = {
  name : "alvi"
};

console.log(obj.getKeys()); // Output: ['a', 'b', 'c']

