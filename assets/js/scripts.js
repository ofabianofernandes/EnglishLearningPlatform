<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>English Learning Platform</title>
  <!-- Incluir Axios -->
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
  <button id="generate-exercise">Gerar Exercício</button>
  <div id="exercise-container"></div>

  <script>
    // Inicialize a chave de API
    const API_KEY = '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';

    // Função para gerar exercício
    async function generateExercise(prompt) {
      try {
        const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
          model: "meta-llama/llama-3.1-8b-instruct:free",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 100
        }, {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          }
        });
        return response.data.choices[0].message.content;
      } catch (error) {
        console.error("Limite de API atingido ou outro erro ocorreu: ", error);
        return "Erro ao gerar exercício. Por favor, tente novamente mais tarde.";
      }
    }

    // Vincular o botão à solicitação de API
    document.addEventListener('DOMContentLoaded', () => {
      const generateButton = document.getElementById('generate-exercise');
      if (generateButton) {
        generateButton.addEventListener('click', async () => {
          const exerciseContainer = document.getElementById('exercise-container');
          exerciseContainer.innerHTML = "Gerando exercício...";
          const exercise = await generateExercise("Gerar um exercício de vocabulário preencha-a-lacuna em inglês.");
          exerciseContainer.innerHTML = exercise;
        });
      }
    });
  </script>
</body>
</html>

