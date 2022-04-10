import { useState } from 'react'
import { ImSearch } from 'react-icons/im';
import { BsBookmarkStar } from 'react-icons/bs'


// importing styles
import { 
  Container, Logo, LogoIcon, MenuWrapper, 
  NavIcons, Bars, Times, MenuItem, MenuLink, Icon,
  Sidebar, SidebarMenuItem, SidebarLink, HomeIcon,
  MovieIcon, TrendingIcon, WatchListIcon, AboutIcon, SearchIcon, SoonIcon,
  BarsContainer
} from './NavbarStyles'

import { useGlobalContext } from '../../context';


const Navbar = () => {
  const { watchlist } = useGlobalContext();

  const [sidebarStatus, setSidebarStatus] = useState(false);
  

  // let activeClassName = 'red';

  return (
    <Container>

        <Logo to='/'><LogoIcon/>MovieWorld</Logo>

        <MenuWrapper>
            <MenuItem>
              <MenuLink
                to='/new-movies' 
                end={true}
                style={({ isActive }) => {
                  return { color: isActive ? "#1C0A00" : "white" };
                }}
              >New Movies</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink 
                style={({ isActive }) => {
                  return { color: isActive ? "#1C0A00" : "none" };
                }}
                to='/trending'>Trending</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                style={({ isActive }) => {
                  return { color: isActive ? "#1C0A00" : "none" };
                }}
              to='/top-rated'>Top Rated</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink 
                style={({ isActive }) => {
                  return { color: isActive ? "#1C0A00" : "none" };
                }}
              to='/about'>About</MenuLink>
            </MenuItem>
        </MenuWrapper>

        <NavIcons>
            <Icon to='/search'>
              <ImSearch />
            </Icon>
            <Icon to='/watchlist'>
              <BsBookmarkStar />
              { watchlist.length ? (
                <div className='watchlist-numbers'>
                  {watchlist.length}
                </div>
              ) : null}
            </Icon>
            <BarsContainer onClick={() => setSidebarStatus(!sidebarStatus)}>
              {
                sidebarStatus ? <Times></Times>: (
                  <Bars>
                  </Bars>
                )
              }
            </BarsContainer>
        </NavIcons>

        <Sidebar show={sidebarStatus}>
            <SidebarMenuItem>
              <SidebarLink to='/'>Home<HomeIcon /></SidebarLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarLink to='/new-movies'>New Movies<MovieIcon/></SidebarLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarLink to='/trending'>Trending<TrendingIcon /></SidebarLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarLink to='/watchlist'>Watchlist<WatchListIcon /></SidebarLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarLink to='/about'>About<AboutIcon /></SidebarLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarLink to='/top-rated'>Top Rated<SoonIcon /></SidebarLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarLink to='/search'>Search<SearchIcon /></SidebarLink>
            </SidebarMenuItem>
        </Sidebar>
    </Container>
  )
}

export default Navbar