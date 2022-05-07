import { createContext } from 'react'
import { TAppContext } from './types'

const appContext = createContext<TAppContext | null>(null)

export default appContext