import { Injectable } from '@nestjs/common';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  private players: Array<Player> = [
    { id: 1, name: 'Pelé', position: 'Delantero', Equipo: 'Santos', Edad: 24 },
    { id: 2, name: 'Maradona', position: 'Delantero', Equipo: 'Boca', Edad: 22 },
  ];

  getPlayers(): Array<Player> {
    return this.players;
  }

  getPlayer(id): Player {
    return this.players.find((player) => player.id === Number(id));
  }

  createPlayer(player): Player {
    this.players.push({ id: this.players.length + 1, ...player });
    return this.players[this.players.length - 1];
  }

  updatePlayer(id: number, player: Player): Player {
    const index = this.players.findIndex((item) => item.id === id);
    this.players[index] = { id, ...player };
    return this.players[index];
  }

  deletePlayer(id: number): string {
    const index = this.players.findIndex((item) => item.id === id);
    this.players.splice(index, 1);
    return `Player ${id} was deleted`;
  }
}
