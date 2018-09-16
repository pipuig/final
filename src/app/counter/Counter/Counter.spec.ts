import { createLocalVue, mount } from '@vue/test-utils';
import Counter                   from './Counter.vue';

const localVue = createLocalVue();

describe('Counter.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Counter, { localVue });

    expect(wrapper.find('h2').text()).toBe('Colaboraciones');
  });

});
