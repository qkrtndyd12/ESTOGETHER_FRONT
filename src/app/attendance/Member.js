import React, {useEffect, useState} from 'react';
import {useMutation} from "@tanstack/react-query";
import * as AttendanceApi from "../../api/attendance";

const Member = ({member, idx}) => {
  const [attendance, setAttendance] = useState(member.attendance);

  const attendanceCheckMutation = useMutation((params) => AttendanceApi.attendanceCheck(params));
  const attendanceCheck = (memberId, e) => {
    attendanceCheckMutation.mutate({memberId, attendance: e.target.checked});
  }

  useEffect(() => {
    if (attendanceCheckMutation.isSuccess) {
      setAttendance(prev => !prev);
    }
  }, [attendanceCheckMutation.isSuccess]);

  return (
    <tr key={idx}>
      <td>{member.name}</td>
      <td>
        <div className="form-check">
          <label className="form-check-label" onChange={(e) => {attendanceCheck(member.id, e)}}>
            <input type="checkbox" className="form-check-input" checked={attendance}/>
            <i className="input-helper"></i>
            {/*Default*/}
          </label>
        </div>
        {/*<ProgressBar variant="success" now={25} />*/}
      </td>
    </tr>
  )
};

export default Member;