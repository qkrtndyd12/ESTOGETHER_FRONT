import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getMemberList} from "../../api/member";

const MemberList = ({groupId}) => {
  const { isLoading, isError, data, error } = useQuery(['memberList', 'groupId'], () => getMemberList(groupId), {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실패시 재호출 몇번 할지
    onSuccess: data => {
      console.log('success', data);
    },
    onError: e => {
      console.log(e.message);
    }
  });
  if (isLoading) return <>Loading...</>
  if (isError) return <>{error}</>

  console.log('data', data);
  return (
    <table className="table table-striped">
      <thead>
      <tr>
        <th colSpan={2}> 이름 </th>
        <th> 출석 </th>
      </tr>
      </thead>
      <tbody>{
        data.data.map((member, idx) => (
          <tr key={idx}>
            <td className="py-1">
              <img src={require("../../assets/images/faces/face1.jpg")} alt="user icon" />
            </td>
            <td>{member.name}</td>
            <td>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input"/>
                  <i className="input-helper"></i>
                  {/*Default*/}
                </label>
              </div>
              {/*<ProgressBar variant="success" now={25} />*/}
            </td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
};

export default MemberList;