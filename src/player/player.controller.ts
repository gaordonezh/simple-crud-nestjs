import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { Player } from './player.entity';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Get()
  getAll() {
    return this.playerService.getPlayers();
  }

  @Get(':id')
  getPlayerById(@Param('id', ParseIntPipe) id: number): Player {
    return this.playerService.getPlayer(id);
  }

  @Post()
  createPlayer(@Body() body: Player): Player {
    return this.playerService.createPlayer(body);
  }

  @Put(':id')
  updatePlayer(
    @Param('id', ParseIntPipe) id: number,
    @Body() player: Player,
  ): Player {
    return this.playerService.updatePlayer(id, player);
  }

  @Delete(':id')
  deletePlayer(@Param('id', ParseIntPipe) id: number): string {
    return this.playerService.deletePlayer(id);
  }
}
