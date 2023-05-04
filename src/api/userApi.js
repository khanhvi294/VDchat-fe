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
  unblockUser: (userId) => {
    return axiosClientPrivate.patch(url + `/unblock/${userId}`);
  },
  findUsersAndConversations: (name) => {
    return axiosClientPrivate.get(url + `/find/${name}`);
  },
};

export const {
  getUserInfo,
  updateInfo,
  blockUser,
  unblockUser,
  findUsersAndConversations,
} = userApi;
