import { Grid } from "@chakra-ui/react";
import { CardFlex } from "components/global";
import homeJson from "data/home.json";

export const HomePage = () => {
  return (
    <Grid className="home-page grid-cards">
      {homeJson?.map((item: any, i: number) => {
        return (
          <CardFlex
            key={item.title + item.href + item.img}
            title={item.title}
            img={item.img}
            href={item.href}
            details={item.details}
          />
        );
      })}
    </Grid>
  );
};
