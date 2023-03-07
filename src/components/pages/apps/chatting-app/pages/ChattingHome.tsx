import { Grid } from "@chakra-ui/react";
import { CardFlex } from "components/global";
import ChattingHomeJson from "data/apps/chatting-app/json/chatting-home.json";

export const ChattingHome = () => {
  return (
    <Grid className="chatting-home grid-cards">
      {ChattingHomeJson?.map((item, i: number) => {
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
