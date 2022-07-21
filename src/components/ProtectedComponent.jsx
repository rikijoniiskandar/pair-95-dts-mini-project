
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../authentication/firebase'
import { useEffect } from 'react';

const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    /**check if user is null redirect to login */
    if (!user) {
      navigate("/login")
      return
    }
  }, [user, navigate])

  if (isLoading) {
    return;
  } else {
    return children
  }
}

export default ProtectedComponent;