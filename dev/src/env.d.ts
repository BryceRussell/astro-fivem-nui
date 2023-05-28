/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />

declare global {
  function GetParentResourceName(): string
  function invokeNative(native: string, options: string): void
  var NUI: NUIHandler
}

export {};