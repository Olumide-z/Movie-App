import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsFillStarFill, BsFillBookmarkStarFill } from 'react-icons/bs'

export const Container = styled.div`
    /* background-color: blue; */
    height: 450px;
    width: 220px;
    margin: 1rem .3rem 0 .3rem;
    position: relative;

    @media screen and (max-width : 968px){
        height: 400px;
        width: 170px;
        margin: .7rem 0rem 0 0rem;
    }
`
export const ImageWrapper = styled(Link)`
    cursor: pointer;
`

export const Image = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
    background-color: #603601;

    &:hover{
        transform: scale(1.05);
        transition: all .2s;
    }
`
export const Wishlist = styled(BsFillBookmarkStarFill)`
    color: #fff;
    font-size: 2.5rem;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .7;

    &:hover{
        opacity: 1;
    }

    @media screen and (max-width : 968px){
        font-size: 2rem;
    }
`

export const MovieDetails = styled.div`
    width: 220px; 
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-top: 10px;
    height: 40px;

    @media screen and (max-width : 968px){
        width: 170px;
    }
`
export const MovieTitle = styled.h3`
    font-size: 1rem;
    width: 150px;

    @media screen and (max-width : 968px){
        width: 120px;
    }
`
export const Date = styled.p`
    font-size: .7rem;
`
export const Button = styled.button`
    cursor: pointer;
    padding: 10px 30px;
    font-size: .7rem;
    margin-top: 5px;
    outline: none;
    border: none;
    background-color: #603601;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
`
export const Rating = styled.p`
    font-size: 1rem;
    
`
export const Star = styled(BsFillStarFill)`
    margin-left: 5px;
    font-size: .9rem;
    color: #FFC300;
`