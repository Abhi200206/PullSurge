import { BrowserRouter,Route,Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Websockets from "./pages/Websockets"
import Https from "./pages/Https"
import { RecoilRoot } from "recoil"
import Settings from "./pages/Settings"
function App() {

  return (
    <div>
      <RecoilRoot>
      <BrowserRouter>
      <Landing>
        <Routes>
          <Route path="/" element={<Https/>}/>
          <Route path="/ws" element={<Websockets/>} />
          <Route path="/setting" element={<Settings/>}/>
        </Routes>
        </Landing>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App
