import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [nome, setNome] = useState();
  const [password, setPassword] = useState();

  const mudarNome = (e) => {
    setNome(e.target.value);
  };
  const mudarEmail = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="Input">
      <form>
          Nome 
        <input value={nome} onChange={mudarNome} />
      </form>
      <br></br>
      <form>
          E-mail 
        <input value={password} onChange={mudarEmail} />
      </form>
    </div>
  );
};

export default Input;
