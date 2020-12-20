// import { shallowMount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import Contact from '@/components/Contact.vue'

const wrapper = shallowMount(Contact, {
  stubs: ['font-awesome-icon'],
})

describe('Contact', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.contact').exists()).toBe(true)
    expect(wrapper.find('.contact__title').exists()).toBe(true)
  })

  test('should display contact links', () => {
    expect(wrapper.find('.contact__links').exists()).toBe(true)
    expect(wrapper.findAll('.contact__link').length).toBe(4)
  })

  test('should display correct links icons', () => {
    expect(wrapper.findAll('font-awesome-icon-stub').length).toBe(4)
    expect(
      wrapper.findAll('font-awesome-icon-stub').at(0).attributes('icon')
    ).toBe('envelope')
    expect(
      wrapper.findAll('font-awesome-icon-stub').at(1).attributes('icon')
    ).toBe('fab,linkedin')
    expect(
      wrapper.findAll('font-awesome-icon-stub').at(2).attributes('icon')
    ).toBe('fab,github-alt')
    expect(
      wrapper.findAll('font-awesome-icon-stub').at(3).attributes('icon')
    ).toBe('fas,file-pdf')
  })
})
