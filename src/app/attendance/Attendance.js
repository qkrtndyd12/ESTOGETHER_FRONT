import React, {useEffect, useState} from "react";
import Group from "./Group";
import MemberList from "./MemberList";
import {useQuery} from "@tanstack/react-query";
import {getGroupAttendanceById, getGroupAttendanceList} from "../../api/group";

const Attendance = () => {
  const [groupId, setGroupId] = useState(null);
  // const [memberList, setMemberList] = useRecoilState(memberListState);
  //
  // useEffect(() => {
  //   console.log('memberList', memberList);
  // }, [memberList]);

  const [params, setParams] = useState({groupId, operation: true});
  const { isLoading, isError, data, error } = useQuery(['group'], () => params.groupId ? getGroupAttendanceById(params) : getGroupAttendanceList(params), {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실패시 재호출 몇번 할지
    onSuccess: data => {
      console.log('group success', data);
    },
    onError: e => {
      console.log(e.message);
    }
  });

  if (isLoading) return <>Loading...</>
  if (isError) return <>{error}</>

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> 출석체크 </h3>
        {/*<nav aria-label="breadcrumb">*/}
        {/*  <ol className="breadcrumb">*/}
        {/*    <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>*/}
        {/*    <li className="breadcrumb-item active" aria-current="page">출석체크</li>*/}
        {/*  </ol>*/}
        {/*</nav>*/}
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              {
                Array.isArray(data.data) &&
                data.data.map((group, idx) => (
                  <React.Fragment key={idx}>
                    <Group group={group}/>
                    <div className="table-responsive">
                      <MemberList memberList={group.memberList}/>
                    </div>
                    <br/>
                  </React.Fragment>
                ))
              }
              {
                !Array.isArray(data.data) &&
                <>
                  <Group group={data.data}/>
                  <div className="table-responsive">
                    <MemberList memberList={data.data.memberList}/>
                  </div>
                </>
              }
              {/*<button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>*/}
              {/*<button className="btn btn-light">Cancel</button>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Attendance;