import React from "react";
import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React!</h1>
      <div className="Cards">
        <Card title="#12 - Contador" color="#7251b5">
          <Contador numeroInicial={10} />
        </Card>

        <Card title="#11 - Componente Controlado" color="#772f1a">
          <Input />
        </Card>

        <Card title="#10 - Comunicação Indireta" color="#1b4332">
          <IndiretaPai />
        </Card>

        <Card title="#09 - Comunicação Direta" color="#ffba08">
          <DiretaPai />
        </Card>

        <Card title="#08 - Renderização Condicional" color="#264653">
          <ParOuImpar numero={21} />
          <UsuarioInfo usuario={{ nome: "Diogo" }} />
          <UsuarioInfo usuario={{ email: "diogonsc@yahoo.com" }} />
        </Card>

        <Card title="#07 - Tabela Repetição" color="#9a031e">
          <TabelaProdutos />
        </Card>

        <Card title="#06 - Lista Repetição" color="#f2a65a">
          <ListaAlunos />
        </Card>

        <Card title="#05 - Componentes com Filhos" color="#480ca8">
          <Familia sobreNome="Nascimento">
            <FamiliaMembro nome="Diogo" />
            <FamiliaMembro nome="Luana" />
            <FamiliaMembro nome="Enzo" />
          </Familia>
        </Card>

        <Card title="#04 - Desafio aleatório" color="#ee9b00">
          <Aleatorio min={0} max={60} />
        </Card>

        <Card title="#03 - Fragmento" color="#6c757d">
          <Fragmento />
        </Card>

        <Card title="#02 - Com Parâmetro" color="#6a040f">
          <ComParametro Title="Situação do Aluno" Aluno="Diogo" Nota={9.8} />
        </Card>

        <Card title="#01 - Primeiro Componente" color="#283618">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
}

export default App;
