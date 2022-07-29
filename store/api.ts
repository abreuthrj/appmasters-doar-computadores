/**
 * Define as chamadas da API
 */
import axios from "axios";
import {
  ApiStatusResponseType,
  ApiFormRequestType,
  ApiFormResponseType,
} from "./types";

export const apiFetchStatus = () =>
  axios.get<ApiStatusResponseType>(`https://doar-computador-api.herokuapp.com`);

export const apiPostForm = (body: ApiFormRequestType) =>
  axios.post<ApiFormResponseType>(
    `https://doar-computador-api.herokuapp.com/donation`,
    body
  );
