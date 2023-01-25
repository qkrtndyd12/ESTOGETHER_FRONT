import {atom} from "recoil";

export const groupState = atom({
  key: 'groupState',
  default: {}
});
export const groupListState = atom({
  key: 'groupListState',
  default: []
});