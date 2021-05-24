let Estado = 1;
let Inicio = 0;
var Estados = [
    {
        Columna: 1,
        Estado : 2
    },
    {
        Columna: 2,
        Estado : 2
    },
    {
        Columna: 3,
        Estado : 2
    },
    {
        Columna: 4,
        Estado : 2
    },
    {
        Columna: 5,
        Estado : 2
    },
    {
        Columna: 6,
        Estado : 2
    },
    {
        Columna: 7,
        Estado : 2
    },
    {
        Columna: 8,
        Estado : 2
    },
    {
        Columna: 9,
        Estado : 2
    }
];
// x = 1
// 0 = 0

function Selecionar(Nombre){
   
    if(Inicio != 0){
        if(Estado < 10){
            if(Estados[Nombre - 1].Estado  == 2){
                if(Estado % 2 != 0){
                    $("#"+Nombre).text('x');
                    Estados[Nombre -1].Estado = 1;  
                          
                }else{
                    $("#"+Nombre).text('0');
                    Estados[Nombre -1].Estado = 0;
                     
                }
                Estado ++;
                ValidarGuardar();
                Tiempo(1)
            }else{
                alert('Ya Tiene Valor');
            }
            
        }else{
            alert('Juego Terminado');
        }
    }else{

    }

}

function Resetear(){
    location.reload();
}

function ValidarGuardar(){
    

    var Columna1 = Estados[0].Estado;
    var Columna2 = Estados[1].Estado;
    var Columna3 = Estados[2].Estado;
    var Columna4 = Estados[3].Estado;
    var Columna5 = Estados[4].Estado;
    var Columna6 = Estados[5].Estado;
    var Columna7 = Estados[6].Estado;
    var Columna8 = Estados[7].Estado;
    var Columna9 = Estados[8].Estado;

    if(Columna1 == Columna2 && Columna1 == Columna3 && Columna1 !=2){
       
        alert('Ganador' + Columna1)
    }else if(Columna1 == Columna6 && Columna1 == Columna9 && Columna1 !=2){
         alert('Ganador' + Columna1)
    }else if(Columna1 == Columna4 && Columna1 == Columna7 && Columna1 !=2){
         alert('Ganador' + Columna1)
    }else if(Columna4 == Columna5 && Columna4 == Columna6 && Columna4 !=2){
       
        alert('Ganador' + Columna4)
    }else if(Columna7 == Columna8 && Columna7 == Columna9 && Columna7 !=2){
      
        alert('Ganador' + Columna7)
    }else if(Columna2 == Columna5 && Columna2 == Columna8 && Columna2 !=2){
     
        alert('Ganador' + Columna2)
    }else if(Columna3 == Columna5 && Columna3 == Columna7 && Columna3 !=2){
      
        alert('Ganador' + Columna3)
    }
}

function Iniciar(){
    Inicio = 1;
    $(".BtnIniarJuego").hide('slow');
    setInterval(Tiempo, 1000);
}
var ContadorTiempo = 0;
var EstadoTimepo    = 1;

function Tiempo(Nombre){
    if(Nombre == 1){
        ContadorTiempo = 0;
    }
    $(".H1Conteo").text(ContadorTiempo);
    ContadorTiempo ++;
    if(ContadorTiempo == 12 && EstadoTimepo == 1){
        alert('Debes Elegir una Cassila antes de otros 10 segundos');
        ContadorTiempo = 0;
        EstadoTimepo = 0;

    }else if(ContadorTiempo == 12 && EstadoTimepo == 0){
        if(Estado % 2 == 0){
            $(".Ganador").text('Por no elegir a tiempo el ganador es: X')
           Inicio = 0;
        }else{
            $(".Ganador").text('Por no elegir a tiempo el ganador es: 0')
           Inicio = 0;
        }
        $(".H1Conteo").hide('slow');
    }
}

