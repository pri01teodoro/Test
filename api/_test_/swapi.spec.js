const request = require('supertest');

it('Deve retornar as informações do cadastro quando buscar por uma pessoa existente', async () => {
    
    const resposta = await request('https://swapi.py4e.com/api/').get('people/1/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Luke Skywalker')
    expect(resposta.body.vehicles.length).toBeGreaterThan(0);
    expect(resposta.body.films).toBeDefined();
})

it('Deve retornar uma mensagem de erro quando buscar por uma pessoa inexistente', async () => {
    
    const resposta = await request('https://swapi.py4e.com/api/').get('people/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({detail:'Not found'});
})

it('Deve retornar as informações do cadastro do planeta existente', async () =>{
    const resposta = await request('https://swapi.py4e.com/api/').get('planets/3/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Yavin IV');
    expect(resposta.body.climate).toBeDefined();
    expect(resposta.body.population).toBe("1000");
})

it('Deve retornar uma mensagem de erro quando buscar o cadastro de um planeta inexistente', async () =>{
    const resposta = await request('https://swapi.py4e.com/api/').get('planets/800/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({detail:'Not found'});
  
})