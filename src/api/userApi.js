import { axiosClientPrivate } from "./axiosClient";
const url = "/users";
const userApi = {
  getUserInfo: () => {
    return axiosClientPrivate.get(url + "/info");
  },
  updateInfo: (data) => {
    console.log(data);
    return axiosClientPrivate.patch(url + "/update", data);
  },
};

export const { getUserInfo, updateInfo } = userApi;
