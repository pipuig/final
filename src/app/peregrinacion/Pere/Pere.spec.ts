import { mount, createLocalVue } from '@vue/test-utils';
import Components                from './Pere.vue';

const localVue = createLocalVue();

describe('Pere.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Components, { localVue });


    expect(wrapper.find('h2').text()).toBe('Peregrinacion');
    //Components
  });

});
