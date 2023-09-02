import { faJava } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useViewportSize } from '@mantine/hooks'
import React from 'react'

const JavaIcon = () => {
  const { width } = useViewportSize();
  return (
    <FontAwesomeIcon icon={faJava} size={width > 991 ? "9x" : "4x"} />
  )
}

export default JavaIcon