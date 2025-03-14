import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Servir o frontend
app.use(express.static(path.join(__dirname, "../client/dist")));

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
        });

        res.json({ response: response.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Qualquer outra rota deve servir o frontend
app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
