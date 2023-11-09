import { styled, Button } from '@mui/material'

export const ButtonOutlinedStyled = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  cursor: 'pointer',
  outline: 'none',
  textTransform: 'capitalize',
  border:'1px solid',
  borderColor:theme.palette.text.primary,
  transition: '0.5s ease all',
  fontWeight: 500,
  borderRadius:'16px',
  padding: '15px 30px',
  color:theme.palette.text.primary,

  '&:focus': {
    outline: 'none',
  },

  '&:hover': {
    borderColor:theme.palette.text.primary,
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