window.CHAPTERS_DATA = [];

window.CHAPTERS_DATA.push({
    "id": 1,
    "title": "Module 1: The Alignment Problem",
    "description": "Why making AI do what we want is harder than it looks.",
    "units": [
      {
        "id": "1.1",
        "title": "Lecture: Goal Misgeneralization",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Identify the difference between Outer and Inner alignment</li><li>Understand Reward Misspecification</li><li>Analyze the 'Paperclip Maximizer' thought experiment</li></ul></div><h2>The Alignment Frontier</h2><p>As AI becomes more autonomous, ensuring it remains aligned with human values is the most critical challenge in the field.</p>",
        "questions": [
          { "question": "What is 'Inner Alignment'?", "options": ["Aligning the model's reward function with human values", "Ensuring the model's internal goals match its training objective", "Making the model faster", "Encrypting model weights"], "correctIndex": 1, "explanation": "Inner alignment refers to whether the model's internally developed goals during training actually match the base objective provided by the developers." }
        ]
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 2,
    "title": "Module 2: Constitutional AI",
    "description": "Training AI using a 'Constitution' instead of human labels.",
    "units": [
      {
        "id": "2.1",
        "title": "Lecture: RLAIF (RL from AI Feedback)",
        "content": "<h2>Scaling Alignment</h2><p>Learn how Anthropic uses Constitutional AI to let models critique and revise their own responses based on a set of written principles.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 3,
    "title": "Module 3: Global Governance",
    "description": "Policy, ethics, and international AI safety standards.",
    "units": [
      {
        "id": "3.1",
        "title": "Lecture: The EU AI Act & Beyond",
        "content": "<h2>Regulating Intelligence</h2><p>Explore the global landscape of AI regulation and the ethical frameworks guiding frontier model deployment.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 4,
    "title": "Module 4: Safety Specialist Capstone",
    "description": "Final assessment for the AI Safety & Alignment certification.",
    "units": [
      {
        "id": "4.1",
        "title": "Capstone: Ethical Red-Teaming",
        "content": "<h2>Final Validation</h2><p>Prove your ability to identify alignment failures and design safer autonomous systems.</p>",
        "questions": [
          { "question": "What is 'Red Teaming' in AI Safety?", "options": ["Training models on red data", "Adversarial testing to find vulnerabilities", "Making models more colorful", "A type of ensemble learning"], "correctIndex": 1, "explanation": "Red teaming is the process of intentionally trying to make a model fail or produce harmful content to identify and fix safety gaps." }
        ]
      }
    ]
});
