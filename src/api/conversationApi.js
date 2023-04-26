import { generateParamsString } from "../utils/generateParamsString";
import { axiosClientPrivate } from "./axiosClient";
const url = "/conversations";
const conversationApi = {
  getConversations: ({ page = 0, limit = 2 }) => {
    const paramsString = generateParamsString({ page, limit });
    return axiosClientPrivate.get(`${url}?${paramsString}`);
  },
};

export const { getConversations } = conversationApi;
