import { axiosClientPrivate } from "./axiosClient";
const url = "/user";
const userApi = {
  getUserInfo: () => {
    return axiosClientPrivate.get(url + "/info");
  },
};

export const { getUserInfo } = userApi;
