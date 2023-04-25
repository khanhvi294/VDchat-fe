import { axiosClientPrivate } from "./axiosClient";
const url = "/users";
const userApi = {
  getUserInfo: () => {
    return axiosClientPrivate.get(url + "/info");
  },
  updateInfo: (data) => {
    return axiosClientPrivate.patch(url + "/update", data);
  },
  blockUser: (userId) => {
    return axiosClientPrivate.patch(url + `/block/${userId}`);
  },
};

export const { getUserInfo, updateInfo, blockUser } = userApi;
