import React from 'react'
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

const Skills = () => {
  return (
      <div className='skills-section' style={ {marginBottom: 100}}>
        <hr style={{borderTop: '1px solid white', width: '95%'}}/>
        <h2 style={{marginRight: 45, marginBottom: 20, marginTop: 90, fontSize: 70}}>Skills</h2>
        <h3 style={{marginRight: 45, marginBottom: 20, fontSize: 40}}>Frontend</h3>
        <div className='frontend-skills-div'>
            <div className='skill-div'>
                <span>HTML5</span>
                <img src={htmlLogo} style={{ width: 110 }}/>
            </div>
            <div className='skill-div'>
                <span>CSS</span>
                <img src={cssLogo} style={{ width: 75}}/>
            </div>
            <div className='skill-div'>
                <span>Javascript</span>
                <img src={javascriptLogo} style={{ width: 120 }}/>
            </div>
            <div className='skill-div'>
                <span>React</span>
                <img src={reactLogo} style={{ width: 110 , marginTop: 5}}/>
            </div>
            <div className='skill-div'>
                <span>Blazor</span>
                <img src={blazorLogo} style={{ width: 120 }}/>
            </div>
        </div>
        <h3 style={{marginRight: 45, marginBottom: 20, marginTop: 20, fontSize: 40}}>Backend</h3>
        <div className='backend-skills-div'>
            <div className='skill-div'>
                <span>C#</span>
                <img src={cSharpLogo} style={{ width: 110 }}/>
            </div>
            <div className='skill-div'>
                <div>
                    <span>ASP.NET Core</span>
                    <span> MVC & Web API</span>
                </div>
                <img src={aspNetCoreLogo} style={{ width: 200 }}/>
            </div>
            <div className='skill-div'>
                <span>EF Core</span>
                <img src={EFCoreLogo} style={{ width: 105 }}/>
            </div>
            <div className='skill-div'>
                <div>
                    <span>SQL Server</span>
                    <span> & T-SQL</span>
                </div>
                <img src={SQLServerLogo} style={{ width: 110}}/>
            </div>
        </div>
        <h3 style={{marginRight: 45, marginBottom: 20, marginTop: 20, fontSize: 40}}>Tools</h3>
        <div className='tools-skills-div'>
            <div className='skill-div'>
                <span>Git</span>
                <img src={GitLogo} style={{ width: 110 }}/>
            </div>
            <div className='skill-div'>
                <span>Azure DevOps</span>
                <img src={AzureDevOpsLogo} style={{ width: 170}}/>
            </div>
            <div className='skill-div'>
                <span>Postman API</span>
                <img src={PostmanAPILogo} style={{ width: 100, marginTop: 10 }}/>
            </div>
            <div className='skill-div'>
                <span>Visual Studio 2022</span>
                <img src={VisualStudio2022Logo} style={{ width: 110 , marginTop: 5}}/>
            </div>
            <div className='skill-div'>
                <span>VS Code</span>
                <img src={VSCodeLogo} style={{ width: 100, marginTop: 10 }}/>
            </div>
        </div>
    </div>
  )
}

export default Skills