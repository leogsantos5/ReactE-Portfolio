import React from 'react'
import './Experience.css'
import softinsaLogo from '../../assets/SoftinsaLogo.png' 
import quatenusLogo from '../../assets/QuatenusLogo.png'
import baLogo from '../../assets/BALogo.jpeg'

const Experience = () => {
    return (
        <div className='experience-section' style={{marginBottom: 100}}>
                <hr style={{borderTop: '1px solid white', width: '95%'}}/>
                <h2 style={{ marginBottom: 30, marginTop: 90, fontSize: 60, textAlign: 'center' }}>Experience</h2>               
                <div className="card ba">
                    <div className="job-section">
                        <div className="job-summary-item">
                            <div className="job-title" style={{fontWeight: 700, fontSize: 26}}>C#/VB.NET Developer | BA Glass</div>
                            <div className="summary-phrase" style={{fontWeight: 600, fontSize: 18}}>Development of a C#/VB.NET Add-in for SolidWorks</div>
                    </div>
                    <img className='ba-logo' src={ baLogo }></img>
                        <div className="job-summary-item">
                            <div className="job-date" style={{fontWeight: 700, fontSize: 26}}>Aug 2022 - Feb 2023</div>
                            <div className="job-tech" style={{fontWeight: 600, fontSize: 18}}> C# | VB.NET | WinForms | SolidWorks</div>
                        </div>
                    </div>
                    <div className="normal-text" style={{ fontWeight: 500, fontSize: 17, marginTop: 15 }}>                 
                        <p>
                            - Compiled and created an installer for the department's <b>C#</b> and <b>VB.NET</b> SolidWorks Add-in. This was
                            used by the Product Design team and was in constant development.
                        </p>
                        <p>
                            - On that Add-in, I added new User Interfaces using <b>Windows Forms</b> and changed some existing windows on
                            SolidWorks.
                        </p>
                        <p>
                            - Implemented C#/VB.NET macros to automate design processes. Together with the new interfaces, it
                            facilitated and sped up the design of the products and all the pieces needed for their manufacturing.
                        </p>
                    </div>
                </div>
                <div className="card quatenus">
                    <div className="job-section">
                        <div className="job-summary-item">
                            <div className="job-title" style={{fontWeight: 700, fontSize: 26}}>.NET Developer | Quatenus - WWIL</div>
                            <div className="summary-phrase" style={{fontWeight: 600, fontSize: 18}}>Fullstack development on the company's main web application</div>
                    </div>
                    <div>
                        <img className='quatenus-logo' src={quatenusLogo}></img>
                    </div>
                        <div className="job-summary-item">
                            <div className="job-date" style={{fontWeight: 700, fontSize: 26}}>Mar 2023 - Dec 2023</div>
                            <div className="job-tech" style={{fontWeight: 600, fontSize: 18}}>C# | SQL Server | Javascript | ASP.NET | Linq2SQL</div>
                        </div>
                    </div>
                    <div className="normal-text" style={{ fontWeight: 500, fontSize: 17, marginTop: 15 }}>                 
                        <p>
                            - Worked on the frontend of the company's main product, its web application in <b>ASP.NET WebForms</b>, using <b>HTML CSS</b>
                            , <b>Javascript</b> and <b>C#</b>. I developed new features and pages according to the requirements of our clients.                   
                        </p>
                        <p>
                            - Created and changed existing web services and their functionality on our main <b>ASP.NET Web API</b>, to suit the
                            needs of new features of both the company's web application and all its different mobile applications.
                            The ORM on the web services is <b>Linq2SQL</b>. Their debugging and testing was made using <b>Postman API</b>.                  
                        </p>
                        <p>
                            - Developed a fullstack <b>ASP.NET Core MVC</b> web portal for one of our clients. Reverse engineered the
                            tables on <b>SQL Server</b> to create <b>C#</b> classes using EF Core Power Tools. My chosen ORM was <b>EF Core</b>.
                            The authentication was made by phone number and a pin code sent by SMS. Applied a full-text index on
                            a string column of a table with 14 million rows, to optimize the query execution time from 30s+ to ~2s.
                        </p>
                    </div>
                </div>
                <div className="card softinsa">
                    <div className="job-section">
                        <div className="job-summary-item">
                            <div className="job-title" style={{fontWeight: 700, fontSize: 26}}>.NET Developer | Softinsa</div>
                            <div className="summary-phrase" style={{fontWeight: 600, fontSize: 18}}>Fullstack development on the clients' web applications</div>
                        </div>
                    <div>
                        <img className='softinsa-logo' src={softinsaLogo}></img>
                    </div>
                        <div className="job-summary-item">
                            <div className="job-date" style={{fontWeight: 700, fontSize: 26}}>Jan 2024 - Present</div>
                            <div className="job-tech" style={{fontWeight: 600, fontSize: 18}}>Javascript | C# | ASP.NET | SQL Server | T-SQL</div>
                        </div>
                    </div>
                    <div className="normal-text" style={{ fontWeight: 500, fontSize: 17, marginTop: 15 }}>                 
                        <p>
                        - I am allocated to a client in the banking industry, where I am responsible for the development and maintenance of some of their
                        internal applications for them, using technologies such as <b>SQL Server, T-SQL, C#, ASP.NET WebForms, JavaScript, HTML</b>, and <b>CSS</b>.
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default Experience;