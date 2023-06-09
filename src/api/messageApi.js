import { generateParamsString } from "../utils/generateParamsString";
import { axiosClientPrivate } from "./axiosClient";
const url = "/messages";
const messageApi = {
  getMessages: ({ conversationId, page = 0, limit = 2 }) => {
    const paramsString = generateParamsString({ page, limit });
    return axiosClientPrivate.get(`${url}/${conversationId}?${paramsString}`);
  },
  createMessage: (data) => axiosClientPrivate.post(url, data),
};

export const { getMessages, createMessage } = messageApi;
