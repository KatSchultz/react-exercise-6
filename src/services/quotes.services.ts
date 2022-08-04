import axios from "axios";
import { Quote } from "../types";

export function fetchAllQuotes() {
  return axios
    .get<Quote[]>("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then((response) => response);
}
