window.CHAPTERS_DATA = [];

window.CHAPTERS_DATA.push({
    "id": 1,
    "title": "Module 1: The Gemini Revolution",
    "description": "Mastering the world's largest context window.",
    "units": [
      {
        "id": "1.1",
        "title": "Lecture: Long Context Windows (1M+)",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Understand the 1 Million token context window</li><li>Identify use cases for 'Needle in a Haystack' retrieval</li><li>Contrast Long Context vs. RAG</li></ul></div><h2>The Infinite Context</h2><p>Gemini 1.5 Pro changed the RAG landscape. In this module, we explore how to process entire codebases and hour-long videos in a single prompt.</p>",
        "questions": [
          { "question": "What is the token limit for Gemini 1.5 Pro?", "options": ["128k", "200k", "1 Million+", "32k"], "correctIndex": 2, "explanation": "Gemini 1.5 Pro supports up to 2 Million tokens in its largest configurations." }
        ]
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 2,
    "title": "Module 2: Multimodal Mastery",
    "description": "Reasoning across text, image, video, and audio natively.",
    "units": [
      {
        "id": "2.1",
        "title": "Lecture: Native Multimodality",
        "content": "<h2>Beyond Text</h2><p>Discover how Gemini's unified architecture allows it to 'see' and 'hear' natively without separate encoder models.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 3,
    "title": "Module 3: Vertex AI & Enterprise",
    "description": "Deploying Google's models at scale with Google Cloud.",
    "units": [
      {
        "id": "3.1",
        "title": "Lecture: Gemini on Vertex AI",
        "content": "<h2>Enterprise Integration</h2><p>Learn how to use Vertex AI to manage model versions, safety filters, and fine-tuning in a production environment.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 4,
    "title": "Module 4: Gemini Specialist Capstone",
    "description": "Final assessment for the Gemini & Google AI certification.",
    "units": [
      {
        "id": "4.1",
        "title": "Capstone: Multimodal System Design",
        "content": "<h2>Final Certification</h2><p>Prove your mastery of long-context reasoning and native multimodality.</p>",
        "questions": [
          { "question": "Which Google Cloud service is used for enterprise Gemini deployment?", "options": ["Cloud Run", "Vertex AI", "BigQuery ML", "Firebase"], "correctIndex": 1, "explanation": "Vertex AI is the central hub for Google's enterprise-grade GenAI development." }
        ]
      }
    ]
});
