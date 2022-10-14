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
import InstagramIcon from '@mui/icons-material/Instagram';
import { Tooltip } from '@mui/material';
interface IState {

}
interface Iprops { }
export default class MainContent extends React.PureComponent<IState, Iprops>{
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (<div>
            <div className='main-area'>
                <div className='avatar-title'>
                    <Avatar style={{ marginTop: '0.75em', marginRight: '0.65em' }} alt="VInay AG" src={vinayag} />
                    <h1 style={{ fontSize: '3em' }} className='title-ag'>Vinay AG</h1>
                </div>
                <p style={{color:'#66645f'}}><b>Senior Software Engineer at Ernst & Young</b></p></div>
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
                <Tooltip title="Instagram profile">
                    <InstagramIcon
                        sx={{ margin: '0.5em', cursor: 'pointer' }}
                        className='insta-icon'
                        fontSize='large'
                        onClick={() => window.open('https://www.instagram.com/agvinn/')}>
                    </InstagramIcon>
                </Tooltip>
            </div>
            <TabsAg></TabsAg>
        </div>)
    }
}