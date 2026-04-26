window.CHAPTERS_DATA = window.CHAPTERS_DATA || [];

window.CHAPTERS_DATA.push({
    "id": 3,
    "title": "Module 3: Application Development",
    "description": "Building RAG pipelines and mastering prompt engineering.",
    "units": [
      {
        "id": "3.1",
        "title": "Lecture: Prompt Engineering Best Practices",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Master Zero-Shot vs Few-Shot prompting</li><li>Understand Chain of Thought (CoT) logic</li><li>Apply delimiters for structured data extraction</li></ul></div><h2>Guiding the Model</h2><p>In this lecture, we move from simple questions to 'System Prompting'. Learn how to define personas and constraints to get predictable, high-quality outputs from your LLM.</p><div class='lab-cell'><h4>[Lab] Building a CoT Prompt</h4><pre style='background:#111; color:#0f0; padding:10px'>Prompt: 'Think step-by-step. If 10 apples cost $2, and I buy 5 apples, how much did I spend?'</pre></div>",
        "questions": [
          { "question": "Why does 'Chain of Thought' improve math accuracy?", "options": ["It uses more tokens", "It decomposes complex problems into intermediate steps", "It's a secret Google code", "It only works on GPT-4"], "correctIndex": 1, "explanation": "CoT allows the model to 'scratchpad' intermediate calculations, reducing the chance of logical leaps to wrong answers." }
        ]
      }
    ]
});
