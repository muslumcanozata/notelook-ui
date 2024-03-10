import React from "react";
import { Box, Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box>
      <Container maxW={"container.xl"} my={4}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
