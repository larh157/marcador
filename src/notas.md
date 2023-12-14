'### '

function handleChange(e) {
    if(e.target.value.indexOf("#") === 0 && e.target.value.indexOf("#") === 1 &&e.target.value.indexOf("#") === 2 && e.target.value[3] === " "){
        setText(e.target.value);
        setEtiqueta([<h3>{text.replace("###", "").trim()}</h3>]);
    }


    coloque un condicional, lo que ingresa el usuario y busco el indice a ver si encuentro las almohadillas
    y comparo que el index sea 0 y que el primer caracter sea una almohadilla
    si es asi, lo que hago es que pase el valor a la funcion setText y que pase el valor a la funcion setEtiqueta
    que es la que me va a mostrar en el html
