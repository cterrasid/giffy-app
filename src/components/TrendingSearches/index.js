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
    let observer;
    const onChange = (entries, observer) => {
      const el = entries[0];
      el.isIntersecting && setShow(true);
      observer.disconnect();
    };

    Promise.resolve(
      typeof IntersectionObserver !== undefined
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: "100px"
      });

      observer.observe(elementRef.current);
    });

    return () => observer && observer.disconnect();
  });

  return (
    <div ref={elementRef}>
      {show ? <TrendingSearches /> : null}
    </div>
  );
}
