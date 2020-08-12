import React, { lazy, Suspense } from "react";
import { Route } from "wouter";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import "./App.css";
import { GifsContextProvider } from "./context/GifsContext";

const HomePage = lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <section className="App-content">
          <GifsContextProvider>
            <Route path="/" component={HomePage} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/404" component={() => <h1>404 ERROR</h1>} />
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  );
}
