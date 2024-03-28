//your JS code here. If required.
let student = {
	name : "tamil",
}

Object.prototype.getKeys = function() {
  return Object.keys(this);
};

console.log(student.getkeys());
