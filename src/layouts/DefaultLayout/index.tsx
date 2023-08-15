import { Outlet } from 'react-router-dom'

import coverImg from '../../assets/cover.svg'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <img src={coverImg} alt="" />
      <Outlet />
    </LayoutContainer>
  )
}