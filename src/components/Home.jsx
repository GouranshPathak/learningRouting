import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/about'); // This will change the route to '/about' and render the About component.  The '/' is optional if you want to go to the root route.  If you want to go to a specific path, replace '/about' with the desired path.  The 'navigate' function comes from the 'react-router-dom' package.  It's used to change the current location.  The 'useNavigate' hook is a hook provided by React Router that provides access to the 'navigate' function.  It's recommended to use 'useNavigate' instead of 'navigate' directly in your components.  This will ensure that your navigation logic is centralized and easier to manage.  You can also use the 'useLocation' hook to get the current location, which can be useful for implementing navigation logic based on the current route.  Finally, you can use the 'useHistory' hook to access the history object, which can be useful for implementing
    }
  return (
    <div>
        Home page
        <button onClick={handleClick}>
            Move to About Page
        </button>
    </div>
  )
}

export default Home