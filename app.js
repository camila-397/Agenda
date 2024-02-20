const input = document.getElementById('ingresar_tarea');
const fecha = document.getElementById('fecha');
const listaTareas = document.getElementById('lista_tareas');
const boton = document.querySelector('button');
const total = document.getElementById('total');

let totalTareas = 0;

function actualizarTotal() 
{
    total.innerText = `Total de tareas: ${totalTareas}`;
}

function agregarTareas() 
{
    if (input.value) 
    {
        //Crear tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        //Texto ingresado por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;

        //Fecha ingresada por el usuatio
        let fechaU = document.createElement('p');
        fechaU.innerText = fecha.value;

        tareaNueva.append(texto, fechaU);

        
        //Crear y agregar contenedor de iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);
        

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);

        iconos.append(completar, eliminar);
        


        //Agragar la tarea a la lista
        listaTareas.appendChild(tareaNueva);

        totalTareas++;
        actualizarTotal();



    } else 
    {
        alert('Por favor ingrese una tarea');
    }


    
}


function completarTarea(e) 
{
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e) 
{
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();

    totalTareas--;
    actualizarTotal();

    if (totalTareas == 0) 
    {
        total.innerText = '';
    }
}




boton.addEventListener('click', agregarTareas);

input.addEventListener('keydown', (e) => 
{
    if (e.key === 'Enter') 
    {
        agregarTareas();
        
    }
});

fecha.addEventListener('keydown', (e) => 
{
    if (e.key === 'Enter') 
    {
        agregarTareas();
        
    }
});