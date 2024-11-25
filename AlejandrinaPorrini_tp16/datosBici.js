const fs = require('fs'); // importa el módulo File system

function importarBicis() {
        
        const data = fs.readFileSync('bicicletas.json', 'utf-8'); //lee el archivo json
        
        const bicicletas = JSON.parse(data); //convierte el json en un array de objetos
        
        return bicicletas;
    }


module.exports = { importarBicis };