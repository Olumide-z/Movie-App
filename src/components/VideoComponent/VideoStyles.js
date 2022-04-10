import styled from 'styled-components';
import { BsFillBookmarkStarFill } from 'react-icons/bs'

export const VideoContainer = styled.div`
    padding: 2rem 4%;

    .iframe{
        width: 100%;
        height: 500px;
        border: 1.5px solid #603601;

        @media screen and (max-width: 968px){
            height: 400px;
        }

        @media screen and (max-width: 600px){
            height: 350px;
        }
    }
`

export const Button = styled.button`
    width: 100%;
    margin-top: 20px;
    padding: 1rem 2rem;
    border-radius: 10px;
    outline: none;
    background-color: #603601;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: #361500;
    }
`

export const Watchlist = styled(BsFillBookmarkStarFill)`
    color: white;
    margin-right: 10px;
`