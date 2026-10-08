import { onBeforeUnmount, watch, type Ref } from 'vue'

/**
 * Cierra un popover/menú al hacer clic afuera o presionar Escape.
 * `refs` son los elementos que cuentan como "adentro" (disparador + panel).
 */
export function useDismiss(
  open: Ref<boolean>,
  refs: Array<Ref<HTMLElement | null | undefined>>,
  onDismiss: (reason: 'outside' | 'escape') => void,
) {
  function onPointerDown(event: PointerEvent) {
    const target = event.target as Node | null
    if (!target) return
    if (refs.some((r) => r.value?.contains(target))) return
    onDismiss('outside')
  }
  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.stopPropagation()
      onDismiss('escape')
    }
  }
  function bind() {
    document.addEventListener('pointerdown', onPointerDown, true)
    document.addEventListener('keydown', onKeydown)
  }
  function unbind() {
    document.removeEventListener('pointerdown', onPointerDown, true)
    document.removeEventListener('keydown', onKeydown)
  }
  watch(open, (value) => (value ? bind() : unbind()), { immediate: true })
  onBeforeUnmount(unbind)
}
