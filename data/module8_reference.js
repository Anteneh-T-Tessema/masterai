window.CHAPTERS_DATA = window.CHAPTERS_DATA || [];

window.CHAPTERS_DATA.push({
    "id": 8,
    "title": "Module 8: Quick Reference Hub",
    "description": "Cheat sheets, parameter guides, and technical comparisons.",
    "units": [
      {
        "id": "8.1",
        "title": "Reference: Hyperparameter Cheat Sheet",
        "content": "<h2>Tuning the Output</h2><p>Use this table as a reference when configuring your LLM API calls.</p><table style='width:100%; border-collapse:collapse; margin-top:2rem'><thead><tr style='border-bottom:2px solid var(--accent-color)'><th style='text-align:left; padding:1rem'>Parameter</th><th style='text-align:left; padding:1rem'>Range</th><th style='text-align:left; padding:1rem'>Best For...</th></tr></thead><tbody><tr style='border-bottom:1px solid var(--glass-border)'><td style='padding:1rem'>Temperature</td><td style='padding:1rem'>0.0 - 2.0</td><td style='padding:1rem'>0.2 for facts, 0.8+ for creative writing</td></tr><tr style='border-bottom:1px solid var(--glass-border)'><td style='padding:1rem'>Top-P</td><td style='padding:1rem'>0.0 - 1.0</td><td style='padding:1rem'>Alternative to Temperature for diversity</td></tr></tbody></table>",
        "questions": []
      },
      {
        "id": "8.2",
        "title": "Reference: Common Code Snippets",
        "content": "<h2>API Integration Patterns</h2><h3>Python (LiteLLM)</h3><pre style='background:#111; color:#0f0; padding:10px'>import litellm\nresponse = litellm.completion(model='gpt-4', messages=[{'role': 'user', 'content': 'Hi'}])</pre>",
        "questions": []
      }
    ]
});
