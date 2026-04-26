window.CHAPTERS_DATA = []; // Course specific data

window.CHAPTERS_DATA.push({
    "id": 1,
    "title": "Module 1: The Agentic Paradigm",
    "description": "Transitioning from passive LLMs to autonomous goal-seeking agents.",
    "units": [
      {
        "id": "1.1",
        "title": "Lecture: Defining Agency",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Define the Agency Loop (Plan-Act-Observe)</li><li>Compare Chains vs. Agents</li><li>Understand the 'Brain' (LLM) vs. 'Hands' (Tools)</li></ul></div><h2>What makes an Agent?</h2><p>In this lecture, we move beyond simple text generation. We define an AI Agent as an LLM capable of planning its own steps and using external tools to achieve a complex goal.</p>",
        "questions": [
          { "question": "What is the core iterative cycle of an agent?", "options": ["Train-Test-Deploy", "Plan-Act-Observe", "Prompt-Wait-Read", "Search-Select-Summarize"], "correctIndex": 1, "explanation": "Agents solve tasks by planning an action, executing it, observing the results, and re-planning." }
        ]
      },
      {
        "id": "1.2",
        "title": "Lecture: The ReAct Framework",
        "content": "<h2>Reasoning and Acting</h2><p>Explore the ReAct pattern, where the model interleaves 'Thought' and 'Action' steps to perform complex reasoning.</p><div class='lab-cell'><h4>Agent Simulation</h4><p>Input a complex query: 'Research the latest NVIDIA earnings and write a summary.'<br>Observe how the model generates Thoughts before searching.</p></div>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 2,
    "title": "Module 2: Model Context Protocol (MCP)",
    "description": "Standardizing the connection between agents and tools.",
    "units": [
      {
        "id": "2.1",
        "title": "Lecture: Introduction to MCP",
        "content": "<h2>Universal Tooling</h2><p>Learn how the Model Context Protocol (MCP) by Anthropic provides a standardized way for agents to discover and utilize external capabilities like databases, search, and local files.</p>",
        "questions": [
          { "question": "Who introduced the Model Context Protocol (MCP)?", "options": ["Google", "OpenAI", "Anthropic", "Meta"], "correctIndex": 2, "explanation": "Anthropic introduced MCP in 2024 to standardize tool-model communication." }
        ]
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 3,
    "title": "Module 3: Multi-Agent Orchestration",
    "description": "Building teams of specialized agents to solve enterprise problems.",
    "units": [
      {
        "id": "3.1",
        "title": "Lecture: Hierarchical vs. Sequential",
        "content": "<h2>Agent Teams</h2><p>Discover how to coordinate multiple agents (e.g., a Researcher, a Writer, and a Reviewer) to achieve high-quality outcomes.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 4,
    "title": "Module 4: Agent Specialist Capstone",
    "description": "Final assessment for the Agent Specialist certification.",
    "units": [
      {
        "id": "4.1",
        "title": "Capstone: Autonomous System Design",
        "content": "<h2>Final Validation</h2><p>Prove your mastery of agentic reasoning, tool-use standard (MCP), and multi-agent coordination.</p>",
        "questions": [
          { "question": "What is the 'bottleneck' in current autonomous agents?", "options": ["Compute power", "Model reasoning depth", "Memory window", "Token cost"], "correctIndex": 1, "explanation": "Most agent failures are due to the model losing the reasoning thread or hallucinating a plan step." }
        ]
      }
    ]
});
