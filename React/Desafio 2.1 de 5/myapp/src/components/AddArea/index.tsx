
import React, { KeyboardEvent, useState } from "react";
import * as C from "./styles";

type Props = {
    onEnter: (taskName: string) => void;
}

const AddArea = ({onEnter}: Props) => {
    const [inputtext, setinputext] = useState("");
    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === "Enter" && inputtext !== "") {
            onEnter(inputtext);
            setinputext("");
        }
    }

  return (
    <C.Container>
        <div className="image">+</div>
        <input type="text" placeholder="Adicione uma tarefa"
        value={inputtext}
        onChange={ e => setinputext(e.target.value)}
        onKeyUp={handleKeyUp} />
        
    </C.Container>
  )
};

export default AddArea;
