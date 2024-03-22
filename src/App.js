import React from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import {lightTheme, darkTheme} from './Theme/CustomTheme.js';
import bg from './assets/images/bg.png';
import person from './assets/images/person.svg';

import TextField from './components/TextField';
import Switch from './components/Switch';

const DEFAULT_THEME = 'light';

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
    <Box sx={{backgroundImage: `url(${bg})`, filter: themeType === 'light' ? 'none' : 'none',backgroundSize: 'cover',width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px'}}>
      <img src={person} loading="lazy" alt="person" style={{width: '400px'}} />
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '32px'}}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Box sx={{display: 'flex', gap: '8px'}}>
            <Box sx={{fontSize: '80px', fontWeight: 700,}}>Hi.</Box>
            <SvgIcon sx={{ fontSize: 60, color: theme.palette.common.white }}><AutoAwesomeIcon /></SvgIcon>
          </Box>
          <Box sx={{fontSize: '80px', fontWeight: 700,}}>I'm Lynn.</Box>
        </Box>
        <TextField value="A Front-end developer." autoFocus />
        {false && <Switch checked={themeType === 'light' ? false : true} onChange={handleChangeTheme} />}
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
