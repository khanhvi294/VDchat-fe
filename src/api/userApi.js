import { axiosClientPrivate } from "./axiosClient";
const url = "/users";
const userApi = {
  getUserInfo: () => {
    return axiosClientPrivate.get(url + "/info");
  },
};

export const { getUserInfo } = userApi;
