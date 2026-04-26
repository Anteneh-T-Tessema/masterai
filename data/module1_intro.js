window.CHAPTERS_DATA = window.CHAPTERS_DATA || [];

window.CHAPTERS_DATA.push({
    "id": 1,
    "title": "Module 1: Introduction to LLMs",
    "description": "Understanding the foundational concepts and historical context of generative AI.",
    "units": [
      {
        "id": "1.1",
        "title": "Lecture: The Evolution of Language Modeling",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Trace the history from N-grams to Transformers</li><li>Understand the breakthrough of parallel processing</li><li>Identify key historical milestones in NLP</li></ul></div><h2>The Breakthrough of Transformers</h2><p>In this lecture, we explore how researchers moved from processing language word-by-word (RNNs) to processing entire sentences at once. This shift, pioneered in 2017, allowed models to scale infinitely and 'understand' complex relationships between distant words.</p><div class='lab-cell'><h4>[Lab] Historical Timeline</h4><p>Examine the compute growth from 2010 to 2024. Notice how the 'Attention' mechanism enabled the jump from millions to trillions of parameters.</p></div><div class='pedagogy-footer'><h4>Key Takeaways</h4><ul><li>Sequential processing was the primary bottleneck before 2017.</li><li>Transformers introduced 'Global Context' by looking at all words simultaneously.</li></ul></div>",
        "questions": [
          { "question": "What was the primary bottleneck of RNNs compared to Transformers?", "options": ["They used too much memory", "They processed words sequentially, making them slow to train", "They only worked in English", "They were developed by Google"], "correctIndex": 1, "explanation": "Sequential processing prevented RNNs from effectively utilizing modern GPU hardware for massive datasets." }
        ]
      }
    ]
});
