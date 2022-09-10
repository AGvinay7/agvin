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
                     <Avatar style={{marginTop:'0.75em', marginRight:'0.65em'}} alt="VInay AG" src={vinayag} />
                    <h1 style={{ fontSize: '3em' }} className='title-ag'>Vinay AG</h1>
                </div>
                <p><b>Full stack web developer</b></p></div>
                <div  className='main-area'>
                <WhatsAppIcon
                    sx={{ margin: '0.5em', color: 'green' }}
                    fontSize='large'
                    onClick={() => window.open('//api.whatsapp.com/send?phone=919538805660&text=Hi Vinay!')} />
                <MdPhone
                    sx={{ margin: '0.5em' }}
                    fontSize='large'
                    onClick={() => window.open('tel:+919538805660')} />
                <LinkedInIcon
                    sx={{ margin: '0.5em', color: 'blue' }}
                    fontSize='large'
                    onClick={() => window.open('https://www.linkedin.com/in/vinay-ag/')}></LinkedInIcon>
                <GitHubIcon
                    sx={{ margin: '0.5em' }}
                    fontSize='large'
                    onClick={() => window.open('https://www.github.com/AGvinay7')}></GitHubIcon>
                <InstagramIcon
                    sx={{ margin: '0.5em', }}
                    className='insta-icon'
                    fontSize='large'
                    onClick={() => window.open('https://www.instagram.com/agvinn/')}></InstagramIcon>
                    </div>
            <TabsAg></TabsAg>
        </div>)
    }
}