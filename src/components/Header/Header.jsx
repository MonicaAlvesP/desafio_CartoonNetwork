import React from "react"

// IMPORTE TUDO COMO S de HeaderStyle
import * as S from './HeaderStyle'

import Logo from './img/logo.svg'
import Joystick from './img/Analogic.svg'
import Relogio from './img/Relogio.svg'

export default function Header() {
    return(
        
        <S.EstiloHeader>
            <img src={Logo} alt="Logo Cartoon Network"
            />
            <S.StyleSection>
                <S.StyleDiv>
                    <img src={Joystick} alt="Icone de joystick" />
                    <h3>JOGOS</h3>
                </S.StyleDiv>

                <S.StyleDiv>
                    <img src={Relogio} alt="imagem de um relogio" />
                    <h3>PROGRAMAÇÂO</h3>
                </S.StyleDiv>
            </S.StyleSection>
        </S.EstiloHeader>
    )
}