import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed } from 'vue'
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
})
