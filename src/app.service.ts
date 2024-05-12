import {Injectable} from "@nestjs/common";
import {HLTV, PlayerRanking} from 'hltv'
import HLTV_API from 'hltv-api'

@Injectable()
export class AppService {

    async getTopPlayers():  Promise<PlayerRanking[]> {
        return await HLTV.getPlayerRanking().then((res) => {
            return res;
        });
    }

    async getMatches() {
        return await HLTV.getMatches().then((res) => {
            return res;
        });
    }

    async getTeamRanking() {
        return await HLTV.getTeamRanking().then((res) => {
            return res;
        });
    }

    async getTournaments() {
        return await HLTV.getEvents().then((res) => {
            return res;
        });
    }

    async getNews(){
        return await HLTV_API.getNews();
    }
}