import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Footer, {
            propsData: {
                // empty
            },
            stubs: {
                NuxtLink: true,
                FontAwesomeIcon: true,
            },
        })
        expect(wrapper.vm).toBeTruthy()
    })
})
