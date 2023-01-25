import React, {useState} from 'react';
import GroupList from "./GroupList";

const GroupInfo = () => {
  const [params, setParams] = useState({});
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> 셀 정보 </h3>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <GroupList params={params}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default GroupInfo;