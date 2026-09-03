import { Suspense } from "react";
import type { CountryType } from "./types";
import Countries from "./components/Countries";

// Create a promise to load data
const countriesPromise = async (): Promise<CountryType[]> => {
  const response = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await response.json();
  return data.countries;
};

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Countries countriesPromise={countriesPromise()} />
      </Suspense>
    </>
  );
}

export default App;
