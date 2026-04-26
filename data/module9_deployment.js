window.CHAPTERS_DATA = window.CHAPTERS_DATA || [];

window.CHAPTERS_DATA.push({
    "id": 9,
    "title": "Module 9: Enterprise Deployment",
    "description": "Scaling LLMs for production, monitoring, and optimization.",
    "units": [
      {
        "id": "9.1",
        "title": "Lecture: ML-Ops for LLMs (LLM-Ops)",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Understand the LLM-Ops lifecycle</li><li>Identify key metrics for production monitoring</li><li>Learn about automated evaluation pipelines</li></ul></div><h2>Operating at Scale</h2><p>Building a prototype is easy; maintaining a production LLM application is hard. In this lecture, we explore the infrastructure required to monitor 'drift', track latency, and ensure reliability across millions of requests.</p><div class='lab-cell'><h4>[Lab] Monitoring Dashboard Mockup</h4><p>Key metrics tracked: Tokens per second (TPS), Latency (P99), and Hallucination rate.</p></div>",
        "questions": [
          { "question": "What is the primary goal of LLM-Ops?", "options": ["To write better prompts", "To manage the operational lifecycle and reliability of LLM applications", "To replace all developers", "To build larger models"], "correctIndex": 1, "explanation": "LLM-Ops focuses on deployment, monitoring, and scaling of language model systems." }
        ]
      },
      {
        "id": "9.2",
        "title": "Lecture: Quantization & Optimization",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Explain FP16 vs INT4 precision</li><li>Understand the trade-offs of quantization</li><li>Identify high-performance inference engines</li></ul></div><h2>Doing More with Less</h2><p>Learn how to shrink a 70B parameter model to run on a single consumer GPU without significant quality loss using techniques like 4-bit quantization.</p><div class='lab-cell'><h4>[Lab] Quantization Math</h4><pre style='background:#111; color:#0f0; padding:10px'># Weight Compression\nOriginal (FP16): 16 bits per weight\nQuantized (INT4): 4 bits per weight\nMemory Savings: 75% reduction</pre></div>",
        "questions": [
          { "question": "What happens to a model when it is quantized?", "options": ["It gets larger", "Its weights are represented with lower precision to save memory", "It becomes smarter", "It stops working"], "correctIndex": 1, "explanation": "Quantization reduces precision (e.g., from 16-bit to 4-bit) to make models smaller and faster." }
        ]
      }
    ]
});
