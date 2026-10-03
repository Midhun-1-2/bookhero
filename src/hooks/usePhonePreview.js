import { useSyncExternalStore } from 'react'

/** Presenter option: show the Staff app inside a phone frame on desktop. */
const KEY = 'bookhero.phonePreview'
const EVENT = 'bookhero:phone-preview'

const read = () => {
  try {
    return localStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}

const subscribe = (cb) => {
  window.addEventListener(EVENT, cb)
  window.addEventListener('storage', cb)
  return () => {
    window.removeEventListener(EVENT, cb)
    window.removeEventListener('storage', cb)
  }
}

export function usePhonePreview() {
  return useSyncExternalStore(subscribe, read, () => false)
}

export function setPhonePreview(on) {
  try {
    localStorage.setItem(KEY, on ? '1' : '0')
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(EVENT))
}
