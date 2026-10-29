export interface Project {
  id: string;
  order: number;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  description: string;
  coverImage: string;
  images: string[];
  techTags: string[];
  githubUrl?: string;
  overview: string;
  problem: string;
  solution: string;
  myRole: string;
  architecture?: string;
  techStack: { name: string; description: string }[];
  implementationDetails: string[];
  lessonsLearned: string[];
  disclaimer?: string;
}

const BASE = '/portfolio/assets';

// ============================================================
// PROJECT ORDER: MANDATORY — DO NOT CHANGE
// 1. RAG | 2. Spicy Chicken | 3. Lead No AI | 4. Lead AI | 5. Chest X-Ray
// ============================================================

export const projects: Project[] = [
  // ─────────────────────────────────────────────
  // PROJECT 1 — RAG ASSISTANT
  // ─────────────────────────────────────────────
  {
    id: 'rag-assistant',
    order: 1,
    title: 'RAG-Based Project Documentation Assistant',
    shortTitle: 'RAG Assistant',
    category: 'AI Automation · AI Agents · RAG',
    tagline: 'Context-aware answers from documentation, powered by n8n and Supabase/pgvector.',
    description:
      'An n8n-powered RAG assistant that retrieves relevant information from project documentation and delivers context-aware answers through Telegram using Supabase/pgvector.',
    coverImage: `${BASE}/rag/{DCA55686-6127-4E81-8EA3-9B48942A39A8}.png`,
    images: [
      `${BASE}/rag/{DCA55686-6127-4E81-8EA3-9B48942A39A8}.png`,
      `${BASE}/rag/WhatsApp Image 2026-10-25 at 9.42.20 PM.jpeg`,
      `${BASE}/rag/WhatsApp Image 2026-10-25 at 9.43.05 PM.jpeg`,
      `${BASE}/rag/WhatsApp Image 2026-10-25 at 9.43.42 PM.jpeg`,
      `${BASE}/rag/WhatsApp Image 2026-10-25 at 9.45.00 PM.jpeg`,
      `${BASE}/rag/WhatsApp Image 2026-10-25 at 9.45.23 PM.jpeg`,
      `${BASE}/rag/WhatsApp Image 2026-10-25 at 9.46.03 PM.jpeg`,
      `${BASE}/rag/WhatsApp Image 2026-10-25 at 9.46.22 PM.jpeg`,
      `${BASE}/rag/WhatsApp Image 2026-10-25 at 9.47.09 PM.jpeg`,
      `${BASE}/rag/WhatsApp Image 2026-10-25 at 9.48.29 PM.jpeg`,
    ],
    techTags: ['n8n', 'RAG', 'Supabase', 'pgvector', 'Google Gemini', 'OpenRouter', 'Telegram'],
    overview:
      'A conversational assistant built on a Retrieval-Augmented Generation (RAG) architecture. The assistant answers questions about the SecureChain graduation project documentation by retrieving semantically relevant content and passing it as context to a large language model. The interface is a Telegram chatbot.',
    problem:
      'A large engineering graduation project (SecureChain) produces substantial documentation covering architecture, workflows, team structure, and implementation details. Navigating and querying this documentation manually is time-consuming, especially when team members need quick, specific answers.',
    solution:
      'I built an n8n workflow that implements a RAG pipeline: project documentation is embedded and stored in Supabase using pgvector. When a user sends a question via Telegram, the workflow retrieves the most semantically similar chunks from the knowledge base and provides them as context to Google Gemini, which generates a grounded, accurate response. OpenRouter is configured as a secondary model provider for fallback.',
    myRole:
      'I designed and implemented the RAG assistant workflow and its n8n orchestration. My contribution was the automation pipeline itself — the retrieval logic, AI agent configuration, Telegram integration, and model-provider setup. The SecureChain graduation project documentation I used as the knowledge base was a collaborative team project.',
    architecture: 'User Question → Telegram Trigger → n8n Workflow → AI Agent → knowledge_base_tool (pgvector Retrieval via Supabase) → Relevant Document Chunks → Google Gemini LLM → Context-Aware Answer → Telegram Reply',
    techStack: [
      { name: 'n8n', description: 'Workflow orchestration — coordinates the full RAG pipeline' },
      { name: 'Supabase / pgvector', description: 'Vector database for storing and querying document embeddings' },
      { name: 'Google Gemini', description: 'Primary LLM and embedding model' },
      { name: 'OpenRouter', description: 'Secondary model provider (fallback)' },
      { name: 'Telegram API', description: 'User-facing conversational interface' },
    ],
    implementationDetails: [
      'Configured n8n AI Agent node with Google Gemini Chat Model as the primary language model',
      'Integrated Simple Memory node to maintain conversational context across turns',
      'Built knowledge_base_tool using Supabase/pgvector for semantic document retrieval (3,072 embedded chunks)',
      'Used Embeddings Google Gemini to generate vector representations of documentation content',
      'Configured OpenRouter as an alternative Chat Model node for model-provider fallback',
      'Connected Telegram trigger and response nodes to create a complete chat interface',
      'Implemented strict grounding instructions to prevent hallucination and enforce source-based answers',
    ],
    lessonsLearned: [
      'RAG quality is heavily influenced by document chunking and embedding quality, not just the LLM choice',
      'Configuring system prompts with strict grounding instructions significantly reduces hallucination',
      'n8n AI Agent nodes make it practical to combine memory, tools, and model routing in a single workflow',
      'Supabase pgvector is a pragmatic choice for RAG when you need both structured data and vector search in one platform',
    ],
  },

  // ─────────────────────────────────────────────
  // PROJECT 2 — SPICY CHICKEN
  // ─────────────────────────────────────────────
  {
    id: 'spicy-chicken',
    order: 2,
    title: 'Spicy Chicken AI Restaurant Ordering Agent',
    shortTitle: 'Spicy Chicken Agent',
    category: 'AI Automation · Conversational AI · Business Automation',
    tagline: 'A real-world AI ordering assistant deployed for an actual restaurant.',
    description:
      'An AI-powered restaurant assistant built with n8n and Telegram to help customers explore menu information and provide order details through a conversational workflow.',
    coverImage: `${BASE}/spicy-chicken/{9BC48F2F-7A0B-4E16-A98A-05B664DAC17A}.png`,
    images: [
      `${BASE}/spicy-chicken/{9BC48F2F-7A0B-4E16-A98A-05B664DAC17A}.png`,
      `${BASE}/spicy-chicken/{AF7F1519-E965-468F-89C0-349522D8AFB1}.png`,
      `${BASE}/spicy-chicken/{00045D51-CF92-4BA1-8F99-235A084072CF}.png`,
      `${BASE}/spicy-chicken/{4547A0D8-F63E-4B7A-A9EE-D2300846A7B5}.png`,
      `${BASE}/spicy-chicken/{7A757923-C3CD-4ED1-87A3-70E12D7EA6B3}.png`,
      `${BASE}/spicy-chicken/{90E81F71-46D2-4C6C-9EED-A96FFCEDAFED}.png`,
      `${BASE}/spicy-chicken/{CF270AE7-D053-4D3F-AD5F-F29E1056326F}.png`,
    ],
    techTags: ['n8n', 'Telegram', 'LLM', 'Conversational AI', 'Google Sheets', 'Structured Output'],
    overview:
      'A conversational AI ordering assistant for Spicy Chicken restaurant, deployed in a real restaurant context. The workflow connects Telegram with an LLM and Google Sheets to handle customer interactions — presenting menu information, collecting customer details (name, phone, address), and confirming orders.',
    problem:
      'A restaurant needed a way to handle customer inquiries and ordering through Telegram without requiring constant manual attention. Menu information had to be presented clearly, and customer contact details needed to be collected and confirmed before order processing.',
    solution:
      'I built an n8n workflow that acts as a conversational ordering agent via Telegram. The LLM manages the conversation flow — presenting the menu, asking for required customer information, and handling confirmation. Customer data and order details are collected through structured conversation and routed appropriately.',
    myRole:
      'I designed and implemented the full n8n automation workflow, including the Telegram integration, LLM configuration, conversational memory, and data collection logic. This workflow was deployed and used in a real restaurant context.',
    architecture: 'Customer → Telegram → n8n Webhook → LLM Agent (Conversational Memory + Menu Data from Google Sheets) → Structured Customer Data Collection → Order Confirmation → Kitchen/Management Notification',
    techStack: [
      { name: 'n8n', description: 'Workflow orchestration and automation engine' },
      { name: 'Telegram API', description: 'Customer-facing conversational interface' },
      { name: 'LLM Integration', description: 'Manages conversation flow, menu presentation, and data collection' },
      { name: 'Conversational Memory', description: 'Maintains context across the ordering conversation' },
      { name: 'Google Sheets', description: 'Menu data source and order record storage' },
    ],
    implementationDetails: [
      'Built a Telegram bot connected to n8n via webhook trigger',
      'Configured an LLM agent with conversational memory to handle multi-turn ordering conversations',
      'Integrated Google Sheets as the menu data source, keeping menu content easily updatable',
      'Implemented structured data collection for customer name, phone number, and delivery address',
      'Added order confirmation flow that summarizes the order before finalizing',
      'Used conditional workflow logic to route completed orders to kitchen/management notification',
      'Deployed and tested in an actual restaurant environment',
    ],
    lessonsLearned: [
      'Real-world deployment surfaces edge cases that are hard to anticipate during development — customers interact in unexpected ways',
      'Conversational memory is essential for ordering workflows; without it the bot loses track of what the customer has already said',
      'Google Sheets integration is a practical choice for menu management since non-technical restaurant staff can update it directly',
      'Keeping the LLM system prompt focused on a specific task dramatically improves reliability',
    ],
  },

  // ─────────────────────────────────────────────
  // PROJECT 3 — LEAD QUALIFICATION WITHOUT AI
  // ─────────────────────────────────────────────
  {
    id: 'lead-no-ai',
    order: 3,
    title: 'Rule-Based Real Estate Lead Qualification',
    shortTitle: 'Lead Qual (No AI)',
    category: 'Business Process Automation · n8n',
    tagline: 'Deterministic lead scoring and routing — no AI required.',
    description:
      'A rule-based n8n workflow that processes real estate leads, applies predefined qualification rules, and routes leads to the appropriate destination without using AI.',
    coverImage: `${BASE}/lead-no-ai/1.png`,
    images: [
      `${BASE}/lead-no-ai/1.png`,
      `${BASE}/lead-no-ai/2.png`,
      `${BASE}/lead-no-ai/3.png`,
      `${BASE}/lead-no-ai/4.png`,
      `${BASE}/lead-no-ai/5.png`,
      `${BASE}/lead-no-ai/6.png`,
      `${BASE}/lead-no-ai/7.png`,
      `${BASE}/lead-no-ai/8.png`,
      `${BASE}/lead-no-ai/9.png`,
    ],
    techTags: ['n8n', 'Tally', 'Webhook', 'Python (Code Node)', 'Google Sheets', 'Gmail', 'Telegram'],
    overview:
      'A deterministic lead qualification and routing workflow built entirely in n8n. This version does not use AI — qualification decisions are made by predefined scoring rules implemented in a Python code node. Leads submitted through a Tally form are scored, routed by priority tier (High / Medium / Low), recorded in Google Sheets, and trigger appropriate email and Telegram notifications.',
    problem:
      'Real estate businesses receive many leads of varying quality. Manually reviewing and routing each lead is slow and inconsistent. A systematic approach was needed to apply the same qualification criteria to every lead and immediately route high-priority prospects.',
    solution:
      'I built an n8n workflow with a rule-based scoring engine. Lead data enters through a Tally form webhook, is processed by an Edit Fields node, scored by a Python code node using predefined criteria, then routed through a Switch node into three tiers. Each tier triggers its own set of actions: Google Sheets logging, email notifications via Gmail, and Telegram alerts.',
    myRole:
      'I designed and built the full n8n workflow, including the form integration, data processing nodes, Python scoring logic, conditional routing, and all notification integrations.',
    architecture: 'Tally Form Submission → Webhook Trigger → Edit Fields (Data Extraction) → Code Node (Python Scoring) → Switch Node (High / Medium / Low) → Google Sheets + Gmail + Telegram (per tier)',
    techStack: [
      { name: 'n8n', description: 'Workflow orchestration platform' },
      { name: 'Tally', description: 'Lead intake form' },
      { name: 'Webhook', description: 'Receives form submissions and triggers the workflow' },
      { name: 'Code Node (Python)', description: 'Implements the rule-based lead scoring logic' },
      { name: 'Switch Node', description: 'Routes leads based on score into High/Medium/Low tiers' },
      { name: 'Google Sheets', description: 'Persistent lead record storage' },
      { name: 'Gmail', description: 'Email notifications to clients and support team' },
      { name: 'Telegram', description: 'Instant alerts for high-priority leads' },
    ],
    implementationDetails: [
      'Configured a Tally webhook to receive structured lead form submissions',
      'Used Edit Fields node to extract and normalize the relevant lead data fields',
      'Implemented lead scoring logic in a Python code node with predefined criteria and weighted scoring',
      'Built a Switch node with three output paths: High priority (score ≥ 75), Medium (score ≥ 50), Low (score < 50)',
      'Each path writes to a separate Google Sheets tab with the appropriate lead status',
      'High-priority leads trigger both Gmail notification to the support team and a Telegram alert with client contact details',
      'Medium and low leads receive email notifications according to their tier',
    ],
    lessonsLearned: [
      'Rule-based scoring is transparent and auditable — easy to explain to stakeholders exactly why a lead received a given score',
      'Python code nodes in n8n are powerful for implementing custom business logic that standard nodes cannot express',
      'Separating the scoring logic from the routing logic (using distinct nodes) makes the workflow much easier to maintain and modify',
      'This deterministic approach is a useful baseline for comparing against AI-powered qualification in Project 4',
    ],
  },

  // ─────────────────────────────────────────────
  // PROJECT 4 — LEAD QUALIFICATION WITH AI
  // ─────────────────────────────────────────────
  {
    id: 'lead-ai',
    order: 4,
    title: 'AI-Powered Real Estate Lead Qualification',
    shortTitle: 'Lead Qual (AI)',
    category: 'AI Automation · Lead Management',
    tagline: 'AI-driven lead analysis and intelligent routing with OpenRouter.',
    description:
      'An AI-powered real estate lead qualification workflow designed to automate lead processing using an AI agent with structured output for more intelligent routing decisions.',
    coverImage: `${BASE}/lead-ai/1.png`,
    images: [
      `${BASE}/lead-ai/1.png`,
      `${BASE}/lead-ai/2.png`,
      `${BASE}/lead-ai/3.png`,
      `${BASE}/lead-ai/4.png`,
      `${BASE}/lead-ai/5.png`,
    ],
    techTags: ['n8n', 'AI Agent', 'OpenRouter', 'Structured Output', 'Google Sheets', 'Gmail', 'WhatsApp'],
    overview:
      'A separate AI-powered implementation for processing and qualifying real estate leads. Rather than applying predefined scoring rules, this workflow uses an AI Agent with a Structured Output Parser to analyze lead submissions and classify them into sentiment-based tiers (Positive / Neutral / Negative), which then trigger different routing and notification paths.',
    problem:
      'Predefined rule-based scoring (Project 3) works well for structured criteria but cannot easily interpret nuanced or qualitative lead information. An AI-powered approach can analyze the full context of a lead submission and make more holistic qualification decisions.',
    solution:
      'I built an n8n workflow where lead form submissions feed into an AI Agent that uses the OpenRouter Chat Model and a Structured Output Parser to analyze the lead and return a structured qualification result. A Switch node routes the result into Positive, Neutral, or Negative paths, each triggering Google Sheets logging, Gmail email, and WhatsApp messaging.',
    myRole:
      'I designed and built this AI-powered workflow as a distinct implementation from the rule-based version. My work included the AI Agent configuration, Structured Output Parser setup, routing logic, and all integration nodes.',
    architecture: 'Form Submission → n8n Trigger → AI Agent (OpenRouter Chat Model + Structured Output Parser) → Switch (Positive / Neutral / Negative) → Google Sheets + Gmail + WhatsApp (per tier)',
    techStack: [
      { name: 'n8n', description: 'Workflow orchestration platform' },
      { name: 'AI Agent', description: 'Analyzes lead submissions and determines qualification tier' },
      { name: 'OpenRouter Chat Model', description: 'LLM provider used by the AI agent for lead analysis' },
      { name: 'Structured Output Parser', description: 'Ensures the AI returns a consistent, parseable result' },
      { name: 'Switch Node', description: 'Routes based on AI qualification result (Positive/Neutral/Negative)' },
      { name: 'Google Sheets', description: 'Lead record storage, organized by qualification tier' },
      { name: 'Gmail', description: 'Email notifications per qualification tier' },
      { name: 'WhatsApp', description: 'Messaging integration for certain lead tiers' },
    ],
    implementationDetails: [
      'Configured n8n AI Agent to receive lead submission data and analyze it holistically',
      'Used OpenRouter Chat Model node as the LLM provider for flexible model selection',
      'Implemented Structured Output Parser to enforce a consistent response schema from the AI agent',
      'Built Switch node with three output paths based on AI qualification result: Positive, Neutral, Negative',
      'Each path writes to a dedicated Google Sheets tab and triggers appropriate notifications',
      'Integrated WhatsApp messaging for lead follow-up in addition to Gmail email notifications',
      'This workflow is architecturally separate from the rule-based version in Project 3',
    ],
    lessonsLearned: [
      'Structured Output Parser is essential when using AI agent results downstream — without it, parsing the response reliably is fragile',
      'AI-based qualification introduces non-determinism; testing across a variety of lead inputs is important for confidence',
      'The Positive/Neutral/Negative classification is a useful middle ground between binary qualification and complex scoring',
      'Comparing AI and rule-based approaches side by side helps clarify the trade-offs for specific business contexts',
    ],
  },

  // ─────────────────────────────────────────────
  // PROJECT 5 — CHEST X-RAY
  // ─────────────────────────────────────────────
  {
    id: 'chest-xray',
    order: 5,
    title: 'Pneumonia Detection from Chest X-Rays',
    shortTitle: 'Chest X-Ray CNN',
    category: 'Computer Vision · Deep Learning',
    tagline: 'Educational CNN-based image classifier with a FastAPI backend and Streamlit UI.',
    description:
      'An educational computer vision application that uses a CNN to classify chest X-ray images into Normal and Pneumonia categories, with a FastAPI backend and Streamlit interface.',
    coverImage: `${BASE}/chest-xray/WhatsApp Image 2026-08-09 at 9.41.20 PM.jpeg`,
    images: [
      `${BASE}/chest-xray/WhatsApp Image 2026-08-09 at 9.41.20 PM.jpeg`,
      `${BASE}/chest-xray/WhatsApp Image 2026-08-09 at 9.49.23 PM.jpeg`,
      `${BASE}/chest-xray/WhatsApp Image 2026-08-09 at 9.5.06 PM.jpeg`,
      `${BASE}/chest-xray/WhatsApp Image 2026-08-09 at 9.53.59 PM.jpeg`,
      `${BASE}/chest-xray/WhatsApp Image 2026-08-09 at 9.54.01 PM.jpeg`,
      `${BASE}/chest-xray/WhatsApp Image 2026-08-09 at 9.54.05 PM.jpeg`,
      `${BASE}/chest-xray/WhatsApp Image 2026-08-09 at 9.54.06 PM.jpeg`,
      `${BASE}/chest-xray/WhatsApp Image 2026-08-09 at 9.540 PM.jpeg`,
      `${BASE}/chest-xray/WhatsApp Image 2026-08-09 at 9.58.40 PM.jpeg`,
      `${BASE}/chest-xray/WhatsApp Image 2028-09 at 9.45.52 PM.jpeg`,
      `${BASE}/chest-xray/Whats.jpeg`,
    ],
    techTags: ['Python', 'TensorFlow 2.20', 'Keras', 'CNN', 'FastAPI', 'Streamlit'],
    disclaimer:
      '⚠️ Educational Project Only: This is an academic machine learning project. It is not clinically validated and must not be used as a substitute for professional medical evaluation or diagnosis.',
    overview:
      'An educational deep learning project that trains a Convolutional Neural Network (CNN) to classify chest X-ray images as either Normal or Pneumonia. The project uses TensorFlow 2.20.0 / Keras for model training, FastAPI for the inference backend, and Streamlit for the user interface.',
    problem:
      'Building an end-to-end deep learning application — from data ingestion and model training to a deployable inference API and interactive UI — requires integrating multiple tools and workflows. This project serves as a practical exercise in the complete ML application lifecycle.',
    solution:
      'I implemented a binary image classification pipeline. The CNN model is built using TensorFlow/Keras with Conv2D, MaxPooling2D, Dense, Dropout, and BatchNormalization layers. A FastAPI backend serves inference requests, and a Streamlit interface allows users to upload chest X-ray images and receive predictions.',
    myRole:
      'I implemented the full project: CNN model architecture, training pipeline using TensorFlow/Keras, FastAPI backend for model serving, and Streamlit interface for the user-facing application. This is a personal educational project.',
    architecture: 'Chest X-Ray Image → Streamlit UI (Upload) → FastAPI Backend → TensorFlow/Keras CNN Model → Prediction (Normal / Pneumonia) → Result Display',
    techStack: [
      { name: 'TensorFlow 2.20.0 / Keras', description: 'Deep learning framework for CNN model training and inference' },
      { name: 'Python', description: 'Primary programming language' },
      { name: 'FastAPI', description: 'Backend API for serving model predictions' },
      { name: 'Streamlit', description: 'User interface for image upload and result display' },
      { name: 'NumPy / Matplotlib', description: 'Data processing and visualization' },
      { name: 'scikit-learn', description: 'Evaluation metrics (classification report, confusion matrix)' },
      { name: 'seaborn', description: 'Visualization of evaluation results' },
    ],
    implementationDetails: [
      'Built CNN architecture using TensorFlow/Keras Sequential model with Conv2D, MaxPooling2D, Flatten, Dense, Dropout, and BatchNormalization layers',
      'Used ImageDataGenerator for training data loading and augmentation',
      'Configured Adam optimizer and EarlyStopping / ModelCheckpoint callbacks',
      'Implemented FastAPI backend to expose the trained model as an inference endpoint',
      'Built Streamlit interface allowing users to upload X-ray images and view predictions',
      'Evaluated model using classification_report and confusion_matrix from scikit-learn',
      'Visualized results with Matplotlib and Seaborn',
    ],
    lessonsLearned: [
      'Building end-to-end ML applications requires skills beyond model training — API design, UI integration, and deployment all matter',
      'BatchNormalization and Dropout significantly help with training stability and overfitting on small medical imaging datasets',
      'FastAPI is an excellent choice for ML inference APIs due to its speed and async support',
      'Working with medical imaging datasets reinforces the importance of never overstating model capabilities for safety-critical applications',
    ],
  },
];
