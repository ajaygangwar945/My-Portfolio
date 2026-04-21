
import { Trophy, Cpu, Code } from 'lucide-react';

/* =============================================================================
  🎨 USER CONTENT CONFIGURATION
  Edit this section to update your portfolio data without touching the code logic!
  =============================================================================
*/
export const PORTFOLIO_DATA = {
    personal: {
        name: "Ajay Gangwar",
        role: "Aspiring Data Scientist | Full Stack Developer | Problem Solver",
        about: "Transforming raw data into intelligent, actionable insights. Specializing in Python, Machine Learning, and scalable Full Stack development to build solutions that bridge the gap between data and impact.",
        email: "ajaygangwar945@gmail.com",
        github: "https://github.com/ajaygangwar945",
        linkedin: "https://www.linkedin.com/in/ajaygangwar945/",
        resumeLink: "/resume.pdf",
        profileImage: "/profile.jpg",
        fullBio: [
            "My journey into the world of technology began with a curiosity about how data can predict the future. As a Computer Science student at Lovely Professional University, I've channeled that curiosity into mastering the art of Data Science and Full Stack Development.",
            "I don't just write code; I build solutions. Whether it's architecting a secure backend for SoftHub or engineering real-time weather intelligence dashboards, my goal is always to create tools that are both technically sophisticated and user-centric.",
            "When I'm not deep in a Jupyter Notebook or debugging a React component, you'll find me contributing to open-source communities or organizing technical summits to foster a culture of innovation on campus."
        ],
        mission: "To bridge the gap between raw data and human-centric solutions through elegant engineering and intelligent design."
    },
    skills: [
        "HTML", "CSS", "JavaScript", "Java", "Python", "C++", "React.js", "Node.js", "MongoDB", "SQL", "Git", "Docker", "AWS"
    ],
    stats: [
        { label: "Technical Projects", value: "25+" },
        { label: "Questions Solved", value: "100+" },
        { label: "Hackathon and Events Wins", value: "3" },
        { label: "Years of Growth", value: "3+" }
    ],
    projects: [
        {
            title: "AG Portfolio",
            description: "Personal portfolio website built to showcase technical projects, skills, and experience.",
            tags: ["JavaScript", "Frontend Development", "CSS", "Portfolio"],
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
            year: "2026",
            github: "https://github.com/ajaygangwar945/AG-Portfolio",
            demo: "https://ajaygangwar-portfolio.vercel.app/"
        },
        {
            title: "CV Portfolio",
            description: "Modern interactive CV portfolio with 3D effects, glassmorphism design, and in-page PDF viewer. Built using HTML, CSS & JavaScript.",
            tags: ["HTML5", "CSS3", "JavaScript", "3D Effects"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
            year: "2026",
            github: "https://github.com/ajaygangwar945/CV",
            demo: "https://ajaygangwar945.github.io/CV/"
        },
        {
            title: "MedPath Pro",
            description: "Interactive hospital shortest-path visualizer using Dijkstra’s algorithm with real-time emergency routing and hospital resource management.",
            tags: ["JavaScript", "Node.js", "MongoDB", "Three.js"],
            image: "/projects/medpath_pro.png",
            year: "2026",
            github: "https://github.com/ajaygangwar945/MedPath-Pro",
            demo: "https://medpath-pro.onrender.com/"
        },
        {
            title: "Intelligence Explorer",
            description: "Interactive AI learning dashboard built with HTML, CSS, and Three.js that presents key AI topics in a clean, animated interface.",
            tags: ["HTML5", "CSS3", "JavaScript", "Three.js"],
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
            year: "2026",
            github: "https://github.com/ajaygangwar945/Intelligence-Explorer",
            demo: "https://intelligence-explorer.vercel.app"
        },
        {
            title: "AI Legal Advisor",
            description: "AI-powered legal assistance platform providing real-time responses to legal queries through an interactive chat interface.",
            tags: ["React", "TypeScript", "Tailwind CSS", "Gemini AI"],
            image: "/projects/ai_legal_advisor.png",
            year: "2026",
            github: "https://github.com/ajaygangwar945/AI-Legal-Advisor",
            demo: "https://ai-legal-advisor-chatbot.vercel.app/"
        },
        {
            title: "Student Portal",
            description: "Tool that processes Excel student data and generates a modern, searchable web dashboard with animations and theme support.",
            tags: ["Python", "Pandas", "HTML5", "CSS3", "JavaScript"],
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
            year: "2026",
            github: "https://github.com/ajaygangwar945/Student-Portal",
            demo: "https://student-portal-2023.vercel.app/"
        },
        {
            title: "Road Accident Dashboard",
            description: "Data visualization project that analyzes road accident trends and hotspots using Excel, HTML, and CSS.",
            tags: ["Excel", "HTML5", "CSS3", "Data Analytics"],
            image: "/projects/road_accident_dashboard.png",
            year: "2026",
            github: "https://github.com/ajaygangwar945/Road-Accident-Dashboard",
            demo: "https://road-accident-dashboard.vercel.app/"
        },
        {
            title: "Conference Paper Submission Portal",
            description: "Web-based platform built with Oracle 19c and APEX to manage conference paper submissions and reviews.",
            tags: ["Oracle 19c", "Oracle APEX", "SQL"],
            image: "/projects/conference_portal2.png",
            year: "2026",
            github: "https://github.com/ajaygangwar945/Conference-Paper-Submission-Portal",
            demo: "https://oracleapex.com/ords/r/ajaygangwar945/conference-paper-submission-portal"
        },
        {
            title: "Eventfolio",
            description: "Ghibli-inspired interactive portfolio showcasing hackathons, leadership, and technical journeys using pure HTML, CSS, and JavaScript.",
            tags: ["HTML5", "CSS3", "JavaScript", "Vanilla JS"],
            image: "/projects/event.png",
            year: "2026",
            github: "https://github.com/ajaygangwar945/Eventfolio",
            demo: "https://eventfolio.vercel.app"
        },
        {
            title: "Certificates & Docs Portal",
            description: "Interactive portal to organize, search, and showcase certificates & documents with intelligent filtering, dynamic theming, and premium UI.",
            tags: ["HTML5", "CSS3", "JavaScript", "PDF"],
            image: "/projects/docs.png",
            year: "2026",
            github: "https://github.com/ajaygangwar945/Certificates-Docs-Portal",
            demo: "https://certificates-docs-portal.vercel.app"
        },
        {
            title: "Portfolio Hub",
            description: "A premium multi-portfolio hub featuring multiple technology portals with a glassmorphic interface, immersive 3D visuals, and interactive data dashboards, built using HTML, CSS, JavaScript, and Three.js.",
            tags: ["HTML5", "CSS3", "JavaScript", "Three.js", "Glassmorphism", "Vercel"],
            image: "/projects/portfolio-hub.png",
            year: "2026",
            github: "https://github.com/ajaygangwar945/Portfolio-Hub",
            demo: "https://ajay-portfolio-hub.vercel.app"
        },
        {
            title: "Stylish Achievements",
            description: "A modern, interactive portfolio built with React, TypeScript, and 3D web technologies to showcase achievements through immersive design and smooth user experiences.",
            tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "3D Web", "Shadcn UI"],
            image: "/projects/stylish-achievements.png",
            year: "2025",
            github: "https://github.com/ajaygangwar945/Stylish-Achievements",
            demo: "https://stylish-achievements.vercel.app/"
        },
        {
            title: "Cyber Warfare Intrusion Detection",
            description: "A machine learning–based intrusion detection system that identifies and classifies malicious network traffic such as DDoS, probing, malware, and unauthorized access using supervised ML algorithms.",
            tags: ["Python", "Machine Learning", "Scikit-learn", "Cybersecurity", "FastAPI"],
            image: "/projects/cyber-warfare.png",
            year: "2025",
            github: "https://github.com/ajaygangwar945/Cyber-Warfare-Intrusion-Detection",
            demo: "https://cyber-warfare-intrusion-detection.onrender.com/"
        },
        {
            title: "Indian Rainfall Data Analysis",
            description: "Comprehensive Rainfall EDA & Machine Learning project. Built with Python (Pandas/Scikit-learn) and a premium web dashboard using Three.js and Chart.js.",
            tags: ["Python", "Data Science", "Pandas", "Scikit-learn", "Three.js", "Chart.js"],
            image: "/projects/rainfall-analysis.png",
            year: "2025",
            github: "https://github.com/ajaygangwar945/Rainfall-Data-Analysis-Project",
            demo: "https://ajaygangwar945.github.io/Indian-Rainfall-Data-Analysis/"
        },
        {
            title: "Global Terrorism Analysis",
            description: "Interactive Power BI dashboard analyzing global terrorism trends using GTD with KPIs, Azure Maps, and drill-through analysis.",
            tags: ["Power BI", "DAX", "Data Analytics", "Python"],
            image: "/projects/global-terrorism.png",
            year: "2025",
            github: "https://github.com/ajaygangwar945/Global-Terrorism-Analysis",
            demo: "https://app.powerbi.com/view?r=eyJrIjoiNTY4YWQxMGItNGFhMC00ZWQ4LThlZjUtMDY0NWY4OGJkYjdhIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D"
        },
        {
            title: "Ayush FHIR",
            description: "Platform integrating traditional Ayush systems with global standards (FHIR R4, ICD-11) for secure data exchange.",
            tags: ["TypeScript", "Node.js", "FHIR", "Healthcare"],
            image: "/projects/icd-mapping.png",
            year: "2025",
            github: "https://github.com/ajaygangwar945/SIH",
            demo: "https://sih-ayush-fhir.vercel.app/"
        },
        {
            title: "Ayush Intelligence",
            description: "FHIR R4 compliant platform integrating Ayush systems with global healthcare standards using ICD-11 dual coding.",
            tags: ["Python", "FastAPI", "React", "Tailwind CSS"],
            image: "/projects/icd-mapping.png",
            year: "2025",
            github: "https://github.com/ajaygangwar945/ICD-Mapping",
            demo: "https://icd-mapping.onrender.com"
        },
        {
            title: "ATS Resume Score",
            description: "AI-driven application using Google Gemini to analyze resumes and optimize alignment with job descriptions.",
            tags: ["Python", "Streamlit", "Google Gemini API"],
            image: "/projects/ats-resume.png",
            year: "2025",
            github: "https://github.com/ajaygangwar945/ATS-Resume-Score",
            demo: "https://ats-resume-score-945.streamlit.app"
        },
        {
            title: "GitHub Profile Overview",
            description: "B.Tech CSE student | Data Science & AI enthusiast | Building ML-driven, data-centric, and impact-focused software solutions.",
            tags: ["Python", "Data Science", "Machine Learning", "AI", "Cybersecurity"],
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
            year: "2025",
            github: "https://github.com/ajaygangwar945/ajaygangwar945",
            demo: "https://ajaygangwar945.github.io/ajaygangwar945/"
        },
        {
            title: "SoftHub",
            description: "SoftHub is a high-performance, full-stack software distribution platform. It combines a cinematic frontend experience with a robust, secure Node.js backend.",
            tags: ["Node.js", "Express", "MongoDB", "Authentication"],
            image: "/projects/chat-app.png",
            year: "2024",
            github: "https://github.com/ajaygangwar945/SoftHub",
            demo: "https://softhub-bwnd.onrender.com"
        },
        {
            title: "Weather App",
            description: "Engineered a real-time weather dashboard featuring geolocation-based forecasting and dynamic visualizations powered by the OpenWeatherMap API.",
            tags: ["React", "JavaScript", "OpenWeatherMap API", "Tailwind CSS"],
            image: "/projects/weather-app.png",
            year: "2024",
            github: "https://github.com/ajaygangwar945/Weather-App",
            demo: "https://weather-forcasting-temperature.netlify.app"
        },
        {
            title: "Pet Adoption & Animal Welfare",
            description: "Developed a responsive platform to facilitate pet adoption and raise welfare awareness through interactive listings and community resources.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "/projects/pet-adoption.png",
            year: "2023",
            github: "https://github.com/ajaygangwar945/Pet-Adoption-Animal-Welfare",
            demo: "https://pet-adoption-animal-welfare.netlify.app/"
        },
        {
            title: "First HTML Project Overview",
            description: "Front-end learning hub built with HTML, CSS, JavaScript, and Three.js, featuring an interactive 3D dashboard, modular content, and responsive UI design.",
            tags: ["HTML5", "CSS3", "JavaScript", "Three.js", "Web Development"],
            image: "/projects/html-project.png",
            year: "2020",
            github: "https://github.com/ajaygangwar945/First-HTML-Project-Overview",
            demo: "https://ajaygangwar945.github.io/First-HTML-Project-Overview/"
        },



    ],

    achievements: [
        {
            title: "Runner-up - BlockseBlock Hackathon 2025",
            organization: "BlockseBlock",
            description: "A national-level blockchain-based hackathon held across multiple campuses in India.",
            icon: <Trophy size={20} />
        },
        {
            title: "5th Place - Code Hunt 2025",
            organization: "IIT Ropar",
            description: "Participated in the annual Code Hunt competition and secured 5th place.",
            icon: <Cpu size={20} />
        },
        {
            title: "2nd Rank - AI in Web Development 2024",
            organization: "Competition",
            description: "Secured 2nd rank by developing an AI-driven language learning platform using Python",
            icon: <Code size={20} />
        }

    ],
    education: [
        {
            degree: "Bachelor of Technology - CSE",
            school: "Lovely Professional University",
            year: "Aug ‘23 - Present",
            description: "Specializing in Data Science, Machine Learning, and Full Stack Development. CGPA: 7.4"
        },
        {
            degree: "Intermediate",
            school: "Vidya Bhavan Public School",
            year: "Apr ‘21 - Apr ‘22",
            description: "Higher Secondary Education; Percentage: 72%"
        },
        {
            degree: "Matriculation",
            school: "Vidya Bhavan Public School",
            year: "Apr ‘19 - Apr ‘20",
            description: "Secondary Education; Percentage: 94%"
        }
    ],
    experience: [
        {
            role: "Open Source Contributor",
            company: "GitHub",
            year: "2024 - Present",
            description: "Contributed to various open source projects including bug fixes and feature additions."
        }

    ],
    positions: [
        {
            id: "scc",
            title: "Student Career Committee",
            role: "Member",
            date: "Sep, 2025 – Present",
            description: "Representing the student body and organizing technical events.",
            responsibilities: [
                "Represented the student body in meetings with faculty and management, effectively communicating academic and non-academic concerns.",
                "Actively contributed to organizing and managing technical events, including coding competitions, workshops, and hackathons, fostering a culture of innovation and technical growth among students.",
                "Coordinated with tech communities on campus to bring industry speakers, hands-on sessions, and technology awareness programs, enhancing peer learning and skill development."
            ],
            fullDescription: "As a member of the Student Career Committee (SCC), I play a pivotal role in bridging the gap between students and the administration. My focus has been on enhancing the technical culture on campus by organizing impactful events and workshops.",
            events: [
                {
                    title: "Tech Innovation Summit 2025",
                    image: "/events/summit.jpg",
                    description: "Co-organized a 3-day summit featuring Vivek Sridhar (Microsoft) and Saurav Mittal. Honored with a medal for leadership and Event contribution."
                },
                {
                    title: "TechFluence 5.0",
                    image: "/events/tech-week.jpg",
                    description: "Organized TechFluence 5.0 featuring speakers from Google, Meta, and BrandBuilders. Focused on innovation, adaptability, and meaningful problem-solving."
                },
                {
                    title: "Product Management Summit 2025",
                    image: "/events/hackathon.jpg",
                    description: "Hosted industry leaders from Rethink Systems and Zepto, gaining insights on product strategy, leadership, and innovation."
                }

            ]
        },
        {
            id: "hostel-committee",
            title: "Hostel Committee",
            role: "Member",
            date: "Jan, 2024 – Aug, 2024",
            description: "Managed student welfare and conflict resolution for 500+ students.",
            responsibilities: [
                "Managed student welfare and conflict resolution for a residence of 500+ students, ensuring a safe and supportive living environment.",
                "Acted as a liaison between residents and the administration to resolve maintenance issues and upgrade facility resources.",
                "Organized community-building events and festivals, increasing student engagement and participation."
            ],
            fullDescription: "Serving on the Hostel Committee allowed me to develop strong leadership and conflict resolution skills. I was responsible for the well-being of over 500 students, ensuring a comfortable and engaging living environment.",
            events: [
                {
                    title: "Joy of Giving",
                    image: "/events/joy-giving.jpg",
                    description: "Collaborated with NSS to collect and distribute essentials, fostering empathy and community service."
                },
                {
                    title: "Inter-Hostel Sports Tournament",
                    image: "/events/sports.jpg",
                    description: "Coordinated LPU Inter-Hostel Sports Tournaments, fostering teamwork and healthy competition among residents."
                }
            ],
            certificates: [
                {
                    title: "Incredible 8 - Inter-Hostel Competition",
                    image: "/certificates/hostel.png",
                    description: "Participated in the Incredible 8 - LPU's Inter-Hostel Competition on Social Media, organized by the Department of Student Organization."
                }
            ]
        },
        {
            id: "igcmun",
            title: "IGC MUN",
            role: "Member",
            date: "Jan, 2024 – Apr, 2024",
            description: "Engaged in diplomatic debates and policy research.",
            responsibilities: [
                "Engaged in diplomatic debates and extensive research on global policies to represent assigned portfolios effectively.",
                "Drafted working papers and resolutions while collaborating with diverse teams to reach consensus on complex international issues.",
                "Honed public speaking and negotiation skills through formal committee sessions and caucuses."
            ],
            fullDescription: "Participating in the IGC Model United Nations was an enriching experience that sharpened my public speaking, negotiation, and research skills. I engaged in intense debates on global issues and collaborated with delegates to draft resolutions.",
            events: [
                {
                    title: "IGC MUN India 2024",
                    image: "/events/mun.jpg",
                    description: "Organized the International Global Conference Model United Nations India 2024, managing logistics and events for national and international delegates."
                }
            ],
            certificates: [
                {
                    title: "IGC MUN - Certificate of Participation",
                    image: "/certificates/igcmun.png",
                    description: "Awarded for participating in the IGC MUN India 2024, engaging in diplomatic debates and drafting international policy resolutions."
                }
            ]
        }
    ],

    certificates: [
        {
            title: "Agile Project Management",
            organization: "HP",
            date: "Feb, 2026",
            image: "/certificates/agile.png",
            link: "https://drive.google.com/file/d/1Imkpj4Dt2W_3Rqw2zp6vfdfuhJn3zrKQ/view?usp=drive_link"
        },
        {
            title: "AI Fusion '26",
            organization: "IIT Ropar",
            date: "Feb, 2026",
            image: "/certificates/aifusion26.png",
            link: "https://drive.google.com/file/d/1YMRrjZE45NEehgrGGTMg5wMxVYCqhYj3/view?usp=drive_link"
        },
        {
            title: "AI Imagination '26",
            organization: "IIT Ropar",
            date: "Feb, 2026",
            image: "/certificates/aiimagination.png",
            link: "https://drive.google.com/file/d/1rzICFkXwMqYvAJlpTEkE8u1tPl3VnGhB/view?usp=drive_link"
        },
        {
            title: "Code Hunt '26",
            organization: "IIT Ropar",
            date: "Feb, 2026",
            image: "/certificates/codehunt26.png",
            link: "https://drive.google.com/file/d/1Xv7j4nP64eyX7dzv0yFl_hoPgElu-di4/view?usp=drive_link"
        },
        {
            title: "Data Science & Analytics",
            organization: "HP",
            date: "Feb, 2026",
            image: "/certificates/datascience.png",
            link: "https://drive.google.com/file/d/1LnyFOshIj-p7J2e0JN72jEjGtb4Ei8xu/view?usp=drive_link"
        },
        {
            title: "Gen AI Nasscom",
            organization: "Nasscom",
            date: "Feb, 2026",
            image: "/certificates/genai.png",
            link: "https://drive.google.com/file/d/1eZDfhhW7rizqfdX-1C6DxscXu2EaNbeO/view?usp=drive_link"
        },
        {
            title: "Computational Theory",
            organization: "Infosys Springboard",
            date: "Dec, 2025",
            image: "/certificates/computing.png",
            link: "https://drive.google.com/file/d/1SwhTahtbX7ZN_0SX7OeOTgdTIX0epeiH/view?usp=drive_link"
        },
        {
            title: "Introduction to Modern AI",
            organization: "Cisco",
            date: "Nov, 2025",
            image: "/certificates/cisco.png",
            link: "https://drive.google.com/file/d/1IXhi-QHVeFeNh2lrJTzpq3ni9L8zpZ_z/view?usp=drive_link"
        },
        {
            title: "CodeQuery",
            organization: "LPU",
            date: "July, 2025",
            image: "/certificates/codequery.png",
            link: "https://drive.google.com/file/d/12BZR7UpifWjqF5stIU9iN_sg-05ArZzX/view?usp=drive_link"
        },
        {
            title: "Hack The Block",
            organization: "BlockseBlock",
            date: "Jun, 2025",
            image: "/certificates/hacktheblock.png",
            link: "https://drive.google.com/open?id=1fteh-XDgZW6aS_cIq-QvQ6mK_YlDDHv_&usp=drive_copy"
        },
        {
            title: "Java Programming",
            organization: "iamneo",
            date: "May, 2025",
            image: "/certificates/java.png",
            link: "https://drive.google.com/file/d/11qj7aPd87Ru8BuWuWLPp4a56igw5Va8v/view?usp=drive_link"
        },
        {
            title: "AI Fusion '25",
            organization: "IIT Ropar",
            date: "Feb, 2025",
            image: "/certificates/aifusion25.png",
            link: "https://drive.google.com/open?id=1kPx4SReB5l_5GRCCkYdEl7Q0RalcVRkR&usp=drive_copy"
        },
        {
            title: "Catalyzing Concepts",
            organization: "IIT Ropar",
            date: "Feb, 2025",
            image: "/certificates/cat.png",
            link: "https://drive.google.com/open?id=1mJ5Pq6BpjAHUnsDNToToChYBR_zqXpPr&usp=drive_copy"
        },
        {
            title: "Circuit Chase '25",
            organization: "IIT Ropar",
            date: "Feb 2025",
            image: "/certificates/circuit.png",
            link: "https://drive.google.com/file/d/1B9f-utPrEc5SJ7IXCFlNagfC-3gM7fcJ/view?usp=drive_link"
        },
        {
            title: "Code Hunt '25",
            organization: "IIT Ropar",
            date: "Feb, 2025",
            image: "/certificates/codehunt25.png",
            link: "https://drive.google.com/file/d/1lKpt4HCfHBTN-4xi4CmJXST175dmsAsQ/view?usp=drive_link"
        },
        {
            title: "Maths Arena '25",
            organization: "IIT Ropar",
            date: "Feb, 2025",
            image: "/certificates/maths.png",
            link: "https://drive.google.com/file/d/1bM5223qVG5toWBnaQzX8A82V-z6Yh8OE/view?usp=drive_link"
        },
        {
            title: "Python for Data Science",
            organization: "NPTEL",
            date: "Feb, 2025",
            image: "/certificates/nptel.png",
            link: "https://drive.google.com/file/d/1gjxcSxIoeJkCGOZ1soOdwq0hej6ihmoC/view?usp=sharing"
        },
        {
            title: "Data Structures & Algorithms",
            organization: "iamneo",
            date: "Dec, 2024",
            image: "/certificates/dsa.png",
            link: "https://drive.google.com/file/d/1lhgm1j55ItCNu-nrEhhnl-On4kidTTXE/view?usp=drive_link"
        },
        {
            title: "Object-Oriented Programming",
            organization: "iamneo",
            date: "Dec, 2024",
            image: "/certificates/oop.png",
            link: "https://drive.google.com/file/d/1tgIPEyjgOxB43aLX_EfptPHNVsDtvyYT/view?usp=drive_link"
        },
        {
            title: "Digital Systems",
            organization: "Coursera",
            date: "Nov, 2024",
            image: "/certificates/digital.png",
            link: "https://drive.google.com/open?id=1k5rUPEIpWMpdRs4TfbA5-3tT4HIsytJY&usp=drive_copy"
        },
        {
            title: "Packet Switching Networks and Algorithms",
            organization: "Coursera",
            date: "Oct, 2024",
            image: "/certificates/packet.png",
            link: "https://drive.google.com/file/d/1dR4YZr6Vl-wFpeRjK4wH2dgP3XnASZcW/view?usp=drive_link"
        },
        {
            title: "Peer-to-Peer Protocols and Local Area Networks",
            organization: "Coursera",
            date: "Oct, 2024",
            image: "/certificates/peer.png",
            link: "https://drive.google.com/file/d/1z9a322Q9jYf4Y2aPITVxAsdhhSz0px9D/view?usp=drive_link"
        },
        {
            title: "TCP/IP and Advanced Topics",
            organization: "Coursera",
            date: "Oct, 2024",
            image: "/certificates/tcp.png",
            link: "https://drive.google.com/file/d/156IZQ0xOVZJX9YYY_pmR5Fuy3qvDSxdI/view?usp=drive_link"
        },
        {
            title: "The Bits and Bytes of Computer Networking",
            organization: "Coursera",
            date: "Sep, 2024",
            image: "/certificates/bits.png",
            link: "https://drive.google.com/file/d/1aLk0gAWazykFdheMVQTWwwLsAgbnGIgo/view?usp=drive_link"
        },
        {
            title: "Introduction to Hardware and Operating Systems",
            organization: "Coursera",
            date: "Sep, 2024",
            image: "/certificates/hardware.png",
            link: "https://drive.google.com/file/d/1Drcf0VOBjvCKh_NPYJqjPAj-JzX8SrIE/view?usp=drive_link"
        },
        {
            title: "Fundamentals of Network Communication",
            organization: "Coursera",
            date: "Sep, 2024",
            image: "/certificates/network.png",
            link: "https://drive.google.com/file/d/1zt4IwTnlaRmsrmTfzjhvZIIdPaRlnyzk/view?usp=drive_link"
        },
        {
            title: "C Programming",
            organization: "iamneo",
            date: "May, 2024",
            image: "/certificates/c.png",
            link: "https://drive.google.com/file/d/16pYnwOIvXTCbAZCyOVtXNeQrcgmuPHRg/view?usp=drive_link"
        },
        {
            title: "Incredible 8 - Inter-Hostel Competition",
            organization: "LPU (Student Welfare Wing)",
            date: "May, 2024",
            image: "/certificates/hostel.png",
            link: "#"
        },
        {
            title: "IGC MUN - Certificate of Participation",
            organization: "IGCMUN India",
            date: "April, 2024",
            image: "/certificates/igcmun.png",
            link: "#"
        },
        {
            title: "Software Engineering",
            organization: "Coursera",
            date: "May, 2024",
            image: "/certificates/software.png",
            link: "https://drive.google.com/file/d/1ZfN3j95W6HuIFe-32fPnCe5gO4TO86hv/view?usp=drive_link"
        },
        {
            title: "Legacy Responsive Web Design",
            organization: "freeCodeCamp",
            date: "Nov, 2023",
            image: "/certificates/freecodecamp.png",
            link: "https://drive.google.com/file/d/1gzbKZ9g_EtyI4aaEPS5neLMCUVvkL01d/view?usp=drive_link"
        }
    ],
    social: {

        github: {
            link: "https://github.com/ajaygangwar945",
            title: "GitHub Activity",
            content: "Active contributor and builder. Check out my latest repositories and code experiments.",
            action: "View Profile"
        },

        linkedin: {
            link: "https://www.linkedin.com/in/ajaygangwar945",
            title: "Professional Network",
            content: "Always open to collaborating on innovative projects and networking with peers.",
            action: "Connect with me"
        },
        leetcode: {
            link: "https://leetcode.com/ajaygangwar945",
            title: "Problem Solving",
            content: "Consistently sharpening my logic and algorithm skills on LeetCode.",
            action: "View Progress"
        },
        codeforces: {
            link: "https://codeforces.com/profile/ajaygangwar945",
            title: "Competitive Programming",
            content: "Engaging in weekly challenges to push my competitive coding limits.",
            action: "View Rating"
        },
        kaggle: {
            link: "https://kaggle.com/ajaygangwar945",
            title: "Data Science Hub",
            content: "Diving deep into datasets and building machine learning models for real-world impact.",
            action: "View Notebooks"
        },
        codolio: {
            link: "https://codolio.com/profile/ajaygangwar945",
            title: "Coding Profile",
            content: "Showcasing my multi-platform coding performance and algorithmic statistics.",
            action: "View Stats"
        },
        twitter: {
            link: "https://twitter.com/ajaygangwar945",
            title: "Latest Tweets",
            content: "Sharing thoughts on the latest tech trends and my coding journey.",
            action: "View on Twitter"
        },
        instagram: {
            link: "https://instagram.com/ajaygangwar.945",
            title: "Behind the Scenes",
            content: "Snippet of my life outside of coding—travel, events, and personal growth moments.",
            action: "Check Gallery"
        },
        discord: {
            link: "https://discord.com/users/ajaygangwar945",
            title: "Developer Community",
            content: "Let's connect and chat about code, projects, and new tech stacks!",
            action: "Join Chat"
        }
    }
};

/* =============================================================================
  🧠 GEMINI API INTEGRATION
  IMPORTANT: The API Key is now securely loaded from the .env file.
  Do NOT paste your key here directly!
  =============================================================================
*/
export const GeminiService = {
    generateContent: async (prompt) => {
        const isDev = import.meta.env.DEV;
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        if (isDev && !apiKey) {
            return "VITE_GEMINI_API_KEY missing from .env";
        }

        // Prepare context from PORTFOLIO_DATA to help AI answer accurately
        const portfolioContext = {
            personal: PORTFOLIO_DATA.personal,
            skills: PORTFOLIO_DATA.skills,
            projects: PORTFOLIO_DATA.projects.map(p => ({
                title: p.title,
                description: p.description,
                tags: p.tags,
                year: p.year
            })),
            achievements: PORTFOLIO_DATA.achievements,
            education: PORTFOLIO_DATA.education,
            experience: PORTFOLIO_DATA.experience,
            positions: PORTFOLIO_DATA.positions.map(p => ({
                title: p.title,
                role: p.role,
                description: p.description
            }))
        };

        const contextString = JSON.stringify(portfolioContext);

        // 🔒 PRODUCTION: Netlify Proxy | 🛠️ DEVELOPMENT: Direct Google API
        // Switching to gemini-2.5-flash as it is the only one with active quota for this key.
        const url = isDev
            ? `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`
            : `/.netlify/functions/gemini-proxy`;

        try {
            const body = isDev
                ? JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `You are a helpful AI assistant for Ajay Gangwar's portfolio. 
                            Use the following data to answer user queries: ${contextString}
                            Keep your answers concise and professional. If the data doesn't contain the answer, say so politely.
                            User Query: ${prompt}`
                        }]
                    }]
                })
                : JSON.stringify({ prompt, context: contextString });

            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error("🤖 ChatBot Error:", response.status, errorData);

                if (response.status === 429) {
                    return "RATE_LIMIT_REACHED";
                }

                return `ERROR_${response.status}: I'm having trouble connecting to my brain right now.`;
            }

            const data = await response.json();
            const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!botResponse) {
                return "I'm sorry, I couldn't generate a specific response. Please try rephrasing.";
            }

            return botResponse;
        } catch (error) {
            console.error("🤖 ChatBot Network Error:", error);
            return `CONNECTION_ERROR: Unable to reach the AI service.`;
        }
    }
};

