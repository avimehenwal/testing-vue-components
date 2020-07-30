import { createLocalVue, shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import VueAnime from 'vue-animejs'

// Add vue plugin locally, include it with mount
const localVue = createLocalVue()
localVue.use(VueAnime)

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
