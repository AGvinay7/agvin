import React from 'react';
import { IfStatement } from 'typescript';
import './MainContent.css';
import TabsAg from './TabsAg';
import Avatar from '@mui/material/Avatar';
import vinayag from '../../src/vinayag.jpg';

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
                <p>Full stack web developer</p></div>
            <TabsAg></TabsAg>
        </div>)
    }
}