import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start(){
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    const config = new DocumentBuilder()
        .setTitle("API TR.HD")
        .setDescription("API для сайта TR.HD")
        .setVersion('1.0.0')
        .addTag('API_TR.HD')
        .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => {
        console.log(`Server started on port = ${PORT}`);
    })
}

start();