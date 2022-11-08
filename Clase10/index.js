let edad = prompt("cuantos años tenes?")

if (edad > 18){
   alert("podes entrar")
   }else if(edad == 18){
     alert("entra pero portate bien")
   }else{
     alert("anda a tu casa que es tarde")
   }
   let numero = 20
   let numeroString= "20"
   let nombre = "Alex"
   
   numero == numeroString
   numero === numeroString
   typeof numero
   typeof numeroString
   
   
   //      indice 0 1 2 3  4  5
   let numeros = [5,4,8,1,56,20]
   
   numeros.length
   numeros[0]
   numeros[1]
   numeros[3]
   
   numeros[0]= "pepe"
   console.log(numeros)
   
   
   let arr2 = [[1,2,3],[4,5,6],[7,8,9]]
   
   arr2[1][2]
   
   // objetos
   
   let persona = {
     nombre: "carlos",
     apellido: "perez",
     altura: "1.81",
     edad: 26,
     saludar: function(){
       console.log(`Hola mi nombre es ${this.nombre}`)
     }
   }
   persona.nombre
   
   // let edad = 20
   
   // if (edad > 18){
   //    console.log("podes entrar")
   //    }else if(edad == 18){
   //      console.log("entra pero portate bien")
   //    }else{
   //      console.log("anda a tu casa que es tarde")
   //    }
   
   
   // bucle el for es el mas recomendable
   for(let i = 0;i<10;i++){
     console.log(i)
   }
   // i=0(inicializador del índice), i<algo (tope del bucle) , i++(incremento del índice)
   
   
   
   
   // let j = 10;
       
       // while (j > 1) {
       // 	console.log("El numero es: " + j);
       // 	j = j - 1;		
       // }
   
   
   
   // let k = 0;
   // do {
   //   console.log("valor de k:", k);
   //   k = k + 1;
   // } while (k<0)
   
   
   // ForEach() se usa para recorrer una array
   
   
   let objetos = ["Varita", "Libro", "Lechuza", "Caldero"];
   objetos.forEach(function(e){console.log(e)});
   
   // map
   let numero4= [1,2,3,4,5,6,7,8,9]
   let numero5= numero4.map((e)=>e*2)
   console.log(numero4)
   console.log(numero4.length)
   console.log(numero5)
   
   
   const numeros7 = [1, 2, 3, 4, 5];
   //La función parámetro generalmente es una función flecha sin cuerpo.
   const encontrado = numeros7.find(elemento => elemento > 3);
   console.log(encontrado)
   
   
   // filter()
   let numero8 = [2, 5, 6, 18, 201];
   numero8.filter(n => { 
   return n > 5
   }); 
   