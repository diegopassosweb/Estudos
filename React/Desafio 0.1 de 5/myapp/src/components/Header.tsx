
import React from "react";

type Props = {
    name: string;
    age: number;
}

const Header = ({name, age}: Props) => {
  return (
    <header>
        <h1>Tittle</h1>
    </header>
  )
};

export default Header;
