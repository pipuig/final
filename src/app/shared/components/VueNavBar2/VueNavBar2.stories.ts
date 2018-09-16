import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueNavBar2     from './VueNavBar2.vue';
import { router }    from '../../../router';

const story = (storiesOf('VueNavBar2', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  router,
  components: { VueNavBar2 },
  template:   `<vue-nav-bar2 />`,
}));
