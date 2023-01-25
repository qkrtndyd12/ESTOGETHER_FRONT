import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getGroupList} from "../../api/group";

const GroupList = ({params}) => {
  const { isLoading, isError, data, error } = useQuery(['groupList'], () => getGroupList(params), {
    refetchOnWindowFocus: false,
    retry: 0,
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
        <th>셀 이름</th>
        <th>리더 이름</th>
        <th>셀원수</th>
      </tr>
      </thead>
      <tbody>{
        data.data.map((group, idx) => (
          <tr key={idx}>
            <td>{group.name}</td>
            <td>{group.readerName}</td>
            <td>{group.memberList.length}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
};

export default GroupList;