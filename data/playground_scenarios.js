window.PLAYGROUND_SCENARIOS = {
    "zero_shot": {
        "title": "Zero-shot Analysis",
        "description": "Asking for a summary without any examples.",
        "expected_reasoning": "Direct extraction based on internal knowledge.",
        "simulated_response": "This text discusses the importance of data quality in fine-tuning Large Language Models, highlighting that clean data is more critical than dataset size."
    },
    "few_shot": {
        "title": "Few-shot Classification",
        "description": "Providing examples of sentiment to guide the model.",
        "expected_reasoning": "Pattern matching based on provided examples.",
        "simulated_response": "Sentiment: POSITIVE\nConfidence: 0.98\nReasoning: The input uses strong positive descriptors like 'breakthrough' and 'efficiency'."
    },
    "chain_of_thought": {
        "title": "Chain-of-Thought Reasoning",
        "description": "Forcing the model to think step-by-step.",
        "expected_reasoning": "Sequential logical decomposition.",
        "simulated_response": "1. First, identify the total number of apples (10).\n2. Calculate the price per apple ($2 / 10 = $0.20).\n3. Multiply by the desired quantity (5 * $0.20 = $1.00).\nFinal Answer: The total cost is $1.00."
    },
    "hallucination": {
        "title": "Hallucination Stress Test",
        "description": "Asking about a non-existent fact.",
        "expected_reasoning": "Probability-based completion vs factual verification.",
        "simulated_response": "The 'Quantum-Llama-99' was released in 2025 as the first model to utilize liquid-nitrogen cooled circuits for faster inference. (Note: This is a simulated hallucination for educational purposes)."
    }
};
