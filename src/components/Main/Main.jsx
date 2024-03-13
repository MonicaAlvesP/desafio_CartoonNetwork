import React, { useState } from 'react'

import Scoobydoo from './img/scooby.svg'
import Ben10 from './img/ben10.svg'
import LooneyTunes from './img/looneytunes.svg'

// A segunda section ultilizaremos o map, map é um método que mapeia (percorre) array []
import Gumball from './img/gumball.svg'
import Powerpuff from './img/powerpuff.svg'
import TomandJerry from './img/TomandJerry.svg'

import * as S from './MainStyle.jsx'

import Programacao from '../Programacao/Programacao.jsx' // Importando Programação dentro da Main

function Main() {
    //Sintaxe do useState
    //const [estado, setEstado] = useState()

    const [galeria, setGaleria] = useState([
    Gumball, Powerpuff, TomandJerry
])
    return(
        <main>
            <S.StyleSessao1>
                <img src={Scoobydoo} alt="imagem do desenho Scooby doo" />
                <img src={Ben10} alt="Imagem do desenho do Ben 10" />
                <img src={LooneyTunes} alt="Imagem do desenho dos Looney tunes" />
            </S.StyleSessao1>

            <S.StyleSessao2>
                {galeria.map((item) => (
                    <img src={item} alt='Galeria de Imagens Cartoon' />
                ))}
            </S.StyleSessao2>

            <Programacao />
        </main>
    )
}

export default Main