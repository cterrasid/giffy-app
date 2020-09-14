import React, { lazy, Suspense } from "react";
import { Route } from "wouter";
import { GifsContextProvider } from "context/GifsContext";
import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail";
import "./App.css";

const HomePage = lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <div className="app">
      <Suspense fallback={null}>
        <GifsContextProvider>
          <Route path="/" component={HomePage} />
          <Route path="/search/:keyword/:rating?" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
          <Route path="/404" component={() => <h1>404 ERROR</h1>} />
        </GifsContextProvider>
      </Suspense>
    </div>
  );
}
