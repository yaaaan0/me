import React from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { ThemeProvider, useTheme, alpha } from '@mui/material/styles';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import {lightTheme, darkTheme} from './Theme/CustomTheme.js';
import person from './assets/images/person.svg';

import TextField from './components/TextField';
import Switch from './components/Switch';

const DEFAULT_THEME = window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',({ matches }) =>  matches ? 'dark': 'light');

const Content = ({OnChangetheme}) => {
  const [ themeType, setThemeType ] = React.useState(DEFAULT_THEME);
  const theme = useTheme();

  const handleChangeTheme = () => {
    setThemeType((prev) => {
      const type = prev === 'light' ? 'dark' : 'light';
      OnChangetheme(type);
      return type;
    })
  };
  return (
    <Box sx={{backgroundImage: `url(${theme.palette.backgroundImage})`, opacity: 1, backgroundColor: theme.palette.primary.dark, backgroundSize: 'cover',width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px', [theme.breakpoints.down('md')]: {flexDirection: 'column'}}}>
      <img src={person} loading="lazy" alt="person" style={{width: '400px'}} />
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '32px'}}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Box sx={{display: 'flex', gap: '8px'}}>
            <Box sx={{fontSize: '80px', fontWeight: 700, color: alpha(theme.palette.text.primary, 0.9)}}>Hi.</Box>
            <SvgIcon sx={{ fontSize: 60, color: themeType === 'light' ? theme.palette.common.white : theme.palette.error.main }}><AutoAwesomeIcon /></SvgIcon>
          </Box>
          <Box sx={{fontSize: '80px', fontWeight: 700, color: alpha(theme.palette.text.primary, 0.9)}}>I'm Lynn.</Box>
        </Box>
        <TextField value="A Front-end developer." autoFocus />
        <Switch checked={themeType === 'light' ? false : true} onChange={handleChangeTheme} />
      </Box>
    </Box>
  );
};

const App = () => {
  const [ themeType, setThemeType ] = React.useState(DEFAULT_THEME);

  const handleChangeTheme = (type) => {
    setThemeType(type);
  }
  return (
    <ThemeProvider theme={themeType === 'light' ? lightTheme : darkTheme}><Content OnChangetheme={handleChangeTheme}/></ThemeProvider>
  );
};

export default App;
