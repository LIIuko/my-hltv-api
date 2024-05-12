import {Player} from "hltv/lib/shared/Player";
import {Team} from "hltv/lib/shared/Team";
import {ApiProperty} from "@nestjs/swagger";
import {Event} from "hltv/lib/shared/Event";
import {Country} from "hltv/lib/shared/Country";

export class PlayerRanking {
    @ApiProperty({example: {name: "ZywOo", id: 11893 }, description: 'Имя игрока'})
    player: Player;
    @ApiProperty({example: [{id: 9565, name: "Vitality"}], description: 'Название команды'})
    teams: Team[];
    @ApiProperty({example: 1727, description: 'Кол-во сыгранных карт'})
    maps: number;
    @ApiProperty({example: 9669, description: 'Разница убийств ко сметрям'})
    kdDiff: number;
    @ApiProperty({example: 45750, description: 'Кол-во сыгранных рандов'})
    rounds: number;
    @ApiProperty({example: 1.33, description: 'Отношение кол-ва убийств ко смертям'})
    kd: number;
    @ApiProperty({example: 1.24, description: 'Рейтинг 1.0'})
    rating1?: number;
    @ApiProperty({example: 1.45, description: 'Рейтинг 2.0'})
    rating2?: number;
}

export class MatchPreview{
    @ApiProperty({example: 1, description: 'ID матча'})
    id: number;
    @ApiProperty({example: [{name: "BetBoom", id: 12394 }], description: 'Название команды 1'})
    team1?: Team;
    @ApiProperty({example: [{name: "3DMAX", id: 4914 }], description: 'Название команды 2'})
    team2?: Team;
    @ApiProperty({example: 1713103200000, description: 'Дата проведения матча'})
    date?: number;
    @ApiProperty({example: 'bo3', description: 'Формат проведения матча'})
    format?: string;
    @ApiProperty({example: {
            id: 7772,
            name: "European Pro League Female Season 1"
        }, description: 'Название турнира'})
    event?: Event;
    @ApiProperty({example: 'European Pro League Female Season 1 - Consolidation Final', description: 'Название турнира'})
    title?: string;
    @ApiProperty({example: true, description: 'Играется ли данные матч сечас или нет'})
    live: boolean;
    @ApiProperty({example: 1, description: 'Кол-во звезд'})
    stars: number;
}

export class TeamRanking{
    @ApiProperty({example: [{name: "BetBoom", id: 12394 }], description: 'Название команды'})
    team: Team;
    @ApiProperty({example: 967, description: 'Кол-во очков'})
    points: number;
    @ApiProperty({example: 1, description: 'Место команды в рейтинге'})
    place: number;
    @ApiProperty({example: 0, description: 'На сколько изменилось место команды в рейтинге'})
    change: number;
    @ApiProperty({example: false, description: 'Новая ли данная команда'})
    isNew: boolean;
}

export class EventPreview {
    @ApiProperty({example: 1, description: 'Id турнира'})
    id: number;
    @ApiProperty({example: 'European Pro League Female Season 1 - Consolidation Final', description: 'Навзвание турнира'})
    name: string;
    @ApiProperty({example: 1708945200000, description: 'Дата начала турнира'})
    dateStart: number;
    @ApiProperty({example: 1718532000000, description: 'Дата завершения турнира'})
    dateEnd: number;
    @ApiProperty({example: 8, description: 'Кол-во команд-участников'})
    numberOfTeams?: number;
    @ApiProperty({example: "$750,000", description: 'Приз турнира'})
    prizePool?: string;
    @ApiProperty({example:  {
            name: "Malta",
            code: "MT"
        }, description: 'Место проведения турнира'})
    location?: Country;
    @ApiProperty({example: true, description: 'Будет или уже закончился турнир'})
    featured: boolean;
}

export class News{
    @ApiProperty({example: "broky named IEM Chengdu MVP", description: 'Заголовок новости'})
    title: string;
    @ApiProperty({example: "The Latvian laser earned the third MVP medal of his career in China.", description: 'Описание новости'})
    description: string;
    @ApiProperty({example: "https://www.hltv.org/news/38774/broky-named-iem-chengdu-mvp", description: 'Ссылка на новость'})
    link: string;
    @ApiProperty({example: "2024-04-14T13:25:00.000Z", description: 'Дата публикации'})
    time: string;
}