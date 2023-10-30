import styled, { css } from "styled-components";
import MainNav from "./MainNav.jsx";
import { ImCross } from "react-icons/im";
import { HiOutlineMenu } from "react-icons/hi";
import { useSidebar } from "../contexts/sidebarContext.jsx";
import Logo from "./Logo.jsx";

const StyledSidebar = styled.aside`
  ${(props) =>
    props.open === false
      ? css`
          width: 8rem;
          /* background-color: #09092d; */
          transition: 1s;
          background-color: var(--color-grey-0);
        `
      : css`
          background-color: var(--color-grey-0);
          /* background-color: red; */
          transition: 0.5s;
          padding: 3.2rem 2.4rem;
          border-right: 1px solid var(--color-grey-100);
          grid-row: 1/ -1;
          display: flex;
          flex-direction: column;
          gap: 3.2rem;
        `}/* background-color: red; */
  /* width: 200px; */
`;

const SpanStyleClose = styled.span`
  cursor: pointer;
  display: flex;
  /* padding-bottom: 40px; */
  /* padding-top: 10px; */
  justify-content: right;
`;

const SpanStyleRight = styled.span`
  cursor: pointer;
  display: flex;
  padding-bottom: 10px;
  padding-top: 20px;
  justify-content: center;
  font-size: 4rem;
`;

function Sidebar() {
  // const [navOpen, setNavOpen] = useState(true);

  const { navOpen, dispatch } = useSidebar();
  // console.log("Nabham", open, dispatch);
  return (
    <>
      {/* {navOpen && <span>Home</span>} */}

      <StyledSidebar open={navOpen}>
        {navOpen === true ? (
          <SpanStyleClose>
            <div onClick={() => dispatch({ type: "toggle" })}>
              <ImCross />
            </div>
          </SpanStyleClose>
        ) : (
          <SpanStyleRight>
            <div onClick={() => dispatch({ type: "toggle" })}>
              <HiOutlineMenu />
            </div>
          </SpanStyleRight>
        )}
        {navOpen && <Logo />}

        <MainNav open={navOpen} />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
