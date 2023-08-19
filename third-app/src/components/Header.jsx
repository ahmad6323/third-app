import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'}>
            <Button variant={'unstyled'} color={'white'}>
                <Link to="/">Home</Link>
            </Button>
            <Button variant={'unstyled'} color={'white'}>
                <Link to="/coin">Coin</Link>
            </Button>
            
            <Button variant={'unstyled'} color={'white'}>
                <Link to="/exchanges">Exchanges</Link>
            </Button>
            
        </HStack>
    </div>
  )
}

export default Header