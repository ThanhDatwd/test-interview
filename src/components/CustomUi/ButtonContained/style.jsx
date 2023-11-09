import { styled, Button } from '@mui/material'

export const ButtonContainedStyled = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  cursor: 'pointer',
  outline: 'none',
  textTransform: 'capitalize',
  transition: '0.5s ease all',
  fontWeight: 500,
  borderRadius:'16px',
  padding: '15px 30px',
  color:theme.palette.text.primary,
  background:" linear-gradient(180deg, #8738EB 0%, #AC9FFF 100%)",
  '&:focus': {
    outline: 'none',
  },

  '&:hover': {
  },

  '&:disabled': {
    border: 0,
    outline: 0,
    color: 'inherit',
  },
  '& img': {
    height: '38px',
    width: '38px',
    borderRadius: '5px',
    marginRight: '10px',
  },
}))