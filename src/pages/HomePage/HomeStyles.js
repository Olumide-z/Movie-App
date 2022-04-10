import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {AiOutlineRight} from 'react-icons/ai';
import { BsFillStarFill, BsFillBookmarkStarFill } from 'react-icons/bs'

export const Container = styled.div`
    /* background-color: blue; */
    margin: 1rem .3rem 0 .3rem;
    position: relative;
    display: flex;
`
export const ImageWrapper = styled(Link)`
    cursor: pointer;
    width: 100px;
    height: 150px;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #603601;
    transition: all .3s;
    z-index: -1;

    &:hover{
        transform: scale(1.05);
        transition: all .2s;
    }
`
export const WatchlistBtn = styled.button`
    font-size: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 10;
`
export const Watchlist = styled(BsFillBookmarkStarFill)`
    opacity: .7;
    color: white;
   
    &:hover{
        opacity: 1;
    }

`

export const WatchlistBtn2 = styled.button`
    font-size: 2rem;
    position: absolute;
    top: 0;
    left: 5rem;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 10;

    @media screen and (max-width : 1300px){
        left: 4rem
    }

    @media screen and (max-width : 1200px){
        left: 3rem
    }

    @media screen and (max-width : 1100px){
        left: 5.5rem
    }
    @media screen and (max-width : 1000px){
        left: 4rem
    }

    @media screen and (max-width : 900px){
        left: 3rem
    }

    @media screen and (max-width : 800px){
        right: 11rem;
    }

    @media screen and (max-width : 650px){
        right: 9rem;
    }

    @media screen and (max-width : 390px){
        left: 1.7rem;
    }

    @media screen and (max-width : 350px){
        left: .5rem;
    }
`
export const Watchlist2 = styled(BsFillBookmarkStarFill)`
    opacity: .7;
    color: white;
   
    &:hover{
        opacity: 1;
    }
`
export const ContainerDetails = styled.div`
    margin-left: 1rem;
    width: 200px;
`
export const Article = styled.div`
    height: 90vh;
    margin-left: 1.5rem;

    @media screen and (max-width: 1100px){
        display: none;
        margin: 0;
    }
`
export const MovieDetails = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const MovieTitle = styled.h4`
    margin-bottom: 1.3rem;
`
export const Date = styled.p`
   font-size: .8rem;
   margin-top: 1.5rem;
`
export const Button = styled.button`
    cursor: pointer;
    padding: 7px 15px;
    font-size: .7rem;
    margin-top: 1.5rem;
    font-weight: 600;
    color: white;
    border: 1px solid #603601;
    background: transparent;
    border-radius: 5px;
    outline: none;
    text-transform: uppercase;
   
    &:hover{
        background-color: #603601;
        transition: all .3s;
    }
    
`
export const BtnLink = styled(Link)`
    text-decoration: none;
`
export const Rating = styled.p`
    font-size: 1rem;   
`
export const Star = styled(BsFillStarFill)`
    margin-left: 5px;
    font-size: 1rem;
    color: #FFC300;
`

export const HomeContainer = styled.div`
    padding: 100px 50px 0 50px;
    min-height: 100vh;

    @media screen and (max-width: 650px){
       padding: 100px 30px 0 30px;
    }

    @media screen and (max-width: 550px){
       padding: 100px 50px 0 50px;
    }

    @media screen and (max-width: 445px){
       padding: 100px 20px 0 20px;
    }

    @media screen and (max-width: 300px){
        width: 300px;
  }

`
export const NewMovie = styled.div`
   
   @media screen and (min-width: 800px ){
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 90vh;
   }
   
`
export const NewMovieDetails = styled.div`
    position: relative;
`
export const LargeImgContainer = styled.div`
    width: 100%;
    height: 90vh;

    .div{
        height: 90vh;
        width: 100%;
        top: 0;
        position: absolute;
        left: 0;
        background-image:  linear-gradient(180deg, rgba(0, 0, 0, .1) 50%, #1C0A00);
    }

    @media screen and (max-width: 650px){
        height: 50vh;

        .div{
            height: 50vh;
        }
    }

    &:hover{
        transform: scale(1.05);
        transition: all .2s;
    }
`
export const ImageLarge = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`
export const DetailWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

   @media screen and (min-width: 800px){
        position: absolute;
        top: 15rem;
        left: 2rem;
   }
  
   @media screen and (max-width: 800px){
     position: absolute;
     top: 1rem;
     flex-direction: column;
   }

   @media screen and (max-width: 650px){
        margin-top: 1rem;
    }

    @media screen and (max-width: 650px){
        top: 0;
        left: 5rem;
        right: 5rem;
    }
`
export const Wrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: .6rem;

   @media screen and (max-width: 800px){
        margin-top: .8rem;
        width: 90%;
    }

    @media screen and (max-width: 650px){
        margin-top: 1rem;
        width: 100%;
    }

    h1{
        @media screen and (max-width: 800px){
            font-size: 1.5rem;
        }

        @media screen and (max-width: 650px){
            font-size: 1.2rem;
        }
    }
`
export const Wrap2 = styled.div`
   width: 80%;
   p{
    font-size: .8rem;
    letter-spacing: 2px;
    margin: .8rem 0;
   }

   button{
    padding: 12px 30px;
    border: 1px solid #603601;
    background: transparent;
    color: white;
    border-radius: 5px;
    outline: none;
    font-size: .7rem;
    cursor: pointer;

    &:hover{
        background-color: #603601;
        transition: all .3s;
    }

    @media screen and (max-width : 358px){
        font-size: .5rem;
    }
   }

   @media screen and (max-width: 800px){
            width: 100%;
    }
`
export const Rating1 = styled.p`
    font-size: 1.5rem;

    @media screen and (max-width: 650px){
            font-size: 1.2rem;
    }
`
export const MovieInfo = styled.div`
    width: 60%;
    height: 250px;
    margin-left: 2rem;

    @media screen and (max-width: 800px){
        width: 100%;
        margin: 0;
        padding: 1rem;
    }

    @media screen and (max-width: 650px){
        display: none;
    }
`

export const SmallImageContainer  = styled(Link)`
    width: 170px;
    height: 270px;

    @media screen and (max-width: 800px){
        width: 150px;
        height: 250px;
    }

    @media screen and (max-width: 650px){
        width: 120px;
        height: 200px;
    }
`
export const SmallImage  = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const HeadingContainer = styled(Link)`
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    
    &:hover{
        color: #603601;
        transition: all .2s;
    }
`
export const MovieHeader = styled.h2`
    display: flex;
    align-items: center;
    margin-bottom: 2.5rem;
`
export const Header = styled.h1`
  margin-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1.5px solid #603601;

  @media screen and (max-width : 440px){
        padding-bottom: .7rem;
        font-size: 1.3rem;
        margin-top: 1rem;
    }
`
export const Arrow = styled(AiOutlineRight)`
    font-size: 1rem;
    margin-left: 1rem;
`
export const Info2 = styled.div`
    display: none;

    @media screen and (max-width: 650px){
        display: block;
    }
`