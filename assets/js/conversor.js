(function(exports) {
  "use strict";

  function Medida(valor,tipo)  
  {
    this.valor = valor;
    this.tipo = tipo || "";
  }
  
  function Temperatura(valor,tipo)
  {
    Medida.call(this,valor,tipo);
  }
  
  Temperatura.prototype = new Medida();
  Temperatura.prototype.constructor = Temperatura;

  function Celsius(valor)
  {
    Temperatura.call(this,valor,"c");
    
    this.caf = function() {
      return ((valor * 9/5) + 32);
    };

    this.cak = function() {
      return (valor + 273.15);
    };
  }
  
  Celsius.prototype = new Temperatura();
  Celsius.prototype.constructor = Celsius;
  
  function Farenheit(valor)
  {
    Temperatura.call(this,valor,"f");
    this.fac = function() {
      return ((valor - 32) * 5/9);
    };
    this.fak = function() {
      return((valor + 459.67) * 5/9);
    };
  }
  
  Farenheit.prototype = new Temperatura();
  Farenheit.prototype.constructor = Farenheit;
  
  function Kelvin(valor)
  {
    Temperatura.call(this, valor, "k");
    this.kac = function() {
      return(valor - 273.15);
    };
    this.kaf = function() {
      return(valor * 9/5 - 459.67);
    };
  }
  
  Kelvin.prototype = new Temperatura();
  Kelvin.prototype.constructor = Kelvin;
  
  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;
  exports.Kelvin = Kelvin;

  exports.convertir = function() {
     var valor     = document.getElementById('convert').value;
    valor=valor.replace(/\s/g, '' );
    var elemento  = document.getElementById('converted');
    var tipo;
    var tipo2;
        /* Extienda la RegeExp a la especificación. use una XRegExp */
       var expresion= XRegExp('(?<valor>[+-]?\\d+(\\.\\d+)?([e][+-]?\\d+)?)# valor'
                                '(?<tipo>[a-z]+)# tipo \n\'
                                '(?<to>[to]?) #to \n\'
                                '(?<tipo2>[fckmyp] ) #tipo2' , 'xi');
       
        valor = valor.match(regexp);
    
    if (valor) {
      var numero = valor[1],
          tipo1   = valor[2].toLowerCase();
          tipo2   = valor[2].toLowerCase();
      
      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Tipo: " + tipo);
      
      switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          if (tipo2 == 'f')
            elemento.innerHTML = celsius.caf().toFixed(2) + " Farenheit";
          if (tipo2 == 'k')
            elemento.innerHTML = celsius.cak().toFixed(2) + " Kelvin";
          break;
        case 'f':
          var farenheit = new Farenheit(numero);
          if (tipo2 == 'c')
            elemento.innerHTML = farenheit.fac().toFixed(2) + " Celsius";
          if (tipo2 == 'k')
            elemento.innerHTML = farenheit.fak().toFixed(2) + " Kelvin";
          break;
        case'k':
          var kelvin = new Kelvin(numero);
          if (tipo2 == 'c')
            elemento.innerHTML = kelvin.kac().toFixed(2) + " Celsius";
          if (tipo2 == 'f')
            elemento.innerHTML = kelvin.kaf().toFixed(2) + " Farenheit";
          break;
        
        default:
          elemento.innerHTML = "Error! El uso corecto es por ejemplo: -3.7C.";
      }
    }
    else
      elemento.innerHTML = "";
  }
  
})(this);
