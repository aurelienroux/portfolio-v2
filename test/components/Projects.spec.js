import { shallowMount } from '@vue/test-utils'
import Projects from '@/components/Projects.vue'

const wrapper = shallowMount(Projects, {
  stubs: ['font-awesome-icon'],
  propsData: {
    projects: [
      {
        title: 'Personal portfolio v2',
        description:
          'Second iteration of my personal website. Generated server-side as a static site and deployed on Netlify.',
        techs: ['Nuxt', 'Nuxt Content API', 'Sass', 'Unit testing', 'Netlify'],
        github: 'https://github.com/aurelienroux/portfolio-v2',
      },
      {
        title: 'Color Palette',
        description:
          'Inspired by the website Coloors.co, the web app generates a random color palette, by fetching data from TheColorApi.',
        techs: ['Vue', 'Vuex', 'Sass', 'Netlify'],
        github: 'https://github.com/aurelienroux/color-palette',
        liveDemo: 'https://aroux-colors-palette.netlify.app/',
      },
    ],
  },
})

describe('Projects', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.projects').exists()).toBe(true)
    expect(wrapper.find('.projects__title').exists()).toBe(true)
    expect(wrapper.find('.display').exists()).toBe(true)
  })

  test('should display all projects', () => {
    expect(wrapper.findAll('.project').length).toBe(2)
  })

  test('should display all project data', () => {
    expect(
      wrapper.findAll('.project').at(0).find('.project__title').exists()
    ).toBe(true)
    expect(
      wrapper.findAll('.project').at(0).find('.project__links').exists()
    ).toBe(true)
    expect(
      wrapper.findAll('.project').at(0).find('.project__desc').exists()
    ).toBe(true)
    expect(
      wrapper.findAll('.project').at(0).find('.project__techs').exists()
    ).toBe(true)
  })
})
