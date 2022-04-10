import styled from 'styled-components';
import { BsFillStarFill } from 'react-icons/bs'

export const Container = styled.div`
    padding-top: 70px;
    overflow: hidden;
`;
export const Wrapper = styled.div`
    position: relative;
`;
export const LargeImgWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    
    .div{
        height: 100vh;
        width: 100vw;
        top: 0;
        position: absolute;
        left: 0;
        background-image:  linear-gradient(180deg, rgba(0, 0, 0, .1) 50%, #1C0A00);
    }
`
export const LargeImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const SmallImgWrapper = styled.div`
     width: 300px;
     height: 400px;
     position: absolute;
     top: 15vh;
     left: 40vw;
     
     @media (max-width: 1024px) {
        left: 35vw;
        width: 250px;
        height: 350px;
     }


     @media (max-width: 670px) {
        left: 30vw;
     }

     @media (max-width: 470px) {
        left: 20vw;
     }

     @media (max-width: 375px) {
        left: 20vw;
        width: 200px;
     }

     @media (max-width: 300px) {
        left: 13vw;
     }
     
`
export const SmallImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const Info = styled.div`
    padding: 3% 4%;
`
export const Title = styled.h1`
    font-size: 3rem;
    letter-spacing: 1px;

    @media screen and (max-width: 968px){
        font-size: 2.5rem;
    }

    @media screen and (max-width: 600px){
        font-size: 1.5rem;
    }
`
export const Span = styled.em`
    letter-spacing: 1px;
    opacity: .7;
     
    @media screen and (max-width: 968px){
        font-size: .8rem;
    }
`
export const Genre = styled.h3`
    padding-top: 2.5%;
    text-transform: uppercase;
    font-size: 1.2rem;

    @media screen and (max-width: 600px){
        font-size: .9rem;
    }    
`
export const GenList = styled.ul`
    display: flex;
    font-size: 1.1rem;
    font-weight: 200;

    @media screen and (max-width: 600px){
        font-size: .9rem;
    }    
`

export const GenName = styled.li`
    list-style: none;
    margin-right: 1rem;
    padding: 1rem 0;

    @media screen and (max-width: 450px){
        font-size: .8rem;
    }
`
export const Overview = styled.div`
    border-bottom: 1.5px solid #603601;
    border-top: 1.5px solid #603601;
    padding: 1rem 0;
    font-size: 1.1rem;

    @media screen and (max-width: 600px){
        font-size: .9rem;
    }    
`
export const OverviewHeading = styled.h3`
    margin-bottom: 1rem;
`
export const OverviewInfo = styled.p`
    line-height: 1.5rem;
    font-weight: 200;
`
export const Season = styled.div`
    border-bottom: 1.5px solid #603601;
    padding: 1rem 0;
    font-size: 1.1rem;

    @media screen and (max-width: 600px){
        font-size: .9rem;
    }    
`
export const SeasonTitle = styled.h3`
    margin-bottom: 1rem;
`
export const SeasonInfo = styled.p``
export const ReleaseDate = styled.div`
    border-bottom: 1.5px solid #603601;
    padding: 1rem 0;
    font-size: 1.1rem;
    
    @media screen and (max-width: 600px){
        font-size: .9rem;
    }  

    p{
        margin-top: 1rem;
    }
`
export const Rating = styled.div`
    padding: 1rem 0;
    font-size: 1.1rem;
    
    @media screen and (max-width: 600px){
        font-size: .9rem;
    }  

    p{
        margin-top: 1rem;
        display: flex;
        align-items: center;
    }
`
export const Star = styled(BsFillStarFill)`
     font-size: .8rem;
     color: #FFC300;
     margin-left: .5rem;
`
