import styled from 'styled-components'
import { MdDelete } from 'react-icons/md'

export const Container = styled.div`
  padding: 100px 50px 20px 50px;
  min-height: 100vh;

  @media screen and (max-width: 979px){
       padding: 100px 30px 20px 30px;
    }

  @media screen and (max-width: 650px){
       padding: 100px 30px 0 30px;
    }

    @media screen and (max-width: 550px){
       padding: 100px 50px 0 50px;
    }

    @media screen and (max-width: 445px){
       padding: 100px 20px 0 20px;
    }
  
  @media screen and (max-width: 370px){
        padding: 100px 10px 0 10px;
        width: 370px;
  }
`

export const Wrapper = styled.div`
    height: 450px;
    width: 220px;
    margin: 1rem .9rem;

    @media screen and (max-width : 1100px){
        width: 200px;
        margin: 1rem;
    }

    @media screen and (max-width : 1028px){
        margin: 1rem .5rem 1rem .5rem;
    }

    @media screen and (max-width : 530px){
       width: 175px;
       height: 400px;
    }

    @media screen and (max-width : 480px){
        width: 150px;
        height: 350px;
    }
`
export const WatchlistContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width : 922px){
        justify-content: space-between;
    }
`
export const ImageContainer = styled.div`
 
`
export const Image = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
    cursor: pointer;
`
export const Title = styled.h3`
    font-size: 1.1rem;
    margin: 1rem 0rem;

    @media screen and (max-width : 968px){
        font-size: 1rem;
    }

    @media screen and (max-width : 530px){
        font-size: .9rem;
    }

    @media screen and (max-width : 480px){
        font-size: .8rem;
    }
`
export const Date = styled.p`
    font-size: 1rem;
    margin: 1rem 0rem;

    @media screen and (max-width : 530px){
        font-size: .9rem;
    }

    @media screen and (max-width : 480px){
        font-size: .8rem;
    }
`
export const Button = styled.button`
    padding: 5px;
    width: 100%;
    background-color: #DA1212;
    outline: none;
    border: none;
    cursor: pointer;
    margin-bottom: 1rem;
`
export const DeleteIcon = styled(MdDelete)`
    font-size: 1rem;
    color: white;
`