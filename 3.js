const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

// Реализуйте функцию isEquivalent
function isEquivalent(a, b) {
    return (a.name === b.name && a.weight === b.weight) 
}
console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false