var arreglo =[];

arreglo[0]= 0;
arreglo[1]= 1;
arreglo[2]= 'hola';

//agregar a la ultima posiscion
arreglo.push('nuevo dato');

//agregar en la primera posicion
arreglo.unshift('primero');


//eliminar ultimo elemento
arreglo.pop();


//eliminar el primer elemento
arreglo.shift();

//eliminar por posicion determinada
arreglo.splice(4,0,43,87);

//arreglo[3]= 23;

//console.log(arreglo);

for(var i=0; i< arreglo.length; i++){
    console.log(arreglo[i]);

}

for(var i in arreglo){
    console.log('for in: '+arreglo[i]);
}

for(var i of arreglo){
    console.log('for of: '+i);
}

//x = '2';
//y = '2';
//console.log(x + y);
//x = parseInt(x); // se convierte el string en numero
//y = parseInt(y); // se convierte el string en numero 
//console.log(x + y); // suma de dos numeros no string 

