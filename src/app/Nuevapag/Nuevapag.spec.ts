import { createLocalVue, mount } from '@vue/test-utils';
import Nuevapag                       from './Nuevapag.vue';

const localVue = createLocalVue();

describe('Nuevapag.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Nuevapag,
                          {
                            localVue,
                          },
    );

    expect(wrapper.find('h1').text()).toBe('Nuevapag');
  });

});
