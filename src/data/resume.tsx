import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Indranil Bain",
  initials: "IB",
  url: "https://not-indro.github.io/Portfolio/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "AI/ML Engineer & Data Analyst. I bridge the gap between complex data pipelines and production-grade ML systems.",
  summary:
    "I'm an AI/ML Engineer with **2+ years** of experience solving **complex data analytics problems** and building **ML models**. I love solving problems, whether it's optimising complex pipelines or deploying robust ML systems. With over **13+ projects** Completed, I bridge the gap between raw data and real-world impact, combining technical expertise with a product first mindset.",
  avatarUrl: "/meme.jpg",
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", logo: "https://cdn.simpleicons.org/python" },
        { name: "SQL", logo: "https://cdn.simpleicons.org/postgresql" },
        { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus" },
      ],
    },
    {
      category: "ML Frameworks",
      items: [
        { name: "PyTorch", logo: "https://cdn.simpleicons.org/pytorch" },
        { name: "PySpark", logo: "https://cdn.simpleicons.org/apachespark" },
        { name: "TensorFlow", logo: "https://cdn.simpleicons.org/tensorflow" },
        { name: "Scikit-learn", logo: "https://cdn.simpleicons.org/scikitlearn" },
        { name: "spaCy", logo: "https://cdn.simpleicons.org/spacy" },
        { name: "Keras", logo: "https://cdn.simpleicons.org/keras" },
        { name: "OpenCV", logo: "https://cdn.simpleicons.org/opencv" },
        { name: "Transformers", logo: "https://cdn.simpleicons.org/huggingface" },
      ],
    },
    {
      category: "LLM & GenAI",
      items: [
        { name: "Fine-tuning", logo: "https://cdn.simpleicons.org/ollama" },
        { name: "RAG", logo: "https://cdn.simpleicons.org/langchain" },
        { name: "Prompt Engineering" },
        { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain" },
        { name: "AWS Bedrock", },
        { name: "Hugging Face", logo: "https://cdn.simpleicons.org/huggingface" },
        { name: "AutoGen" },
      ],
    },
    {
      category: "Data Pipelines & MLOps",
      items: [
        { name: "Apache Airflow", logo: "https://cdn.simpleicons.org/apacheairflow" },
        { name: "AWS SageMaker" },
        { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
        { name: "A/B Testing", logo: "https://cdn.simpleicons.org/googleanalytics" },
        { name: "ETL/ELT", logo: "https://cdn.simpleicons.org/apachespark" },
        { name: "CI/CD for ML", logo: "https://cdn.simpleicons.org/githubactions" },
      ],
    },
    {
      category: "Database & Cloud",
      items: [
        { name: "AWS (RDS, S3, Glue, Redshift)" },
        { name: "Azure" },
        { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
        { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
        { name: "FAISS", logo: "https://cdn.simpleicons.org/meta" },
      ],
    },
    {
      category: "Data & Dev Tools",
      items: [
        { name: "Git", logo: "https://cdn.simpleicons.org/git" },
        { name: "Jira", logo: "https://cdn.simpleicons.org/jira" },
        { name: "Confluence", logo: "https://cdn.simpleicons.org/confluence" },
        { name: "DBeaver", logo: "https://cdn.simpleicons.org/dbeaver" },
        { name: "Adv. MS Excel" },
        { name: "Power BI" },
        { name: "VS Code" },
      ],
    },
  ],
  navbar: [
    { href: "/#hero", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "indranilbain14@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/not-indro",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/indranil-bain",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:indranilbain14@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "EvenFlow AI",
      href: "https://evenflow.ai/",
      badges: [],
      location: "Remote (Northfield, IL, USA)",
      title: "Data Analyst",
      logoUrl: "/evenflow.jpg",
      start: "Jan 2025",
      end: "Present",
      description:
        "- Developed a **repair-category prediction model** for operation codes using **TF-IDF** and **Logistic Regression**. Cleaned and prepared the data, tuned the model, and reached **91% accuracy**, which helped reduce manual tagging work by **80%** and improved repair tracking.\n- Created an **outreach tool** for the support team to easily upload CSV files and trigger customer reminders. Set up a rule-based system plus integrated **TextGrid API** for scheduled messages, which cut a lot of manual follow-ups (around **75%**) and improved rescheduling rates.\n- Worked directly with the **CEO** to dig into operational data, improved the internal calculations, and supported service center managers with insights that helped them streamline processes and drive better results.",
      links: [

      ],
    },
    {
      company: "i3 Digital Health",
      badges: [],
      href: "https://www.i3digitalhealth.com/home",
      location: "Bangalore, India",
      title: "Data Engineer Trainee",
      logoUrl: "/i3.png",
      start: "Sept 2024",
      end: "Dec 2024",
      description:
        "- Automated data pipelines to pull drug, cancer, and biomarker data from the **ClinicalTrials API** using **SciSpacy NER** and **BioBERT model**, reduced manual lookup work by **85%**. Handled data cleaning, entity mapping, and tagging so the research team could use the data directly.\n- Developed a **scalable ETL scraper** for FDA oncology drug label PDFs, automating ingestion, parsing, and storage (**S3**) saving **3 Hours/day** of manual work. Used **BeautifulSoup4** + **async task queues**.",
      links: [

        {
          title: "Experience Letter",
          href: "https://drive.google.com/file/d/1R8qDOzkh9s7wv23SK350o82n6a_Igj4r/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "IIEST Shibpur",
      href: "https://www.iiests.ac.in/",
      badges: [],
      location: "Howrah, India",
      title: "Summer Project Intern",
      logoUrl: "/iiest.png",
      start: "May 2023",
      end: "July 2023",
      description:
        "- Developed an **GRE practice platform** using **React**. Focused on simplifying the UI and on-boarding flow, which helped students get started faster and led to **35% higher engagement** and **40% drop in on-boarding time**.\n- Implemented a **basic recommendation system** using **collaborative filtering** and user behaviour data to suggest practice questions, which helped students improve scores by **25%**.",
      links: [

        {
          title: "Experience Letter",
          href: "https://drive.google.com/file/d/1gztLjKOAPEhPkvbmKAlpcrIhx_lkEhKq/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "IIT Kharagpur",
      href: "http://www.iitkgp.ac.in/",
      badges: [],
      location: "Kharagpur, India",
      title: "Research Intern",
      logoUrl: "/iitkgp.png",
      start: "July 2022",
      end: "Oct 2022",
      description:
        "- Worked on **medical imaging pipeline** for the Skin Curate app, focusing on cleaning and improving dermatology image data. Improved preprocessing and evaluation steps, helping reduce false positives by **30%**.\n- Implemented with **Federated Learning** for dermatology image classification, improving model performance and privacy compliance achieving **83.2% accuracy** across distributed training nodes.",
      links: [

        {
          title: "Experience Letter",
          href: "https://drive.google.com/file/d/1qUm5Vh5BzDQS3y3fu5OG3hiKPQQhAioY/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
  education: [
    {
      school: "Indian Institute of Engineering Science & Technology, Shibpur",
      href: "https://www.iiests.ac.in/",
      degree: "B.Tech in Computer Science & Technology",
      logoUrl: "/iiest.png",
      start: "Dec 2020",
      end: "Dec 2024",
      description:
        "- Ranked among the **top 20%** students in my department.\n- Actively balanced academics with sports and extracurriculars.\n- Served as Treasurer and Core Member of the departmental society **(ASCE)**. Managed event budgets for freshers, farewells, alumni meets, and fests.",
    },
  ],
  projects: [
    {
      title: "Biased Media Classifier",
      href: "https://github.com/not-indro/Biased_MediaClassifier",
      dates: "Media",
      active: true,
      description:
        "**A machine-learning model to detect and visualise linguistic bias:**\n\n- **Dataset Used:** Fine-tuned DistilBERT for media-bias detection using the MBIC dataset, implemented preprocessing, class-balancing, and AdamW optimisation.\n- **Dashboard:** Delivered 73% accuracy and deployed a Streamlit inference dashboard with live NewsAPI ingestion and interpretability UI",
      technologies: [
        "Python",
        "PyTorch",
        "DistilBERT",
        "Streamlit",
        "NewsAPI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/not-indro/Biased_MediaClassifier",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/MBIC%20prj.png",
      video: "",
    },
    {
      title: "pdfSAGE - Intelligent Document Companion",
      href: "https://github.com/not-indro/pdfSAGE_WebAPP",
      dates: "Productivity",
      active: true,
      description:
        "**pdfSAGE (Smart Analysis Guidance Engine) is an AI web platform that:**\n\n- **Frontend:** Next.js and Tailwind CSS for a modern, responsive UI supporting document uploads and discussions.\n- **AI Integration:** OpenAI API for context-aware responses, enabling document summarization, concept explanation, and key info extraction.\n- **Core Functionality:** Document-centric discussions with PDF upload support and AI-powered content analysis.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "OpenAI API",
        "LangChain",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/not-indro/pdfSAGE_WebAPP",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/pdfSAGE%20Banner%20Website.png",
      video: "",
    },
    {
      title: "Hand Written Math Expression Recognition",
      href: "https://github.com/not-indro/HMER_MajorProject",
      dates: "Education",
      active: true,
      description:
        "**H.M.E.R. is a Recognition model which:**\n\n- **Encoder:** Vision Transformer (ViT) extracts semantic-invariant features from handwritten math expressions.\n- **Decoder:** GPT-2 handles diverse writing styles and accounts for missing temporal information in offline recognition.\n- **Architecture:** Integrates ViT and GPT-2 in an encoder-decoder model for effective offline handwritten math recognition.",
      technologies: [
        "Python",
        "PyTorch",
        "ViT",
        "GPT-2",
      ],
      links: [
        {
          type: "PPT",
          href: "https://drive.google.com/file/d/1HBLqwhAWEtEdi4-inIe_lbOf0r1hzMik/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/not-indro/HMER_MajorProject",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/HMER%20Website%20Banner'.png",
      video: "",
    },
    {
      title: "GRE Helper",
      href: "https://gre-helper-frontend-dot-abstract-bonbon-381114.el.r.appspot.com/",
      dates: "Education",
      active: true,
      description:
        "**G.R.E Helper is a web application that:**\n\n- **Performance Evaluation:** Analyzes G.R.E mock test results to generate a detailed report highlighting areas for improvement.\n- **Targeted Practice:** Offers customized mock tests focusing on user's weak areas for targeted improvement.\n- **Improvement Resources:** Provides specific resources and materials to address identified weaknesses.",
      technologies: [
        "React",
        "Node.js",
        "Collaborative Filtering",
      ],
      links: [
        {
          type: "Website",
          href: "https://gre-helper-frontend-dot-abstract-bonbon-381114.el.r.appspot.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/not-indro/gre_helper/tree/development",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/prj3.png",
      video: "",
    },
    {
      title: "SkinCurate & Federated Learning",
      href: "https://not-indro.github.io/Portfolio/assets/image/SkinCurate%20App%20UI.pdf",
      dates: "Education",
      active: true,
      description:
        "**Designs for internship at IIT Kharagpur:**\n\n- **SkinCurate:** An app that identifies skin problems from photos, aiding in dermatological assessments.\n- **Federated Learning Project:** Uses privacy-preserving AI training to identify objects in photos, providing probability-based results.",
      technologies: [
        "Federated Learning",
        "Computer Vision",
        "Mobile Dev",
      ],
      links: [
        {
          type: "SkinCurate UI",
          href: "https://drive.google.com/file/d/182oyIOBkDg7Q4PtFyrCeKwuHSrVUVby0/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "FL UI",
          href: "https://drive.google.com/file/d/13avL-y5evgzUahozRfRFdff61zw6e0ML/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/prj4.jpg",
      video: "",
    },
    {
      title: "Stack Tower Saga",
      href: "https://stack-tower-game.vercel.app/",
      dates: "Game Dev",
      active: true,
      description:
        "**A Block-Stacking Adventure:**\n\n- **Gameplay:** Players must carefully stack blocks on top of each other to build the tower as high as possible.\n- **Experience:** Provides an immersive and captivating gameplay experience drawing players into a world of strategic challenges.",
      technologies: [
        "Javascript",
        "Game Dev",
      ],
      links: [
        {
          type: "Play",
          href: "https://stack-tower-game.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/stackTower.png",
      video: "",
    },
    {
      title: "CAPM Model",
      href: "https://capmwebapp-6azyvhyywmgr32b-capm-webapp.streamlit.app/",
      dates: "Utility",
      active: true,
      description:
        "**Interactive Data Visualization & Risk Assessment:**\n\n- **Features:** Visualize historical stock prices, calculate beta coefficients for risk assessment, and estimate expected returns using CAPM.",
      technologies: [
        "Python",
        "Streamlit",
        "Finance",
      ],
      links: [
        {
          type: "App",
          href: "https://capmwebapp-6azyvhyywmgr32b-capm-webapp.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/CAPM.gif",
      video: "",
    },
    {
      title: "Daily Expense Tracker",
      href: "https://expensetracker-dthy9drptxkros9sd2lqtp.streamlit.app/",
      dates: "Utility",
      active: true,
      description:
        "**Effortless Expense Monitoring:**\n\n- **Features:** Simplifies expense tracking through an intuitive web interface with dynamic data entry for real-time tracking and categorization.",
      technologies: [
        "Python",
        "Streamlit",
      ],
      links: [
        {
          type: "App",
          href: "https://expensetracker-dthy9drptxkros9sd2lqtp.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Expense.png",
      video: "",
    },
    {
      title: "Password Generator",
      href: "https://passwordgenerator-gnedjdxn36k75eihppqqek.streamlit.app/",
      dates: "Utility",
      active: true,
      description:
        "**Streamlined Password Creation:**\n\n- **Features:** User-friendly interface for generating strong passwords effortlessly with customizable length and complexity.",
      technologies: [
        "Python",
        "Streamlit",
      ],
      links: [
        {
          type: "App",
          href: "https://passwordgenerator-gnedjdxn36k75eihppqqek.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Pass.png",
      video: "",
    },
    {
      title: "Currency Converter",
      href: "https://currencyconverter-jwqskpurkqi9awyomtxbcee.streamlit.app/",
      dates: "Utility",
      active: true,
      description:
        "**Seamless Currency Conversion:**\n\n- **Features:** Delivers a user-friendly platform for effortless currency conversion with real-time rate updates.",
      technologies: [
        "Python",
        "Streamlit",
      ],
      links: [
        {
          type: "App",
          href: "https://currencyconverter-jwqskpurkqi9awyomtxbcee.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Currency.png",
      video: "",
    },
    {
      title: "Harry Potter Adventure Game",
      href: "https://github.com/not-indro/2D-Adventure_Game",
      dates: "Game Dev",
      active: true,
      description:
        "**2D Adventure Game:**\n\n- **Role:** Led frontend design and development, implementing 'Procedural Content Generation' for dynamic background creation.",
      technologies: [
        "Java",
        "Javascript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/not-indro/2D-Adventure_Game",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/prj2.png",
      video: "",
    },
    {
      title: "Modern Portfolio",
      href: "https://not-indro.github.io/Portfolio/#",
      dates: "Other",
      active: true,
      description:
        "**Modern Simplistic Portfolio:**\n\n- **Features:** Responsive design, UI components, and smooth scroll.",
      technologies: [
        "HTML/CSS",
        "Javascript",
      ],
      links: [
        {
          type: "View",
          href: "https://not-indro.github.io/Portfolio/#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/prj1.png",
      video: "",
    },
    {
      title: "Data Analysis Projects",
      href: "https://github.com/not-indro/Music_DB-Project",
      dates: "Other",
      active: true,
      description:
        "**SQL Data Analysis:**\n\n- **Scope:** Processing and transforming raw data using SQL queries to extract valuable insights and patterns. Optimization techniques for large datasets.",
      technologies: [
        "SQL",
        "Data Analysis",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/not-indro/Music_DB-Project",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Assignments",
          href: "https://github.com/not-indro/3rd-Year-5th-Sem-Assignments/tree/main/3rd%20Year(5th%20Sem)%20Assignments/DBMS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://not-indro.github.io/Portfolio/assets/image/prj5.png",
      video: "",
    },
  ],
  hackathons: [] as readonly {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    links: readonly {
      title: string;
      icon: React.ReactNode;
      href: string;
    }[];
  }[],
} as const;
