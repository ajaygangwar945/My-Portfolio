
import { Trophy, Cpu, Code } from 'lucide-react';

/* =============================================================================
  🎨 USER CONTENT CONFIGURATION
  Edit this section to update your portfolio data without touching the code logic!
  =============================================================================
*/
export const PORTFOLIO_DATA = {
    personal: {
        name: "Ajay Gangwar",
        role: "Computer Science Student & Data Science Enthusiast",
        about: "Passionate CSE undergrad specializing in Data Science, ML, and Python. I thrive on building predictive models and transforming raw data into intelligent, actionable solutions.",
        email: "ajaygangwar945@gmail.com",
        github: "https://github.com/ajaygangwar945",
        linkedin: "https://www.linkedin.com/in/ajaygangwar945/",
        resumeLink: "/resume.pdf",
        profileImage: "/profile.jpg"
    },
    skills: [
        "HTML", "CSS", "JavaScript", "Java", "Python", "C++", "React.js", "Node.js", "MongoDB", "SQL", "Git", "Docker", "AWS"
    ],
    stats: [
        { label: "Projects Completed", value: "15+" },
        { label: "LeetCode Solved", value: "100+" },
        { label: "Hackathons Won", value: "2" },
        { label: "Years Coding", value: "3" }
    ],
    projects: [
        {
            title: "AI-Powered Task Manager",
            description: "A smart todo list that prioritizes tasks using Natural Language Processing. Built with React and Python.",
            tags: ["React", "Python", "NLP", "FastAPI"],
            github: "#",
            demo: "#"
        },
        {
            title: "Blockchain Voting System",
            description: "Secure decentralized voting application ensuring transparency and anonymity using Ethereum smart contracts.",
            tags: ["Solidity", "Web3.js", "React", "Ethereum"],
            github: "#",
            demo: "#"
        },
        {
            title: "Real-time Chat App",
            description: "A WebSocket-based messaging platform allowing instant communication with end-to-end encryption.",
            tags: ["Node.js", "Socket.io", "React", "Redis"],
            github: "#",
            demo: "#"
        },
        {
            title: "Pet Adoption & Animal Welfare",
            description: "A responsive platform facilitating pet adoption and welfare awareness through interactive listings",
            tags: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/ajaygangwar945/Pet-Adoption-and-Animal-Welfare",
            demo: "https://pet-adoption-and-animal-welfare.netlify.app"
        },
        {
            title: "Real-time Weather Forecasting App",
            description: "Responsive weather dashboard featuring real-time data, geolocation, and animated visualizations via OpenWeatherMap.",
            tags: ["React", "JavaScript", "OpenWeatherMap API", "CSS", "HTML 5"],
            github: "https://github.com/ajaygangwar945/Weather-App",
            demo: "https://weather-forcasting-temperature.netlify.app"
        },
        {
            title: "ICD-Mapping",
            description: "FHIR R4 compliant platform integrating Ayush systems with global healthcare standards using ICD-11 dual coding.",
            tags: ["Python", "FastAPI", "React", "Tailwind CSS"],
            github: "https://github.com/ajaygangwar945/ICD-Mapping",
            demo: "https://icd-mapping.onrender.com"
        },
        {
            title: "ATS Resume Score",
            description: "AI-driven application using Google Gemini to analyze resumes and optimize alignment with job descriptions.",
            tags: ["Python", "Streamlit", "Google Gemini API"],
            github: "https://github.com/ajaygangwar945/ATS-Resume-Score",
            demo: "https://ats-resume-score-945.streamlit.app"
        },
        {
            title: "Python Data Science Project",
            description: "A comprehensive data analysis workflow performing data cleaning, exploration, and visualization using Jupyter Notebooks.",
            tags: ["Python 3", "Jupyter Notebook", "Pandas", "Matplotlib / Seaborn"],
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
            role: "Full Stack Developer Intern",
            company: "Skillcraft Technology",
            year: "Summer 2025",
            description: "Developed and maintained web applications using React and Node.js. Improved site performance by 20%."
        }

    ],
    positions: [
        {
            id: "scc",
            title: "Student Career Committee - SCC",
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
        twitter: "https://twitter.com/ajaygangwar945",
        twitterHandle: "@ajaygangwar945",
        github: "https://github.com/ajaygangwar945",
        linkedin: "https://www.linkedin.com/in/ajaygangwar945",
        instagram: "https://instagram.com/ajaygangwar.945",
        facebook: "https://facebook.com/ajaygangwar945",
        discord: "https://discord.com/users/ajaygangwar945",
        leetcode: "https://leetcode.com/ajaygangwar945",
        codeforces: "https://codeforces.com/profile/ajaygangwar945",
        kaggle: "https://kaggle.com/ajaygangwar945"
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

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

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

