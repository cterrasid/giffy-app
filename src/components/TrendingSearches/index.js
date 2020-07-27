import React, { useState, useEffect } from "react";
import getTrendingSearchesService from "services/getTrendingSearchesService";
import ListOfCategories from "../ListOfCategories";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingSearchesService().then(setTrends);
  }, []);

  return <ListOfCategories name="Trends" options={trends} />;
}

export default function LazyTrending() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onChange = entries => {
      const el = entries[0];
      el.isIntersecting && setShow(true);
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px"
    });

    observer.observe(document.getElementById("LazyTrending"));
  });
  return (
    <div id="LazyTrending">
      {show ? <TrendingSearches /> : null}
    </div>
  );
}
