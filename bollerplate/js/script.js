console.log('you are at ' + window.location);

//document.getElementsByTagName('div')
//document.getElementsByClassName('myClassName')
//document.getElementsById('myIdName')
//document.querySelector('anySelector')
//document.querySelectorAll('allSelector')


class Customer {
	constructor(name) {
		this.name = name;
	}
	buy() {
		console.log("Куплено");
	}
}

class ChildCustomer extends Customer {
	getPresent() {
		console.log("Шарик в подарок");
	}
}

const customer = new Customer("Вася");
console.log(customer.name);
customer.buy();

const childCustomer = new ChildCustomer("Васясон")
console.log(childCustomer.name);
childCustomer.buy();
childCustomer.getPresent();

