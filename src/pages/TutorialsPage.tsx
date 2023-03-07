import { Grid } from "@chakra-ui/react";
import { CardFlex } from "components/global";
import tutorialsJson from "data/tutorials.json";

export const TutorialsPage = () => {
  return (
    <Grid className="tutorials-page grid-cards">
      {tutorialsJson?.map((item, i: number) => {
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
