window.onload = load;

function load() {
    //Entorno:
    var formulario = document.getElementById('formulario');
    var enviar = false;

    //Inputs
    var nombre = document.getElementById("nombre");
    var ape = document.getElementById("apellidos");
    var edad = document.getElementById("edad");
    var nif = document.getElementById("nif");
    var email = document.getElementById("email");
    var provincia = document.getElementById("provincia");
    var fecha = document.getElementById("fecha");
    var telefono = document.getElementById("telefono");
    var hora = document.getElementById("hora");
    var error = document.getElementById("errores");

    //Pattern:
    var patternNomApe = /(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/;

    //Con el simbolo '^', indico que debe empezar por lo siguiente que indique
    //'\d' para representar digitos.
    //Los {} para hacer referencia al numero de ocurrencias.
    //'\-' representar el guion.
    //[a-z] para representar el rango de valores del abecedario.
    //El '$' para indicar con lo que tiene que terminar la cadena.
    //Fuera del pattern utilizo 'i', para que no diferencie entre mayusculas y minusculas.
    var patternNif = /^\d{8}\-[a-z]$/i;

    // ^ Busca el principio de nuestra cadena.
    // \w+ Busca una o más palabras alfanuméricas incluyendo el guión subrayado (_). Equivalente a [a-zA-Z0-9_]
    // [\.-]  (\) Indica que el siguiente carácter es especial y no para ser interpretado. (.-) permite nuestros caracteres punto (.) y guión (-)
    // ? Permite que haya 0 o 1 vez nuestra expresión anterior (.-)
    // \w+ Busca una o más palabras alfanuméricas incluyendo el guión subrayado (_). Equivalente a [a-zA-Z0-9_]
    // *  Permite 0 o más veces la expresión anterior ([.-]?\w+)
    // @ Permite solamente el carácter arroba (@)
    // \w+([.-]?\w+)* Vuelve a repetir lo explicado ahora.
    // \.\w{2,3} Permite un punto (.) seguido de dos o tres caracteres, e.g., .org. uk, .us, .es, .com, etc. + El signo (+) especifica que la expresión anterior debe ocurrir una o más veces, mas veces para permitir cualquier URL edu.com por ejemplo
    // $ Indica el final de la cadena
    var patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // ^ Busca el principio de nuestra cadena.
    // ? Permite que haya 0 o 1 vez nuestra expresión anterior (.-)
    // | le indico que uno u otro, y en este caso tengo 3 opciones
    // 
    var patternFecha = /^(\d{2})(\/|\-)\d{2}(\/|\-)\d{4}$/;

    // Le indico el rango de valores, y el numero de veces que tiene que aparecer
    var patternTelefono = /\d{9}/;

    var patternHora = /^(\d{2})\:(\d{2})$/;

    //Eventos:
    nombre.addEventListener("focusout", ponerMayus);
    ape.addEventListener("focusout", ponerMayus);
    nombre.addEventListener("focusout", validar);
    ape.addEventListener("focusout", validar);
    edad.addEventListener("focusout", validarEdad);
    nif.addEventListener("focusout", validarNif);
    email.addEventListener("focusout", validarEmail);
    provincia.addEventListener("focusout", validarProvincia);
    fecha.addEventListener("focusout", validarFecha);
    telefono.addEventListener("focusout", validarTelefono);
    hora.addEventListener("focusout", validarHora);
    formulario.addEventListener('submit', validarEnviar);

    //Algoritmo:
    //Ejercicio 2
    function ponerMayus() {
        this.value = this.value.toUpperCase();
    }//Fin Funcion

    //Ejercicio 3
    function validar() {
        if (error.innerText.length != 0){
            error.removeChild(error.firstChild);
        }//Fin Si
        if (this.value == null || this.value == ""){
            error.innerText = "ERROR: "+this.id.toUpperCase()+" no se puede quedar vacio.";
            this.focus();
            this.setAttribute("class","error");
            enviar = false;
        }else if(!patternNomApe.test(this.value)){
            error.innerText = "ERROR: "+this.id.toUpperCase()+" debe contener solo letras.";
            this.focus();
            this.setAttribute("class","error");
            enviar = false;
        }else{
            this.removeAttribute("class");
            enviar = true;
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 4
    function validarEdad() {
        if (error.innerText.length != 0){
            error.removeChild(error.firstChild);
        }//Fin Si
        if (this.value == "" || this.value == null){
            error.innerHTML ="ERROR: "+this.id.toUpperCase()+" no se puede quedar vacio.";
            this.setAttribute("class","error");
            this.focus();
            enviar = false;
        } else if (isNaN(this.value)){
            error.innerHTML ="ERROR: "+this.id.toUpperCase()+" debe ser un numero.";
            this.setAttribute("class","error");
            this.focus();
            enviar = false;
        } else if (this.value < 0 || this.value > 105) {
            error.innerHTML ="ERROR: "+this.id.toUpperCase()+" debe estar en el rango de 0-105.";
            this.setAttribute("class","error");
            this.focus();
            enviar = false;
        }else{
            this.removeAttribute("class");    
            enviar = true;
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 5
    function validarNif() {
        if (error.innerText.length != 0){
            error.removeChild(error.firstChild);
        }//Fin Si
        if (!patternNif.test(this.value)){
            error.innerHTML ="ERROR: "+this.id.toUpperCase()+" debe contener 8 numero seguido de un guion y letra ( 88888888-A ).";
            this.setAttribute("class","error");
            this.focus();
            enviar = false;
        }else{
            this.removeAttribute("class");
            enviar = true;
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 6
    function validarEmail() {
        if (error.innerText.length != 0){
            error.removeChild(error.firstChild);
        }//Fin Si
        if (!patternEmail.test(this.value)){
            error.innerHTML ="ERROR: "+this.id.toUpperCase()+" debe contener @ y .";
            this.setAttribute("class","error");
            this.focus();
            enviar = false;
        }else{
            this.removeAttribute("class");
            enviar = true;
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 7
    function validarProvincia() {
        if (error.innerText.length != 0){
            error.removeChild(error.firstChild);
        }//Fin Si
        if (this.value == 0){
            error.innerHTML ="ERROR: "+this.id.toUpperCase()+" debe seleccionar una opcion";
            this.setAttribute("class","error");
            this.focus();
            enviar = false;
        }else{
            this.removeAttribute("class");
            enviar = true;
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 8
    function validarFecha() {
        if (error.innerText.length != 0){
            error.removeChild(error.firstChild);
        }//Fin Si
        if (!patternFecha.test(this.value)){
            error.innerHTML = this.id[0].toUpperCase() + this.id.slice(1)+" errónea. Introdúzcala de nuevo. (dd/mm/yyyy)";
            this.setAttribute("class","error");
            this.focus();
            enviar = false;
        }else{
            this.removeAttribute("class");
            enviar = true;
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 9
    function validarTelefono() {
        if (error.innerText.length != 0){
            error.removeChild(error.firstChild);
        }//Fin Si
        if (!patternTelefono.test(this.value)){
            error.innerHTML ="ERROR: "+this.id.toUpperCase()+" debe contener 9 numeros.";
            this.setAttribute("class","error");
            this.focus();
            enviar = false;
        }else{
            this.removeAttribute("class");
            enviar = true;
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 10
    function validarHora() {
        if (error.innerText.length != 0){
            error.removeChild(error.firstChild);
        }//Fin Si
        if (!patternHora.test(this.value)){
            error.innerHTML = this.id[0].toUpperCase() + this.id.slice(1)+" errónea. Introdúzcala de nuevo. (hh:mm)";
            this.setAttribute("class","error");           
            this.focus();
            enviar = false;
        }else{
            this.removeAttribute("class");
            enviar = true;
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 11
    function validarEnviar(evento){
        if (!enviar) {
            if (error.innerText.length != 0){
                error.removeChild(error.firstChild);
            }//Fin Si
            error.innerHTML = "No se puede enviar el formulario con campos invalidos.";
            evento.preventDefault();
        }else{
            var confirmacion = confirm("Enviar formulario");
            if (!confirmacion){
                evento.preventDefault();
            }//Fin Si
        }//Fin Si
    }//Fin Funcion
}