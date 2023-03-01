import { Grid } from "@chakra-ui/react";
import { CardFlex } from "components/global";
import appsJson from "data/apps.json";

export const AppsPage = () => {
  return (
    <Grid className="apps-page grid-cards">
      {appsJson[0]?.map((item) => {
        return (
          <CardFlex
            key={Date.now() + item.title}
            title={item.title}
            img={item.img}
            href={item.href}
          />
        );
      })}
      {appsJson[0]?.map((item) => {
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
