const URL_base = "http://localhost:3000/api/login/cadastro";

test("POST: /cadastroCliente = 200", async () => {
    const res = await fetch(URL_base, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nome: "Luca",
            cpf: "222-444-223",
            telefone: "(15)1234-5678",
            email: "Lucas@gmail.com",
            senha: "senha123",
         
        }),
    });

    const text = await res.text();
    console.log("Status:", res.status);
    console.log("Corpo da resposta:", text);

    expect(res.status).toBe(200);
})