import { reactive } from 'vue'
import type { AdkSnackbarStatus } from '../components/AdkSnackbar.vue'

export interface AdkSnackbarItem { id: number; message: string; status: AdkSnackbarStatus; duration: number }

const state = reactive<{ items: AdkSnackbarItem[] }>({ items: [] })
let seq = 0

/**
 * Cola global de snackbars para AdkSnackbarHost.
 * Figma no define duración: PROPUESTA A-C07 → 4 s, 6 s para Error, y no se cierra mientras se toca.
 */
export function useSnackbar() {
  function show(message: string, status: AdkSnackbarStatus = 'success', duration?: number): number {
    const id = ++seq
    state.items.push({ id, message, status, duration: duration ?? (status === 'error' ? 6000 : 4000) })
    return id
  }
  function dismiss(id: number) {
    const i = state.items.findIndex((s) => s.id === id)
    if (i >= 0) state.items.splice(i, 1)
  }
  return { items: state.items, show, dismiss }
}
