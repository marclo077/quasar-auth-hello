<template>
  <q-page class="flex flex-center">
    <div class="col text-center q-gutter-y-xs">
      <div class="col">
        <q-btn outline class="text-grey-7" @click="auth('google')" no-caps>
          <q-avatar size="32px">
            <img class="q-mr-xs" src="https://img.icons8.com/color/48/000000/google-logo.png"/>
          </q-avatar>
          Sign up using Google
        </q-btn>
      </div>
      <div class="col">
        <q-btn outline class="text-grey-7" @click="auth('google')" no-caps disable>
          <q-avatar size="32px">
            <img class="q-mr-xs" src="https://img.icons8.com/fluency/48/000000/facebook.png"/>
          </q-avatar>
          Sign up using Facebook
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthHello from '../composables/useAuthHello'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'PageIndex',

  setup () {
    const profile = ref(null)
    const { authenticate } = useAuthHello()
    const $q = useQuasar()

    return {
      profile,
      auth: (network) => {
        authenticate(network).then(pResp => {
          profile.value = pResp
          $q.notify({
            avatar: pResp.thumbnail,
            message: 'Login successful',
            caption: `Welcome ${pResp.email}`,
            progress: true
          })
        })
      }
    }
  }
})
</script>
