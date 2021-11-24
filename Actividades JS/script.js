window.onload = load;
//Mensaje de error hay que borrar
//patern hora fecha y tef
//ej11

function load() {
    //Ejercicios 2 y 3
    var nombre = document.getElementById("nombre");
    var ape = document.getElementById("apellidos");

    //Poner en mayuscula
    nombre.addEventListener("blur", ponerMayus);
    ape.addEventListener("blur", ponerMayus);
    function ponerMayus() {
        this.value = this.value.toUpperCase();
    }//Fin Funcion

    //Validar
    nombre.addEventListener("blur", validar);
    ape.addEventListener("blur", validar);
    function validar() {
        if (this.value == null || this.value == ""){
            var error = document.getElementById("errores");
            if (error.innerText.length == 0){
                error.innerText = "ERROR: "+this.id.toUpperCase()+" no se puede quedar vacio.";
                this.addEventListener("focus", function(){
                    this.setAttribute("class","error");
                });
            }else{
                error.removeChild(error.firstChild);
                error.innerText = "ERROR: "+this.id.toUpperCase()+" no se puede quedar vacio.";
                this.addEventListener("focus", function(){
                    this.setAttribute("class","error");
                });
            }//Fin Si
        }else{
            this.addEventListener("focusout", function(){
                this.removeAttribute("class");
            });
            var error = document.getElementById("errores");
            if (error.hasChildNodes()){
                error.removeChild(error.firstChild);
            }//Fin Si
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 4
    var edad = document.getElementById("edad");
    edad.addEventListener("blur", validarEdad);
    function validarEdad() {
        if (this.value == ""){
            var error = document.getElementById("errores");
            error.innerHTML ="ERROR: "+this.id.toUpperCase()+" no se puede quedar vacio.";
            this.addEventListener("focusout", function(){
                this.setAttribute("class","error");
            });
        } else if (isNaN(this.value)){
            var error = document.getElementById("errores");
            error.innerHTML ="ERROR: "+this.id.toUpperCase()+" debe ser un numero.";
            this.addEventListener("focusout", function(){
                this.setAttribute("class","error");
            });
        } else {
            if (this.value < 0 || this.value > 105) {
                var error = document.getElementById("errores");
                error.innerHTML ="ERROR: "+this.id.toUpperCase()+" debe estar en el rango de 0-105.";
                this.addEventListener("focusout", function(){
                    this.setAttribute("class","error");
                });
            }else{
                this.addEventListener("focusout", function(){
                    this.removeAttribute("class");
                });
            }//Fin Si
        }//Fin Si  
    }//Fin Funcion

    //Ejercicio 5
    var nif = document.getElementById("nif");
    nif.addEventListener("blur", validarNif);
    function validarNif() {
        //Con el simbolo '^', indico que debe empezar por lo siguiente que indique
        //'\d' para representar digitos.
        //Los {} para hacer referencia al numero de ocurrencias.
        //'\-' representar el guion.
        //[a-z] para representar el rango de valores del abecedario.
        //El '$' para indicar con lo que tiene que terminar la cadena.
        //Fuera del pattern utilizo 'i', para que no diferencie entre mayusculas y minusculas.
        var patternNif = /^\d{8}\-[a-z]$/i;
        if (!patternNif.test(this.value)){
            var error = document.getElementById("errores");
            error.innerHTML ="ERROR: "+this.id.toUpperCase()+" debe contener 8 numero seguido de un guion y letra ( 88888888-A ).";
            this.addEventListener("focusout", function(){
                this.setAttribute("class","error");
            });
        }else{
            this.addEventListener("focusout", function(){
                this.removeAttribute("class");
            });
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 6
    var email = document.getElementById("email");
    email.addEventListener("blur", validarEmail);
    function validarEmail() {
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
        if (!patternEmail.test(this.value)){
            var error = document.getElementById("errores");
            error.innerHTML ="ERROR: "+this.id.toUpperCase()+" debe contener @ y .";
            this.addEventListener("focusout", function(){
                this.setAttribute("class","error");
            });
        }else{
            this.addEventListener("focusout", function(){
                this.removeAttribute("class");
            });
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 7
    var provincia = document.getElementById("provincia");
    provincia.addEventListener("blur", validarProvincia);
    function validarProvincia() {
        if (this.value == 0){
            var error = document.getElementById("errores");
            error.innerHTML ="ERROR: "+this.id.toUpperCase()+" debe seleccionar una opcion";
            this.addEventListener("focusout", function(){
                this.setAttribute("class","error");
            });
        }else{
            this.addEventListener("focusout", function(){
                this.removeAttribute("class");
            });
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 8
    var fecha = document.getElementById("fecha");
    fecha.addEventListener("blur", validarFecha);
    function validarFecha() {
        // ^ Busca el principio de nuestra cadena.
        // ? Permite que haya 0 o 1 vez nuestra expresión anterior (.-)
        // | le indico que uno u otro, y en este caso tengo 3 opciones
        // 
        var patternFecha = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/])(0?[1-9]|1[1-2])\1\d{4}$/;
        if (!patternFecha.test(this.value)){
            var error = document.getElementById("errores");
            error.innerHTML = this.id[0].toUpperCase() + this.id.slice(1)+" errónea. Introdúzcala de nuevo. (dd/mm/yyyy)";
            this.addEventListener("focusout", function(){
                this.setAttribute("class","error");
            });
        }else{
            this.addEventListener("focusout", function(){
                this.removeAttribute("class");
            });
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 9
    var telefono = document.getElementById("telefono");
    telefono.addEventListener("blur", validarTelefono);
    function validarTelefono() {
        // Le indico el rango de valores, y el numero de veces que tiene que aparecer
        var patternTelefono = /[0-9]{9}/;
        if (!patternTelefono.test(this.value)){
            var error = document.getElementById("errores");
            error.innerHTML ="ERROR: "+this.id.toUpperCase()+" debe contener 9 numeros.";
            this.addEventListener("focusout", function(){
                this.setAttribute("class","error");
            });
        }else{
            this.addEventListener("focusout", function(){
                this.removeAttribute("class");
            });
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 10
    var hora = document.getElementById("hora");
    hora.addEventListener("blur", validarHora);
    function validarHora() {
        var patternHora = /^(?:3[01]|[12][0-9]|0?[1-9])([\:])(0?[1-9]|1[1-2])$/;
        if (!patternHora.test(this.value)){
            var error = document.getElementById("errores");
            error.innerHTML = this.id[0].toUpperCase() + this.id.slice(1)+" errónea. Introdúzcala de nuevo. (hh:mm)";
            this.addEventListener("focusout", function(){
                this.setAttribute("class","error");
            });
        }else{
            this.addEventListener("focusout", function(){
                this.removeAttribute("class");
            });
            var error = document.getElementById("errores");
            console.log(error.contains(p));
        }//Fin Si
    }//Fin Funcion

    //Ejercicio 11
    var enviar = document.getElementById("enviar");
    var error = document.getElementById("errores");
    if (error.innerText.length == 0){
        enviar.setAttribute("type","reset");
        error.innerText = "No se puede enviar el formulario si hay errores.";
    }else{
        enviar.setAttribute("type","submit");
    }//Fin Si
}