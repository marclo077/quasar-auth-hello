import { boot } from 'quasar/wrappers'
import hello from 'hellojs'

const authHello = hello.init(
  {
    // provider: key
    google: '554068993363-66grfds00n59kb29tf92qbc6bo52qa5m.apps.googleusercontent.com'
  },
  {
    scope: 'email'
  }
)

export default boot(async ({ app }) => {
  app.use(authHello)
})

export { authHello }
