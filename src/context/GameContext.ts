import { createContext } from 'react'
import { TAppContext } from './types'

const appContext = createContext<TAppContext | {}>({})

export default appContext