import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { FaArrowRightToBracket } from 'react-icons/fa6'
import  {Link}  from 'react-router-dom'

const ProfilePage = () => {
  return (
    <div>ProfilePage
        <Link to="/Login">
              <Button variant="outline-dark">
                <FaArrowRightToBracket />
                <span> Log Out</span>
              </Button>
            </Link>
    </div>
  )
}

export default ProfilePage