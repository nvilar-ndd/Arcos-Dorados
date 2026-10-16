/** Utilidades de fecha sin dependencias. Fechas como string ISO local `YYYY-MM-DD`. */

export type IsoDate = string

const pad = (n: number) => String(n).padStart(2, '0')

export function toIso(date: Date): IsoDate {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

export function fromIso(iso: IsoDate): Date {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1)
}

export function addDays(iso: IsoDate, days: number): IsoDate {
  const d = fromIso(iso)
  d.setDate(d.getDate() + days)
  return toIso(d)
}

export function addMonths(date: Date, months: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + months, 1)
}

export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

/** Lunes = 0 … Domingo = 6 */
export function weekdayIndex(date: Date): number {
  return (date.getDay() + 6) % 7
}

export function diffDays(a: IsoDate, b: IsoDate): number {
  return Math.round((fromIso(b).getTime() - fromIso(a).getTime()) / 86_400_000)
}

/** dd/mm/aaaa → ISO, o null si no es una fecha válida. */
export function parseDisplay(text: string): IsoDate | null {
  const m = text.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (!m) return null
  const d = new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]))
  if (d.getDate() !== Number(m[1]) || d.getMonth() !== Number(m[2]) - 1) return null
  return toIso(d)
}

export function formatDisplay(iso: IsoDate | null | undefined): string {
  if (!iso) return ''
  const d = fromIso(iso)
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`
}

const monthFmt = new Intl.DateTimeFormat('es', { month: 'long' })
const longFmt = new Intl.DateTimeFormat('es', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

/** "Enero de 2026" (formato de Figma). */
export function monthTitle(date: Date): string {
  const m = monthFmt.format(date)
  return `${m.charAt(0).toUpperCase()}${m.slice(1)} de ${date.getFullYear()}`
}

/** Nombre accesible de un día: "miércoles, 14 de enero de 2026". */
export function longLabel(iso: IsoDate): string {
  return longFmt.format(fromIso(iso))
}

export const WEEKDAYS_SHORT = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'] as const
export const WEEKDAYS_LONG = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] as const

/** Celdas de un mes (con null para los huecos antes del día 1). */
export function monthCells(month: Date): Array<IsoDate | null> {
  const first = startOfMonth(month)
  const days = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate()
  const cells: Array<IsoDate | null> = Array.from({ length: weekdayIndex(first) }, () => null)
  for (let d = 1; d <= days; d++) cells.push(toIso(new Date(first.getFullYear(), first.getMonth(), d)))
  while (cells.length % 7) cells.push(null)
  return cells
}
