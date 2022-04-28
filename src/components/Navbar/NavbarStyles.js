import styled, { css } from "styled-components"
import { Link, NavLink } from "react-router-dom";

import { ImSearch } from 'react-icons/im'
import { BsBookmarkFill } from 'react-icons/bs'
import { MdMapsHomeWork, MdMovie, MdTrendingUp, MdOutlineContactSupport, MdOutlineLocalMovies } from 'react-icons/md'


// NAVBAR
export const Container = styled.div`
    z-index: 100;
    min-height: 70px;
    background-color: #603601;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 3rem;
    box-shadow: -12px 0px 17px -3px rgba(0,0,0,0.70);
    -webkit-box-shadow: -12px 0px 17px -3px rgba(0,0,0,0.70);
    -moz-box-shadow: -12px 0px 17px -3px rgba(0,0,0,0.70);

    @media screen and (max-width: 600px){
        padding: 0 1rem;
    }
`;

const Nlink = css`
    text-decoration: none;
    color: white;
    font-weight: 600;
`
export const Logo = styled(Link)`
    ${Nlink}
    font-size: 1.7rem;
    font-weight: 200;
    display: flex;
    align-items: center;

    @media screen and (max-width: 375px){
        font-size: 1.3rem;
    }
`;

export const LogoIcon = styled(MdOutlineLocalMovies)`
    color: #fff;
    font-size: 2.5rem;

    @media screen and (max-width: 375px){
        font-size: 1.5rem;
    }
`
export const MenuWrapper = styled.ul`
    display: flex;
    align-items: center;

    @media screen and (max-width: 968px){
        display: none;
    }
`;

export const MenuItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    text-align: center;
`;

export const MenuLink = styled(NavLink)`
     ${Nlink}
     /* color: ${(props) => {
        return props.style ? (isActive) => (isActive ? "#1C0A00" : "#fff") : "none";
    }}; */
     padding: 0 1.5rem;
     font-size: 1.2rem;
     transition: all .3s;

     &:hover{
         color: #1C0A00;
     }
`;
export const NavIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    cursor: pointer;
`;
export const Icon = styled(NavLink)`
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0 1rem;
    color: #fff;
    transition: all .3s;
    position: relative;

    &:hover{
         color: #1C0A00;
     }

    @media screen and (max-width: 375px){
        font-size: 1rem;
    }

    .watchlist-numbers{
        background-color: #1C0A00;
        font-size: 0.7rem;
        padding: 2px 5px;
        border-radius: 100%;
        position: absolute;
        top: -10px;
        right: 10px;

        &:hover{
            color: white;
        }
    }
`
export const BarsContainer = styled.div`
    z-index: 100;
`;


export const Bars = styled.div`
    width: 25px;
    background-color: #fff;
    height: 2.5px;
    position: relative;
    margin-left: 1rem;

    @media screen and (max-width: 375px){
        width: 20px;
        margin-left: .7rem;
    }

    ::before,
    ::after{
        content: '';
        width: 17px;
        background-color: #fff;
        height: 2.5px;
        position: absolute;

        @media screen and (max-width: 375px){
            width: 15px;
        }   
    }

    ::after{
        top: 8px;
        right: 0;
    }

    ::before{
        top: -8px;
        right: 0;
    }
`;

export const Times = styled(Bars)`
    background-color: transparent;

    ::before,
    ::after{
        width: 25px; 
        top: 0;

        @media screen and (max-width: 375px){
            width: 22px;
        } 
    }

    ::after{
        transform: rotate(45deg);
    }

    ::before{
        transform: rotate(-45deg);
    }
`;
// SIDEBAR
export const Sidebar = styled.div`
    top: 0;
    right: 0;
    width: 300px;
    background-color: #603601;
    padding: 6rem 1rem 0 1rem;
    text-align: right;
    height: 1500px;
    position: fixed;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .5s;
    box-shadow: -12px 9px 17px -3px rgba(0,0,0,0.72);
    -webkit-box-shadow: -12px 9px 17px -3px rgba(0,0,0,0.72);
    -moz-box-shadow: -12px 9px 17px -3px rgba(0,0,0,0.72);

    /* @media screen and (max-width: 950px){
        top: 70px;
    } */

    @media screen and (max-width: 1080px){
        padding-top: 3rem;
    } 

    @media screen and (max-width: 785px){
        width: 250px;
    } 
`
export const SidebarMenuItem = styled.div`
    margin: 1rem 2rem;
    border-bottom: 1px solid #fff;
    padding-bottom: 1rem;

    @media screen and (max-width: 1080px){
        padding-bottom: .5rem;
    } 
`
export const SidebarLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &:hover{
        border-right: 7px solid #1C0A00;
        padding-right: 1rem;
        transition: all .3s;
        color: #1C0A00;
    }
`
const IconStyle = css`
    padding-left: 1rem;
    font-size: 2.2rem;
`
export const HomeIcon = styled(MdMapsHomeWork)`
    ${IconStyle}
`;
export const MovieIcon = styled(MdMovie)`
    ${IconStyle}
`;
export const TrendingIcon = styled(MdTrendingUp)`
    ${IconStyle}
`
export const WatchListIcon = styled(BsBookmarkFill)`
    ${IconStyle}
`
export const AboutIcon = styled(MdOutlineContactSupport)`
    ${IconStyle}
`
export const SearchIcon = styled(ImSearch)`
    ${IconStyle}
`
export const SoonIcon = styled(MdOutlineLocalMovies)`
    ${IconStyle}
`