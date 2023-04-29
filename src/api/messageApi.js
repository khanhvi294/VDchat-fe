import { generateParamsString } from "../utils/generateParamsString";
import { axiosClientPrivate } from "./axiosClient";
const url = "/messages";
const messageApi = {
  getMessages: ({ conversationId, page = 0, limit = 2 }) => {
    const paramsString = generateParamsString({ page, limit });
    return axiosClientPrivate.get(`${url}/${conversationId}?${paramsString}`);
  },
  createMessage: (data) => {
    console.log("datasemd ", data);
    return axiosClientPrivate.post(`${url}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export const { getMessages, createMessage } = messageApi;
