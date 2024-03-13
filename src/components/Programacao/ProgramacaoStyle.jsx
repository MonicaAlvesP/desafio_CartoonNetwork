import styled from "styled-components";

export const style_Section = styled.section`
    background-color: #363636;
    color: #fff;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1rem));
    grid-gap: 10px;
    grid-column-gap: 20px;
    padding: 1rem;
`

export const style_Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const styleTitulo = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-style: normal;
    margin-top: 10px;
`