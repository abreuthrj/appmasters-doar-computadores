/**
 * Define as chamadas da API
 */
import axiosModule from "axios";
import {
  ApiStatusResponseType,
  ApiFormRequestType,
  ApiFormResponseType,
} from "./types";

const { NEXT_PUBLIC_API_BASEURL } = process.env;

const axios = () =>
  axiosModule.create({
    baseURL: NEXT_PUBLIC_API_BASEURL,
  });

export const apiFetchStatus = () => axios().get<ApiStatusResponseType>("/");

export const apiPostForm = (body: ApiFormRequestType) =>
  axios().post<ApiFormResponseType>("/donation", body);
