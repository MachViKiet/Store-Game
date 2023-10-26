import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const CenterBlock = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

