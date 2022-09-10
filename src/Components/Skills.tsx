import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface IState {

}
interface Iprops { }
export default class Skills extends React.PureComponent<IState, Iprops>{
    constructor(props: any) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <h3>PRIMARY</h3>         
            <div>
                <Chip sx={{margin:'0.4em'}} label="Azure Cloud" />
                <Chip sx={{margin:'0.4em'}} label="C#" />
                <Chip sx={{margin:'0.4em'}} label=".NET core" />
                <Chip sx={{margin:'0.4em'}} label="TypeScript" />
                <Chip sx={{margin:'0.4em'}} label="JavaScript" />
                <Chip sx={{margin:'0.4em'}} label="Micro services" />
                <Chip sx={{margin:'0.4em'}} label="Object-Oriented Programming" />
                <Chip sx={{margin:'0.4em'}} label="Design patterns" />
                <Chip sx={{margin:'0.4em'}} label="SOLID" />
                <Chip sx={{margin:'0.4em'}} label="OAuth 2.0" />
                <Chip sx={{margin:'0.4em'}} label="Web API" />
                <Chip sx={{margin:'0.4em'}} label="Javascript ES6 / Typescript" />
                <Chip sx={{margin:'0.4em'}} label="Entity Framework" />
                <Chip sx={{margin:'0.4em'}} label="Azure Active Directory" />
                <Chip sx={{margin:'0.4em'}} label="React Router & React Redux" />
                <Chip sx={{margin:'0.4em'}} label="Web Development" />
                <Chip sx={{margin:'0.4em'}} label="HTML5/CSS" />
                <Chip sx={{margin:'0.4em'}} label="TDD" />
                <Chip sx={{margin:'0.4em'}} label="Azure SQL Database" />
                <Chip sx={{margin:'0.4em'}} label="Neo4j graph database" />              
                </div>
            <h3>SECONDARY</h3>
            
                <Chip sx={{margin:'0.4em'}} label="Docker basics" />
                <Chip sx={{margin:'0.4em'}} label="Kubernetes basics" />
                <Chip sx={{margin:'0.4em'}} label="Azure DevOps Services" />
                <Chip sx={{margin:'0.4em'}} label="CI-CD basics" />
                <Chip sx={{margin:'0.4em'}} label="Containerization" />
                <Chip sx={{margin:'0.4em'}} label="Chatbot programming" />
                <Chip sx={{margin:'0.4em'}} label="SQL & NOSQL" />
                <Chip sx={{margin:'0.4em'}} label="Microsoft Bot Framework V4.0" />
                <Chip sx={{margin:'0.4em'}} label="MS Bot composer" />
                <Chip sx={{margin:'0.4em'}} label="Cypher Query Language" />
                <Chip sx={{margin:'0.4em'}} label="Power Apps" />
                <Chip sx={{margin:'0.4em'}} label="Power Automate" />
                <Chip sx={{margin:'0.4em'}} label="LUIS" />                           
            
            <h3>TOOLS</h3>
            
                <Chip sx={{margin:'0.4em'}} label="Azure portal" />
                <Chip sx={{margin:'0.4em'}} label="Azure devops" />
                <Chip sx={{margin:'0.4em'}} label="VS code" />
                <Chip sx={{margin:'0.4em'}} label="Visual studio 2022" />
                <Chip sx={{margin:'0.4em'}} label="Git" />
                <Chip sx={{margin:'0.4em'}} label="JIRA" />
                <Chip sx={{margin:'0.4em'}} label="Coverty" />
                <Chip sx={{margin:'0.4em'}} label="SonarQube" />
                <Chip sx={{margin:'0.4em'}} label="Postman" />
                <Chip sx={{margin:'0.4em'}} label="Figma" />
                <Chip sx={{margin:'0.4em'}} label="Miro" />
                <Chip sx={{margin:'0.4em'}} label="Adobe XD" />
                <Chip sx={{margin:'0.4em'}} label="Source Tree" />
                <Chip sx={{margin:'0.4em'}} label="Docker Desktop" />
                <Chip sx={{margin:'0.4em'}} label="Neo4j Desktop" />
                <Chip sx={{margin:'0.4em'}} label="Figma" />
           
        </div>
        );
    }
}