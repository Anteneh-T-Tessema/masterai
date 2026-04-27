window.CHAPTERS_DATA = [];

window.CHAPTERS_DATA.push({
    "id": 1,
    "title": "Module 1: The AI Attack Surface",
    "description": "Understanding the new vulnerabilities of the intelligent age.",
    "units": [
      {
        "id": "1.1",
        "title": "Lecture: Adversarial Attacks & Prompt Injection",
        "content": "<div class='pedagogy-header'><h4>Technical Depth</h4><ul><li>Analyze Indirect Prompt Injection (IPI)</li><li>Understand Jailbreaking techniques</li><li>Explore Data Poisoning in training sets</li></ul></div><h2>The New Frontier of Risk</h2><p>In this module, we explore how hackers 'weaponize' language to trick AI systems into leaking data, ignoring safety guardrails, or executing unauthorized code.</p>",
        "questions": [
          { "question": "What is 'Prompt Injection'?", "options": ["Adding data to a model", "Inserting malicious instructions into a user's input to override an AI's system instructions", "A type of virus", "Making AI faster"], "correctIndex": 1, "explanation": "Prompt injection is the 'SQL Injection' of the AI era—tricking the model into doing something its creators didn't intend." }
        ]
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 2,
    "title": "Module 2: Neural Threat Hunting",
    "description": "Using AI to catch AI-powered attackers.",
    "units": [
      {
        "id": "2.1",
        "title": "Lecture: Real-Time Anomaly Detection in Zero-Trust",
        "content": "<h2>Hunting the Invisible</h2><p>Learn how to use transformer-based models to analyze network traffic patterns, identifying the 'low and slow' movements of advanced persistent threats (APTs) that human analysts miss.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 3,
    "title": "Module 3: Automated Containment & Response",
    "description": "Fighting at the speed of the machine.",
    "units": [
      {
        "id": "3.1",
        "title": "Lecture: AI-Driven SOAR Architectures",
        "content": "<h2>Defensive Agency</h2><p>Explore how Security Orchestration, Automation, and Response (SOAR) systems use AI agents to autonomously isolate infected machines and rewrite firewall rules in milliseconds during an attack.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 4,
    "title": "AI Security Specialist Capstone",
    "description": "Final assessment for the AI Security certification.",
    "units": [
      {
        "id": "4.1",
        "title": "Capstone: Resilient Defense Design",
        "content": "<h2>Final Validation</h2><p>Prove your ability to architect a high-scale, AI-driven security monitoring or defensive engine.</p>",
        "questions": [
          { "question": "What is 'SOAR' in cybersecurity?", "options": ["A type of plane", "Security Orchestration, Automation, and Response—a way to automate defensive actions", "A data storage method", "A marketing tool"], "correctIndex": 1, "explanation": "SOAR platforms use AI to handle the 'first response' to attacks, acting much faster than a human analyst could." }
        ]
      }
    ]
});
