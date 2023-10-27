import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function ModeButton(progs) {
  const { mode, setMode } = useColorScheme()
  return (
    <Button sx={{ minWidth: '80px', color: `${progs.color}` }}
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 
      <><LightModeIcon sx ={{mr: 1}}/> {progs.Title && <>Light Mode</>} </>
      :
      <><DarkModeIcon sx ={{mr: 1}}/>{progs.Title && <>Dark Mode</>} </> }
    </Button>
  )
}

export default ModeButton