
import React from "react";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
    list: Item[]
}

const TableArea = ({list}: Props) => {
  return (
    <C.Table>
        <thead>
            <tr>
                <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                <C.TableHeadColumn width={110}>Categoria</C.TableHeadColumn>
                <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                <C.TableHeadColumn width={130}>Valor</C.TableHeadColumn>
            </tr>
        </thead>
        <tbody>
            {list.map((item, index) =>(
                <tr key={index}>
                    <td></td>
                    <td></td>
                    <td>{item.title}</td>
                    <td></td>
                </tr>
            ))
            }
        </tbody>
    </C.Table>
  )
};

export default TableArea;
