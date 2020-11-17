const express = require ('express')
let port=8000
let app =express()


let v=[1,1]
let par=0
let impar=0
setInterval(() => {    
    v.push(v[(v.length-1)] + v[(v.length-2)])
    console.log(v[v.length-1])
    if (v[v.length-1]%2 == 0) {
        par=par+1
    } else {
        console.log('Impar')
        impar=impar+1
    }
    console.log('Total de impares ='+ impar)

    if (impar==50) {
        let sigma=v[v.length-1]
        console.log('Numero de iteraciones: '+ sigma)
        
    }
}, 100000);


for (let index = 0; index < 100000000; index++) {
    v.push(v[(v.length-1)] + v[(v.length-2)])
    console.log(v[v.length-1])
    if (v[v.length-1]%2 == 0) {
        par=par+1
    } else {
        impar=impar+1
    }


    if (impar==50) {
        let sigma=v.length
        console.log('Total de pares '+ par)
        console.log('Total de impares ='+ impar)
        console.log('Numero de iteraciones: '+ sigma)
        break;
        
    }
    
}

app.get('/', function (req, res) {
  res.send('POST request to the homepage: '+ port)
  res.send('POST request to the homepage: '+ v)
})
