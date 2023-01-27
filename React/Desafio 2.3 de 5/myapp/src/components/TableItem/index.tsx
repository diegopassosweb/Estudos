
import React from "react";
import { categories } from "../../data/categories";
import { formatData } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import * as C from "./styled"

type Props = {
    item: Item
}

const TableItem = ({item}: Props) => {
  return (
    <C.TableLine>
        <C.TableColum>{formatData(item.date)}</C.TableColum>
        <C.TableColum>
            <C.Category color={categories[item.category].color}>
                {categories[item.category].title}
            </C.Category>
            
            </C.TableColum>
        <C.TableColum>{item.title}</C.TableColum>
        <C.TableColum>
            <C.Value color={categories[item.category].expense ? "red" : "green"}>
                R$ {item.value}
            </C.Value>
            
        </C.TableColum>
    </C.TableLine>
  )
};

export default TableItem;
