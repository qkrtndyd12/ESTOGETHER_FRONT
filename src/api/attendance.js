import axios from "axios";

export const attendanceCheck = (params) => {
  console.log('param', params);
  return axios.post(`http://localhost:8080/api/v1/attendance/members/${params.memberId}`, params);
};