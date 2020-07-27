import React, { useState, useEffect, useRef } from "react";
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
  const elementRef = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];
      el.isIntersecting && setShow(true);
      observer.disconnect();
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px"
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  });
  return (
    <div ref="elementRef">
      {show ? <TrendingSearches /> : null}
    </div>
  );
}
