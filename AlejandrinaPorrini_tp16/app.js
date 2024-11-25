
const {importarBicis} = require("./datosBici");

const bicicletas = importarBicis();

const dhBici = {

    bicicletas,

    buscarBici: function(id){      
        
        const biciEncontrada = this.bicicletas.filter(bici => bici.id === id);
        return biciEncontrada ? biciEncontrada : null;
    },

    venderBici: function(id){        
        
        const biciEncontrada = this.buscarBici(id);
        
        if (biciEncontrada) {
            biciEncontrada.vendida == true;
            return biciEncontrada;
        } else {
            return "Bicicleta no encontrada";
        }
    },

    biciParaLaVenta: function() {      
        
        const biciNoVendida = this.bicicletas.filter(bici => bici.vendida === false);
        return biciNoVendida;
    },

    totalDeVentas: function(){          // total de ventas
        const totalDeVentas = this.bicicletas.filter(bici => bici.vendida === true);
        return totalDeVentas.reduce((acumulador, bici) => acumulador += bici.precio, 0);
    },

    // -------------------- desafío OPCIONAL ------------------
    aumentoBici: function (porcentaje) {
        let nuevoArrayDeBicis = bicicletas.map(bici =>({
            bici,
            precio: bici.precio + (bici.precio * (porcentaje / 100))
        }));
        return nuevoArrayDeBicis;
    },
    
    biciPorRodado: function(numRodado) {
        return this.bicicletas.filter(bici => bici.rodado == numRodado);
    },

    listarTodasLasBicis: function() {
        for (const bicis of bicicletas) {
            console.log(bicis);
        }
    }
}

/*
// PRUEBAS:

// busca bici por ID
console.log("BICICLETA ESPECÍFICA");
console.log("---------------------------------------------");
console.log(dhBici.buscarBici(4));
console.log(dhBici.buscarBici(10));
console.log("---------------------------------------------");

// busca bici VENDIDAS por ID, si la encuentra
console.log("BICICLETAS VENDIDAS");
console.log("---------------------------------------------");
console.log(dhBici.venderBici(7));
console.log(dhBici.venderBici(15));
console.log("---------------------------------------------");

// busca bici NO VENDIDAS
console.log("BICICLETAS DISPONIBLES PARA LA VENTA");
console.log("---------------------------------------------");
console.log(dhBici.biciParaLaVenta());
console.log("---------------------------------------------");

// calcula en MONTO TOTAL de bicis VENDIDAS
console.log("TOTAL DE VENTAS");
console.log("---------------------------------------------");
console.log(dhBici.totalDeVentas());

// calcula los aumentos de precios segun PORCENTAJE
console.log("///////////////////////////////////////////////");
console.log("AUMENTO DE PRECIOS");
console.log("///////////////////////////////////////////////");
console.log("---------------------------------------------");
console.log("AUMENTO DEL 5%");
console.log("---------------------------------------------");
console.log(dhBici.aumentoBici(5));
console.log("---------------------------------------------");
console.log("AUMENTO DEL 10%");
console.log("---------------------------------------------");
console.log(dhBici.aumentoBici(10));
console.log("---------------------------------------------");
console.log("AUMENTO DEL 25%");
console.log("---------------------------------------------");
console.log(dhBici.aumentoBici(25));

// busca bicis de un RODADO específico
console.log("///////////////////////////////////////////////");
console.log("---------------------------------------------");
console.log("BICILETAS DEL RODADO BUSCADO:");
console.log(dhBici.biciPorRodado(29));
console.log("---------------------------------------------");

// muestra el LISTADO DE BICICLETAS registradas en sistema
console.log("LISTA DE BICICLETAS");
console.log("---------------------------------------------");
console.log(dhBici.listarTodasLasBicis());
console.log("---------------------------------------------");

*/


















