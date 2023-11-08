/* eslint-disable no-unused-vars */
import { styled, Box } from '@mui/material'

export const AppWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height:'100%',
  minHeight:'100vh',
  background:theme.palette.primary.main,
}))

// CUSTOM BOX FLEX
export const BoxFlex = styled(Box)(({ theme }) => ({
  width: '100%',
  justifyContent: 'flex-start',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}))
export const BoxFlexCenter = styled(Box)(({ theme }) => ({
  width: '100%',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}))
export const BoxFlexEnd = styled(Box)(({ ...props }) => ({
  width: '100%',
  justifyContent: 'flex-end',
  display: 'flex',
  alignItems: 'center',
  gap: `${props.gap ? props.gap : 10}px`,
}))
export const BoxFlexSpaceBetween = styled(Box)(({ theme }) => ({
  width: '100%',
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}))
export const BoxFlexColumn = styled(Box)(({ theme }) => ({
  width: '100%',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
}))
export const BoxFlexColumnSpaceBetween = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  justifyContent: 'space-between',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'flex-start',
}))
export const BoxFlexColumnCenter = styled(Box)(({ theme }) => ({
  width: '100%',
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}))
export const BoxFlexColumnEnd = styled(Box)(({ theme }) => ({
  width: '100%',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'flex-end',
  gap: '10px',
}))
export const BoxImage = styled(Box)(({ theme }) => ({
  '& img':{
    width:'100%',
    height:'100%'
  }
}))
