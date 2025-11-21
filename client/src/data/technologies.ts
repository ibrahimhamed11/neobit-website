export interface Technology {
  name: string;
  category: string;
  color: string;
  logo: string;
  description?: string;
}

export const technologies: Technology[] = [
  // Frontend
  { name: "React", category: "Frontend", color: "#61DAFB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Modern UI library" },
  { name: "Next.js", category: "Frontend", color: "#000000", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", description: "React framework for production" },
  { name: "TypeScript", category: "Frontend", color: "#3178C6", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", description: "Type-safe JavaScript" },
  { name: "Vue.js", category: "Frontend", color: "#42B883", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", description: "Progressive framework" },
  { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", description: "Utility-first CSS" },
  { name: "Material-UI", category: "Frontend", color: "#007FFF", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg", description: "React UI framework" },
  { name: "Redux", category: "Frontend", color: "#764ABC", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", description: "State management" },
  
  // Mobile
  { name: "React Native", category: "Mobile", color: "#61DAFB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Cross-platform mobile" },
  { name: "Flutter", category: "Mobile", color: "#02569B", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", description: "Beautiful native apps" },
  { name: "Android", category: "Mobile", color: "#3DDC84", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", description: "Native Android" },
  { name: "iOS", category: "Mobile", color: "#000000", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg", description: "Native iOS" },
  { name: "Swift", category: "Mobile", color: "#FA7343", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", description: "iOS development" },
  { name: "Kotlin", category: "Mobile", color: "#7F52FF", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", description: "Android development" },
  
  // Backend
  { name: "Node.js", category: "Backend", color: "#339933", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "JavaScript runtime" },
  { name: "Python", category: "Backend", color: "#3776AB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "Versatile language" },
  { name: "Go", category: "Backend", color: "#00ADD8", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", description: "High-performance" },
  { name: "NestJS", category: "Backend", color: "#E0234E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg", description: "Enterprise Node.js" },
  { name: "Express", category: "Backend", color: "#000000", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", description: "Minimal web framework" },
  { name: "Django", category: "Backend", color: "#092E20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", description: "Python web framework" },
  { name: "FastAPI", category: "Backend", color: "#009688", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", description: "Modern Python API" },
  
  // Blockchain
  { name: "Solidity", category: "Blockchain", color: "#363636", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg", description: "Smart contracts" },
  { name: "Ethereum", category: "Blockchain", color: "#627EEA", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg", description: "Leading blockchain" },
  { name: "Web3", category: "Blockchain", color: "#F16822", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/web3js/web3js-original.svg", description: "Blockchain interaction" },
  { name: "Solana", category: "Blockchain", color: "#14F195", logo: "https://cryptologos.cc/logos/solana-sol-logo.svg", description: "Fast blockchain" },
  { name: "Smart Contracts", category: "Blockchain", color: "#00E5FF", logo: "https://cdn-icons-png.flaticon.com/512/6001/6001368.png", description: "Automated agreements" },
  { name: "Binance Smart Chain", category: "Blockchain", color: "#F3BA2F", logo: "https://cryptologos.cc/logos/bnb-bnb-logo.svg", description: "BSC network" },
  
  // AI & Machine Learning
  { name: "TensorFlow", category: "AI & ML", color: "#FF6F00", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", description: "ML framework" },
  { name: "PyTorch", category: "AI & ML", color: "#EE4C2C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", description: "Deep learning" },
  { name: "OpenAI", category: "AI & ML", color: "#412991", logo: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png", description: "GPT & AI APIs" },
  { name: "LangChain", category: "AI & ML", color: "#1C3C3C", logo: "https://cdn-icons-png.flaticon.com/512/11865/11865342.png", description: "LLM framework" },
  { name: "Scikit-learn", category: "AI & ML", color: "#F7931E", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", description: "ML algorithms" },
  { name: "Keras", category: "AI & ML", color: "#D00000", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg", description: "Neural networks" },
  { name: "Pandas", category: "AI & ML", color: "#150458", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", description: "Data analysis" },
  { name: "NumPy", category: "AI & ML", color: "#013243", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", description: "Scientific computing" },
  
  // Trading & Financial
  { name: "MQL4/5", category: "Trading & Finance", color: "#00E5FF", logo: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png", description: "Trading robot programming" },
  { name: "MetaTrader", category: "Trading & Finance", color: "#1E88E5", logo: "https://avatars.githubusercontent.com/u/6009093?s=200&v=4", description: "Trading platform" },
  { name: "TradingView", category: "Trading & Finance", color: "#2962FF", logo: "https://s3-symbol-logo.tradingview.com/tradingview--600.png", description: "Chart analysis" },
  { name: "AI Trading Bots", category: "Trading & Finance", color: "#00E5FF", logo: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png", description: "Automated AI trading" },
  { name: "Algorithmic Trading", category: "Trading & Finance", color: "#FF6B6B", logo: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png", description: "Automated strategies" },
  { name: "QuantConnect", category: "Trading & Finance", color: "#F37726", logo: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png", description: "Quant trading platform" },
  { name: "Pine Script", category: "Trading & Finance", color: "#2962FF", logo: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", description: "TradingView scripting" },
  
  // Database
  { name: "MongoDB", category: "Database", color: "#47A248", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", description: "NoSQL database" },
  { name: "PostgreSQL", category: "Database", color: "#336791", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", description: "Relational database" },
  { name: "MySQL", category: "Database", color: "#4479A1", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "Popular SQL DB" },
  { name: "Redis", category: "Database", color: "#DC382D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", description: "In-memory cache" },
  { name: "Firebase", category: "Database", color: "#FFCA28", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", description: "Backend as a service" },
  { name: "Supabase", category: "Database", color: "#3ECF8E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", description: "Open source Firebase" },
  
  // Web Technologies
  { name: "HTML5", category: "Web Technologies", color: "#E34F26", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", description: "Markup language" },
  { name: "CSS3", category: "Web Technologies", color: "#1572B6", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", description: "Styling language" },
  { name: "JavaScript", category: "Web Technologies", color: "#F7DF1E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "Web programming" },
  { name: "GraphQL", category: "Web Technologies", color: "#E10098", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", description: "API query language" },
  { name: "REST API", category: "Web Technologies", color: "#009688", logo: "https://cdn-icons-png.flaticon.com/512/2091/2091665.png", description: "Web services" },
  { name: "WebSocket", category: "Web Technologies", color: "#010101", logo: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png", description: "Real-time communication" },
  { name: "Progressive Web Apps", category: "Web Technologies", color: "#5A0FC8", logo: "https://cdn-icons-png.flaticon.com/512/9374/9374226.png", description: "Modern web apps" },
  
  // Cloud & DevOps
  { name: "AWS", category: "Cloud & DevOps", color: "#FF9900", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", description: "Cloud platform" },
  { name: "Azure", category: "Cloud & DevOps", color: "#0078D4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", description: "Microsoft cloud" },
  { name: "Google Cloud", category: "Cloud & DevOps", color: "#4285F4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", description: "GCP platform" },
  { name: "Docker", category: "Cloud & DevOps", color: "#2496ED", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "Containerization" },
  { name: "Kubernetes", category: "Cloud & DevOps", color: "#326CE5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", description: "Container orchestration" },
  { name: "Git", category: "Cloud & DevOps", color: "#F05032", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", description: "Version control" },
  { name: "GitHub Actions", category: "Cloud & DevOps", color: "#2088FF", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg", description: "CI/CD automation" },
  { name: "Vercel", category: "Cloud & DevOps", color: "#000000", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", description: "Deployment platform" },
  { name: "Netlify", category: "Cloud & DevOps", color: "#00C7B7", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg", description: "Web hosting" },
];

export const categories = Array.from(new Set(technologies.map((t) => t.category)));
