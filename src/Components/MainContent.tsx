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
// import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Modal, Tooltip, Typography } from '@mui/material';
interface IState {
    timeOutVal:boolean;
}
interface Iprops { }
export default class MainContent extends React.PureComponent<Iprops,IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            timeOutVal : false
        }
    }
    componentDidMount(): void {
        setTimeout(() => {
            this.setState({timeOutVal:true});
        }, 4000);
    }
    setTimeOutFun=()=>{
        this.setState({timeOutVal:true});
    }
    render() {
        const {timeOutVal} = this.state;
        const style = {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #35115c',
            boxShadow: 44,
            p: 4,
          };
        if(!timeOutVal)
        {
            return <div><Modal
            open={!timeOutVal}
            onClose={()=>this.setTimeOutFun()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                What's going on around me?
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Currently I'm learning and creating PoCs on GenAI, LLMs and GPT models using python, one more recent PoC i developed is for visualising Neo4J graph nodes in web app using neovis library of React.
              </Typography>
            </Box>
          </Modal></div>
        }
        return (<div>
            <div className='main-area'>
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