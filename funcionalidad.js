let coin = document.getElementById("jugar")
coin.addEventListener('click', () => {

    let cont=1,p=0, d, t, a=0,j = (document.getElementById("j").value), s = Math.floor(Math.random()*2)+1


    do {
        d = prompt("¿Cuanto desea apostar?")
        
        if(d > 0){
            if(j == "cara" && s == 1) {
                t = d*2;
                p=p+1
                alert ("Usted ha ganado la opción de la maquina es cara y tiene un total de: "+ t )
                alert ("Has jugado " +p+ " veces")
            }
            else if (j == "sello" && s == 1) {
                t = d-a;
                p=p+1
                alert("Usted ha perdido la opción de la maquina es cara y tiene un total de: " + t)
                alert ("Has jugado " +p+ " veces")
            }
            else if (j == "sello" && s == 2) {
                t = d*2 ;
                p=p+1
                alert("Usted ha ganado la opción de la maquina es sello y tiene un total de: " + t)
                alert ("Has jugado " +p+ " veces")
            }
            else if (j == "cara" && s == 2) {
                t = d- d;
                p=p+1
                alert("Usted ha perdido la opción de la maquina es sello y tiene un total de: " + t)
                alert ("Has jugado " +p+ " veces")
            }
             a=a+t
            cont = prompt("el total de las apuestas es "+a+" si quieres seguir jugando presione 1, para salir y cambiar tu opci'on o dejar de jugar presione 2") 
        }
    else if(d <= 0){
    alert ("intente de nuevo, con un valor disponible")
    }    
    }  while(cont==1)
})

