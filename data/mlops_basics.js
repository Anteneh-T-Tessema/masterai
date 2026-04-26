window.CHAPTERS_DATA = [];

window.CHAPTERS_DATA.push({
    "id": 1,
    "title": "Module 1: The AI Lifecycle",
    "description": "Standardizing the path from Notebook to Production.",
    "units": [
      {
        "id": "1.1",
        "title": "Lecture: What is MLOps?",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Define the ML Lifecycle (Data -> Train -> Deploy -> Monitor)</li><li>Understand Model Versioning (MLflow, DVC)</li><li>Explain the 'Data Flywheel' effect</li></ul></div><h2>Engineering for Intelligence</h2><p>Building a model is easy; maintaining it is hard. MLOps is the discipline of ensuring AI systems are reliable, scalable, and observable.</p>",
        "questions": [
          { "question": "What is the primary goal of MLOps?", "options": ["Training models faster", "Creating larger datasets", "Standardizing and automating the ML lifecycle", "Writing better prompts"], "correctIndex": 2, "explanation": "MLOps aims to bring DevOps-like rigor to machine learning, focusing on reliability and automation." }
        ]
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 2,
    "title": "Module 2: Scalable Deployment",
    "description": "Serving models to millions using Kubernetes and TFX.",
    "units": [
      {
        "id": "2.1",
        "title": "Lecture: Containerizing Models",
        "content": "<h2>Scaling Inference</h2><p>Learn how to wrap models in Docker containers and orchestrate them with Kubernetes to handle massive traffic spikes.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 3,
    "title": "Module 3: Observability & Drift",
    "description": "Detecting when your model starts failing in the real world.",
    "units": [
      {
        "id": "3.1",
        "title": "Lecture: Data and Concept Drift",
        "content": "<h2>Monitoring Intelligence</h2><p>Discover how to detect when the real-world data distribution shifts away from your training data, causing model performance to degrade.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 4,
    "title": "Module 4: MLOps Specialist Capstone",
    "description": "Final assessment for the MLOps certification.",
    "units": [
      {
        "id": "4.1",
        "title": "Capstone: Production Pipeline Design",
        "content": "<h2>Final Validation</h2><p>Prove your ability to design and automate a full-scale AI production system.</p>",
        "questions": [
          { "question": "Which tool is commonly used for model experiment tracking?", "options": ["Photoshop", "MLflow", "Excel", "Notepad"], "correctIndex": 1, "explanation": "MLflow is an open-source platform for managing the end-to-end machine learning lifecycle, including experiment tracking." }
        ]
      }
    ]
});
