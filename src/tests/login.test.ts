const URL_base = "http://localhost:3000/api/login";

test("POST: /login = 200", async () => {
  const res = await fetch(URL_base, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "matheus33333422@gmail.com",
      senha: "12345678"
    }),
  });

  const text = await res.text();  
  console.log("Status:", res.status);
  console.log("Corpo da resposta:", text);

  expect(res.status).toBe(200);
});

test("POST / login(sem senha) = 400", async () => {
    const res = await fetch(URL_base, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "teste@email.com",
            senha: ""}
        )
    });
    expect(res.status).toBe(400);
});

test("POST / create = 200", async () => {
    const res = await fetch(URL_base + "/cadastro" , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nome: "nomeTeste",
            email: "teste1@email.com",
            senha: "senha123",
            telefone: "157071-7070",
            cpf:"123456787-55"
        })
    });
    expect(res.status).toBe(201);
    const token = await res.json();
    // console.log(token)
});