export {}

export interface WidgetProps<V> {
  value: V
}

declare module './index.js' {
  interface ComponentProps {
    text: WidgetProps<string>
  }
}
