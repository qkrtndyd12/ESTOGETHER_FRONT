import React, {useEffect} from "react";
import Group from "./Group";
import MemberList from "./MemberList";

const Attendance = () => {
  // const [memberList, setMemberList] = useRecoilState(memberListState);
  //
  // useEffect(() => {
  //   console.log('memberList', memberList);
  // }, [memberList]);

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
              <Group groupId={3}/>
              <div className="table-responsive">
                <MemberList groupId={3}/>
              </div>
              <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
              <button className="btn btn-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Attendance;