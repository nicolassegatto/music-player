import { Routes, Route } from "react-router-dom";
import { MediaPlayer } from "./screens/Media";

export function PagesRouter(){
  return(
    <Routes>
      <Route path='/' element={<MediaPlayer/>}/>
    </Routes>
  )
}