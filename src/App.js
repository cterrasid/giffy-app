import React, { lazy, Suspense } from "react";
import { Route } from "wouter";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import "./App.css";
import { GifsContextProvider } from "./context/GifsContext";

const HomePage = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <section className="App-content">
          <GifsContextProvider>
            <Route path="/" component={HomePage} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  );
}

export default App;
