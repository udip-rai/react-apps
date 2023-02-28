import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <Grid className="layout" templateAreas={`"header" "body" "footer"`}>
      <GridItem className="header" area="header">
        <Header />
      </GridItem>
      <GridItem className="body" area="body">
        <Outlet />
      </GridItem>
      <GridItem className="footer" area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
};
