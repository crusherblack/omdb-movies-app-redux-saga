import axios from "axios";

export const api = axios.create({
  baseURL: "http://www.omdbapi.com",
});

export const apiKey = "a0a77c45";
