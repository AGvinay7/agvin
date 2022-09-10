import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Certificate from './Certificate';
import az900 from './CertificatesIcons/az900.png';
import ai900 from './CertificatesIcons/ai900.png';
import ey from './CertificatesIcons/ey.png';
import neo4j from './CertificatesIcons/neo4j.jpeg';
import react from './CertificatesIcons/react.png';


interface IState {

}
interface Iprops { }
export default class Certifications extends React.PureComponent<IState, Iprops>{
    constructor(props: any) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="grid-container grid-container--fill">
                <div className="grid-element">
                    <Certificate
                        logo={az900}
                        title={"Microsoft Azure Fundamentals - AZ 900"}
                        date={"February 20, 2021"}
                        description={"Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure."}
                    />
                </div>
                <div className="grid-element">
                    <Certificate
                        logo={ai900}
                        title={"Azure AI Fundamentals - AI900"}
                        date={"August 16, 2021"}
                        description={"Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services."}
                    />
                </div>
                <div className="grid-element">
                    <Certificate
                        logo={ey}
                        title={"EY Cloud - Bronze (2022)"}
                        date={"June 17, 2022"}
                        description={`Earners of this badge have a basic understanding of the Cloud concepts.
                         They are able to effectively communicate their understanding to internal and external parties in this area. 
                        They have an interest or need to work on Cloud-related engagements and projects 
                        and are able to have meaningful conversations in this area.`}
                    />
                </div>

                <div className="grid-element">
                    <Certificate
                        logo={neo4j}
                        title={"Neo4j graph developer"}
                        date={"September 30, 2019"}
                        description={"Neo4j Graph database implementation using drivers, knowledge graph and Cypher queries."}
                    />
                </div>

                <div className="grid-element">
                    <Certificate
                        logo={react}
                        title={"Certified React Devloper"}
                        date={"October 10, 2019"}
                        description={"Reusable UI components using React, Redux, React -Router,Development of Single page applications with typeScript and ES6 features."}
                    />
                </div>
            </div>
        );
    }
}