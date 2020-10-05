export class Employee {
    constructor(id, lastname, firstname, middlename, position, login) {
        this.id = id
        this.lastname = lastname
        this.firstname = firstname
        this.middlename = middlename
        this.position = position
        this.login = login
        this.value = (lastname + " " + firstname)
    }
}