import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getMemberList} from "../../api/member";

const MemberList = ({params}) => {
  const { isLoading, isError, data, error } = useQuery(['memberList'], () => getMemberList(params), {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실패시 재호출 몇번 할지
    onSuccess: data => {
    },
    onError: e => {
      console.log(e.message);
    }
  });
  if (isLoading) return <>Loading...</>
  if (isError) return <>{error}</>

  return (
    <table className="table table-striped">
      <thead>
      <tr>
        <th colSpan={2}> 이름 </th>
        <th>성별</th>
        <th>나이</th>
        <th>전화번호</th>
        <th>주소</th>
        <th>부모/형제</th>
        <th>신급</th>
        <th>직업</th>
        <th>학년</th>
        <th>군입대</th>
        <th>타지</th>
        <th>장기 미출석</th>
      </tr>
      </thead>
      <tbody>{
        data.data.map((member, idx) => (
          <tr key={idx}>
            <td className="py-1">
              <img src={require("../../assets/images/faces/face1.jpg")} alt="user icon" />
            </td>
            <td>{member.name}</td>
            <td>{member.sex}</td>
            <td>{member.dayOfBirth ? new Date().getFullYear() - new Date(member.dayOfBirth).getFullYear() + 1 : ''}</td>
            <td>{member.phoneNumber}</td>
            <td>{member.address}</td>
            <td>{member.parents}</td>
            <td>{member.baptism}</td>
            <td>{member.job}</td>
            <td>{member.grade}</td>
            <td>{member?.memberStatus?.army && <i className="mdi mdi-check-circle"></i>}</td>
            <td>{member?.memberStatus?.otherArea && <i className="mdi mdi-check-circle"></i>}</td>
            <td>{member?.memberStatus?.longAbsence && <i className="mdi mdi-check-circle"></i>}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
};

export default MemberList;