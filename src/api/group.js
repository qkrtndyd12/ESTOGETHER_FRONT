import axios from "axios";

export const getGroupList = (params) => {
  console.log('param', params);
  return axios.get(`http://localhost:8080/api/v1/groups`, {params});
};
export const getGroupById = (params) => {
  return axios.get(`http://localhost:8080/api/v1/groups/${params.groupId}`, {params});
};
export const getGroupAttendanceList = (params) => {
  return axios.get(`http://localhost:8080/api/v1/attendance/groups`, {params});
};
export const getGroupAttendanceById = (params) => {
  return axios.get(`http://localhost:8080/api/v1/attendance/groups/${params.groupId}`, {params});
};