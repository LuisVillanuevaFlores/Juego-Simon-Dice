const api_url="https://swapi.dev/api/";
const people_url='people/:id';


const opts={crossDomain:true};


function obtener_personaje(id){
    return new Promise((resolve,reject)=>{
    const url=`${api_url}${people_url.replace(':id',id)}`
    $.get(url,opts,function(data){
        resolve(data);
    })
    .fail (()=>reject(id))
    
    
})}


var ids=[1,2,3,4,5,6,7];

var promesas= ids.map(function(id){
    return obtener_personaje(id);
})

Promise
        .all(promesas)
        .then (function(personaje){
            console.log(personaje);
        })
        .catch (function(id){
            console.log(id);
        })





// obtener_personaje(4);
// obtener_personaje(23);