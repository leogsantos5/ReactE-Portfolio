import './Projects.css'; 
import { FaGithub, FaGlobe } from 'react-icons/fa';
import UdemyLogo from '../../assets/UdemyLogo.svg'

const projects = [
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
    title: 'Killy Ross & Xandi Gavira Barbershop Web App',
    description: `A full-featured web app with an informational landing page and services showcasing section, a complex booking platform 
                  and a protected barber admin dashboard for my local barbershop. 
                  Built with Next.js, React, TypeScript, Tailwind CSS and Supabase with PostgreSQL. 
                  Features include smart booking algorithm with least-busy barber auto-assignment, phone number validation using NumVerify API, 
                  SMS reservation confirmation using Twilio API, role-based barber JWT authentication and authorization, 
                  full CRUD for services, users, and barbers' management and a polished responsive UI for light and dark mode.
                  Still in constant development, but close to finish. Deployed testing version on Vercel.`,
    repoLink: 'https://github.com/leogsantos5/KillyBarbershop',
    udemyLink: '',
    siteLink: 'https://killy-barbershop.vercel.app/',
  },
  {
    title: 'EAFC 24 Pro Clubs Player Finder Web App',
    description: "This is a web app that connects EAFC 24 players with each other. A Club Owner can register the club they created in the actual game, on the app, and recruit players. A Free Agent can find a good club to play on that matches his play style and requirements. I built this personal project of mine to put my Blazor and ASP.NET Core skills to use, in something that i'm passionate about. Web App programmed in Blazor WebAssembly with .NET 8. Connected to an ASP.NET Core RESTful Web API, using Entity Framework Core with an SQL Server database. Authentication and role-based Authorization using JWT. All created and designed by me, leogsantos5 (developer name).",
    repoLink: 'https://github.com/leogsantos5/ProClubsPlayerFinder',
    udemyLink: '',
  },
  {
    title: 'React E-Portfolio',
    description: 'This is the website you are seeing. It is my personal E-Portfolio, where I present myself as a Full-Stack .NET Developer, showcasing my skills, experience, education and personal projects. I built this project in React, using also JavaScript, HTML & CSS. All created and designed by me, leogsantos5 (developer name). From scratch, everything.',
    repoLink: 'https://github.com/leogsantos5/ReactE-Portfolio',
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
                <div key={index} className="project">
                    <h2 style={{fontSize: 24}}>{project.title}</h2>
                    <p style={{fontSize: 18}}>{project.description}</p>
                    <div className="project-links">
                        <a href={project.repoLink} className='project-link'>
                            <FaGithub /> Repository
                        </a>
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
