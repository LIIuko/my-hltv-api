import {Controller, Get} from "@nestjs/common";
import {AppService} from "./app.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {EventPreview, MatchPreview, News, PlayerRanking, TeamRanking} from "./interfaces";


@ApiTags('Получение информации с HLTV')
@Controller('/api')
export class AppController{

    constructor(private appService: AppService) {}


    @ApiOperation({summary: 'Получение топ игроков с сайта HLTV'})
    @ApiResponse({status: 200, type: [PlayerRanking]})
    @Get('/players')
    getTopPlayers (){
        return this.appService.getTopPlayers();
    }

    @ApiOperation({summary: 'Получение матчей с сайта HLTV'})
    @ApiResponse({status: 200, type:  [MatchPreview]})
    @Get('/matches')
    getMatches (){
        return this.appService.getMatches();
    }

    @ApiOperation({summary: 'Получение топ команд с сайта HLTV'})
    @ApiResponse({status: 200, type: [TeamRanking]})
    @Get('/teams')
    getTeams (){
        return this.appService.getTeamRanking();
    }

    @ApiOperation({summary: 'Получение турниров с сайта HLTV'})
    @ApiResponse({status: 200, type: [EventPreview]})
    @Get('/tournaments')
    getTournaments (){
        return this.appService.getTournaments( );
    }

    @ApiOperation({summary: 'Получение новостей с сайта HLTV'})
    @ApiResponse({status: 200, type:  [News]})
    @Get('/news')
    getNews () {
        return this.appService.getNews( );
    }
}