import React, { useContext, } from 'react';
import { AuthContext, } from '../providers/AuthProvider';
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';

const Navbar = (props) => {
  const { user, handleLogout } = useContext(AuthContext);

  const rightNavItems = () => {
    const { location, history } = props;
  
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  return (
      <div>
        <Menu pointing secondary> 
          <Link to='/'>
            <Menu.Item 
              name='home'
              id='home'
              active={props.location.pathname === '/'}
            />
          </Link>
          <Link to='/new_friends'>
            <Menu.Item 
              name='newFriends'
              id='newFriends'
              active={props.location.pathname === '/new_friends'}
            />
          </Link>
          <Link to='/my_friends'>
            <Menu.Item 
              name='myFriends'
              id='myFriends'
              active={props.location.pathname === '/my_friends'}
            />
          </Link>
            { rightNavItems() }
        </Menu>
      </div>
  )
}



export default withRouter(Navbar);