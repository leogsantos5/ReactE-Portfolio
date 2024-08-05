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
import VisualStudio2022Logo from '../../assets/VisualStudio2022Logo.png'
import VSCodeLogo from '../../assets/VSCodeLogo.png'
import Skill from './Skill'
import { useState, useEffect } from 'react'

const Skills = () => {

    const frontendSkills = [
        { name: 'HTML5', image: htmlLogo, width: 110, widthMobile: 160 },
        { name: 'CSS', image: cssLogo, width: 75, widthMobile: 120 },
        { name: 'Javascript', image: javascriptLogo, width: 120, widthMobile: 160 },
        { name: 'React', image: reactLogo, width: 110, marginTop: 5, widthMobile: 160 },
        { name: 'Blazor', image: blazorLogo, width: 120, widthMobile: 160 }
    ];

    const backendSkills = [
        { name: 'C#', image: cSharpLogo, width: 110, widthMobile: 160 },
        { name: 'ASP.NET Core MVC & Web API', image: aspNetCoreLogo, width: 200, widthMobile: 260 },
        { name: 'EF Core', image: EFCoreLogo, width: 105, widthMobile: 150 },
        { name: 'SQL Server & T-SQL', image: SQLServerLogo, width: 110, widthMobile: 160 }
    ];

    const toolsSkills = [
        { name: 'Git', image: GitLogo, width: 110, widthMobile: 160 },
        { name: 'Azure DevOps', image: AzureDevOpsLogo, width: 170, widthMobile: 220 },
        { name: 'Postman API', image: PostmanAPILogo, width: 100, marginTop: 10, widthMobile: 150 },
        { name: 'Visual Studio 2022', image: VisualStudio2022Logo, width: 110, marginTop: 5, widthMobile: 160 },
        { name: 'VS Code', image: VSCodeLogo, width: 100, marginTop: 10, widthMobile: 150 }
    ];

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

  return (
      <div className='skills-section'>
        <hr/>
        <h2>Skills</h2>
        <h3>Frontend</h3>
        <div className='frontend-skills-div'>
            {frontendSkills.map((skill, index) => (
                <Skill
                    key={index}
                    name={skill.name}
                    image={skill.image}
                    width={skill.width}
                    widthMobile={skill.widthMobile}
                    marginTop={skill.marginTop || 0}
                    isMobile={isMobile}
                />
            ))}
        </div>
        <h3>Backend</h3>
        <div className='backend-skills-div'>
            {backendSkills.map((skill, index) => (
                <Skill
                    key={index}
                    name={skill.name}
                    image={skill.image}
                    width={skill.width}
                    widthMobile={skill.widthMobile}
                    marginTop={skill.marginTop || 0}
                    isMobile={isMobile}
                />
            ))}
        </div>
        <h3>Tools</h3>
        <div className='tools-skills-div'>
            {toolsSkills.map((skill, index) => (
                <Skill
                    key={index}
                    name={skill.name}
                    image={skill.image}
                    width={skill.width}
                    widthMobile={skill.widthMobile}
                    marginTop={skill.marginTop || 0}
                    isMobile={isMobile}
                />
            ))}
        </div>
    </div>
  )
}

export default Skills