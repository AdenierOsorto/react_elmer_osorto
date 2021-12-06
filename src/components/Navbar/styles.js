import styled, { css } from 'styled-components'

export const Container = styled.nav`
    backdrop-filter: blur(20px);
    background: rgba(76,76,76,0.8);
    box-sizing: border-box;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 2px 20px;
    position: fixed;
    top: 0;
    width: 100%;
`;

export const Input = styled.input`
    width: 50%;
`;

export const Btn = styled.button`
    background: #0f80ff;
        border: none;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        padding: 8px 15px;
`; 