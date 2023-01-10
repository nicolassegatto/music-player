import { PlayerMDImageInfo, PlayerMD, PlayerMDImage, PlayerMDTitle, PlayerMDButtons, PlayerMDTime, PlayerMDTimeBar, PlayerMDTimeBarCurrent, PlayerMDTimeSeconds } from "./styled";
import { Rewind, Play, FastForward } from "phosphor-react";

export function PlayerMd() {
  return (
    <PlayerMD>

      <PlayerMDImageInfo>
        <PlayerMDImage>
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/4k-deep-house-music-album-cover-design-template-8b350ebb7d8559ec782c56188ac89353_screen.jpg?ts=1633600721" alt="" />
        </PlayerMDImage>

        <PlayerMDTitle>
          <h1>Acorda Devinho</h1>
          <h2>Banda Rocketseat</h2>
        </PlayerMDTitle>
      </PlayerMDImageInfo>

      <PlayerMDButtons>
        <button><Rewind weight="fill" size={34} /></button>
        <button><Play weight="fill" size={34} /></button>
        <button><FastForward weight="fill" size={34} /></button>
      </PlayerMDButtons>

      <PlayerMDTime>
        <PlayerMDTimeBar>
          <PlayerMDTimeBarCurrent></PlayerMDTimeBarCurrent>
        </PlayerMDTimeBar>

        <PlayerMDTimeSeconds>
          <label>03:37</label>
          <label>01:13</label>
        </PlayerMDTimeSeconds>
      </PlayerMDTime>
    </PlayerMD>
  )
}