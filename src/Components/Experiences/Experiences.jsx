import './Experiences.css'
import softinsaLogo from '../../assets/SoftinsaLogo.png' 
import quatenusLogo from '../../assets/QuatenusLogo.png'
import baLogo from '../../assets/BALogo.png'
import Experience from './Experience'

const Experiences = () => {

    const experiences =
    [
        {
            title: "C#/VB.NET Developer",
            company: "BA Glass",
            date: "Aug 2022 - Feb 2023",
            tech: "C# | VB.NET | WinForms | SolidWorks",
            summary: "Development of a C#/VB.NET Add-in for SolidWorks",
            logo: baLogo,            
            borderColor: 'rgb(143, 26, 88)',
            logoBorderRadius: '50%',
            logoPadding: '1px',
            logoWidth: '80px',
            paragraphs: [
                "As an intern on the R&D team and the only developer of the Product Development department, I compiled and created an installer for the department's C# and VB.NET SolidWorks Add-in. This was used by the Product Design team and was in constant development.",
                "On that Add-in, I added new User Interfaces using Windows Forms and changed some existing windows on SolidWorks.",
                "Implemented C#/VB.NET macros to automate design processes. Together with the new interfaces, it facilitated and sped up the design of the products and all the pieces needed for their manufacturing."
            ]
        },
        {
            title: ".NET Developer",
            company: "Quatenus - WWIL",
            date: "Mar 2023 - Dec 2023",
            tech: "C# | SQL Server | Javascript | ASP.NET | Linq2SQL",
            summary: "Fullstack development on the company's main web application",
            logo: quatenusLogo,
            borderColor: 'rgb(235, 118, 16)',
            logoBorderRadius: '1%',
            logoPadding: '5px',
            logoWidth: '200px',
            paragraphs: [
                "Worked on the frontend of the company's main product, its web application in ASP.NET WebForms, using HTML, CSS, Javascript, and C#. I developed new features and pages according to the requirements of our clients.",
                "Created and changed existing web services and their functionality on our main ASP.NET Web API to suit the needs of new features of both the company's web application and all its different mobile applications. The ORM on the web services is Linq2SQL. Their debugging and testing was made using Postman API.",
                "Developed a fullstack ASP.NET Core MVC web portal for one of our clients. Reverse engineered the tables on SQL Server to create C# classes using EF Core Power Tools. My chosen ORM was EF Core. The authentication was made by phone number and a pin code sent by SMS. Applied a full-text index on a string column of a table with 14 million rows, to optimize the query execution time from 30s+ to ~2s."
            ]
        },
        {
            title: ".NET Developer",
            company: "Softinsa",
            date: "Jan 2024 - Present",
            tech: "Javascript | C# | ASP.NET | SQL Server | T-SQL",
            summary: "Fullstack development on the clients' web applications",
            logo: softinsaLogo,
            borderColor: 'rgb(16, 113, 158)',
            logoBorderRadius: '1%',
            logoPadding: '5px',
            logoWidth: '200px',
            paragraphs: [
                "I am allocated to the Millenium BCP client in the banking industry, where I am responsible for the development and maintenance of their internal applications, using technologies such as SQL Server, T-SQL, C#, ASP.NET WebForms, JavaScript, HTML, and CSS."
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
                    tech={exp.tech}
                    summary={exp.summary}
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