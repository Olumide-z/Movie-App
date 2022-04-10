import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`
export const Content = styled.div`
    opacity: .5;
    height: 350px;
    width: 220px;
    margin: 1rem .3rem;
    animation: skeleton-loading 1s linear infinite alternate;

    @keyframes skeleton-loading {
        0%{
            background-color: hsl(200, 20%, 70%);
        }
        100%{
            background-color: hsl(200, 20%, 90%);
        }
    }
    
    @media screen and (max-width : 968px){
        height: 300px;
        width: 170px;
        margin: .7rem 0rem;
    }
`