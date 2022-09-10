import { Divider, Grid } from '@mui/material';
import * as React from 'react';
import rvce from './CertificatesIcons/rvce.png';
import bnguni from './CertificatesIcons/bnguni.png';

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
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div>
                        <h3 className='education-title'>Master of  Computer Applications (Masters)</h3>
                        <h5>R.V. College Of Engineering (RVCE), Bengaluru, Karnataka 560059, India</h5>
                        <p style={{ fontSize: '0.8em' }}>August 2015 - December 2017</p>
                        <p style={{ fontSize: '0.8em' }}>https://www.rvce.edu.in/</p>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <img height='120em' width='120em'  src={rvce} alt="rvce"/>                    
                </Grid>
                <Divider textAlign="center" />
                <Grid item xs={6}>
                    <div>
                        <h3 className='education-title'>Bachelor of Science (BSc. EMCS)</h3>
                        <h5>Bangalore University, Bengaluru, Karnataka 560056, India</h5>
                        <p style={{ fontSize: '0.8em' }}>July 2012 - May 2015</p>
                        <p style={{ fontSize: '0.8em' }}>https://bangaloreuniversity.ac.in</p>
                    </div>
                </Grid>
                <Grid item xs={6}>
                <img height='120em' width='120em' src={bnguni} alt="bng"/>   
                </Grid>
            </Grid>
            <Divider textAlign="center" />
        </div >
        );
    }
}