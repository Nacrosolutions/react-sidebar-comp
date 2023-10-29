import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar.jsx";
import { useSidebar } from "../contexts/sidebarContext.jsx";
import Header from "./Header.jsx";
// import Sidebar from "./SideBar.jsx";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  height: 100dvh;

  /* transition: cubic-bezier(0.075, 0.82, 0.165, 1); */
`;
const MainClose = styled.main`
  background-color: var(--color-grey-50);
  /*
   padding: 4rem 4.8rem 6.4rem; */
  margin-left: -17rem;
  padding: 4rem 4.8rem 6.4rem;
  animation-delay: 2ms;
  height: 100dvh;
`;

function AppLayout() {
  const { navOpen } = useSidebar();

  return (
    <>
      <Header></Header>
      <StyledAppLayout>
        <Sidebar />
        {navOpen === true ? (
          <Main>
            <Outlet></Outlet>
          </Main>
        ) : (
          <MainClose>
            <Outlet></Outlet>
          </MainClose>
        )}
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
