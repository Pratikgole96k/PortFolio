export const personalInfo = {
  name: "Pratik Gole",
  title: "Python Developer | AI/ML Fresher",
  subtitle: "M.Sc Computer Science Student & Data Science Enthusiast",
  location: "Nashik, Maharashtra, India",
  phone: "+91 9021263085",
  email: "pratikgole96k@gmail.com",
  linkedin: "https://linkedin.com/in/pratik-gole",
  linkedinHandle: "linkedin.com/in/pratik-gole",
  github: "https://github.com",
  summary:
    "B.S Computer Science graduate and M.Sc Computer Science student with a strong foundation in Python, C, SQL, Data Structures, and Object-Oriented Programming. Builds working knowledge of Artificial Intelligence and Machine Learning, including data preprocessing, exploratory data analysis, model training, and model evaluation. Combines analytical problem-solving with hands-on web development experience (HTML, CSS, JavaScript, PHP, SQL). Seeking an entry-level Python Developer, AI/ML Intern, or Junior AI/ML Developer role to apply technical skills to production-level projects.",
  status: "Open for Opportunities",
  availability: "Immediate / Entry-Level & Internships",
  targetRoles: [
    "Python Developer",
    "AI / ML Fresher",
    "Junior AI/ML Developer",
    "Data Analyst / Python Engineer",
    "Web Developer (Full Stack Basics)"
  ],
  stats: [
    { label: "Years of Academic CS", value: "4+" },
    { label: "Core Tech Domains", value: "5+" },
    { label: "AI/ML Workflows", value: "100%" },
    { label: "Certifications", value: "2" }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Core languages for algorithmic problem solving and backend computing",
    skills: [
      { name: "Python", level: 90, tag: "Primary", highlight: "Data structures, OOP, scripting, data manipulation, algorithm design" },
      { name: "C", level: 80, tag: "Core", highlight: "Pointers, memory management, procedural logic, core algorithms" },
      { name: "JavaScript", level: 78, tag: "Web", highlight: "ES6+, DOM manipulation, asynchronous logic, event handling" },
      { name: "PHP", level: 75, tag: "Backend", highlight: "Server-side logic, session management, database CRUD operations" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "BrainCircuit",
    description: "End-to-end data pipeline, modeling, and intelligence workflows",
    skills: [
      { name: "Data Preprocessing", level: 88, tag: "Pipeline", highlight: "Handling missing values, feature scaling, encoding categorical variables" },
      { name: "Exploratory Data Analysis (EDA)", level: 86, tag: "Analytics", highlight: "Statistical summaries, correlation matrices, distribution profiling" },
      { name: "Supervised Learning", level: 84, tag: "Modeling", highlight: "Linear/Logistic Regression, Decision Trees, KNN, Random Forest concepts" },
      { name: "Unsupervised Learning", level: 80, tag: "Modeling", highlight: "K-Means clustering, PCA dimensionality reduction fundamentals" },
      { name: "Model Training & Evaluation", level: 85, tag: "Metrics", highlight: "Train/test split, cross-validation, MSE, RMSE, R2, Confusion Matrix, Accuracy" },
      { name: "Data Visualization", level: 85, tag: "Insight", highlight: "Visualizing patterns, trend lines, residual plots, feature importance" }
    ]
  },
  {
    category: "Web Development",
    icon: "Globe",
    description: "Responsive frontend and dynamic backend integration",
    skills: [
      { name: "HTML5", level: 92, tag: "Frontend", highlight: "Semantic layout, accessibility, SEO structure, modern forms" },
      { name: "CSS3", level: 88, tag: "Styling", highlight: "Flexbox, CSS Grid, animations, responsive design, glassmorphism" },
      { name: "JavaScript (DOM & ES6+)", level: 80, tag: "Interactivity", highlight: "Dynamic UI, API integrations, event-driven components" },
      { name: "PHP Backend", level: 76, tag: "Server", highlight: "Modular architecture, user auth, dynamic page rendering" }
    ]
  },
  {
    category: "Databases & Core CS",
    icon: "Database",
    description: "Relational data modeling, query optimization, and foundational CS",
    skills: [
      { name: "SQL & Query Optimization", level: 88, tag: "Database", highlight: "Complex queries, JOINs, aggregations, indexing, transactions" },
      { name: "Relational Database Design", level: 85, tag: "Architecture", highlight: "ER diagrams, schema normalization (1NF, 2NF, 3NF), integrity constraints" },
      { name: "Data Structures & Algorithms", level: 82, tag: "Core CS", highlight: "Arrays, Linked Lists, Stacks, Queues, Trees, Searching & Sorting" },
      { name: "Object-Oriented Programming (OOP)", level: 88, tag: "Core CS", highlight: "Encapsulation, Inheritance, Polymorphism, Abstraction in Python & C" },
      { name: "Computer Networks", level: 78, tag: "Core CS", highlight: "OSI model, TCP/IP, HTTP/HTTPS, client-server architectures" }
    ]
  },
  {
    category: "Tools & Practices",
    icon: "Cpu",
    description: "Development hygiene, debugging, and collaboration toolset",
    skills: [
      { name: "Version Control (Git/GitHub)", level: 82, tag: "Workflow", highlight: "Branching, committing, staging, pull requests, repository management" },
      { name: "Debugging & Problem Solving", level: 88, tag: "Practice", highlight: "Root cause analysis, stack trace inspection, code optimization" },
      { name: "Analytical Thinking", level: 90, tag: "Core", highlight: "Mathematical modeling, hypothesis testing, structured problem decomposition" },
      { name: "Team Collaboration", level: 88, tag: "Soft Skill", highlight: "Clear technical communication, agile participation, cross-functional synergy" }
    ]
  }
];

export const projectsData = [
  {
    id: "elearning-platform",
    title: "Innovative E-Learning Platform",
    category: "Full Stack & Database",
    featured: true,
    badge: "Full Stack Web Application",
    timeline: "Academic Capstone Project",
    summary:
      "A comprehensive web-based learning management application built to streamline online course delivery, dynamic user engagement, and multi-role administrative workflows.",
    problem:
      "Students and instructors needed an intuitive, centralized portal for structured coursework, real-time progress monitoring, and interactive modular learning.",
    solution:
      "Engineered an end-to-end e-learning platform with secure user authentication, interactive course catalog filtering, persistent progress tracking, and an administrative control center.",
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL", "Relational Database Design"],
    keyFeatures: [
      "User Registration & Role-based authentication (Student vs Admin)",
      "Dynamic course catalog browsing with category filters and search",
      "Interactive progress-tracking dashboard with module completion status",
      "Normalized SQL database schema designed up to 3NF for data integrity",
      "Admin dashboard concept for managing courses, content uploads, and enrolled users",
      "Responsive, mobile-friendly frontend components crafted with clean CSS"
    ],
    architecture: {
      frontend: "Semantic HTML5, CSS3 Grid/Flexbox, JavaScript client-side validation",
      backend: "Modular PHP scripts handling routing, authentication sessions, and business logic",
      database: "Normalized MySQL/SQL schema with relational foreign key constraints and indexed queries",
      security: "Password hashing, session validation, SQL injection prevention via parameterized queries"
    },
    metrics: [
      { label: "Database Normalization", value: "3NF Compliant" },
      { label: "Modules Supported", value: "Multi-Tier" },
      { label: "Responsive Breakpoints", value: "Mobile/Tablet/Desktop" }
    ]
  },
  {
    id: "aiml-predictive-engine",
    title: "AI/ML Predictive & EDA Intelligence Lab",
    category: "AI & Machine Learning",
    featured: true,
    badge: "Machine Learning Pipeline",
    timeline: "Specialization Project",
    summary:
      "A comprehensive Python-driven exploratory data analysis and predictive modeling pipeline built to automate data preprocessing, feature correlation, and model benchmark evaluation.",
    problem:
      "Raw datasets often have noisy attributes, skewed distributions, and unhandled missing data that lead to poor model accuracy if not methodically prepared.",
    solution:
      "Developed end-to-end Python workflows performing automated imputation, outlier detection, feature encoding, supervised model training (Linear Regression, Decision Trees), and metric evaluations.",
    techStack: ["Python", "Machine Learning", "Data Preprocessing", "EDA", "Model Evaluation", "Data Visualization"],
    keyFeatures: [
      "Automated exploratory data analysis (EDA) generating descriptive statistical summaries",
      "Robust data preprocessing pipeline (mean/median imputation, Min-Max & Standard scaling)",
      "Supervised learning model training with train/test validation splits",
      "Performance evaluation across Mean Squared Error (MSE), R-squared (R²), and accuracy score matrices",
      "Interactive visualizations for residual plots, correlation heatmaps, and regression fit lines"
    ],
    architecture: {
      frontend: "Interactive React-based Web Playground simulator embedded directly in this portfolio",
      backend: "Python mathematical modeling logic with algorithmic matrix calculations",
      pipeline: "Data Ingestion -> Cleaning/Imputation -> Feature Engineering -> Model Fitting -> Evaluation"
    },
    metrics: [
      { label: "Evaluation Metrics", value: "MSE, RMSE, R², Accuracy" },
      { label: "Preprocessing Stages", value: "5 Pipeline Steps" },
      { label: "Interactive Simulator", value: "Live In-Browser" }
    ]
  },
  {
    id: "sql-academic-portal",
    title: "Relational Database & Student Analytics Engine",
    category: "Database & Backend",
    featured: false,
    badge: "Database Architecture",
    timeline: "Database Systems Project",
    summary:
      "A relational database modeling and query performance project featuring complex multi-table joins, subqueries, and analytical data aggregation for educational institutions.",
    problem:
      "Unstructured academic data created high redundancy, insertion anomalies, and slow reporting queries across departments.",
    solution:
      "Designed and implemented an optimized relational schema with entity-relationship diagrams, triggers, views, and automated reporting scripts.",
    techStack: ["SQL", "Relational Database Design", "Python", "Data Analysis", "OOP"],
    keyFeatures: [
      "Entity-Relationship (ER) modeling with strict referential integrity rules",
      "Complex SQL querying including nested subqueries, aggregations, and window functions",
      "Python data extraction scripts to analyze grade distributions and student attendance trends",
      "Automated indexing on primary search columns for sub-millisecond query execution"
    ],
    architecture: {
      schema: "Fully normalized relational structure (Students, Courses, Enrollments, Grades, Instructors)",
      optimization: "Composite indexes, materialized views for instant grade GPA computation"
    },
    metrics: [
      { label: "Tables Normalized", value: "8+ Entities" },
      { label: "Data Integrity", value: "Zero Redundancy" },
      { label: "Query Execution", value: "Optimized Indexes" }
    ]
  }
];

export const trainingData = {
  title: "AI / Machine Learning Training",
  status: "Ongoing Specialization",
  program: "Artificial Intelligence & Machine Learning Course",
  description:
    "Intensive hands-on training focused on mastering foundational to intermediate AI/ML paradigms, data wrangling pipelines, and statistical modeling with Python.",
  modules: [
    {
      title: "Core AI & Machine Learning Foundations",
      status: "Completed",
      details: "Studying core AI and Machine Learning concepts, algorithmic taxonomy, and applying them using Python."
    },
    {
      title: "Data Preprocessing & Exploratory Data Analysis (EDA)",
      status: "Mastered",
      details: "Practicing data cleaning, missing value strategies, outlier filtering, and distribution analysis on structured datasets."
    },
    {
      title: "Supervised & Unsupervised Learning Algorithms",
      status: "Active",
      details: "Applying regression models, classification trees, K-Nearest Neighbors, and clustering techniques to benchmark datasets."
    },
    {
      title: "Model Training, Tuning & Evaluation Metrics",
      status: "Active",
      details: "Building working knowledge of model training, loss functions, overfitting prevention, and hyperparameter tuning."
    },
    {
      title: "Data Visualization & Insight Communication",
      status: "Mastered",
      details: "Visualizing complex multidimensional data, decision curves, and model performance metrics."
    },
    {
      title: "Practical AI/ML Mini-Projects",
      status: "Ongoing",
      details: "Developing real-world AI/ML mini-projects to reinforce and demonstrate coursework concepts."
    }
  ]
};

export const educationData = [
  {
    degree: "Master of Science in Computer Science (M.Sc CS)",
    institution: "K.S.K.W. College",
    location: "Nashik, Maharashtra, India",
    duration: "2026 – Present",
    status: "Pursuing",
    description:
      "Advanced postgraduate studies focusing on Artificial Intelligence, Advanced Data Structures, Cloud Computing, High-Performance Computing, and Research Methodologies."
  },
  {
    degree: "Bachelor of Computer Science (BCS)",
    institution: "Karmaveer Ganpat Dada More College",
    location: "Niphad, Maharashtra, India",
    duration: "2023 – 2026",
    status: "Graduated",
    description:
      "Comprehensive undergraduate curriculum covering Python, C programming, Relational Database Management Systems, Object-Oriented Programming (OOP), Data Structures & Algorithms, and Web Technologies."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Janata English School & Jr. College",
    location: "Saikheda, Nashik, Maharashtra, India",
    duration: "2022 – 2023",
    grade: "50.33%",
    status: "Completed",
    description: "Higher secondary education with a strong emphasis on Science and Mathematics foundations."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Niphad English School",
    location: "Niphad, Maharashtra, India",
    duration: "2019 – 2020",
    grade: "78.00%",
    status: "Completed",
    description: "Secondary education with academic distinction in Mathematics, Science, and English."
  }
];

export const certificationsData = [
  {
    id: "cert-python",
    title: "Python Programming Certification",
    issuer: "Recognized Technical Institute",
    badge: "Verified Skill",
    skillsCovered: ["Core Python", "Data Structures", "OOP", "File Handling", "Algorithmic Logic", "Modular Programming"],
    description: "Validated proficiency in Python syntax, object-oriented architecture, data manipulation, and clean coding standards."
  },
  {
    id: "cert-salesforce",
    title: "Salesforce Certification",
    issuer: "ExcelR",
    badge: "Industry Certified",
    skillsCovered: ["CRM Concepts", "Cloud Architecture", "Data Management", "Security Models", "Workflow Automation"],
    description: "Comprehensive training on enterprise cloud CRM workflows, data schema design, and process automation."
  }
];
