import React, {useEffect, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getGroupById, getGroupList} from "../../api/group";

const Group = ({group}) => {
  return (
    <>
      <h4 className="card-title">{group.name}</h4>
      <p className="card-description"> 셀리더 <code>{group.readerName}</code>
      </p>
    </>
  )
};

export default Group;