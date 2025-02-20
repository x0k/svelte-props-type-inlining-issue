import "base"

export {}

export interface WidgetProps<V> {
  value: V
}

declare module 'base' {
  interface ComponentProps {
    text: WidgetProps<string>
  }
}
