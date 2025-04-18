import './Experiences.css'
import milleniumBCPLogo from '../../assets/MilleniumBCPLogo.png' 
import quatenusLogo from '../../assets/QuatenusLogo.png'
import baLogo from '../../assets/BALogo.png'
import aceveLogo from '../../assets/AceveLogo.png'
import Experience from './Experience'

const Experiences = () => {

    const experiences =
    [
        {
            title: "Backend .NET Developer",
            company: "askBlue/Aceve",
            date: "Sep 2024 - Present",
            logo: aceveLogo,            
            borderColor: 'rgb(47, 131, 47)',
            logoBorderRadius: '1%',
            logoPadding: '5px',
            logoWidth: '200px',
            paragraphs: [
                "As an askBlue consultant, I'm assigned to Aceve, a scandinavian company in the craft and construction SaaS industry.",
                "Responsible for the development and maintenance of applications and their microservices.",
                "Using technologies such as C#, .NET 6/8, ASP.NET Core Web API, DDD and Clean Architecture, CQRS with MediatR, EF Core, xUnit, Docker, PostgreSQL, SQL Server, DBeaver, Jira, GitLab and English."
            ]
        },
        {
            title: "Full-Stack .NET Developer",
            company: "Softinsa/Millenium BCP",
            date: "Jan 2024 - Aug 2024",
            logo: milleniumBCPLogo,
            borderColor: 'rgb(195, 13, 104)',
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
            borderColor: 'rgb(235, 118, 16)',
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
            borderColor: 'rgb(143, 26, 88)',
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
            {experiences.map((exp, index) => (
                <Experience
                    key={index}
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
            <hr className='experiences-bottom-line'/>
        </div>
    );
};

export default Experiences;