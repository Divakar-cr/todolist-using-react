import React from "react";
import styled from "styled-components";

const Footer = () => {
  const year = new Date();

  return <footer>Copyright &copy; {year.getFullYear()}</footer>;
};

export default Footer;
