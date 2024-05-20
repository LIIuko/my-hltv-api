import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as request from 'supertest';
import {INestApplication} from "@nestjs/common";

describe('AppController', () => {
    let app: INestApplication;
    let appService = { // Мок сервиса
        getTopPlayers: () => [{ id: 1, name: 'Player1' }],
        getMatches: () => [{ id: 1, name: 'Match1' }],
        getTeamRanking: () => [{ id: 1, name: 'Team1' }],
        getTournaments: () => [{ id: 1, name: 'Tournament1' }],
        getNews: () => [{ id: 1, title: 'News1' }]
    };

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [
                {
                    provide: AppService,
                    useValue: appService
                },
            ],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/api/players (GET)', () => {
        return request(app.getHttpServer())
            .get('/api/players')
            .expect(200)
            .expect(appService.getTopPlayers());
    });

    it('/api/matches (GET)', () => {
        return request(app.getHttpServer())
            .get('/api/matches')
            .expect(200)
            .expect(appService.getMatches());
    });

    it('/api/teams (GET)', () => {
        return request(app.getHttpServer())
            .get('/api/teams')
            .expect(200)
            .expect(appService.getTeamRanking());
    });

    it('/api/tournaments (GET)', () => {
        return request(app.getHttpServer())
            .get('/api/tournaments')
            .expect(200)
            .expect(appService.getTournaments());
    });

    it('/api/news (GET)', () => {
        return request(app.getHttpServer())
            .get('/api/news')
            .expect(200)
            .expect(appService.getNews());
    });

    afterAll(async () => {
        await app.close();
    });
});
