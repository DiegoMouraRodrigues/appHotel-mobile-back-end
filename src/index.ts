<<<<<<< HEAD
import dotenv from "dotenv";
import app from "./app";

dotenv.config()

const PORT = parseInt(process.env.PORT!);

app.listen(PORT, () => console.log(`Servidor está rodando na PORTA: ${PORT}`));
=======
import app from "./app";

const PORT = 3000;

app.listen(PORT, () => console.log(`sevidor esta logando: ${PORT}`));
>>>>>>> 1cd80fb90a6c9a8ae1a0d2f93a8e032bc4a69142
