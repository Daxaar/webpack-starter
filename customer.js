export default class Customer {
  constructor(firstname, lastname){
    this.firstName = firstname;
    this.lastName = lastname;
  }

  getName(){
    return this.firstName + ' ' + this.lastName;
  }
}
