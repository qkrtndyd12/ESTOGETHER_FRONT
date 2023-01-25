import React, {useState} from 'react';
import MemberList from "../memberInfo/MemberList";

const MemberInfo = () => {
  const [params, setParams] = useState({});
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> 회원 정보 </h3>
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
              <div className="table-responsive">
                <MemberList params={params}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MemberInfo;