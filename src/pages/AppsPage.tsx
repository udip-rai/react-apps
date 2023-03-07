import { Grid } from "@chakra-ui/react";
import { CardFlex } from "components/global";
import appsJson from "data/apps.json";

export const AppsPage = () => {
  return (
    <Grid className="apps-page grid-cards">
      {appsJson?.map((item, i: number) => {
        return (
          <CardFlex
            key={item.title + item.img}
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
