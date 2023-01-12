
import React, { useState } from "react";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
    item: Item
}

const ListItem = ({item}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isChecked}>
        <input type="checkbox" checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)} />
        <label htmlFor="">{item.name} - {item.done.toString()}</label>

    </C.Container>
  )
};

export default ListItem;
