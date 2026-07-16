import './Experiences.css'
import dxSparkLogo from '../../assets/DxSparkLogo.svg'
import milleniumBCPLogo from '../../assets/MilleniumBCPLogo.png'
import quatenusLogo from '../../assets/QuatenusLogo.png'
import baLogo from '../../assets/BALogo.png'
import aceveLogo from '../../assets/AceveLogo.png'
import Experience from './Experience'

const Experiences = () => {

    const experiences =
    [
        {
            title: "Full-Stack .NET Developer",
            company: "DxSpark (powered by Agap2IT)",
            date: "Sep 2025 - Present",
            logo: dxSparkLogo,
            borderColor: 'var(--accent-teal)',
            logoBorderRadius: '1%',
            logoPadding: '5px',
            logoWidth: '200px',
            paragraphs: [
                "As an Agap2IT consultant assigned to DxSpark, I deliver enterprise applications for banking and fintech clients using .NET 6, ASP.NET Core MVC, SQL Server, Razor, TypeScript and HTML/CSS with Bootstrap, alongside Postman and REST APIs.",
                "I've been a major contributor to a full-fledged HR platform for Crédito Agrícola, delivered under tight timelines in a high-pressure environment.",
                "I've worked across multiple projects including BTOC.NET, the Crédito Agrícola Seguros Client Portal, and E-Kwanza, an Angolan digital payments platform.",
                "I'm currently the primary fully-allocated full-stack developer on E-Kwanza, working across its merchant, client, agent, backoffice and network management apps.",
                "I collaborate closely with mobile developers, project managers and stakeholders to align backend APIs, integrations and urgent client requirements."
            ]
        },
        {
            title: "Backend .NET Developer",
            company: "askBlue/Aceve",
            date: "Sep 2024 - Aug 2025",
            logo: aceveLogo,
            borderColor: 'var(--accent-green)',
            logoBorderRadius: '1%',
            logoPadding: '5px',
            logoWidth: '200px',
            paragraphs: [
                "As an askBlue consultant, I was assigned to Aceve, a scandinavian company in the craft and construction SaaS industry.",
                "Responsible for the development and maintenance of applications and their microservices.",
                "Using technologies such as C#, .NET 6/8, ASP.NET Core Web API, DDD and Clean Architecture, CQRS with MediatR, EF Core, xUnit, Docker, PostgreSQL, SQL Server, DBeaver, Jira, GitLab and English."
            ]
        },
        {
            title: "Full-Stack .NET Developer",
            company: "Softinsa/Millenium BCP",
            date: "Jan 2024 - Aug 2024",
            logo: milleniumBCPLogo,
            borderColor: 'var(--accent-pink)',
            logoBorderRadius: '1%',
            logoPadding: '5px',
            logoWidth: '200px',
            paragraphs: [
                "As a Softinsa consultant, I worked assigned to Millenium BCP, a bank in Portugal.",
                "Responsible for the development and maintenance of internal applications.",
                "Using technologies such as C#, SQL Server, T-SQL, ASP.NET WebForms, HTML CSS & JavaScript."
            ]
        },
        {
            title: "Full-Stack .NET Developer",
            company: "Quatenus - WWIL",
            date: "Mar 2023 - Dec 2023",
            logo: quatenusLogo,
            borderColor: 'var(--accent-orange)',
            logoBorderRadius: '1%',
            logoPadding: '5px',
            logoWidth: '200px',
            paragraphs: [
                "Worked on the frontend of the company's main product, its web application in ASP.NET WebForms, using HTML CSS & JavaScript.",
                "Created and modified web services on the main company's ASP.NET Web API to support new features for web and mobile applications, using EF Core to manipulate data from SQL Server.",
                "Developed a fullstack ASP.NET Core MVC web portal for a client, creating a full-text index on a string column with millions of values, improving performance time from >30s to ~2s."
            ]
        },
        {
            title: "C#/VB.NET Developer, Product Development in R&D",
            company: "BA Glass",
            date: "Aug 2022 - Feb 2023",
            logo: baLogo,
            borderColor: 'var(--accent-magenta)',
            logoBorderRadius: '50%',
            logoPadding: '1px',
            logoWidth: '80px',
            paragraphs: [
                "As an intern, compiled and created an installer for the department's C# and VB.NET SolidWorks Add-In, used by the Product Design team towards all products manufactured in all the 13 factories across Europe.",
                "Created new User Interfaces using WinForms and leveraged SolidWorks's docs to modify existing native ones.",
                "Implemented C#/VB.NET macros to automate design processes, speeding up product and manufacturing design."
            ]
        }
    ];

    return (
        <div className='experience-section'>
            <hr/>
            <h2>Experience</h2>
            <div className='experience-timeline'>
                {experiences.map((exp, index) => (
                    <Experience
                        key={index}
                        index={index}
                        title={exp.title}
                        company={exp.company}
                        date={exp.date}
                        logo={exp.logo}
                        paragraphs={exp.paragraphs}
                        borderColor={exp.borderColor}
                        logoBorderRadius={exp.logoBorderRadius}
                        logoPadding={exp.logoPadding}
                        logoWidth={exp.logoWidth}
                    />
                ))}
            </div>
            <hr className='experiences-bottom-line'/>
        </div>
    );
};

export default Experiences;
