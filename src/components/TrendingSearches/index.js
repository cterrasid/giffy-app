import React, { lazy, Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";

const TrendingSearches = lazy(() => import("./trendingSearches"));

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "200px" });

  return (
    <section ref={fromRef}>
      <Suspense fallback={"Cargando tendencias..."}>
        {isNearScreen ? <TrendingSearches /> : "Cargando tendencias..."}
      </Suspense>
    </section>
  );
}
