import { Grid } from "@chakra-ui/react";
import { CardFlex } from "components/global";
import homeJson from "data/home_page/home.json";

export const HomePage = () => {
  return (
    <Grid className="home-page grid-cards">
      {homeJson[0]?.map((item) => {
        return (
          <CardFlex
            key={Date.now() + item.title}
            title={item.title}
            img={item.img}
            href={item.href}
          />
        );
      })}
    </Grid>
  );
};
