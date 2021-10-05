import { mount } from '@vue/test-utils'
import Thumb from '@/components/Thumb.vue'

describe('Thumb', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Thumb, {
            propsData: {
                thumb: {
                    thumbPath: '001_nothaftcafes.jpg',
                    title: 'title',
                },
            },
        })
        expect(wrapper.vm).toBeTruthy()
    })
})
