function Calcular() {
    var fechaInicio = new Date("01" + ' ' + "January" + ', ' + "1901" + ' 12:00:00');
    var fechaFinal = new Date("31" + ' ' + "December" + ', ' + "2000" + ' 12:00:00');
    var fechaAuxiliar = new Date();
    var mes = fechaInicio.getMonth();
    var year = fechaInicio.getFullYear();
    var dias = 0;
    var domingos = 0;

    const contenidoAux = document.querySelector('.contenido');
    if(contenidoAux){
        contenidoAux.remove();
    }

    const fechas = document.querySelector('.fechas');
    const contenidoDiv = document.createElement('DIV');
    contenidoDiv.classList.add('contenido');
    
    const tituloAux = document.querySelector('.titulo-fechas');
    if(tituloAux){
        tituloAux.remove();
    }

    const titulo = document.createElement('H3');
    titulo.textContent = 'Fechas que fueron domingo y primero de algun mes:';
    titulo.classList.add('titulo-fechas');
    fechas.appendChild(titulo);
    fechas.appendChild(contenidoDiv);
    


    //Iterar desde la fecha inicial hasta la fecha final
    while (fechaInicio <= fechaFinal) {
        //Validar en que mes esta la fecha de inicio
        switch (mes) {
            case (8 || 3 || 5 || 10): //Abril, junio, septiembre y noviembre
                dias = 30;
                break;
            case 1: //Febrero 
                dias = 28;
                //Validar si es año bisiesto
                if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
                    dias = 29;
                break;
            default:  //Demas meses
                dias = 31;
                break;
        }
        //sumar la cantidad de dias y la seteamo"enviamos" a la fecha auxiliar
        fechaAuxiliar.setDate(fechaInicio.getDate() + dias);

        //While para iterar desde fechainicio hasta fechaaux
        while (fechaInicio < fechaAuxiliar) {
            //If que valida si es primer dia del mes y si es domingo [0]
            if (fechaInicio.getDay() === 0 && fechaInicio <= fechaFinal && fechaInicio.getDate() === 1) {
                domingos++;
                let fecha = `${fechaInicio.getDate()} - ${fechaInicio.getMonth() + 1} - ${fechaInicio.getFullYear()}`;
                const fechaDomingo = document.createElement('A');
                fechaDomingo.innerHTML = `<span>Fecha:&nbsp </span> ${fecha}`;
                fechaDomingo.classList.add('fecha-domingo');
                var url = `https://www.google.com/search?q=Fecha%3A+${fechaInicio.getDate()}+-+${fechaInicio.getMonth() + 1}+-+${fechaInicio.getFullYear()}&oq=Fecha%3A+${fechaInicio.getDate()}+-+${fechaInicio.getMonth() + 1}+-+${fechaInicio.getFullYear()}&aqs=chrome..69i57j69i58&sourceid=chrome&ie=UTF-8`
                fechaDomingo.setAttribute("href", url);
                contenidoDiv.appendChild(fechaDomingo);
            }
            //Se suma 1 dia a la fecha inicio y se setea
            fechaInicio.setDate(fechaInicio.getDate() + 1);
        }
        //Obtener mes y año para continuar con el while
        mes = fechaInicio.getMonth();
        year = fechaInicio.getFullYear();
    }


    const cantidadDomingosAux = document.querySelector('.cantidad');
    if (cantidadDomingosAux) {
        cantidadDomingos.remove();
    }

    const informacion = document.querySelector('.informacion');

    const cantidadDomingos = document.createElement('H2');
    cantidadDomingos.classList.add('cantidad');
    cantidadDomingos.textContent = "Cantidad de domingos: " + domingos;

    informacion.appendChild(cantidadDomingos)

    alert("Cantidad de domingos: " + domingos);
};