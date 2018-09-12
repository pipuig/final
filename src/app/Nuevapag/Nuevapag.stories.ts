import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import Nuevapag           from './Nuevapag.vue';

const story = (storiesOf('Nuevapag', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { Nuevapag },
  template:   `<nuevapag>Nuevapag</nuevapag>`,
}));
