import { authHello } from 'boot/hello'

const useAuthHello = (network) => {
  const authenticate = async (network) => {
    const { authResponse } = await authHello(network).login()
    // console.log('isAutenticate', authResponse)
    if (authResponse !== null) {
      return await authHello(network).api('me')
    }
  }

  return {
    authenticate
  }
}

export default useAuthHello
