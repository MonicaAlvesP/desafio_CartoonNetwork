import React from "react";
import * as S from './MainStyle.jsx'
import Scoobydoo from './img/scooby.svg'
import Ben10 from './img/ben10.svg'
import LooneyTunes from './img/looneytunes.svg'
import Gumball from './img/gumball.svg'
import Powerpuff from './img/powerpuff.svg'
import TomandJerry from './img/TomandJerry.svg'

export default function Main() {
    return(
        <main>
            <S.StyleSessao1>
                <img src={Scoobydoo} alt="imagem do desenho Scooby doo" />
                <img src={Ben10} alt="Imagem do desenho do Ben 10" />
                <img src={LooneyTunes} alt="Imagem do desenho dos Looney tunes" />
            </S.StyleSessao1>

            <S.StyleSessao2>
                <img src={Gumball} alt="Imagem do desenho Incrivel Mundo de Gumball" />
                <img src={Powerpuff} alt="Imagem do desenho As Meninas Super Poderosas" />
                <img src={TomandJerry} alt="Imagem do desenho do Tom and Jerry" />
            </S.StyleSessao2>
        </main>
    )
}