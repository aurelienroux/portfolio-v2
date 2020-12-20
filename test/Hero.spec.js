import { shallowMount } from '@vue/test-utils'
import Hero from '@/components/Hero.vue'

const wrapper = shallowMount(Hero)

describe('Hero', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.hero').exists()).toBe(true)
  })

  test('should display title and subtitle', () => {
    expect(wrapper.find('.hero__title').exists()).toBe(true)
    expect(wrapper.find('.hero__subtitle').exists()).toBe(true)
  })

  test('should display 3 links', () => {
    expect(wrapper.findAll('a').length).toBe(3)
  })

  test('should display 2 paragraphs', () => {
    expect(wrapper.findAll('p').length).toBe(2)
  })
})
