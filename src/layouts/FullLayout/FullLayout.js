import React, { useEffect, useState } from "react";
import {
  experimentalStyled,
  useMediaQuery,
  Container,
  Box,
} from "@material-ui/core";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import { TopbarHeight } from "../../assets/global/Theme-variable";
import { useLocation, useNavigate } from "react-router";
// import Login from '../../views/Login/login';
const MainWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));
const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  width: "100%",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
    paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px",
  },
}));

const FullLayout = () => {
  const navigate = useNavigate();
  const checkIsLoggedIn = async () => {
    if (!localStorage.getItem("accessToken")) navigate("/login");
  };
  useEffect(() => {
    checkIsLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { pathname } = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  return pathname === "/pos" ? (
    <MainWrapper
      style={{ marginLeft: "0", marginRight: "0", maxWidth: "100%" }}
    >
      <Header
        sx={{
          paddingLeft: isSidebarOpen && lgUp ? "" : "",
          backgroundColor: "#ffffff",
        }}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
      />
      <PageWrapper>
        {/* <div style={{ width:"100%",background:"red" }}>Hello World</div> */}

        <Container
          style={{
            margin: "0",
            marginRight: "0",
            maxWidth: "100%",
            paddingRight: "0",
          }}
          maxWidth={true}
          sx={{
            paddingTop: "20px",
            paddingLeft: isSidebarOpen && lgUp ? "" : "",
          }}
        >
          <Box
            style={{
              margin: "0",
              paddingRight: "0",
              paddingLeft: "0",
              maxWidth: "100%",
            }}
            sx={{ minHeight: "calc(100vh - 170px)" }}
          >
            <Outlet />
          </Box>
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
  ) : (
    <MainWrapper>
      <Header
        sx={{
          paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
          backgroundColor: "#ffffff",
        }}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
      />

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />

      <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
            paddingTop: "20px",
            paddingLeft: isSidebarOpen && lgUp ? "280px!important" : "",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
            <Outlet />
          </Box>
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;
