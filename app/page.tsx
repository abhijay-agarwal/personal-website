"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Menu,
  X,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/ABHIJAY_AGARWAL_RESUME.pdf";
    link.download = "ABHIJAY_AGARWAL_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects = [
    {
      title: "Civic - Constituent Management Platform",
      description:
        "Built MVP constituent management service (CMS) platform for AI startup Civic (get-civic.com)",
      technologies: ["TypeScript", "React", "Node.js", "Express", "Supabase"],
      achievement:
        "Implemented automated email ingestion system with ML-powered parsing algorithms to classify and batch constituent messages by issue type, reducing manual processing time by 80%",
      status: "Closed source (contractor work)",
      link: null,
      companyLink: "https://get-civic.com",
    },
    {
      title: "Flagler Health - Healthcare Data Analysis",
      description:
        "Analyzed healthcare claims data for Flagler Health, processing and combining multiple datasets with 100K+ records to identify patterns in patient procedures and physician practices",
      technologies: ["Python", "Pandas", "Jupyter", "Data Visualization"],
      achievement:
        "Developed machine learning models to identify procedure patterns and predict patient care outcomes, creating physician-patient network visualizations that improved care quality recommendations",
      status: "Closed source (contractor work)",
      link: null,
      companyLink: "https://flaglerhealth.org",
    },
    {
      title: "Shades - News Automation Tool",
      description:
        "Developed in-house tool for news startup to automate article batching through NLP techniques",
      technologies: ["React", "TypeScript", "Firebase", "Chrome Extension API"],
      achievement:
        "Built NLP pipeline for automated content categorization and sentiment analysis, reducing article processing time by 10x through intelligent batching algorithms",
      status: "Closed source (startup work)",
      link: null,
      companyLink: "https://shades.news",
    },
    {
      title: "Instahub - Energy Dashboard",
      description:
        "Created revamped frontend including login flow and digital dashboard for energy conservation company",
      technologies: ["JavaScript", "React", "Node.js", "Express", "Firebase"],
      achievement:
        "Implemented predictive analytics dashboard with ML-driven energy consumption forecasting and anomaly detection to optimize conservation strategies",
      status: "Closed source (contractor work)",
      link: null,
      companyLink: "https://getinstahub.com",
    },
    {
      title: "YelpBnB - Property Search Platform",
      description:
        "Published webapp allowing users to find AirBnB properties based on nearby Yelp businesses and vice-versa",
      technologies: ["JavaScript", "React", "Node.js", "Express", "SQL"],
      achievement:
        "Optimized SQL queries with relational algebra, reducing query execution time by ~150%; Processed 500K+ rows across 5 databases",
      status: "Open source",
      link: "https://github.com/abhijay-agarwal/project-450-yelpbnb",
    },
    {
      title: "Spotify@Penn - Music Sharing Platform",
      description:
        "Published MEVN stack web application allowing members of UPenn community to share music tastes and view popular/trending music at the school",
      technologies: [
        "MongoDB",
        "Express",
        "Vue.js",
        "Node.js",
        "Spotify API",
        "OAuth",
      ],
      achievement:
        "Integrated Spotify API using OAuth to extract user data and connected to MongoDB backend, with Express/Node.js for data retrieval",
      status: "Open source",
      link: "https://github.com/cis350/project-spotify-penn",
    },
  ];

  const skills = {
    Languages: ["TypeScript", "JavaScript", "Python", "SQL"],
    Frontend: ["React", "HTML/CSS", "Chrome Extensions"],
    Backend: ["Node.js", "Express", "REST APIs"],
    Databases: ["Firebase", "Supabase"],
    "Data & ML": ["Pandas", "Jupyter", "NumPy", "NLP"],
    Cloud: ["AWS EC2"],
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-lg">AA</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["about", "projects", "skills", "education", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors hover:text-gray-600 ${
                      activeSection === section
                        ? "text-black font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {["about", "projects", "skills", "education", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-2 capitalize text-gray-600 hover:text-black"
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Header Section */}
      <header className="pt-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="/images/abhijay-headshot.jpg"
              alt="Abhijay Agarwal headshot"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover object-top border-4 border-gray-200"
              style={{ objectPosition: "50% 20%" }}
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-balance">
            Abhijay Agarwal
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-4 text-balance">
            Full-stack engineer passionate about data-driven applications
          </p>
          <p className="text-sm sm:text-base text-gray-500 mb-6 text-pretty">
            Jerome Fisher M&T Program | University of Pennsylvania | Expected
            Graduation: May 2026 | GPA: 3.8
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/abhijay-agarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhijay-agarwal-55789a250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:abhiijay@wharton.upenn.edu"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">About</h2>
        <div className="text-lg leading-relaxed text-gray-700 text-pretty">
          <p>
            I'm a student in the Jerome Fisher Program in Management &
            Technology at the University of Pennsylvania, pursuing dual degrees
            in Computer Science and Business. I specialize in building
            AI-powered solutions that solve real-world problems, from developing
            automated email ingestion systems using ML algorithms to creating
            intelligent news article batching tools. My experience spans from
            MVP development for startups to building AI-driven systems that
            process and analyze large datasets to extract business insights and
            optimize decision-making processes.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-50"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-balance">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    {project.companyLink && (
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={project.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Company Website"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Repository"
                        >
                          <Github size={16} />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <CardDescription className="text-gray-600 text-pretty">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">
                      Key Achievement:
                    </p>
                    <p className="text-sm text-gray-600 text-pretty">
                      {project.achievement}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500">{project.status}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-bold text-lg">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-gray-50"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-balance">
              University of Pennsylvania - Jerome Fisher Program in Management &
              Technology (M&T)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold">B.A.S. in Computer Science</p>
              <p className="text-sm text-gray-600">
                School of Engineering and Applied Science
              </p>
            </div>
            <div>
              <p className="font-semibold">
                B.S. in Economics with concentration in Business Analytics
              </p>
              <p className="text-sm text-gray-600">The Wharton School</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <p className="text-sm">
                <strong>Expected Graduation:</strong> May 2026
              </p>
              <p className="text-sm">
                <strong>GPA:</strong> 3.8/4.0
              </p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">Relevant Coursework:</p>
              <p className="text-sm text-gray-600">
                Big Data Analytics, Databases & Information Systems, Software
                Design/Engineering, Data Structures & Algorithms, Management of
                Technology, AI, Business and Society
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Mail size={20} />
              <a
                href="mailto:abhiijay@wharton.upenn.edu"
                className="text-lg hover:text-gray-600 transition-colors"
              >
                abhiijay@wharton.upenn.edu
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Linkedin size={20} />
              <a
                href="https://www.linkedin.com/in/abhijay-agarwal-55789a250/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-600 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Github size={20} />
              <a
                href="https://github.com/abhijay-agarwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-600 transition-colors"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          <Button
            onClick={downloadResume}
            className="bg-black text-white hover:bg-gray-800 transition-colors"
          >
            <Download size={16} className="mr-2" />
            Download Resume
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>&copy; 2025 Abhijay Agarwal. Last updated: September 2025</p>
      </footer>
    </div>
  );
}
