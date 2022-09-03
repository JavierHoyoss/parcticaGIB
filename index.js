const impresora = {
    color: "black",
    tamaño: "medium",
    conexiones: ['USB', 'WIFI','puerto'],
    marca: "epson",
    realizarImpresion(){
        return "se imprimio una hoja"
    } ,
    mostrarCaracteristicas(){
        return this.color + " " + this.tamaño + " "+this.marca
    }
}
//constructor de clase
function Impresora(){
    this.color= ""
    this.tamaño = ""
    this.conexiones=[]
    this.marca =""
    this.realizarImpresion = function(){
        return "se imprimio una hoja"
    },
    this.mostrarCaracteristicas = function(){
        return this.color + " " + this.tamaño + " "+this.marca
    } 
}
const impresora2 = new Impresora()
impresora2.color = "gris"
impresora2.tamaño= "large"
impresora2.marca="HP"
console.log(impresora2.mostrarCaracteristicas())
console.log(impresora2.realizarImpresion())

// function Mascota(name,raza,dueño){
//     this.name = name
//     this.raza = raza
//     this.dueño = dueño
//     this.pasear = function(){
//         return "sali a dar un  paseo"
//     }
// }

class Mascota{
    constructor(name,raza,dueño){
        this.name=name
        this.raza=raza
        this.dueño=dueño
        }
    pasear(){
        return this.name + " dio un paseo"
    }
}

const negra = new Mascota("negra","esclava","gaby")

Mascota.prototype.escaparse = function(){
    return "volve "+ this.name
}
console.log(negra.pasear())
console.log(negra.escaparse())

