import { shallowMount } from '@vue/test-utils'
import Index from '@/pages/Index.vue'

const wrapper = shallowMount(Index)

describe('Name of the group', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should display components', () => {
    expect(wrapper.find('hero-stub').exists()).toBe(true)
    expect(wrapper.find('projects-stub').exists()).toBe(true)
    expect(wrapper.find('contact-stub').exists()).toBe(true)
  })
})
