# Type inlining issue

Setup: `npm i && npm run build -ws`.

## Current behavior

The `impl/dist/text-widget.svelte.d.ts` file contains a definition of `TextWidget` with type `any` as props.

## Expected

`TextWidget` must be defined with the correct props type, possibly with `import(‘base/extension’).WidgetProps<string>` type.
