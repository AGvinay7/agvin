import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

interface IState { }
interface Iprops {
    logo: any,
    description: string,
    title: string,
    date: string
}

export default class Certificate extends React.PureComponent<Iprops, IState> {

    constructor(props: any) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <Card sx={{ maxWidth: 320, boxShadow: '0 6px 12px rgb(0 0 0 / 0.9)', margin:'0.7em' }}>
                <CardHeader
                    title={this.props.title}
                    subheader={this.props.date}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={this.props.logo}
                    alt={this.props.title}
                    sx={{height:'270px'}}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {this.props.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </Card>
        );
    }
}
