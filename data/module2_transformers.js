window.CHAPTERS_DATA = window.CHAPTERS_DATA || [];

window.CHAPTERS_DATA.push({
    "id": 2,
    "title": "Module 2: The Transformer Revolution",
    "description": "Deep dive into Self-Attention, Embeddings, and the math that makes AI think.",
    "units": [
      {
        "id": "2.1",
        "title": "Lecture: Attention is All You Need",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Deconstruct the Self-Attention mechanism</li><li>Understand Query, Key, and Value vectors</li><li>Explain Multi-Head Attention architecture</li></ul></div><h2>The Core of Modern AI</h2><p>Self-attention is the mechanism that allows a model to weigh the importance of different parts of the input sequence. In this lecture, we'll break down the mathematical process of creating context-aware embeddings.</p><div class='lab-cell'><h4>[Interactive Lab] Visualizing Embeddings</h4><pre style='background:#111; color:#0f0; padding:10px'># Python Mockup\nimport torch\nquery = torch.randn(1, 128)\nkey = torch.randn(1, 128)\nattention_score = torch.matmul(query, key.transpose(-2, -1))\nprint(f'Attention Score: {attention_score.item():.4f}')</pre><button class='nav-btn' style='font-size:0.7rem; margin-top:10px'>[Run Cell]</button></div><div class='pedagogy-footer'><h4>Key Takeaways</h4><ul><li>Query (Q) searches for information.</li><li>Key (K) holds the relevance index.</li><li>Value (V) provides the actual content.</li></ul></div>",
        "questions": [
          { "question": "What happens when Query and Key have a high dot product?", "options": ["The model ignores that word", "The model gives high 'attention' or weight to that word", "The model crashes", "The model deletes the vector"], "correctIndex": 1, "explanation": "A high dot product indicates strong similarity, meaning the model should focus on that specific word for context." }
        ]
      }
    ]
});
