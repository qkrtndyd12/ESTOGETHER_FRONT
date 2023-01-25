import React, {useEffect} from 'react';
import {useMutation} from "@tanstack/react-query";
import * as AttendanceApi from "../../api/attendance";
import Member from "./Member";

const MemberList = ({memberList}) => {

  return (
    <table className="table table-striped">
      <thead>
      <tr>
        <th> 이름 </th>
        <th> 출석 </th>
      </tr>
      </thead>
      <tbody>{
        memberList.map((member, idx) => (
          <Member member={member} idx={idx}/>
        ))
      }
      </tbody>
    </table>
  )
};

export default MemberList;