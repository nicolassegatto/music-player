import { Rewind, Play, FastForward, Pause} from "phosphor-react";
import { PlayerLG, PlayerLGButtons, PlayerLGImage, PlayerLGTime, PlayerLGTimeBar, PlayerLGTimeBarCurrent, PlayerLGTimeSeconds, PlayerLGTitle } from "./styled";
import { useEffect, useState, useRef } from 'react';

async function getMusics() {
  let response = await fetch('http://localhost:5173/public/api/music.json')
  let data = await response.json(); 
  return data
}

interface MusicResponseType {
  id: string;
  url: string;
  tytle: string;
  author: string;
  cover: string;
}[]

interface ActualMusicType {
  id: string;
  url: string;
  tytle: string;
  author: string;
  cover: string;
}{}

export function PlayerLg () {

  const [musics, setMusics] = useState<MusicResponseType[]>([])
  const [play, setPlay] = useState<boolean>(false)
  const [pos, setPos] = useState<number>(0)
  const [musica, setMusica] = useState<ActualMusicType>({
    author: "",
    id: "",
    cover: "",
    tytle: "",
    url: ""
  })

  useEffect(() => {
      getMusics().then(data => {
      setMusics(data["musics"])
      
      // setMusica({
      //   author: musics[pos]["author"],
      //   id: musics[pos]["id"],
      //   cover: musics[pos]["cover"],
      //   tytle: musics[pos]["tytle"],
      //   url: musics[pos]["url"]
      // })
    })
  }, [])

  let music = useRef(new Audio("/music/Emociona%20quem%20quer.mp3"))

  function handlePlayPause(){
    if(play){
      setPlay(false)
      music.current.pause()
    }else{
      setPlay(true)
      music.current.play()
    }
  }

  return(
    <PlayerLG>
      <PlayerLGImage>
        <img src={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/4k-deep-house-music-album-cover-design-template-8b350ebb7d8559ec782c56188ac89353_screen.jpg?ts=1633600721"} alt="" />
      </PlayerLGImage>

      <PlayerLGTitle>
        <h1>Acorda Devinho</h1>
        <h2>Banda Rocketseat</h2>
      </PlayerLGTitle>
      
      <PlayerLGButtons>

        <button><Rewind weight="fill" size={34}/></button>
        <button onClick={handlePlayPause}>{!play ? <Play weight="fill" size={34}/> : <Pause weight="fill" size={34}/>}</button>
        <button><FastForward weight="fill" size={34}/></button>
        
      </PlayerLGButtons>

      <PlayerLGTime>

        <PlayerLGTimeBar>
          <PlayerLGTimeBarCurrent>
          </PlayerLGTimeBarCurrent>
        </PlayerLGTimeBar>

        <PlayerLGTimeSeconds>
          <label>03:37</label>
          <label>01:13</label>
        </PlayerLGTimeSeconds>

      </PlayerLGTime>
    </PlayerLG>
  )
}