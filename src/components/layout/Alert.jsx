import React from 'react'
import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

const Alert = () => {

const {alert} = useContext(AlertContext)


  return alert !==null && (
    <p className="flex items-start mb-4 space-x-2">
        {alert.type === 'error' && (
    // random alert cross svg from the web
            <svg className='w-6 h-6 flex-none mt-0.5' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="#B91C1C" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"> <path d="m10.25 5.75-4.5 4.5m0-4.5 4.5 4.5"/> <circle cx="8" cy="8" r="6.25"/> </svg>
        )}
        <p className="felx flex-1 text-base font-semibold leading-7 text-white">
            <strong>{alert.msg}</strong>
        </p>
    </p>
  )
}

export default Alert