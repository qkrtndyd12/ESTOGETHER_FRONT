import axios from "axios";

export const getMemberList = (param) => {
  console.log('getMemberList param', param);
  return axios.get(`http://localhost:8080/api/v1/members`, param);
};