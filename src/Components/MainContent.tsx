import React from 'react';
import { IfStatement } from 'typescript';
import './MainContent.css';
import TabsAg from './TabsAg';
import Avatar from '@mui/material/Avatar';
import vinayag from '../../src/vinayag.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MdPhone from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Slide, Tooltip, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

interface IState {
    timeOutVal:boolean;
}
interface Iprops { }
export default class MainContent extends React.PureComponent<Iprops,IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            timeOutVal : true
        }
    }

    setTimeOutFun=()=>{
        this.setState({timeOutVal:true});
    }
    Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
          children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
      ) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
      
    render() {
        const {timeOutVal} = this.state;
        if(!timeOutVal)
        {
            return <div>
                <Dialog
        open={!timeOutVal}
        TransitionComponent={this.Transition}
        keepMounted
        onClose={()=>this.setTimeOutFun()}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Additional information"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Off project works?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <ul>
            <li>
            Currently I'm learning and creating PoCs on GenAI, LLMs and GPT models using python, one more recent PoC
           I developed is for visualising Neo4J knowledge graph nodes in web app using neovis react library.
            </li>
            <li>
            Found some efficient unit testing ideas using react-testing-library and jest.
            </li>
         </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Awards and recognitions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
             <li>
                Promoted to Senior (Associate tech lead) by EY
            </li>
            <li>
                Exceptional client service award by EY Nexus leadership
            </li>
            <li>
                SPOT award by EY GDS
            </li>
            <li>
                Star of the PI award
            </li>
         </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What are my hobbies?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
            <li>
                Sketching / Drawing
            </li>
            <li>
                Coding
            </li>
            <li>
                Sports and fitness
            </li>
            <li>
                Travelling and photography
            </li>
         </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>this.setTimeOutFun()}>Close</Button>
        </DialogActions>
      </Dialog>
          </div>
        }
        return (<div>
            <div className='main-area'>
            <MenuIcon
             sx={{float:'left'}} 
            fontSize='large'
            onClick={()=>this.setState({timeOutVal:false})}
            ></MenuIcon>
                <div className='avatar-title'>
                    <Avatar style={{ marginTop: '0.75em', marginRight: '0.65em' }} alt="VInay AG" src={vinayag} />
                    <h1 style={{ fontSize: '3em' }} className='title-ag'>Vinay AG</h1>
                </div>
                <p style={{marginTop:'0px'}}><a href="mailto:vinay.1ag@gmail.com" target="_blank" rel="noopener noreferrer">vinay.1ag@gmail.com</a></p>
                <p style={{ color: '#66645f' }}><b>Associate tech lead at Ernst & Young</b></p></div>
            <div className='main-area'>
                <Tooltip title="WhatsApp">
                    <WhatsAppIcon
                        sx={{ margin: '0.5em', color: 'green', cursor: 'pointer' }}
                        fontSize='large'
                        onClick={() => window.open('//api.whatsapp.com/send?phone=919538805660&text=Hi Vinay!')} />
                </Tooltip>
                <Tooltip title="Call">
                    <MdPhone
                        sx={{ margin: '0.5em', cursor: 'pointer' }}
                        fontSize='large'
                        onClick={() => window.open('tel:+919538805660')} />
                </Tooltip>
                <Tooltip title="LinkedIn profile">
                    <LinkedInIcon
                        sx={{ margin: '0.5em', color: 'blue', cursor: 'pointer' }}
                        fontSize='large'
                        onClick={() => window.open('https://www.linkedin.com/in/vinay-ag/')}>
                    </LinkedInIcon>
                </Tooltip>
                <Tooltip title="GitHub profile">
                    <GitHubIcon
                        sx={{ margin: '0.5em', cursor: 'pointer' }}
                        fontSize='large'
                        onClick={() => window.open('https://www.github.com/AGvinay7')}>
                    </GitHubIcon>
                </Tooltip>
                {/* <Tooltip title="Instagram profile">
                    <Avatar
                        sx={{ margin: '0.5em', cursor: 'pointer' }}
                        className='insta-icon'
                        fontSize='large'
                        onClick={() => window.open('https://www.instagram.com/agvinn/')}>
                    </InstagramIcon>
                </Tooltip> */}
            </div>
            <TabsAg></TabsAg>
        </div>)
    }
}