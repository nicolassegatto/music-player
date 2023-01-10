import { Rewind, Play, FastForward} from "phosphor-react";
import { PlayerLG, PlayerLGButtons, PlayerLGImage, PlayerLGTime, PlayerLGTimeBar, PlayerLGTimeBarCurrent, PlayerLGTimeSeconds, PlayerLGTitle } from "./styled";

export function PlayerLg () {
  return(
    <PlayerLG>
      <PlayerLGImage>
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/4k-deep-house-music-album-cover-design-template-8b350ebb7d8559ec782c56188ac89353_screen.jpg?ts=1633600721" alt="" />
      </PlayerLGImage>

      <PlayerLGTitle>
        <h1>Acorda Devinho</h1>
        <h2>Banda Rocketseat</h2>
      </PlayerLGTitle>

      <PlayerLGButtons>

        <button><Rewind weight="fill" size={34}/></button>
        <button><Play weight="fill" size={34}/></button>
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