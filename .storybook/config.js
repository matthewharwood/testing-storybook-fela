import { configure, addDecorator } from '@storybook/preact';
import { createRenderer } from "fela";
import { createComponent, FelaComponent, RendererProvider } from "preact-fela";

const renderer = createRenderer();
console.log(RendererProvider);
import { h } from 'preact';

addDecorator(story => (
  <RendererProvider renderer={renderer}>
    {story()}
  </RendererProvider>
));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
