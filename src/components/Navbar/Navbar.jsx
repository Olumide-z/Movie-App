import { useState } from 'react'
import { ImSearch } from 'react-icons/im';
import { BsBookmarkStar } from 'react-icons/bs'
// importing styles
import { 
  Container, Logo, LogoIcon, MenuWrapper, 
  NavIcons, Bars, Times, MenuItem, MenuLink, Icon,
  Sidebar, SidebarMenuItem, SidebarLink, HomeIcon,
  MovieIcon, TrendingIcon, WatchListIcon, AboutIcon, SearchIcon, BarsContainer
} from './NavbarStyles'


const Navbar = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false)
  return (
    <Container>

        <Logo to='/'><LogoIcon/>MovieWorld</Logo>

        <MenuWrapper>
            <MenuItem>
              <MenuLink to='/new-movies'>New Movies</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to='/trending'>Trending</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to='/coming-soon'>Coming soon</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to='/about'>About</MenuLink>
            </MenuItem>
        </MenuWrapper>

        <NavIcons>
            <Icon to='/search'>
              <ImSearch />
            </Icon>
            <Icon to='/watchlist'>
              <BsBookmarkStar />
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
              <SidebarLink to='/search'>Search<SearchIcon /></SidebarLink>
            </SidebarMenuItem>
        </Sidebar>
    </Container>
  )
}

export default Navbar