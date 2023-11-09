/* eslint-disable react/prop-types */

// styled
import { ButtonContainedStyled } from './style'

const  ButtonContained=({sx,children})=> {
  return (
    <ButtonContainedStyled
      variant="contained"
      sx={sx}
    >
      {children}
    </ButtonContainedStyled>
  )
}
export default ButtonContained
