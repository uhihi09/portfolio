window.siteContent = {
    navigation: {
        logo: "Junha Bae",
        logoAccent: "_",
        links: [
            { label: "Projects", href: "#projects" },
            { label: "About", href: "#about" },
            { label: "Tech", href: "#Tech" },
            { label: "School Activities", href: "#school" },
            { label: "Awards", href: "#awards" },
            { iconClass: "fab fa-github", href: "https://github.com/uhihi09", external: true, noUnderline: true }
        ]
    },
    hero: {
        intro: {
            text: "Hi I'm",
            link: { label: "Junha Bae", href: "https://github.com/uhihi09" }
        },
        subtitle: "A developer who digs deep and doesn't quit",
        achievements: [
            {
                label: "Dev Lead",
                href: "https://github.com/Team-Oh-Yes",
                suffix: " of GrowMoney Project"
            },
            {
                label: "Gold 5",
                href: "https://solved.ac/profile/uhihi",
                suffix: " in BOJ"
            },
            {
                label: "Python Instructor",
                href: "#school",
                suffix: " at DUCAMI"
            }
        ]
    },
    projects: [
        {
            title: "AMOS",
            description: "Real-time Weather Monitoring System",
            url: "https://github.com/wnghdcjfe/wnghdcjfe.github.io/blob/master/%EA%B8%B0%EC%83%81%EC%A0%95%EB%B3%B4%EC%A7%80%EC%9B%90%EC%B2%B4%EA%B3%84.md",
            backgroundImage: "./imgs/amos.gif",
            backgroundColor: "#0b2a3e",
            featured: true
        },
        {
            title: "IU toon",
            description: "Singer IU Song Serving Page",
            url: "https://github.com/wnghdcjfe/IUtoon",
            backgroundImage: "./imgs/iu.gif",
            backgroundColor: "#ed1a44"
        },
        {
            title: "KNUE",
            description: "University community web site",
            url: "https://github.com/wnghdcjfe/wnghdcjfe.github.io/blob/master/knue.md",
            backgroundImage: "./imgs/knue.gif",
            backgroundColor: "#000000"
        },
        {
            title: "Lucid Codeforce",
            description: "A system that quickly finds answers to Codeforce.",
            url: "https://lucidcode.herokuapp.com/#/",
            backgroundImage: "./imgs/lucid.png",
            backgroundColor: "#42b983",
            extraClasses: ["project--mobile-auto-image"]
        },
        {
            title: "Mocha.js",
            description: "Javascript Test Framework",
            url: "https://github.com/mochajs/mocha/graphs/contributors",
            backgroundImage: "./imgs/mocha.png",
            backgroundColor: "#a67d5d",
            extraClasses: ["project--mobile-auto-image"]
        },
        {
            title: "Solbang Notepad",
            description: "Actor Chun Woo-hee's Notebook Page",
            url: "https://github.com/wnghdcjfe/thousand_wooo_app",
            backgroundImage: "./imgs/thou.gif",
            backgroundColor: "#1faec8"
        }
    ],
    about: {
        title: "About",
        paragraphs: [
            "My programming journey began at Daegu Software Meister High School, where I first learned Python and built a foundation in computer science fundamentals. As the backend developer and dev team leader for 'GrowMoney' — our Narsha project — I not only wrote code but also mentored teammates on Git workflows and fostered a collaborative development culture.",
            "I've achieved a 90% reduction in deployment time through CI/CD automation (30 min → 3 min), solved more than 700 algorithmic problems on BOJ (Gold 5), and won the Grand Prize in the Newrrow Project for demonstrating excellence in communication, strategy, and self-reflection."
        ]
    },
    tech: {
        title: "Tech",
        categories: [
            {
                label: "Strong",
                items: "Python / Java / Spring Boot / HTML5 / CSS3 / MySQL / PostgreSQL / AWS"
            },
            {
                label: "Knowledgeable",
                items: "C++ / JavaScript / Django / FastAPI / Flask / Node.js / React / MongoDB"
            },
            {
                label: "ETC",
                items: "Git / Docker / ERDCloud / Swagger / Postman"
            }
        ]
    },
    awards: {
        title: "Awards",
        items: [
            {
                label: "2020 Kakao Development Challenge Front-End Challenges",
                detail: "20.07 / Top 4% / Programmers / ",
                links: [
                    { href: "#", text: "overview" },
                    { href: "https://programmers.co.kr", text: "programmers" }
                ]
            },
            {
                label: "2019 Countributon – Mocha.js",
                detail: "19.12.04 / Encouragement Prize / Ministry of Science and ICT",
                suffix: " / Extra note",
                stars: 1,
                links: [
                    { href: "https://github.com/mochajs/mocha/graphs/contributors", text: "contributors" }
                ]
            },
            {
                label: "citation (development of North Korean Artillery Weather Station)",
                detail: "19.04.11 / defense Intelligence Headquarters",
                stars: 3,
                suffix: " / Defense Department"
            },
            {
                label: "citation (development of AMOS)",
                detail: "18.08.20 / Brigadier General",
                stars: 1,
                suffix: " / Weather Group of R.O.K Air Force"
            },
            {
                label: "2nd place in SW development competition for military in South Korea",
                detail: "17.01.24 / General",
                stars: 4,
                suffix: " / Defense Department"
            },
            {
                label: "1st place in Startup Korea Gangwon Hackathon",
                detail: "15.12.13 / 1st place / Gangwon Creative Economy Innovation Center"
            },
            {
                label: "2nd place in the 2015 Korea Presentation Contest",
                detail: "15.01.29 / 2nd place in university student category / G1 Gangwon"
            }
        ]
    },
    schoolActivities: {
        title: "School Activities",
        items: [
            {
                label: "Career Experience Program Operations (Python Dino Game)",
                detail: "25.09.27, 25.08.23, 25.07.12 / Instructor",
                stars: 2,
                suffix: " / Daegu Software Meister High School",
                links:[
                    {href: "https://drive.google.com/uc?id=1y2nADFjyP713lS3DVyUr41WBlw0Moww0", text: "Photo 1"},
                    {href: "https://drive.google.com/uc?id=1tDXnjcv8lpy6RE3VHnRWghUwNghS4tEM", text: "Photo 2"}
                ]
            },
            {
                label: "2025 Vocational Education Fair DUCAMI Booth",
                detail: "25.09.10 / Booth Operator / Daegu Exhibition & Convention Center"
            },
            {
                label: "2025 Future Convergence Talent Discovery Software Challenge",
                detail: "25.08.15 / Participant / Ministry of Science and ICT"
            },
            {
                label: "2025 Youth Dream Project Newrrow",
                detail: "25.07.29 / Grand Prize ",
                stars: 3,
                suffix: " / MIDAS Information Technology Co",
                links:[
                    {href: "https://drive.google.com/uc?id=1c10qz3VId0j7EFz83i6c2Fmm_pD9hi_N", text: "Photo 1"},
                    {href: "https://drive.google.com/uc?id=1PR_7yySiTOGD0ELiapO4YbK_cLchQVc9", text: "Photo 2"}
                ]
            },
            {
                label: "2025 School Algorithm Programming Competition",
                detail: "25.07.07 / Participant / Daegu Software Meister High School"
            },
            {
                label: "2025 Creative Convergence Playground DUCAMI Booth",
                detail: "25.05.05 / Booth Operator / Daegu Institute Of Creative Convergence Education"
            },
            {
                label: "DUCAMI Educational Volunteer Club Activities",
                detail: "25.04 ~ Present / Club Member / Daegu Software Meister High School",
            }
        ]
    }
};