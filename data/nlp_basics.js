window.CHAPTERS_DATA = []; // Clear for new course

window.CHAPTERS_DATA.push({
    "id": 1,
    "title": "Module 1: Foundations of NLP",
    "description": "The birth of computational linguistics and vector space models.",
    "units": [
      {
        "id": "1.1",
        "title": "Lecture: The Vector Space Model",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Understand TF-IDF and Bag-of-Words</li><li>Explain Cosine Similarity in high dimensions</li><li>Identify the limitations of sparse vectors</li></ul></div><h2>Representing Language</h2><p>Before deep learning, how did computers 'read'? We begin our journey by exploring how text is transformed into sparse mathematical vectors.</p>",
        "questions": [
          { "question": "What does TF-IDF stand for?", "options": ["Term Frequency - Inverse Document Frequency", "Token Flow - Integrated Data Format", "Text Feature - Individual Document Filter", "Total Frequency - Internal Document Factor"], "correctIndex": 0, "explanation": "TF-IDF is a statistical measure used to evaluate how important a word is to a document in a collection." }
        ]
      },
      {
        "id": "1.2",
        "title": "Lecture: Word Embeddings (Word2Vec)",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Explain the 'Distributional Hypothesis'</li><li>Understand Skip-gram and CBOW</li><li>Analyze word analogies (King - Man + Woman = Queen)</li></ul></div><h2>The Semantic Shift</h2><p>Discover how dense vectors revolutionized NLP by capturing the 'meaning' of words based on their context.</p>",
        "questions": [
          { "question": "Who introduced the Word2Vec model?", "options": ["Andrej Karpathy", "Tomas Mikolov", "Andrew Ng", "Yann LeCun"], "correctIndex": 1, "explanation": "Tomas Mikolov and his team at Google introduced Word2Vec in 2013." }
        ]
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 2,
    "title": "Module 2: Sequential Modeling (RNNs)",
    "description": "Processing data with temporal dependencies.",
    "units": [
      {
        "id": "2.1",
        "title": "Lecture: Recurrent Neural Networks",
        "content": "<h2>The Hidden State</h2><p>RNNs introduced the concept of memory in neural networks. We explore how they process sequences one token at a time.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 3,
    "title": "Module 3: LSTMs & GRUs",
    "description": "Solving the vanishing gradient problem.",
    "units": [
      {
        "id": "3.1",
        "title": "Lecture: Long Short-Term Memory",
        "content": "<h2>Gating Mechanisms</h2><p>Learn how Forget, Input, and Output gates allow LSTMs to maintain long-term memory.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 4,
    "title": "Module 4: Seq2Seq & Attention",
    "description": "The bridge to modern Transformers.",
    "units": [
      {
        "id": "4.1",
        "title": "Lecture: Encoder-Decoder Architectures",
        "content": "<h2>The Bottleneck Problem</h2><p>Why did traditional Seq2Seq models fail on long sentences? Explore the birth of the Attention mechanism.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 5,
    "title": "Module 5: Final NLP Assessment",
    "description": "Capstone for the NLP Specialist program.",
    "units": [
      {
        "id": "5.1",
        "title": "Capstone: NLP Comprehensive Exam",
        "content": "<h2>Specialist Validation</h2><p>Prove your mastery of foundational NLP before moving to Transformers.</p>",
        "questions": [
          { "question": "Which architecture solved the vanishing gradient problem in RNNs?", "options": ["CNN", "LSTM", "MLP", "ResNet"], "correctIndex": 1, "explanation": "LSTMs use gating to preserve gradients over long sequences." }
        ]
      }
    ]
});
