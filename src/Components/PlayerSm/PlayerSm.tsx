import { PlayerSM, PlayerSMButtons, PlayerSMImage, PlayerSMImageInfo, PlayerSMTitle } from "./styled";
import { Rewind, Play, FastForward } from "phosphor-react";

export function PlayerSm() {
  return (
    <PlayerSM>
      <PlayerSMImageInfo>
        <PlayerSMImage>
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/4k-deep-house-music-album-cover-design-template-8b350ebb7d8559ec782c56188ac89353_screen.jpg?ts=1633600721" alt="" />
        </PlayerSMImage>
        <PlayerSMTitle>
          <h1>Acorda Devinho</h1>
          <h2>Banda Rocketseat</h2>
        </PlayerSMTitle>
      </PlayerSMImageInfo>

      <PlayerSMButtons>
        <button><Rewind weight="fill" size={34} /></button>
        <button><Play weight="fill" size={34} /></button>
        <button><FastForward weight="fill" size={34} /></button>
      </PlayerSMButtons>
    </PlayerSM>
  )
}