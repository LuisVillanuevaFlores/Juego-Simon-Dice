function persona(nombre,edad,altura){
    this.nombre=nombre;
    this.edad=edad;
    this.altura=altura;
}


persona.prototype.soy_alto=function(){
    if(this.altura>1.8){
        console.log("soy alto")
    }

    else{
        console.log("soy chato")
    }
}

var luis=new persona("luis",21,1.5)
