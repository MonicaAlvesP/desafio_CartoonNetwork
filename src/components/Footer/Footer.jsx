import Warner_logo from './img/Warner.svg'

import Github_icon from './img/github.svg'
import Linkedin_icon from './img/linkedin.svg'

import * as S from './StyleFooter'

export default function Footer() {
    return(
    <footer>
        <S.StyleSection>
            <img src={Warner_logo} />
            
            <S.StyleSection>
                <S.List>
                    <S.Li>Sobre nos</S.Li>
                    <S.Li>Produtos</S.Li>
                    <S.Li>Personagens</S.Li>
                </S.List>
            </S.StyleSection>

            <S.StyleSection>
                <S.Img src={Github_icon} alt="Icone do Github" />
            <S.StyleSection />


                <S.Img src={Linkedin_icon} alt="Icone do Linkedin" />
            </S.StyleSection>

        </S.StyleSection>

        <S.Rodape>
            <h4>@2024 Cartoon Network</h4>
        </S.Rodape>
    </footer>
    )
}