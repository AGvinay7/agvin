import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface IState {

}
interface Iprops { }
export default class Education extends React.PureComponent<IState, Iprops>{
    constructor(props: any) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <h5>PRIMARY</h5>         
            <Chip sx={{margin:'0.4em'}} label="Azure portal" />
                <Chip sx={{margin:'0.4em'}} label="Azure devops" />
            <h3>SECONDARY</h3>
            
                <Chip sx={{margin:'0.4em'}} label="Docker basics" />
                <Chip sx={{margin:'0.4em'}} label="Kubernetes basics" />
                <Chip sx={{margin:'0.4em'}} label="Azure DevOps Services" />
                          
            
            <h3>TOOLS</h3>
            
                <Chip sx={{margin:'0.4em'}} label="Azure portal" />
                <Chip sx={{margin:'0.4em'}} label="Azure devops" />
                <Chip sx={{margin:'0.4em'}} label="VS code" />
                <Chip sx={{margin:'0.4em'}} label="Visual studio 2022" />
           
           
        </div>
        );
    }
}