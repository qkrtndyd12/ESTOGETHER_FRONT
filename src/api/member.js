import axios from "axios";

export const getMemberList = (params) => {
  return axios.get(`http://localhost:8080/api/v1/members`, {params});
};