import React from "react";

import {
  Container,
  Header,
  Details,
  Text,
  GitLink,
  GitIcon,
} from "./FooterStyles";
const Footer = () => {
  const date = new Date();
  return (
    <Container>
      <Header>Get daily movie updates</Header>
      <Details>
        <Text>&copy;{date.getFullYear()}. All rights reserved.</Text>
        <GitLink href="https://github.com/Olumide-z?tab=repositories">
          {" "}
          <GitIcon />
          Olumide Ilesanmi
        </GitLink>
      </Details>
    </Container>
  );
};

export default Footer;
