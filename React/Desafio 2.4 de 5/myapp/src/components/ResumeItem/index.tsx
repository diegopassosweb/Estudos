 import * as C from "./styles";

 type Props = {
    title: string;
    value: number;
    color?: string;
 }

export const ResumeItem = ({title,color, value}: Props) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>R$ {value}</C.Info>
        </C.Container>
    )
}