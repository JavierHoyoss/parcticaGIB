class Mascota{
    constructor(name,raza){
        this.name=name
        this.raza=raza
        }
    pasear(){
        return this.name + " dio un paseo"
    }
}

class Dueña{
    constructor(name,lastname){
        this.name=name
        this.lastname=lastname
        this.mascotas=[]
    }
}
const gaby =new Dueña("gaby","villafañe")
const lore = new Dueña("lore","castañeda")

const negra = new Mascota("negra","esclava")
const jack= new Mascota("jack","golden")
const negro=new Mascota("negro","jujeño")

negra.dueña = gaby;
jack.dueña =lore;
negro.dueña=lore;

gaby.mascotas.push(negra)
lore.mascotas.push(jack,negro)

Mascota.prototype.escaparse = function(){
    return "volve "+ this.name
}
console.log(negra.pasear())
console.log(negra.escaparse())

console.log(negra.dueña.name)
console.log(jack)
console.log(negro)

console.log(gaby)
console.log(lore)

/* class Company{
    constructor(){
        let empleados = []
        this.name="mercadolibre"
    } 
    getEmpleados(){
        return empleados
    }
    setEmpleados(empleado){
        empleados.push(empleado)
    }
} */

function Company(){
    this.name="mercadolibre"
    let empleados= []
    this.getEmpleados = function(){
        return empleados
    }
    this.setEmpleados =function(empleado){
        empleados.push(empleado)
    }
}
const empresa = new Company()

empresa.setEmpleados("javier")
empresa.setEmpleados("gabriela")

console.log(empresa)
console.log(empresa.empleados)
console.log(empresa.getEmpleados())


