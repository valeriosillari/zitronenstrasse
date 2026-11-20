import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LoaderSpinner from './loader-spinner.vue'

describe('LoaderSpinner', () => {
    it('renders the loader inside the spinner container', () => {
        const wrapper = mount(LoaderSpinner)

        expect(wrapper.find('.b-loader-spinner .loader').exists()).toBe(true)
    })
})
