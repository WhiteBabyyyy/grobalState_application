import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";

import "./styles.css";

export default function App() {
  return (
    //リコイルを使用するときはプロバイダ同様に囲ってあげる必要がある
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
