window.CHAPTERS_DATA = [];

window.CHAPTERS_DATA.push({
    "id": 1,
    "title": "Module 1: The AI Attack Surface",
    "description": "Understanding the unique vulnerabilities of LLMs.",
    "units": [
      {
        "id": "1.1",
        "title": "Lecture: Prompt Injection & Jailbreaking",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Identify Indirect vs. Direct Prompt Injection</li><li>Understand Jailbreaking (DAN-style) attacks</li><li>Explain the 'Token Poisoning' threat</li></ul></div><h2>The New Perimeter</h2><p>As we connect LLMs to tools and data, they become a primary target for hackers. In this module, we learn how to defend the model's instructions.</p>",
        "questions": [
          { "question": "What is 'Indirect Prompt Injection'?", "options": ["Talking to the model directly", "The model reading malicious instructions from a 3rd party source (like a website)", "Training the model on bad data", "Model hardware failure"], "correctIndex": 1, "explanation": "Indirect injection occurs when an LLM processes untrusted content (like a webpage) that contains hidden instructions to take over the model's behavior." }
        ]
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 2,
    "title": "Module 2: Defending the Supply Chain",
    "description": "Protecting training data and model weights.",
    "units": [
      {
        "id": "2.1",
        "title": "Lecture: Data Poisoning & Model Inversion",
        "content": "<h2>Deep Defense</h2><p>Learn how attackers can 'poison' training datasets to insert backdoors, and how to protect model weights from being stolen or inverted.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 3,
    "title": "Module 3: Secure Agent Architectures",
    "description": "Building safe AI agents that can't be tricked.",
    "units": [
      {
        "id": "3.1",
        "title": "Lecture: Sandboxing & Output Sanitization",
        "content": "<h2>Agent Hardening</h2><p>Discover strategies for sandboxing agent execution environments and sanitizing model outputs before they reach sensitive tools.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 4,
    "title": "Security Specialist Capstone",
    "description": "Final assessment for the AI Security certification.",
    "units": [
      {
        "id": "4.1",
        "title": "Capstone: Adversarial Red-Teaming",
        "content": "<h2>Final Validation</h2><p>Prove your ability to identify and mitigate high-risk vulnerabilities in an AI-driven system.</p>",
        "questions": [
          { "question": "What is 'Model Jailbreaking'?", "options": ["Removing the model's software license", "Using clever prompts to bypass safety filters", "Encrypting the model", "Moving the model to a different server"], "correctIndex": 1, "explanation": "Jailbreaking is the process of using adversarial prompts to force a model to produce prohibited content or ignore its system instructions." }
        ]
      }
    ]
});
