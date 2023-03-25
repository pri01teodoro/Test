import { describe, expect, it, jest, beforeEach, afterAll, afterEach } from '@jest/globals';
import mongoose from 'mongoose';
import app from '../../app';
import request from "supertest";

let server ;
let token;

describe('Teste de autenticação da API', () => {

    beforeEach( () => {
        const port = 3000;
        server = app.listen(port);
    });

    afterEach( () => {
        server.close();
    });

    afterAll( () => {
        mongoose.connection.close();
    });

    it('Deve retornar login com um usuario válido', async () =>{
        const dados = await request(app)
        .post('/login')
        .send({
            email:'4190451Rynaldo.Carvalho@live.com',
            senha: "123"
        })
        .set('Accept', 'aplication/json')
        expect(200);
        expect(dados._body.user.email).toEqual("4190451Rynaldo.Carvalho@live.com"); 
        token = dados._body.token;
    });

    it('Deve retornar erro de usuário ou senha inválida', async () => {
        const dados = await request(app)
        .post('/login')
        .send({
            email:'Rynaldo.Carvalho@live.com',
            senha: "123"
        })        
        expect(400);
        expect(dados._body.message).toEqual("Usuário ou senha inválida!"); 
        
    });

    it('Deve retornar erro de senha inválida', async () => {
        const dados = await request(app)
        .post('/login')
        .send({
            email:'4190451Rynaldo.Carvalho@live.com',
            senha: "senha_invalida"
        })        
        expect(400);
        expect(dados._body.message).toEqual("Senha inválida!"); 
        
    });

    it('Deve retornar erro de usuário inativo', async () => {               /* it.skip -> para pular o teste */
        const dados = await request(app)
        .post('/login')
        .send({
            email:"1146633Nora12@yahoo.com",
            senha: "123"
        })
        expect(400);
        expect(dados._body.message).toEqual("Usuário inativo!"); 
    })

})
