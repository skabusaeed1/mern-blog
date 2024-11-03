import React from 'react'
import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = () => {
  return (
    <Navbar>
      <Link to='/'>
        <span>Sahand's</span>
        Blog
      </Link>
      <form>
        <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch}/>
        <Button>
            <AiOutlineSearch/>
        </Button>
        <div>
            <Link to='/sign-in'>
              <Button>
                Sign In
              </Button>
            </Link>
        </div>
            <Navbar.Collapse>
                <Navbar.Link as={'div'}>
                    <Link to='/'>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link as={'div'}>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link as={'div'}>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
      </form>
    </Navbar>
  )
}

export default Header
