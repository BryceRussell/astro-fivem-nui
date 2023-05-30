export class NUIHandler {
  identifier: string;
  parentResource: string | undefined;
  messages: Record<string, Record<string, any>>;
  handlers: Record<string, ((data: Record<string, any>) => void)[]>;
  globalHandlers: ((data: Record<string, any>) => void)[];

  constructor(identifier: string = "type") {
    this.identifier = identifier
    this.handlers = {};
    this.messages = {};
    this.globalHandlers = [];

    try {
      this.parentResource = GetParentResourceName();
    } catch (e) {
      console.log(e);
    }

    window.addEventListener("message", (event: MessageEvent | CustomEvent) => {
      console.log(event)
      const data = (event as MessageEvent).data ?? (event as CustomEvent).detail;
      if (!data[identifier]) return;
      this.messages[data[identifier]] = data;
      for (const fn of this.globalHandlers) fn(data);
      for (const fn of this.handlers[data[identifier]]) fn(data)
    });
  }

  on(type: string, func: (data: Record<string, any>) => void) {
    if (type === "all") {
      this.globalHandlers.push(func);
      return
    }
    if (this.handlers[type]) this.handlers[type].push(func)
    else this.handlers[type] = [func]
  }

  trigger(type: string, data?: Record<string, any>) {
    window.dispatchEvent(new CustomEvent("message", { detail: { [this.identifier]: type, ...data }}));
  }

  callback(
    endpoint: string,
    payload?: Record<string, any>,
    cb?: (data: Record<string, any>) => void,
    resource?: string
  ) {
    const name = resource ?? this.parentResource;
    if (!name) return;
    fetch(`https://${name}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(payload ?? {}),
    })
      .then((resp) => resp.json())
      .then((resp) => cb && cb(resp));
  }
}

export const NUI = new NUIHandler()
