import React from "react";
import produtos from "../../data/produtos";

const TabelaProdutos = () => {
  
  const  tabela = () => {
    return produtos.map((produto) => {
      return (
        <tr key={produto.id}>
          <td>{produto.id}</td>
          <td>{produto.name}</td>
          <td>R$ {produto.price.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{tabela()}</tbody>
      </table>
    </div>
  );
};

export default TabelaProdutos;
