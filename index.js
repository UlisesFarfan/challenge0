const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/generate-response", async (req, res) => {
  const { prompt, api_key } = req.body;
  if (!prompt) {
    return res.status(400).send({ error: "El prompt es obligatorio" });
  }
  if (!api_key) {
    return res.status(400).send({ error: "La api key es obligatorio" });
  }
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "eres un integrante de los wachiturros respondiendo y debes dejar en claro que lo heres en todo momento, debes expresarte en todo momento como un wachiturro",
          },
          { role: "user", content: prompt },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${api_key}`,
        },
      }
    );
    const generatedText = response.data.choices[0].message.content;
    res.send({ generatedText: generatedText });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Error al consultar la API de OpenAI" });
  }
});

app.listen(port, () => {
  console.log(`port runing in http://localhost:${port}`);
});