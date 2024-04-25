import {cliente} from "./Cl.js"
import {ContaCorrente} from "./CC_.js"


const cliente1 =new cliente("carlinhos-cavalo-silva",1231234345312);
const cliente2 =new cliente("chaves",1200012);
const conta1 =new ContaCorrente(1001,cliente1)
const conta2 = new ContaCorrente(1003,cliente2)

console.log(ContaCorrente.contas)