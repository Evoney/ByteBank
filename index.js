import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Carlos", 10000, 123456741);
diretor.cadastrarSenha("1523");
const gerente = new Gerente("Julio", 5000, 123452711);
const cliente = new Cliente("Julia", 72132132131, "123")


const logado = SistemaAutenticacao.login(cliente, "123");

console.log(logado);

