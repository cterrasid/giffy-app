import React, { useState, useEffect } from "react";
import getTrendingSearchesService from "services/getTrendingSearchesService";
import ListOfCategories from "../ListOfCategories";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingSearchesService().then(setTrends);
  }, []);

  return <ListOfCategories name="Trends" options={trends} />;
}
