
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
        { label: "Technical Projects", value: "15+" },
        { label: "Algorithms Solved", value: "100+" },
        { label: "Hackathon Wins", value: "2" },
        { label: "Years of Growth", value: "3+" }
    ],
    projects: [
        {
            title: "Global Terrorism Analysis",
            description: "Interactive Power BI dashboard analyzing global terrorism trends using GTD with KPIs, Azure Maps, and drill-through analysis.",
            tags: ["Power BI", "DAX", "Data Analytics", "Python"],
            image: "/projects/global-terrorism.png",
            github: "https://github.com/ajaygangwar945/Global-Terrorism-Analysis",
            demo: "https://app.powerbi.com/view?r=eyJrIjoiNTY4YWQxMGItNGFhMC00ZWQ4LThlZjUtMDY0NWY4OGJkYjdhIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D"
        },
        {
            title: "SoftHub",
            description: "Node.js & Express backend with secure authentication, MongoDB integration, and email-based OTP password reset.",
            tags: ["Node.js", "Express", "MongoDB", "Authentication"],
            image: "/projects/chat-app.png",
            year: "2025",
            github: "https://github.com/ajaygangwar945/SoftHub",
            demo: "https://softhub-bwnd.onrender.com"
        },
        {
            title: "Healthcare Interoperability",
            description: "Platform integrating traditional Ayush systems with global standards (FHIR R4, ICD-11) for secure data exchange.",
            tags: ["TypeScript", "Node.js", "FHIR", "Healthcare"],
            image: "/projects/icd-mapping.png",
            year: "2024",
            github: "https://github.com/ajaygangwar945/SIH",
            demo: "https://github.com/ajaygangwar945/SIH"
        },
        {
            title: "AI-Powered Task Manager",
            description: "A smart todo list that prioritizes tasks using Natural Language Processing. Built with React and Python.",
            tags: ["React", "Python", "NLP", "FastAPI"],
            image: "/projects/task-manager.png",
            year: "2024",
            github: "#",
            demo: "#"
        },
        {
            title: "Blockchain Voting System",
            description: "Secure decentralized voting application ensuring transparency and anonymity using Ethereum smart contracts.",
            tags: ["Solidity", "Web3.js", "React", "Ethereum"],
            image: "/projects/blockchain-voting.png",
            year: "2024",
            github: "#",
            demo: "#"
        },
        {
            title: "Real-time Chat App",
            description: "A WebSocket-based messaging platform allowing instant communication with end-to-end encryption.",
            tags: ["Node.js", "Socket.io", "React", "Redis"],
            image: "/projects/chat-app.png",
            year: "2024",
            github: "#",
            demo: "#"
        },
        {
            title: "Pet Adoption Portal",
            description: "Developed a responsive platform to facilitate pet adoption and raise welfare awareness through interactive listings and community resources.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "/projects/pet-adoption.png",
            year: "2023",
            github: "https://github.com/ajaygangwar945/Pet-Adoption-and-Animal-Welfare",
            demo: "https://pet-adoption-and-animal-welfare.netlify.app"
        },
        {
            title: "Live Weather Intelligence",
            description: "Engineered a real-time weather dashboard featuring geolocation-based forecasting and dynamic visualizations powered by the OpenWeatherMap API.",
            tags: ["React", "JavaScript", "OpenWeatherMap API", "Tailwind CSS"],
            image: "/projects/weather-app.png",
            github: "https://github.com/ajaygangwar945/Weather-App",
            demo: "https://weather-forcasting-temperature.netlify.app"
        },
        {
            title: "ICD-Mapping",
            description: "FHIR R4 compliant platform integrating Ayush systems with global healthcare standards using ICD-11 dual coding.",
            tags: ["Python", "FastAPI", "React", "Tailwind CSS"],
            image: "/projects/icd-mapping.png",
            github: "https://github.com/ajaygangwar945/ICD-Mapping",
            demo: "https://icd-mapping.onrender.com"
        },
        {
            title: "ATS Resume Score",
            description: "AI-driven application using Google Gemini to analyze resumes and optimize alignment with job descriptions.",
            tags: ["Python", "Streamlit", "Google Gemini API"],
            image: "/projects/ats-resume.png",
            github: "https://github.com/ajaygangwar945/ATS-Resume-Score",
            demo: "https://ats-resume-score-945.streamlit.app"
        },
        {
            title: "Python Data Science Project",
            description: "A comprehensive data analysis workflow performing data cleaning, exploration, and visualization using Jupyter Notebooks.",
            tags: ["Python 3", "Jupyter Notebook", "Pandas", "Matplotlib / Seaborn"],
            image: "/projects/data-science.png",
            github: "https://github.com/ajaygangwar945/Python-Data-Science-Project",
            demo: "https://ajaygangwar945.github.io/Python-Data-Science-Project/"
        }
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
            title: "5 Star Coder",
            organization: "HackerRank",
            description: "Achieved top rank in Problem Solving and Data Structures.",
            icon: <Code size={20} />
        }
    ],
    education: [
        {
            degree: "Bachelor of Technology in Computer Science",
            school: "Lovely Professional University",
            year: "2023 - Present",
            description: "Specializing in Data Science and Analytics. Core focus on Python, Machine Learning, and Full Stack Development. CGPA: 7.5/10"
        },
        {
            degree: "Higher Secondary Education",
            school: "Vidya Bhavan Public School",
            year: "2021 - 2022",
            description: "Major in Science (Physics, Chemistry, Mathematics)"
        }
    ],
    experience: [
        {
            role: "Open Source Contributor",
            company: "GitHub",
            year: "2024 - Present",
            description: "Contributed to various open source projects including bug fixes and feature additions."
        },
        {
            role: "Full Stack Development Intern",
            company: "Skillcraft Technology",
            year: "Summer 2025",
            description: "Architected and maintained performance-critical web applications using React and Node.js, achieving a 20% improvement in load times."
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
            ]
        }
    ],

    blogs: [
        {
            title: "Understanding React Hooks",
            date: "Oct 2024",
            description: "A deep dive into useEffect and useMemo.",
            link: "#"
        },
        {
            title: "The Future of Web Development",
            date: "Sep 2024",
            description: "Exploring WebAssembly and Edge Computing.",
            link: "#"
        }
    ],
    certificates: [
        {
            title: "Introduction to Modern AI",
            organization: "Cisco",
            date: "Nov, 2025",
            image: "/cisco.png",
            link: "https://drive.google.com/file/d/1-xYkSckZiMQ-kcfEix3g0knXnRWmu8Cd/view?usp=sharing"
        },
        {
            title: "Python for Data Science",
            organization: "NPTEL",
            date: "Feb, 2025",
            image: "/nptel.png",
            link: "https://drive.google.com/file/d/1gjxcSxIoeJkCGOZ1soOdwq0hej6ihmoC/view?usp=sharing"
        },
        {
            title: "Software Engineering",
            organization: "Coursera",
            date: "May, 2024",
            image: "/software.png",
            link: "https://drive.google.com/file/d/1ZfN3j95W6HuIFe-32fPnCe5gO4TO86hv/view?usp=drive_link"
        }
    ],
    social: {
        twitter: {
            link: "https://twitter.com/ajaygangwar945",
            title: "Latest Tweets",
            content: "Sharing thoughts on the latest tech trends and my coding journey.",
            action: "View on Twitter"
        },
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
        instagram: {
            link: "https://instagram.com/ajaygangwar.945",
            title: "Behind the Scenes",
            content: "Snippet of my life outside of coding—travel, events, and personal growth moments.",
            action: "Check Gallery"
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
        // 🔑 API Key is now securely loaded from .env file
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        // NOTE: If apiKey is empty, AI features will return a placeholder message.
        if (!apiKey) return "AI features require an API Key. Please add VITE_GEMINI_API_KEY to your .env file.";

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });

            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
        } catch (error) {
            console.error("Gemini API Error:", error);
            return "Error connecting to AI service.";
        }
    }
};

