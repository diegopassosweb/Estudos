
import React from "react";
import { Item } from "../../types/Item";
import TableItem from "../TableItem";
import * as C from "./styles";


type Props = {
    list: Item[]
}

const TableArea = ({list}: Props) => {
  return (
    <C.Table>
        <thead>
            <tr>
                <C.TableHeadColum width={100}>Data</C.TableHeadColum>
                <C.TableHeadColum width={130}>Categoria</C.TableHeadColum>
                <C.TableHeadColum>Titulo</C.TableHeadColum>
                <C.TableHeadColum width={150}>Valor</C.TableHeadColum>
            </tr>
        </thead>
        <tbody>
            {list.map((item,index) => (
               <TableItem key={index} item={item} />
            ))}
        </tbody>
    </C.Table>
  )
};

export default TableArea;
