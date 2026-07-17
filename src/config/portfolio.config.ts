export const portfolioConfig = {
  name: "Thiwanka Munasinghe",
  title: ["Geospatial Data Analyst", "GIS Developer", "Workflow Automater"],
  description: "I am a Passionate Geospatial Data Analyst",
  location: "Gampaha, Sri Lanka",
  email: "thiwanka.munasinghe@hotmail.com",

  executiveSummary: "I help organizations automate geospatial workflows, process spatial data at scale, and build tools that eliminate repetitive GIS work.",



  seo: {
    ogImage: "https://thiwak.github.io/portfolio/og-image.png",
    url: "https://thiwak.github.io/portfolio",
    twitterHandle: "@thiwaK",
    keywords: [
      "thiwaK",
      "thiwak",
      "Thiwanka",
      "thiwanka",
      "Thiwanka Munasinghe",
      "thiwanka munasinghe",
      "Thiwanka Kaushal",
      "thiwanka kaushal",
      "TK Munasinghe",
      "tk munasinghe",
      "TKM",
      "Thiwanka Kaushal Munasinghe",
      "thiwanka kaushal munasinghe",
      "Munasinghe MWTK",
      "MWTK Munasinghe",
      "MW Thiwanka Kaushal Munasinghe",
      "GIS",
      "gis",
      "Geospatial",
      "geospatial",
      "Remote Sensing",
      "GIS and RS",
      "GIS & RS",
      "Geographic Information System",
      "Geographical Information System",
      "Geographic Information Science",
      "Geographical Information Science",
      "Portfolio",
      "GIS Portfolio",
      "GIS Developer",
      "Web Map",
      "GIS Dev",
      "Geospatial Solution Engineer",
      "GIS Analyst",
      "Remote Sensing Expert",
      "RS Expert",
      "Geographer",
      "Cartographer",
      "Data Analyst",
      "Data Engineer",
    ],
    authors: [
      {
        name: "Thiwanka Munasinghe",
        url: "https://github.com/thiwaK",
      },
    ],
  },

  nav: [
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" },
    { id: "contact", title: "Contact" },
  ],



  bio: [
    { id: "location", label: "Location", value: "Gampaha, Sri Lanka" },
    { id: "age", label: "Age", value: new Date().getFullYear() - 1999 },
    { id: "education", label: "Education", value: "B.Sc. (Hons) in GIS" },
    { id: "personality", label: "Personality", value: "INTJ-A" },
  ],

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/thiwankamunasinghe",
    github: "https://github.com/thiwaK",
  },

  impact: [
    { id: 1, title: "Analyze", value: "Perform spatial data extraction and analysis to derive meaningful insights." },
    { id: 2, title: "Automate", value: "Automate repetitive GIS tasks to save time and reduce errors." },
    { id: 3, title: "Build", value: "Build tailor-made desktop and web tools to streamline your specific geospatial workflow." },
    { id: 4, title: "Integrate", value: "Integrate various data sources to create comprehensive geospatial solutions." },
  ],

  focusAreas: [
    { id: 1, title: "Cartography & Modeling", description: "I create professional maps and spatial models that communicate complex information clearly and effectively, combining cartographic principles with modern visualization techniques.", imgUrl: "", buttonText: "View Background", buttonLink: "/education" },
    { id: 2, title: "Geospatial Cloud & Automation", description: "I build scalable cloud-based GIS solutions and automate workflows using Python and cloud platforms. My focus is on reducing manual work and improving efficiency through intelligent automation.", imgUrl: "", buttonText: "View Experience", buttonLink: "/experience" },
    { id: 3, title: "Full-Stack Web Mapping", description: "I design and develop complete web mapping applications from front-end interfaces to back-end systems, creating interactive geospatial experiences for diverse applications.", imgUrl: "", buttonText: "View Projects", buttonLink: "/projects" },
    { id: 4, title: "Automation & ETL Pipelines", description: "I design and build automated data pipelines to process, transform, and integrate geospatial data from diverse sources, ensuring data quality and availability for analysis and decision-making.", imgUrl: "", buttonText: "Get In Touch", buttonLink: "/contact" },
  ],

  projects: [
    {
      id: 1,
      title: "TileGrab",
      description: "Fast, scriptable map tile downloader and mosaicker for geospatial workflows.",
      tags: ["python", "geopandas", "shapely", "pyproj", "ci/cd", "cross-platform"],
      imageUrl: "/images/projects/tilegrab.png",
      liveUrl: "",
      repoUrl: "https://github.com/thiwaK/tilegrab",
      buttonText: "View More",
      onButtonClick: () => window.open("https://github.com/thiwaK/tilegrab", "_blank"),
    },
    {
      id: 2,
      title: "Open-GIS-LK",
      description: "An open-source platform for visualizing and accessing geospatial data of Sri Lanka.",
      tags: ["tailwind", "leaflet", "php", "sqlite", "laravel"],
      imageUrl: "/images/projects/open-gis-lk.png",
      liveUrl: "https://thiwak.github.io/open-gis-lk/",
      repoUrl: "https://github.com/thiwaK/open-gis-lk",
      buttonText: "View More",
      onButtonClick: () => window.open("https://github.com/thiwaK/tilegrab", "_blank"),
    }
  ],

  experiences: [
    {
      role: "Freelancer",
      company: "Independent / Remote",
      date: "2025 Aug – Present",
      description:
        "Preform geospatial data analysis, workflow automation and develop software solutions for various clients.",
      bullets: [
        "Designed and developed addins for ArcGIS Pro for GIS task automation.",
        "Develop automated solutions with arcpy for GIS tasks.",
        "Develop and improve FME workflows, add documentations and clean up pipelines.",
        "Preform raster and vector data analysis and produce required outputs as maps, reports or other formats.",
        "Collaborate with clients to understand their needs and deliver tailored solutions.",
        "Provide technical support to clients and resolve GIS-related issues.",
      ],
      tools: []
    },
    {
      role: "Associate GIS Officer",
      company: "GeoEDGE",
      companyUrl: "https://www.geoedge.lk/",
      date: "2025 Apr – 2025 Sep",
      description:
        "Feature digitization, indices development, and automated cloud data processing.",
      bullets: [
        "Developed and validated spectral index algorithms to improve land cover classification accuracy.",
        "Digitized and attributed more than 1,000 geospatial features while meeting project QA/QC standards.",
        "Automated geospatial data processing workflows using Python, reducing manual effort and improving reproducibility.",
      ],
      tools: []
    },
    {
      role: "Junior Web Developer",
      company: "Unlimited Hosting Lanka",
      companyUrl: "https://www.unlimitedhostinglanka.com/",
      date: "2024 Oct – 2025 Feb",
      description:
        "Imprve and develop features of company's website",
      bullets: [
        "Implemented new website features and enhancements based on business requirements.",
        "Developed responsive user interfaces using Bootstrap, HTML, CSS, and JavaScript.",
        "Performed website maintenance and bug fixes.",
        "Summarize analytics of the website."
      ],
      tools: []
    },
    {
      role: "Intern",
      company: "Natural Resources Managmenet Center (NRMC)",
      companyUrl: "https://doa.gov.lk/nrmc/",
      date: "2024 Apr – 2024 Jun",
      description:
        "contributed to redefine of Sri Lanka's new sensitive area definition by calculating slope factor.",
      bullets: [
        "Refactored and enhanced an internal Employee Management System using PHP, Bootstrap, and MySQL",
        "Collaborated with HR and IT teams to implement features supporting employee record management.",
        "Assisted with GIS analysis by calculating slope factors and identifying steep-slope areas for soil conservation planning."
      ],
      tools: []
    },
  ],

  education: [
    {
      id: 1,
      title: "B.Sc. (Hons) in Geographical Informations Science",
      institution: "University of Peradeniya",
      from: "2020",
      to: "2024",
      description: "Gained both parctical and theoretical knowledge in geospatial science and technology, climatology, geomorphology and geography.",
      skills: ["Geography", "GIS", "Remote Sensing", "Quantitative Engineering", "Cartography",
        "Photogemmetry", "Programming", "Spatial Statistic", "Geoinformatics", "Database Management System",
        "Web Mapping"],
    },
    {
      id: 2,
      title: "Diploma in Information Technology",
      institution: "University of Colombo School of Computing",
      from: "2026",
      to: "2027",
      description: "Gaining theoretical backgrounds and sharpening skills in Programming, web development, database management and networking",
      skills: ["Programming", "Web Application Development", "Network Security", "Database Management System"],
    },
  ]

};
