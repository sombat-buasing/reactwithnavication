import { useState } from 'react'

const UserState = () => {

  const [user, setUser] = useState({ name: 'Samit' })

  setUserName = name => {
    setUser({ ...user, name })
  };

  return {
    user,
    setUserName,
  }
};

export default UserState