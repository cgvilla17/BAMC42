

let a = [1,23,5,1,5]
/* and &&  or||
v/f  f     V/F V
f/v  f     F/V V
f/f  f     F/F F
V/V V      V/V V
usuarios y contraseñas sean correctos
0 falso
1 ... true
*/
console.log(a.length && true)
a.length
console.log(a.length && a)
 
if(a.length && true){
  console.log("el array tiene algo")
}else{
  console.log("el array esta vacio")
}
function saludar (nombre, apellido){
    return `Bienvenido a la programacion ${nombre} ${apellido}`
  }
  let resultado= saludar("Carla","Albanese")
  let resultado2= saludar("Cristian","Solari")
  let resultado3= saludar("Cinthia","Flores")
  
  
  console.log(resultado)
  console.log(resultado2)
  console.log(resultado3)



  
  function saludar (nombre, apellido,SerieFavorita ){
    return `Hola ${nombre} ${apellido} ${SerieFavorita} es tu serie favorita `
 }
 let resultado= saludar("Jon","Snow","Game of Thrones")
 let resultado2= saludar("Aria","Stark","Game of Thrones")
 let resultado3= saludar("sanza","Stark","Game of Thrones")
 let resultado4= saludar("Sersei","Lannister","Game of Thrones")
 
 
 console.log(resultado)
 console.log(resultado2)
 console.log(resultado3)
 console.log(resultado4)
   