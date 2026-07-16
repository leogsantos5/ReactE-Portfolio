import './Projects.css';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import UdemyLogo from '../../assets/UdemyLogo.svg'
import PatinaLogin from '../../assets/patina/PatinaLogin.jpg'
import PatinaDashboard from '../../assets/patina/PatinaDashboard.jpg'
import PatinaRestorationDetail from '../../assets/patina/PatinaRestorationDetail.jpg'
import PatinaSections from '../../assets/patina/PatinaSections.jpg'
import PatinaTaskList from '../../assets/patina/PatinaTaskList.jpg'
import PatinaTaskPhotos from '../../assets/patina/PatinaTaskPhotos.jpg'
import PatinaClientPortal from '../../assets/patina/PatinaClientPortal.jpg'

const projects = [
  {
    title: 'Patina — Car Restoration Management App',
    description: `A mobile app for managing car restoration projects, built with React Native (Expo) and backed by a modular
                  ASP.NET Core Minimal API using Clean Architecture in .NET 10. Features restoration tracking, notifications,
                  role-based authentication, client portals and restorer progress-photo uploads. Deployed with Docker Compose,
                  Azure App Service, Blob Storage and Azure Database for PostgreSQL, with Azure DevOps for CI/CD and Bruno for
                  API testing. Currently awaiting Google Play identity verification before public release.`,
    screenshots: [PatinaLogin, PatinaDashboard, PatinaRestorationDetail, PatinaSections, PatinaTaskList, PatinaTaskPhotos, PatinaClientPortal],
    featured: true,
    udemyLink: '',
  },
  {
    title: 'React E-Portfolio',
    description: 'This is the website you are seeing. It is my personal E-Portfolio, where I present myself as a Full-Stack .NET Developer, showcasing my skills, experience, education and personal projects. I built this project in React, using also JavaScript, HTML & CSS. All created and designed by me, leogsantos5 (developer name). From scratch, everything.',
    repoLink: 'https://github.com/leogsantos5/ReactE-Portfolio',
    udemyLink: '',
  },
  {
    title: 'Foreign Exchange Rates Manager API',
    description: `A sophisticated ASP.NET Core 8.0 Web API microservice for managing foreign exchange rates.
                  Built with Clean Architecture principles, DDD, CQRS & Mediator Pattern for scalability and maintainability.
                  Technologies include Entity Framework Core for data manipulation, SQL Server database, RabbitMQ for message queuing,
                  Refit for AlphaVantage API calls and real-time exchange rates, Docker for the local DB and RabbitMQ publisher containers'
                  local deployment, xUnit and Moq for Unit Testing, FluentValidation for robust data validation and Serilog for logging.`,
    repoLink: 'https://github.com/leogsantos5/ExchangeRatesManager',
    udemyLink: '',
  },
  {
    title: 'Complete Blazor (WASM & Server) and ASP.NET API Development',
    description: "My first Blazor project, a Book Store Web App created both in Blazor Server and Blazor WebAssembly. Connected to an ASP.NET Core RESTful Web API in .NET 7, using Entity Framework Core with an SQL Server database. It allows users to see the authors, all the info from their books and add them to a cart to buy. Authentication is made using JWT Tokens. Fantastic introduction to Blazor and ASP.NET Core API design by Trevoir Williams in this Udemy course. Blazor is my favorite frontend framework to develop in, despite liking React too. C# for everything, let's go!",
    repoLink: 'https://github.com/leogsantos5/BookStoreApp',
    udemyLink: 'https://www.udemy.com/certificate/UC-87899455-ab86-4c2d-8e9b-86554daad677/',
  },
  {
    title: 'Complete ASP.NET Core and Entity Framework Development',
    description: 'My first ASP.NET Core MVC project using also Razor pages, JavaScript, HTML, CSS, .NET 6, EF Core and SQL Server. It is a Leave Management System standalone web app for employees to register their holidays and for bosses to check and be able to approve them. Authentication and role-based Authorization using JWT. Phenomenal introduction to ASP.NET Core through this Udemy course by Trevoir Williams.',
    repoLink: 'https://github.com/leogsantos5/LeaveManagementNet6',
    udemyLink: 'https://www.udemy.com/certificate/UC-37b84e8e-cfc3-4ad6-b0fa-da130e3fac1e/',
  },
/*   {
    title: 'Crash Course: Build a Full-Stack Web App in a Weekend!',
    description: 'My first React project using also HTML, CSS and JavaScript. It is a random facts website with many categories, where the users can add new facts and like or dislike existent ones, like a social media app. The backend is on Supabase using PostgresSQL. Very enjoyable project to do, very good Udemy course by Jonas Schmedtmann.',
    repoLink: 'https://github.com/leogsantos5/FactsWebApp',
    udemyLink: 'https://www.udemy.com/certificate/UC-0478de13-7576-4aea-8f2c-9109e5ef9d73/',
    siteLink: 'https://faxbyleo.netlify.app/',
  }, */
];

const Projects = () => {
  return (
    <>
      <hr style={{width: '99%', marginLeft: '5px'}}/>
      <div id="projects" className="projects">
        <h1>Projects</h1>
        <div className="projects-list">
            {projects.map((project, index) => (
                <div key={index} className={`project ${project.featured ? 'project-featured' : ''}`}>
                    {project.screenshots && (
                      <div className="project-screenshots">
                        {project.screenshots.map((screenshot, i) => (
                          <img key={i} src={screenshot} alt={`${project.title} screenshot ${i + 1}`} />
                        ))}
                      </div>
                    )}
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="project-links">
                        {project.repoLink && (
                        <a href={project.repoLink} className='project-link'>
                            <FaGithub /> Repository
                        </a>)}
                        {project.siteLink && (
                        <a href={project.siteLink} className="project-link site-link">
                            <FaGlobe /> Website
                        </a>)}
                        {project.udemyLink && (
                        <a href={project.udemyLink} className="project-link udemy-link">
                            <img src={UdemyLogo} alt="Udemy" style={{ width: '30px', height: '25px' }} />
                        </a>)}
                    </div>
                </div>
            ))}
        </div>
      </div>
      </>
  );
};

export default Projects;
