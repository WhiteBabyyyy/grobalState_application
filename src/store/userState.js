import { atom } from "recoil";

//グローバルなステートとして定義
export const userState = atom({
  //このシステム全体で使用する一意のキーを書く必要がある
  //ほかのRecoilと被らないようにする必要があるためファイル名が好ましい
  key: "userState",
  default: { isAdmin: false }
});
