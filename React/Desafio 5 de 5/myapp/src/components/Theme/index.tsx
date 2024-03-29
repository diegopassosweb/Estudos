
import React, { ReactNode } from 'react'
import { useForm } from '../../contexts/FormContext';
import Header from '../Header';
import SidebarItem from '../SidebarItem';
import * as C from "./styles";

type Props = {
    children: ReactNode;
}

const Theme = ({children}: Props) => {
    const {state} = useForm();

  return (
    <C.Container>
        <C.Area>
            <Header />
            
            <C.Steps>
                 <C.Sidebar>
                    <SidebarItem
                        title="Pessoal"
                        description="Se identifique"
                        icon="profile"
                        path="/"
                        active={state.currentStep === 1}
                    />

                     <SidebarItem
                        title="Profissional"
                        description="Seu nivel"
                        icon="book"
                        path="/step2"
                        active={state.currentStep === 2}
                    />

                     <SidebarItem
                        title="Contatos"
                        description="Como te achar"
                        icon="mail"
                        path="/step3"
                        active={state.currentStep === 3}
                    />
                 </C.Sidebar>
                <C.Page>
                    {children}
                </C.Page>
            </C.Steps>
        </C.Area>
    </C.Container>
  )
}

export default Theme