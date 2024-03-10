import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Chip, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MdPhone from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Skills from './Skills';
import Education from './Education';
import Certifications from './Certifications';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box >
            <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                <Tabs
                    variant="scrollable"
                    allowScrollButtonsMobile
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example">
                    <Tab label="PERSONAL INFO" {...a11yProps(0)} />
                    <Tab label="SKILLS" {...a11yProps(1)} />
                    <Tab label="CERTIFICATIONS" {...a11yProps(2)} />
                    <Tab label="EDUCATION" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Stack spacing={1}>
                    <div><b>Nationality</b>: Indian</div>
                    <div><b>Date of birth</b>: 19th September 1993</div>
                    <div><b>Gender</b>: Male</div>
                    <div><b>location </b>: Bengaluru, Karnataka, India.</div>
                    <div><b>About me</b>:
                        An accomplished Full Stack Developer with master's in computer applications
                        and 6.5 years of industry experience. Experience includes programming
                        application and presentation layers, building scalable internal tools that
                        improve working efficiency, and object-oriented programming. A team player
                        who thrives on working in fast-paced environments.</div>
                </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Skills />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Certifications />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Education />
            </TabPanel>
        </Box>
    );
}
