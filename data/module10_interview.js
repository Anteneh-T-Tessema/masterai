window.CHAPTERS_DATA = window.CHAPTERS_DATA || [];

window.CHAPTERS_DATA.push({
    "id": 10,
    "title": "Module 10: Career & Interview Prep",
    "description": "Mastering the technical interview for LLM Engineer roles.",
    "units": [
      {
        "id": "10.1",
        "title": "Lecture: Common Interview Questions",
        "content": `<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Articulate complex LLM concepts clearly</li><li>Understand common engineering trade-offs</li><li>Prepare for high-stakes technical interviews</li></ul></div>
        <h2>Precision Prep</h2>
        <p>Use these curated questions to test your depth of knowledge. Click on each question to reveal the precise, professional-grade answer.</p>
        
        <div class="interview-grid" style="margin-top: 2rem">
            <div class="stat-card interview-card" onclick="this.classList.toggle('revealed')" style="cursor:pointer; margin-bottom: 1.5rem">
                <h4 style="color: var(--accent-color)">Q1: Explain the difference between RAG and Fine-tuning.</h4>
                <div class="answer" style="display:none; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--glass-border); line-height: 1.6">
                    <strong>Answer:</strong> RAG (Retrieval-Augmented Generation) provides the model with <strong>external data</strong> at inference time to ground its responses, making it best for factual accuracy and dynamic data. Fine-tuning <strong>updates the model's weights</strong>, making it best for learning specific styles, specialized vocabularies, or following complex formats. RAG is 'Open-Book', Fine-tuning is 'Memorization'.
                </div>
            </div>

            <div class="stat-card interview-card" onclick="this.classList.toggle('revealed')" style="cursor:pointer; margin-bottom: 1.5rem">
                <h4 style="color: var(--accent-color)">Q2: What is 'Temperature' in the context of LLM sampling?</h4>
                <div class="answer" style="display:none; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--glass-border); line-height: 1.6">
                    <strong>Answer:</strong> Temperature is a hyperparameter used to scale the <strong>logits</strong> before the softmax layer. A higher temperature (>1) flattens the probability distribution, making less likely tokens more probable (higher creativity). A lower temperature (<1) sharpens the distribution, making the model more deterministic and focused on the most likely tokens.
                </div>
            </div>

            <div class="stat-card interview-card" onclick="this.classList.toggle('revealed')" style="cursor:pointer; margin-bottom: 1.5rem">
                <h4 style="color: var(--accent-color)">Q3: Explain the 'Attention' mechanism simply.</h4>
                <div class="answer" style="display:none; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--glass-border); line-height: 1.6">
                    <strong>Answer:</strong> Attention allows the model to <strong>dynamically weight</strong> the importance of different tokens in a sequence relative to a target token. It uses <strong>Queries (Q), Keys (K), and Values (V)</strong>. By calculating the dot product of Q and K, the model determines how much 'attention' to pay to each V, enabling the capture of long-range dependencies.
                </div>
            </div>

            <div class="stat-card interview-card" onclick="this.classList.toggle('revealed')" style="cursor:pointer; margin-bottom: 1.5rem">
                <h4 style="color: var(--accent-color)">Q4: What are 'Scaling Laws' in LLMs?</h4>
                <div class="answer" style="display:none; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--glass-border); line-height: 1.6">
                    <strong>Answer:</strong> Scaling laws (specifically the Chinchilla Scaling Law) suggest that model performance follows a predictable power-law relationship with <strong>compute budget, dataset size (D), and parameter count (N)</strong>. Crucially, they indicate that for optimal performance, dataset size and parameters should be scaled in equal proportion.
                </div>
            </div>
        </div>
        <style>
            .interview-card.revealed .answer { display: block !important; animation: slideDown 0.3s ease-out; }
            @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        </style>
        `,
        "questions": [
          { "question": "Which technique is best for preventing factual hallucinations without retraining?", "options": ["Fine-tuning", "RAG", "Increasing Temperature", "Quantization"], "correctIndex": 1, "explanation": "RAG provides the model with source documents to refer to, significantly reducing hallucinations." }
        ]
      }
    ]
});
