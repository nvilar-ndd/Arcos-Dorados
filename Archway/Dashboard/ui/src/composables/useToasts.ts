import { reactive } from 'vue'
import type { DbStatus } from '../components/DbStatusIcon.vue'

export interface DbToast {
  id: number
  title: string
  message?: string
  status: DbStatus
  /** Notificación de proceso: no se auto-cierra mientras está en curso. */
  progress?: number
  progressLabel?: string
  helperText?: string
  /** ms; 0 = no se cierra sola. Default 8000 (Figma: "debe durar 8 segundos"). */
  duration: number
}

const state = reactive<{ items: DbToast[] }>({ items: [] })
let seq = 0

/**
 * Cola global de toasts para DbToaster.
 * Reglas de Figma: las nuevas se apilan por encima; la de éxito o error aparece aunque el usuario
 * haya cerrado la de progreso. Los errores no se auto-cierran (WCAG 2.2.1).
 */
export function useToasts() {
  function push(toast: Omit<DbToast, 'id' | 'duration'> & { duration?: number }): number {
    const id = ++seq
    const duration = toast.duration ?? (toast.status === 'error' || toast.progress !== undefined ? 0 : 8000)
    state.items.unshift({ ...toast, id, duration })
    return id
  }
  function update(id: number, patch: Partial<Omit<DbToast, 'id'>>) {
    const item = state.items.find((t) => t.id === id)
    if (item) Object.assign(item, patch)
  }
  function dismiss(id: number) {
    const i = state.items.findIndex((t) => t.id === id)
    if (i >= 0) state.items.splice(i, 1)
  }
  return { items: state.items, push, update, dismiss }
}
