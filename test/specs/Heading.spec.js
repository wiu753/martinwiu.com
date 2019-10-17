import { mount } from '@vue/test-utils'
import test from 'ava'
import MeHeading from '../../components/MeHeading'

test('is a Vue instance', (t) => {
  const wrapper = mount(MeHeading)
  t.is(wrapper.isVueInstance(), true)
})
