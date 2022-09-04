class Person {
    constructor(name,lastname){
        this.name=name
        this.lastname=lastname
    }
}

class Programmer extends Person{
    constructor(name,lastname,language){
        super(name,lastname)
        this.language=language
    }
}

const gaby = new Person("gaby","villafañe")

console.log(gaby)

const javier= new Programmer("javier","Hoyos","JS")
console.log(javier)
