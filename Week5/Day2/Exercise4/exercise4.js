const form = document.forms.MyForm;  
console.log(form);

// const radius = document.getElementById('radius');
// const volume = document.getElementById('volume');
// const radius1 = form.'radius'.value;
// const volumeTotal = 0;
form.addEventListener('submit', preventDefault);
function preventDefault(e)
{
    e.preventDefault();
    // if (isNaN(radius) && isNaN(volume)) {
        //     alert('No ingreso un numero');
        // }
        // else {  ס
        //     const volumeTotal = radius.value + volume.value;
        //     console.log(volumeTotal); 
        // }
        valorEsfera();
    }


function valorEsfera()
{
    const radius = document.getElementById('radius');
    const volume = document.getElementById('volume');
    const radiusValor = radius.value;
    const volumeValor = volume.value;
    const volumeTotal = 4 / 3 * Math.PI * Math.pow(radiusValor, 3);
    console.log (volumeTotal + ' es el volumen de la esfera');
}
// console.log(volumeTotal);