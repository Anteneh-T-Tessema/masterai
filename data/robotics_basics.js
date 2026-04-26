window.CHAPTERS_DATA = [];

window.CHAPTERS_DATA.push({
    "id": 1,
    "title": "Module 1: The Embodied Mind",
    "description": "Transitioning AI from screens to physical hardware.",
    "units": [
      {
        "id": "1.1",
        "title": "Lecture: Vision-Language-Action (VLA)",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Define Embodied AI</li><li>Understand VLA architectures (e.g., RT-2)</li><li>Explain the Perception-Action loop</li></ul></div><h2>AI with Hands</h2><p>Robotics is the ultimate frontier for AI. In this module, we explore how LLMs are being transformed into 'Physical Generalists' that can reason and act in the real world.</p>",
        "questions": [
          { "question": "What does VLA stand for in robotics?", "options": ["Video-Link-Audio", "Vision-Language-Action", "Virtual-Log-Analysis", "Visual-Logical-Agent"], "correctIndex": 1, "explanation": "VLA models combine visual perception and language understanding to generate physical motor actions." }
        ]
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 2,
    "title": "Module 2: Sim2Real Transfer",
    "description": "Training in the matrix, acting in the world.",
    "units": [
      {
        "id": "2.1",
        "title": "Lecture: Physics Simulation",
        "content": "<h2>The Training Ground</h2><p>Learn how to use high-fidelity simulators (like NVIDIA Isaac Lab) to train robots in virtual worlds before deploying them to physical hardware.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 3,
    "title": "Module 3: Humanoid Architectures",
    "description": "Designing and controlling the next generation of bipedal agents.",
    "units": [
      {
        "id": "3.1",
        "title": "Lecture: Reinforcement Learning for Control",
        "content": "<h2>Moving with Grace</h2><p>Explore how Deep Reinforcement Learning is used to solve complex locomotion and manipulation tasks in humanoid robots.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 4,
    "title": "Module 4: Robotics Specialist Capstone",
    "description": "Final assessment for the AI Robotics certification.",
    "units": [
      {
        "id": "4.1",
        "title": "Capstone: Autonomous Task Planning",
        "content": "<h2>Final Validation</h2><p>Prove your mastery of Embodied AI architectures and physical control loops.</p>",
        "questions": [
          { "question": "What is the primary challenge of 'Sim2Real'?", "options": ["Internet speed", "The gap between simulated and real-world physics", "Battery life", "Robot weight"], "correctIndex": 1, "explanation": "The 'Reality Gap' is the difficulty of getting a policy trained in simulation to work reliably on noisy physical hardware." }
        ]
      }
    ]
});
