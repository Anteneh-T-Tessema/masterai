window.CHAPTERS_DATA = [];

window.CHAPTERS_DATA.push({
    "id": 1,
    "title": "Module 1: Foundations of Vision",
    "description": "From Pixels to Features with CNNs.",
    "units": [
      {
        "id": "1.1",
        "title": "Lecture: Convolutions and Pooling",
        "content": "<div class='pedagogy-header'><h4>Learning Objectives</h4><ul><li>Understand the Convolutional layer</li><li>Explain Spatial Invariance</li><li>Identify common architectures (ResNet, EfficientNet)</li></ul></div><h2>Seeing in Layers</h2><p>Computer Vision allows machines to interpret the physical world. We start with the Convolutional Neural Network (CNN), the workhorse of vision for a decade.</p>",
        "questions": [
          { "question": "What is the main purpose of a Convolutional layer?", "options": ["Flattening data", "Feature extraction through spatial filtering", "Sorting pixels", "Memory storage"], "correctIndex": 1, "explanation": "Convolutions apply filters to input images to extract features like edges, textures, and patterns." }
        ]
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 2,
    "title": "Module 2: Vision Transformers (ViTs)",
    "description": "The Attention mechanism applied to images.",
    "units": [
      {
        "id": "2.1",
        "title": "Lecture: Patches and Attention",
        "content": "<h2>The Transformer Takeover</h2><p>Learn how Vision Transformers treat images as a sequence of patches, bringing the power of self-attention to the visual domain.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 3,
    "title": "Module 3: Multimodal Vision",
    "description": "CLIP, Segment Anything, and Generative Vision (Stable Diffusion).",
    "units": [
      {
        "id": "3.1",
        "title": "Lecture: CLIP and Joint Embeddings",
        "content": "<h2>Bridging Language and Vision</h2><p>Explore how models like CLIP (Contrastive Language-Image Pre-training) align images and text into a single mathematical space.</p>",
        "questions": []
      }
    ]
});

window.CHAPTERS_DATA.push({
    "id": 4,
    "title": "Module 4: Vision Specialist Capstone",
    "description": "Final assessment for the Computer Vision certification.",
    "units": [
      {
        "id": "4.1",
        "title": "Capstone: Real-time Object Detection",
        "content": "<h2>Final Validation</h2><p>Prove your ability to architect and deploy advanced vision systems.</p>",
        "questions": [
          { "question": "Which architecture is known for 'Everything is a Patch'?", "options": ["ResNet", "CNN", "ViT (Vision Transformer)", "RNN"], "correctIndex": 2, "explanation": "Vision Transformers (ViTs) divide images into small patches and process them like tokens in a sentence." }
        ]
      }
    ]
});
