import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "../components";
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <h4>error page</h4>
      <Footer />
    </>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
