const express = require("express");
const fetch = require("node-fetch");

const app = express();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

app.get("/comentarios", async (req, res) => {
    try {
        const r = await fetch(`${SUPABASE_URL}/rest/v1/comentarios?order=id.desc`, {
            headers: {
                apikey: SUPABASE_KEY,
                Authorization: `Bearer ${SUPABASE_KEY}`,
            },
        });
        const data = await r.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "No se pudo consultar la base de datos" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Microservicio de respaldo corriendo en puerto ${PORT}`));