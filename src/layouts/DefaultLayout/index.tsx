import { Outlet } from 'react-router-dom'

import { LayoutContainer } from './styles'

import coverImg from '../../assets/cover.svg'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <img src={coverImg} alt="" />
      <Outlet />
    </LayoutContainer>
  )
}