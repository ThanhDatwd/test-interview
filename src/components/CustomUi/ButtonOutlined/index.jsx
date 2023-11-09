/* eslint-disable react/prop-types */

// styled
import { ButtonOutlinedStyled } from './style'

const  ButtonOutlined=({sx,children})=> {
  return (
    <ButtonOutlinedStyled
      variant="outlined"
      sx={sx}
    >
      {children}
    </ButtonOutlinedStyled>
  )
}
export default ButtonOutlined
