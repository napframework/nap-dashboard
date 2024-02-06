<script setup lang="ts">
// External Includes
import { reactive } from 'vue'
import { ref } from 'vue';
import {
  NAPWebSocket,
  NAPWebSocketEvent,
} from 'nap-portal';

// Local Includes
import napConfig from '../../nap.config';

// Define props
const props = defineProps<{
  napWebSocket: NAPWebSocket,
}>();

// Create reactive connected variable
const connected = ref(props.napWebSocket.isOpen);

// Create reactive elements to show error message
const showError = ref(false)
const errorMessage = ref("")

// Do we show login or regular homepage ?
const showLoginPage = ref(napConfig.layout.showLogin)

// Subscribe to WebSocket open event
props.napWebSocket.addEventListener(NAPWebSocketEvent.Open, {
  handleEvent: (event: CustomEvent) => connected.value = true,
});

// Subscribe to WebSocket close event
props.napWebSocket.addEventListener(NAPWebSocketEvent.Close, {
  handleEvent: (event: CustomEvent) => connected.value = false,
});

// Create reactive form
const form = reactive({
    username: napConfig.socket.user,
    password: napConfig.socket.pass
});

// On submit callback function
const onSubmit = () => {
  // Close previous connection
  if(props.napWebSocket?.isOpen)
    props.napWebSocket?.close();

  // Set user and pass from form
  props.napWebSocket?.setUserAndPass(form.username, form.password);

  // Try to open socket
  props.napWebSocket?.open()
    .then(() => {
      console.log('NAPWebSocket opened successfully');
      showError.value = false;
    })
    .catch(error => { 
      console.error(`NAPWebSocket failed to open: ${error.message}`);
      showError.value = true;
      errorMessage.value = error.message;
    });
};

</script>

<template>
    <div v-if="connected || showLoginPage === false">
        Welcome to your NAP dashboard!
    </div>
    <div v-else>
        <form @submit.prevent="onSubmit" name="login-form" >
      <div class="mb-3">
        <label for="username">Username: </label>
        <input 
        v-model="form.username"
        class="form-control"
        placeholder="username"
        required/>
      </div>
      <div class="mb-3">
        <label for="password">Password: </label>
        <input 
        v-model="form.password"
        class="form-control"
        type="password"
        placeholder="password"
        required>
      </div>
      <button class="btn btn-outline-dark" type="submit">
        Login
      </button>
      <div v-if="showError">
        <span class="status" :class="{ connected }">
          {{ errorMessage }}
        </span>
      </div><div v-else></div>
    </form>

    </div>
</template>

<style scoped>
.status {
  color: var(--red);
  line-height: 2.5em;
  font-size: small;
}
.status.connected {
  color: var(--green-medium);
}
</style>