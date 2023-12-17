import React from "react";
import CastCard from "../castCard";
import Grid from "@mui/material/Grid";

const CastList = ( {castMembers, action }) => {
  console.log("castlist", action)
  let castCards = castMembers.map((c) => (
    <Grid key={c.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <CastCard key={c.id} cast={c} action={action} />
    </Grid>
  ));
  return castCards;
};



export default CastList;