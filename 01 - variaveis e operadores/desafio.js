/* Calcule o valor de uma viagem.
...
*/

let preco_combustivel = 5.79;
let gasto_medio_km = 12;
let distancia_km = 1580;

let litros_consumidos = distancia_km / gasto_medio_km;
let valor_gasto = preco_combustivel * litros_consumidos;

console.log('O valor gasto na viagem será de ' + valor_gasto.toFixed(2)); 
// usar toFixed para definir casas após a vírgula.



