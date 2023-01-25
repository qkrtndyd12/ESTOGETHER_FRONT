import axios from "axios";

export const getGroupList = (param) => {
  return axios.get(`http://localhost:8080/api/v1/groups`, param);
};
export const getGroupById = (groupId) => {
  return axios.get(`http://localhost:8080/api/v1/groups/${groupId}`);
};