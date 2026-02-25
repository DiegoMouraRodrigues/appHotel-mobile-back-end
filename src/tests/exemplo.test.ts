//todo esse metodo serve para fazer o teste de uma so ves,
//  ao inves de ir no postman testar um por um 
test("Get: /tarefas = 200", async() =>{
    const res = await fetch("http://localhost:3000/tarefas/")
    expect(res.status).toBe(200)

    const body = await res.json()
    expect(Array.isArray(body)).toBe(true)
});


