import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = (props) => {
  return (
    <div>
      <DiretaFilho nome="Luiza" idade={17} nerd={true} />
      <DiretaFilho nome="Daniel" idade={14} nerd={false} />
      <DiretaFilho nome="Luiz" idade={8} nerd={true} />
    </div>
  );
};

export default DiretaPai;
