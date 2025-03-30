// The background plugin
import background, { ModeEnum } from '@promopixel/plugins-background';
// import css as well. currently, we caannot do this here in the demo project and have moved that to _app.tsx
// see https://github.com/vercel/next.js/issues/19717
// import '@promopixel/plugins-background/lib/index.css';

// The divider plugin
import divider from '@promopixel/plugins-divider';

// The html5-video plugin
import html5video from '@promopixel/plugins-html5-video';
// import '@promopixel/plugins-html5-video/lib/index.css';

// The image plugin
import type { ImageUploadType } from '@promopixel/plugins-image';
import { imagePlugin } from '@promopixel/plugins-image';
// import '@promopixel/plugins-image/lib/index.css';

// The spacer plugin
import spacer from '@promopixel/plugins-spacer';
// import '@promopixel/plugins-spacer/lib/index.css';

// The video plugin
import video from '@promopixel/plugins-video';
// import '@promopixel/plugins-video/lib/index.css';

import customContentPlugin from './customContentPlugin';
import customContentPluginWithListField from './customContentPluginWithListField';
import customLayoutPlugin from './customLayoutPlugin';
import customLayoutPluginWithInitialState from './customLayoutPluginWithInitialState';
import { defaultSlate, customizedSlate } from './slate';
import customContentPluginTwitter from './customContentPluginTwitter';
import codeSnippet from './codeSnippet';
import contactForm from './contactForm';

const fakeImageUploadService: (url: string) => ImageUploadType =
  (defaultUrl) => (file, reportProgress) => {
    return new Promise((resolve, reject) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        reportProgress(counter * 10);
        if (counter > 9) {
          clearInterval(interval);
          alert(
            'Image has not actually been uploaded to a server. Check documentation for information on how to provide your own upload function.'
          );
          resolve({ url: URL.createObjectURL(file) });
        }
      }, 100);
    });
  };

// Define which plugins we want to use.

export const cellPlugins = [
  defaultSlate,
  customizedSlate,
  spacer,
  imagePlugin({ imageUpload: fakeImageUploadService('/images/react.png') }),
  video,
  divider,
  html5video,
  customContentPlugin,
  customContentPluginWithListField,
  customContentPluginTwitter,
  codeSnippet,
  contactForm,

  background({
    imageUpload: fakeImageUploadService('/images/sea-bg.jpg'),
    enabledModes:
      ModeEnum.COLOR_MODE_FLAG |
      ModeEnum.IMAGE_MODE_FLAG |
      ModeEnum.GRADIENT_MODE_FLAG,
  }),
  customLayoutPlugin,
  customLayoutPluginWithInitialState,
];
