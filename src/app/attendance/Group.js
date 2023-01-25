import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getGroupById} from "../../api/group";

const Group = ({groupId}) => {
  const { isLoading, isError, data, error } = useQuery(['group'], () => getGroupById(groupId), {
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
  return (
    <>
      <h4 className="card-title">{data.data.name}</h4>
      <p className="card-description"> 셀리더 <code>{data.data.readerName}</code>
      </p>
    </>
  )
};

export default Group;