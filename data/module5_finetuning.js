window.CHAPTERS_DATA = window.CHAPTERS_DATA || [];

window.CHAPTERS_DATA.push({
    "id": 5,
    "title": "Module 5: Fine-Tuning Specialists",
    "description": "Adapting general models for specific domains and styles.",
    "units": [
      {
        "id": "5.1",
        "title": "Lecture: PEFT and LoRA",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Identify when to use Fine-tuning vs RAG</li><li>Explain Low-Rank Adaptation (LoRA)</li><li>Understand Parameter Efficiency</li></ul></div><h2>The Specialist Era</h2><p>In this lecture, we learn how to train large models on consumer-grade hardware by only updating a tiny fraction of their weights.</p><div class='lab-cell'><h4>[Lab] LoRA Adapter Config</h4><pre style='background:#111; color:#0f0; padding:10px'># PEFT Config\nconfig = LoraConfig(\n    r=16,\n    lora_alpha=32,\n    target_modules=['q_proj', 'v_proj'],\n    lora_dropout=0.05\n)</pre></div>",
        "questions": [
          { "question": "What is the primary benefit of LoRA?", "options": ["It makes models bigger", "It reduces the number of trainable parameters significantly", "It prevents hallucinations", "It's faster at inference"], "correctIndex": 1, "explanation": "LoRA allows for high-quality fine-tuning with 1/1000th of the memory requirements." }
        ]
      }
    ]
});
