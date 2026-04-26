window.CHAPTERS_DATA = window.CHAPTERS_DATA || [];

window.CHAPTERS_DATA.push({
    "id": 4,
    "title": "Module 4: Retrieval Augmented Generation",
    "description": "Connecting LLMs to external data sources for factual groundedness.",
    "units": [
      {
        "id": "4.1",
        "title": "Lecture: The RAG Architecture",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Explain the limitations of 'Static' model knowledge</li><li>Diagram the RAG retrieval pipeline</li><li>Understand the role of Vector Databases</li></ul></div><h2>Grounded Intelligence</h2><p>In this lecture, we discuss how RAG overcomes the 'Knowledge Cutoff' problem by providing models with a library of real-time or private information.</p><div class='lab-cell'><h4>[Lab] Vector Similarity Search</h4><pre style='background:#111; color:#0f0; padding:10px'># Semantic Search Simulation\nQuery: 'How to train a model?'\nDoc A: 'A guide to fine-tuning neural networks'\nDoc B: 'Baking a cake in 5 steps'\nSimilarity(Query, Doc A) = 0.89\nSimilarity(Query, Doc B) = 0.02</pre></div>",
        "questions": [
          { "question": "What is 'Context Grounding' in RAG?", "options": ["Training the model on more data", "Ensuring the model's answer is based on the provided retrieved text", "A type of hardware setup", "A prompt injection"], "correctIndex": 1, "explanation": "Grounding ensures the model 'looks at the paper' rather than hallucinating from memory." }
        ]
      }
    ]
});
