/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />

declare global {
  function GetParentResourceName(): string
  function invokeNative(string, string): void
  var NUI: NUIHandler
  function $(selector: string | Node | NodeList | HTMLCollection | (() => void)): HTMLCollection
  function closeNUI() : void
}

export {};