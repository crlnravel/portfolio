#import "resume.typ": *

#let name = "Carleano Ravelza Wongso"
#let location = "Jakarta, Indonesia"
#let email = "[carleanoravel@gmail.com](mailto\:carleanoravel@gmail.com)"
#let github = "github.com/crlnravel"
#let linkedin = "linkedin.com/in/carleanoravel"
#let phone = "+62 896-7388-5149"
#let personal-site = "carlravel.tech"

#set page(
  margin: (
    top: 0.3in,
    bottom: 0.3in,
    left: 12pt,
    right: 12pt,
  ),
)

#set text(size: 10pt)

#show: resume.with(
  author: name,
  location: location,
  email: email,
  github: github,
  linkedin: linkedin,
  phone: phone,
  personal-site: personal-site,
  accent-color: "#44624a",
  font: "New Computer Modern",
  paper: "a4",
  author-position: left,
  personal-info-position: left,
)

== Profile

Computer Science student and software engineer with hands-on experience deploying production microservices and machine learning systems in cloud environments.

== Education

#edu(
  institution: "Universitas Indonesia",
  degree: "Bachelor of Computer Science – GPA: 3.88",
  location: "Depok, Indonesia",
  dates: dates-helper(
    start-date: "Aug 2023",
    end-date: "Expected Jul 2027",
  ),
  gpa: 3.88,
  consistent: true,
)

== Professional Experience

#work(
  company: "Apple Developer Academy @BINUS",
  title: "Product Researcher & Developer",
  location: "Jakarta, Indonesia",
  dates: dates-helper(
    start-date: "Mar 2026",
    end-date: "Present",
  ),
)

- Develop user-centered products in multidisciplinary teams from problem discovery and validation through implementation and testing.
- Built iOS, macOS, and watchOS based applications and leveraging Apple and Swift's libraries & frameworks.
- Conduct user research and translate product requirements into accessible technical solutions.

#work(
  company: "Freelance",
  title: "DevOps & Machine Learning Engineer",
  location: "Remote",
  dates: dates-helper(
    start-date: "2025",
    end-date: "2026",
  ),
)

- Designed and deployed a production microservices architecture on Tencent Kubernetes Engine (TKE), integrating services with real client databases and production workloads.
- Established CI/CD pipelines for controlled deployments using GitHub Actions & ArgoCD.
- Built a YOLOv8-based CV model for Indonesian license plate detection & recognition, achieving >90% accuracy.

#work(
  company: "QuorumAI",
  title: "Software Engineer Intern",
  location: "Remote",
  dates: dates-helper(
    start-date: "Mar 2025",
    end-date: "Nov 2025",
  ),
)

- Developed production backend services in Go for an AI-powered meeting management platform.
- Designed and optimized REST APIs and PostgreSQL queries, reducing average API latency by approximately 40%.
- Implemented production features including authentication, SSE, secure object-storage access, and many more.

#work(
  company: "Pusat Ilmu Komputer UI × PT Medco Energi Internasional Tbk",
  title: "AI/ML Mentor",
  location: "Jakarta, Indonesia",
  dates: dates-helper(
    start-date: "Nov 2025",
    end-date: "Dec 2025",
  ),
)

- Mentored industry professionals in developing end-to-end machine learning solutions for practical business use cases, covering experimentation, model evaluation, and technical communication.

== Leadership & Volunteering

#work(
  company: "COMPFEST",
  title: "Vice Person in Charge (DevOps), Software Engineering Division",
  location: "Universitas Indonesia",
  dates: dates-helper(
    start-date: "Mar 2025",
    end-date: "Jan 2026",
  ),
)

- Led 10+ developers building and operating event platforms serving over *2,000 daily users*.
- Designed CI/CD pipelines with GitHub Actions and automated engineering and operational workflows.

#work(
  company: "Recess Indonesia",
  title: "Backend Developer",
  location: "Remote",
  dates: dates-helper(
    start-date: "Jul 2024",
    end-date: "Oct 2024",
  ),
)

- Developed backend functionality for an audiobook streaming platform and collaborated with clients to translate accessibility needs into product requirements.

== Technical Skills

- *Cloud, DevOps & Automation:* Linux, Bash, Docker, Kubernetes, Terraform, Ansible, GitHub Actions, CI/CD, AWS, GCP, Tencent Cloud, ArgoCD, Crossplane
- *Programming:* Go, Python, TypeScript, Java, SQL, Swift
- *Backend & Databases:* REST APIs, PostgreSQL, Redis, Neo4j, Supabase, S3-compatible object storage
- *Machine Learning:* PyTorch, YOLOv8, Computer Vision, Object Detection
- *Languages:* Indonesian — Native; English — Professional working proficiency
