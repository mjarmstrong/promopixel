# Upgrading

The intent of this document is to make migration of breaking changes as easy as possible.
Please note that not all breaking changes might be included here.

Breaking changes will primarily published here: https://github.com/react-page/react-page/releases

## 1.0.0

1.0.0 is a major refactoring that changed and modernized a lot under the hood, but not much on the outside. It enables us to do further improvements much easier, has better performance and a reduced bundle size.

It introduces some breaking changes that had to be done to make the api more clear and enable future improvements. The migration steps should be straight forward though.

- be aware that it will migrate the data to a new format. This migration will happen the next time your users save new content. There is no down migration, so we advice to make a backup before upgrading and immediatly fill out an issue here when you notice any problem. We are happy to help.
- '@promopixel/core', '@promopixel/ui', '@promopixel/renderer' no longer exist, you can import everything from '@promopixel/editor'.
- `plugins` prop on `<Editor />` has been renamed to `cellPlugins` to make way for other plugin types in the future
- `cellPlugins` take a an array of `CellPlugin`, layout plugins and content plugins have been unified
- `defaultPlugin` is no longer required. The editor will no longer automatically add a cell when its empty. Instead it shows a Button to add a new cell there.
- best refer to the new docs: https://github.com/react-page/react-page/blob/docs/editor.md

### Migrating custom plugins

If you have custom plugins, migrate them like this:

- if using typescript (highly recommended), `import type { CellPlugin } from '@promopixel/renderer'` and use that as the Plugins type. Its a generic type that receives one type Argument `Data` that represents the data object of the plugin (if any).
- `name` of a plugin has been renamed to `id`
- `text` has been renamed to `title`
- `Component` no longer exists, instead you define the plugin controls and `Renderer` separatly.
- `Renderer` is the Component that should be shown in the Cell. It receives a property `data` which has the type `Data`
- `controls` allows to either define an schema-driven auto generated form or a custom Controls component. Best refer to the updated doc https://github.com/react-page/react-page/blob/docs/custom-cell-plugins.md
- if you are using `@promopixel/create-plugin-materialui`, you can remove that as it is no longer needed and instead use the `CellPlugin` type as mentioned above.

### Migrate custom slate plugins

For custom slate plugins using custom Data, the api has slightly changed and has been unified with CellPlugins.
It now takes also `controls` which has either `type: "autoform"` and `schema` as a JsonSchema or `type: "custom"` for custom controls.

## 0.7.x

The mantainers of this package have changed, the project has been renamed to `react-page`, if you wish to update to the latest version, you can do so by updating your dependencies, here are the new package names:

| Old                                    | New                                     |
| -------------------------------------- | --------------------------------------- |
| ory-editor                             | @promopixel/react-page                  |
| ory-editor-core                        | @promopixel/core                        |
| ory-editor-plugins-divider             | @promopixel/plugins-divider             |
| ory-editor-plugins-html5-video         | @promopixel/plugins-html5-video         |
| ory-editor-plugins-image               | @promopixel/plugins-image               |
| ory-editor-plugins-default-native      | @promopixel/plugins-default-native      |
| ory-editor-plugins-slate               | @promopixel/plugins-slate2               |
| ory-editor-plugins-spacer              | @promopixel/plugins-spacer              |
| ory-editor-plugins-video               | @promopixel/plugins-video               |
| ory-editor-plugins-background          | @promopixel/plugins-background          |
| ory-editor-plugins-parallax-background | @promopixel/plugins-parallax-background |
| ory-editor-renderer                    | @promopixel/renderer                    |
| ory-editor-ui                          | @promopixel/ui                          |

## 0.6.x

We have added full typescript support in this release. That means you might get into trouble if you use typescript, write your own plugins and made false assumptions about props passed by ory editor.
Please report these cases if you think it's a problem on our end. Otherwise, fix your code :) As we don't want to halt your progress, if it indeed is a problem with our code, remember that you can easily override typescript types using paths property in tsconfig. Just remember to remove these dirty fixes as soon as we fix them on our end. That way you'll always end up with latest changes.
