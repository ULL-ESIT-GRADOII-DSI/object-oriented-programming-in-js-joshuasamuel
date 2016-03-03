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
  
  function Farenheit(valor)
  {
    
  }
  
  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;

  exports.convertir = function() {
     var valor     = document.getElementById('convert').value,
    valor=valor.replace(/\s/g, '' );
    var elemento  = document.getElementById('converted'),
        /* Extienda la RegeExp a la especificación. use una XRegExp */
       var expresion= XRegExp('(?<valor>[+-]?\\d+(\\.\\d+)?([e][+-]?\\d+)?)# valor
                                (?<tipo>[a-z]+)# tipo \n\
                                (?<to>[to]?) #to \n\
                                (?<tipo2>[fckmyp] ) #tipo2' , 'xi');
       
        valor     = valor.match(regexp);
    
    if (valor) {
      var numero = valor[1],
          tipo   = valor[2].toLowerCase();
      
      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Tipo: " + tipo);
      
      switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          elemento.innerHTML = celsius.toFarenheit().toFixed(2) + " Farenheit";
          break;
        case 'f':
          var farenheit = new Farenheit(numero);
          elemento.innerHTML = farenheit.toCelsius().toFixed(2) + " Celsius";
          break;
        
        default:
          /* rellene este código */
      }
    }
    else
      elemento.innerHTML = "";
  }
  
})(this);
