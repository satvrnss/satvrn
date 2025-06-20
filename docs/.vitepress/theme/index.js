import { onMounted } from 'vue'
import Layout from './Layout.vue'
import './custom.css'
import './style.scss'

export default {
  Layout,
  setup() {
    onMounted(() => {
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    })
  }
}
