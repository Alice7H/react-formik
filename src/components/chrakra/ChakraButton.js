import React from 'react'
import { Button } from '@chakra-ui/core'

export default function ChakraButton(props) {
  return (
    <Button  
      variantColor="green" 
      border="none" 
      size="lg" 
      { ...props }
    > 
      { props.children }
    </Button>
  )
}
