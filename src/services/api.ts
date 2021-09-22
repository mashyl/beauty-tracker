/* eslint-disable import/no-anonymous-default-export */
import { axiosInstance } from "./axiosInstance";
import { DeleteObject} from "./interfaces";

export default {
  async deleteObject(data: DeleteObject) {
    return axiosInstance.post("auth/login/", {
      transformRequest: (data: any, headers: any) => {
        delete headers.common["Authorization"];
        return data;
      },
      ...data,
    });
  }
};
