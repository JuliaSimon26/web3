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
	var a_Props = Object.getOwnPropertyNames(a);
    var b_Props = Object.getOwnPropertyNames(b);
    if (a_Props.length != b_Props.length) { //если не совпадает длина - сразу останавливаемся
        return false;
    }

    for (var i = 0; i < a_Props.length; i++) {
        var propName = a_Props[i];
        if (a[propName] !== b[propName]) {
            return false; 
        }
	}
	return true;
}
console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false