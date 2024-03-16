import React, { useState } from "react";
import Dexter from "./img/dexter.svg"
import VacaeFrango from './img/vaca.svg'
import Du from "./img/du.svg"
import Coragem from './img/coragem.svg'
import Jorel from './img/jorel.svg'
import Monica from './img/monica.svg'
import Steven from './img/steven.svg'
import BillyeMandy from './img/billymandy.svg'

import * as S from './ProgramacaoStyle'

function Programacao() {

const [desenhos, setDesenhos] = useState([
    {nome: "O Laboratório de Dexter", hora: "7:00h", imagem: Dexter, desenhosManha: true},
    {nome: "A vaca e o Frango", hora: '8:00h', imagem: VacaeFrango, desenhosManha: true},
    {nome: "Du, Dudu e Edu", hora: '9:00h', imagem: Du, desenhosManha: true},
    {nome: "Coragem, o cão covarde", hora: "10:00h", imagem: Coragem, desenhosManha: true},
    {nome: "Irmão do Jorel", hora: "11:00h", imagem: Jorel, desenhosManha: true},
    {nome: "Turma da Mônica Jovem", hora: "12:00hr", imagem: Monica, desenhosManha: false},
    {nome: "Steven Universo", hora: "13:00h", imagem: Steven, desenhosManha: false},
    {nome: "Billy e Mandy", hora: "14:00h", imagem: BillyeMandy, desenhosManha: false}
])

    const desenhosAntesMeioDia = desenhos.filter((item) => item.desenhosManha === true)

    return(

        <S.style_Section>
            {desenhos.map((item) => (
                <S.style_Div>
                    <S.styleTitulo>{item.hora}</S.styleTitulo>
                    <S.styleTitulo>{item.nome}</S.styleTitulo>
                    <img src={item.imagem} alt={item.nome}/>
                </S.style_Div>
            ))}
            <S.CardManha>
            {desenhosAntesMeioDia.map((item)=>(
                <S.SectionManha>
                    <p>{item.nome}</p>
                    <img src={item.imagem} alt="" />
                </S.SectionManha>
            ))}
            </S.CardManha>
        </S.style_Section>
    )
}

export default Programacao