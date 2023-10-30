import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { useSidebar } from "../contexts/sidebarContext.jsx";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const HideElementDiv = styled.div`
  margin-left: 40px;
  margin-top: -8px;
  position: absolute;
  background-color: var(--color-brand-100);
  color: black;
  font-size: small;
  border-radius: 4px;
  letter-spacing: 1px;
  font-size: 11px;
  font-weight: lighter;

  /* &:hover {
    display: none;
  } */
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);

    /* color: greenyellow; */
  }
  & > div {
    display: none;
    /* background-color: red; */
  }

  &:hover > div {
    display: block;
    /* background-color: red; */
  }
`;

// open
// eslint-disable-next-line react/prop-types
function MainNav({ open }) {
  const { navOpen, dispatch } = useSidebar();

  return (
    <>
      <nav>
        <NavList>
          {/* <li onClick={() => dispatch({ type: "toggle" })}>

          </li> */}
          {navOpen === false ? (
            <li>
              <div>
                <StyledNavLink to="/dashboard">
                  <HiOutlineHome />
                  <HideElementDiv>Home</HideElementDiv>
                </StyledNavLink>
              </div>
              <StyledNavLink to="/bookings">
                <HiOutlineCalendarDays></HiOutlineCalendarDays>
                <HideElementDiv>Bookings</HideElementDiv>
              </StyledNavLink>
              <StyledNavLink to="/cabins">
                <HiOutlineHomeModern></HiOutlineHomeModern>
                <HideElementDiv>Cabins</HideElementDiv>
              </StyledNavLink>

              <StyledNavLink to="/users">
                <HiOutlineUsers></HiOutlineUsers>
                <HideElementDiv>Users</HideElementDiv>
              </StyledNavLink>

              <StyledNavLink to="/settings">
                <HiOutlineCog6Tooth></HiOutlineCog6Tooth>
                <HideElementDiv>Settings</HideElementDiv>
              </StyledNavLink>
            </li>
          ) : (
            <li onClick={() => dispatch({ type: "toggle" })}>
              <StyledNavLink to="/dashboard">
                <HiOutlineHome />
                {open && <span>Home</span>}{" "}
              </StyledNavLink>
              <StyledNavLink to="/bookings">
                <HiOutlineCalendarDays></HiOutlineCalendarDays>
                {open && <span>Bookings</span>}
              </StyledNavLink>

              <StyledNavLink to="/cabins">
                <HiOutlineHomeModern></HiOutlineHomeModern>
                {open && <span>Cabins</span>}
              </StyledNavLink>

              <StyledNavLink to="/users">
                <HiOutlineUsers></HiOutlineUsers>
                {open && <span>Users</span>}
              </StyledNavLink>

              <StyledNavLink to="/settings">
                <HiOutlineCog6Tooth></HiOutlineCog6Tooth>
                {open && <span>Settings</span>}
              </StyledNavLink>
            </li>
          )}
        </NavList>
      </nav>
    </>
  );
}

export default MainNav;
