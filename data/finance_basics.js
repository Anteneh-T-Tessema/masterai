window.CHAPTERS_DATA = [
    {
        "id": 1,
        "title": "Frontiers of Neural Arbitrage",
        "units": [
            {
                "id": "1.1",
                "title": "Market Microstructure & Tick Data Mastery",
                "content": "<h2>Deep-Dive: The 1ms Frontier</h2><p>In this module, we analyze the architectural requirements for sub-millisecond arbitrage. You will learn to process L3 tick data and identify liquidity imbalances before they manifest in the Order Book.</p><div class='lab-cell'><h4>Mission Objective</h4><p>Analyze 1ms tick data for BTC/USD and identify 3 liquidity gaps.</p></div>",
                "questions": [
                    {
                        "question": "What is the primary bottleneck in sub-millisecond neural arbitrage?",
                        "options": ["Model Depth", "Data Ingestion Latency", "GPU VRAM", "Backtesting Speed"],
                        "correctIndex": 1
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "Risk Transformer Architectures",
        "units": [
            {
                "id": "2.1",
                "title": "Attention Mechanisms for Systemic Risk",
                "content": "<h2>Modeling Black Swan Events</h2><p>Standard VaR (Value at Risk) models fail during regime shifts. We implement Multi-Head Attention to detect cross-market correlation spikes before a flash crash.</p>",
                "questions": [
                    {
                        "question": "Why are Transformers superior to LSTMs for financial time-series?",
                        "options": ["Lower Memory Usage", "Parallel Processing of Sequences", "Deterministic Outputs", "No Need for Scaling"],
                        "correctIndex": 1
                    }
                ]
            }
        ]
    }
];
