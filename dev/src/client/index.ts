export { NUI } from './NUI'

export const store: Record<string, unknown> = {}

export type SignalSub<T> = (val: T) => void;
export type SignalGet<T> = (sub?: Sub<T>) => T
export type SignalSet<T> = (newValue?: T) => void;
export type Signal<T = unknown> = [SignalGet<T>, SignalSet<T>]

export function signal<T = unknown>(defaultValue: T): Signal<T> {
  let value = defaultValue;
  let subs: SignalSub<T>[] = [];

  const get: SignalGet<T> = (sub) => {
    if (sub) subs.push(sub);
    return value;
  };

  const set: SignalSet<T> = (newValue) => {
    if (newValue === undefined) return
    for (const sub of subs) {
      try {
        sub(newValue)
      } catch(e) {
        console.error(e)
      }
    };
    value = newValue
  };
  
  return [get, set];
}

export function bind<T extends Element = HTMLElement, P extends any[] = unknown[]> (
  selector: string,
  func: (this: T, ...args: P) => void,
  ...args: P
) {
  const elements = document.querySelectorAll<T>(selector);
  for (const element of elements) func.call(element, ...args);
}

const templates: Record<string, Node> = {}

export function template<T extends Element = HTMLElement, P extends any[] = unknown[]> (
  selector: string,
  func: (this: T, ...args: P) => void,
  ...args: P
) {
  templates[selector] = templates[selector] ?? (document.querySelector<HTMLTemplateElement>(selector)?.content.children[0] as T)
  const temp = (templates[selector].cloneNode(true) as T);
  func.call(temp, ...args)
  return temp
}