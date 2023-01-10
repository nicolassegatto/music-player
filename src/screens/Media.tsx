import { PlayerLg } from "../Components/PlayerLg/PlayerLg";
import { PlayerMd } from "../Components/PlayerMd/PlayerMd";
import { PlayerSm } from "../Components/PlayerSm/PlayerSm";
import { FullPlayer, GroupPlayer, PlayersContainer } from "./styled";

export function MediaPlayer() {
  return (
    <PlayersContainer>
      <FullPlayer>
        <PlayerLg />
      </FullPlayer>
      <GroupPlayer>
        <PlayerMd />
        <PlayerSm />
      </GroupPlayer>
    </PlayersContainer>
  )
}