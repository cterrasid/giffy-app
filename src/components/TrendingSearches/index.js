import React, { useState, useEffect } from "react";
import getTrendingSearchesService from "services/getTrendingSearchesService";
import useNearScreen from "hooks/useNearScreen";
import ListOfCategories from "components/ListOfCategories";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingSearchesService().then(setTrends);
  }, []);

  return <ListOfCategories name="Trends" options={trends} />;
}

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "200px" });

  return (
    <section ref={fromRef}>
      {isNearScreen ? <TrendingSearches /> : null}
    </section>
  );
}
