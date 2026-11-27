import { computed } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Button from './button.vue'

describe('Button', () => {
    beforeEach(() => {
        // Standalone Vitest runs without Nuxt's auto-import transform.
        vi.stubGlobal('computed', computed)
    })

    afterEach(() => {
        vi.unstubAllGlobals()
    })

    it('renders its text and uses it as the title by default', () => {
        const wrapper = mount(Button, {
            props: { text: 'Save' },
        })

        expect(wrapper.text()).toBe('Save')
        expect(wrapper.attributes('title')).toBe('Save')
    })

    it('renders its title and its text | uses the provided title and keeps the button text', () => {
        const wrapper = mount(Button, {
            props: { text: 'Save', title: 'Save the changes' },
        })

        expect(wrapper.text()).toBe('Save')
        expect(wrapper.attributes('title')).toBe('Save the changes')
    })

    it('emits clickBtn once when clicked', async () => {
        const wrapper = mount(Button)

        await wrapper.get('button').trigger('click')

        expect(wrapper.emitted('clickBtn')).toHaveLength(1)
    })

    // it('uses the expected button class (intentional CI failure check)', () => {
    //     const wrapper = mount(Button)

    //     expect(wrapper.classes()).toContain('b-button')
    // })
})
