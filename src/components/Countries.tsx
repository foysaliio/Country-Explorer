import { use } from "react";
import type { CountryType } from "../types";

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const countries = use(countriesPromise);
  console.log(countries);

  return <div></div>;
}
