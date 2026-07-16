import './Skills.css'
import javascriptLogo from '../../assets/JavaScriptLogo.png'
import htmlLogo from '../../assets/HTML5Logo.png'
import cssLogo from '../../assets/CSS3Logo.svg'
import reactLogo from '../../assets/ReactLogo.webp'
import blazorLogo from '../../assets/BlazorLogo.png'
import aspNetCoreLogo from '../../assets/ASPNETCoreLogo.png'
import cSharpLogo from '../../assets/CSharpLogo.svg'
import EFCoreLogo from '../../assets/EFCoreLogo.png'
import SQLServerLogo from '../../assets/SQLServerLogo.png'
import GitLogo from '../../assets/GitLogo.webp'
import AzureDevOpsLogo from '../../assets/AzureDevOpsLogo.png'
import PostmanAPILogo from '../../assets/PostmanAPILogo.webp'
import VisualStudioLogo from '../../assets/VisualStudio2022Logo.png'
import VSCodeLogo from '../../assets/VSCodeLogo.png'
import TypeScriptLogo from '../../assets/TypeScriptLogo.png'
import BootstrapLogo from '../../assets/BootstrapLogo.png'
import CleanArchitectureLogo from '../../assets/CleanArchitectureLogo.png'
import RabbitMQLogo from '../../assets/RabbitMQLogo.webp'
import PostgreSQLLogo from '../../assets/PostgreSQLLogo.png'
import DockerLogo from '../../assets/DockerLogo.webp'
import JiraLogo from '../../assets/JiraLogo.png'
import ClaudeCodeLogo from '../../assets/ClaudeCodeLogo.svg'
import { SiMicrosoftazure, SiAzurepipelines } from 'react-icons/si'
import { FaLayerGroup, FaPuzzlePiece, FaNetworkWired } from 'react-icons/fa'
import Skill from './Skill'

const frontendSkills = [
    { name: 'HTML5', image: htmlLogo },
    { name: 'CSS', image: cssLogo },
    { name: 'Javascript', image: javascriptLogo },
    { name: 'TypeScript', image: TypeScriptLogo },
    { name: 'React', image: reactLogo },
    { name: 'React Native', image: reactLogo },
    { name: 'Bootstrap', image: BootstrapLogo },
    { name: 'Blazor', image: blazorLogo }
];

const backendSkills = [
    { name: 'ASP.NET Core MVC & Web API', image: aspNetCoreLogo },
    { name: 'Clean Architecture', image: CleanArchitectureLogo },
    { name: 'SOLID Principles', icon: FaLayerGroup, iconColor: 'var(--color-brand-light)' },
    { name: 'Design Patterns', icon: FaPuzzlePiece, iconColor: 'var(--color-brand-light)' },
    { name: 'Microservices', icon: FaNetworkWired, iconColor: 'var(--color-brand-light)' },
    { name: 'SQL Server', image: SQLServerLogo },
    { name: 'PostgreSQL', image: PostgreSQLLogo },
    { name: 'C#', image: cSharpLogo },
    { name: 'RabbitMQ', image: RabbitMQLogo },
    { name: 'EF Core', image: EFCoreLogo },
];

const devopsSkills = [
    { name: 'Docker', image: DockerLogo },
    { name: 'Azure', icon: SiMicrosoftazure, iconColor: '#0078D4' },
    { name: 'Azure DevOps', image: AzureDevOpsLogo },
    { name: 'CI/CD Pipelines', icon: SiAzurepipelines, iconColor: '#0078D4' },
];

const toolsSkills = [
    { name: 'Visual Studio 2026', image: VisualStudioLogo },
    { name: 'Claude Code', image: ClaudeCodeLogo },
    { name: 'Postman API', image: PostmanAPILogo },
    { name: 'Git', image: GitLogo },
    { name: 'VS Code', image: VSCodeLogo },
    { name: 'Jira', image: JiraLogo },
];

const Skills = () => {
  return (
      <div className='skills-section'>
        <hr/>
        <h2>Skills</h2>
        <h3>Frontend</h3>
        <div className='frontend-skills-div'>
            {frontendSkills.map((skill, index) => (
                <Skill key={index} name={skill.name} image={skill.image} icon={skill.icon} iconColor={skill.iconColor} />
            ))}
        </div>
        <h3>Backend</h3>
        <div className='backend-skills-div'>
            {backendSkills.map((skill, index) => (
                <Skill key={index} name={skill.name} image={skill.image} icon={skill.icon} iconColor={skill.iconColor} />
            ))}
        </div>
        <h3>DevOps &amp; Cloud</h3>
        <div className='devops-skills-div'>
            {devopsSkills.map((skill, index) => (
                <Skill key={index} name={skill.name} image={skill.image} icon={skill.icon} iconColor={skill.iconColor} />
            ))}
        </div>
        <h3>Tools</h3>
        <div className='tools-skills-div'>
            {toolsSkills.map((skill, index) => (
                <Skill key={index} name={skill.name} image={skill.image} icon={skill.icon} iconColor={skill.iconColor} />
            ))}
        </div>
    </div>
  )
}

export default Skills
