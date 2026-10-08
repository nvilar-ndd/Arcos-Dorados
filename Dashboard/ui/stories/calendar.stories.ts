import type { Meta, StoryObj } from '@storybook/vue3'
import { DbBookingCalendar, type DbBooking } from '../src'

const bookings: DbBooking[] = [
  { id: '1', date: '2026-01-02', name: '{nombre.cumpleañero}', time: '16:00 - 18:00', status: 'pending' },
  { id: '2', date: '2026-01-03', time: '10:00 - 12:00', status: 'confirmed', kind: 'slot' },
  { id: '3', date: '2026-01-06', name: '{nombre.cumpleañero}', time: '16:00 - 18:00', status: 'completed' },
  { id: '4', date: '2026-01-07', name: '{nombre.cumpleañero}', time: '12:00 - 14:00', status: 'confirmed' },
  { id: '5', date: '2026-01-07', name: '{nombre.cumpleañero}', time: '16:00 - 18:00', status: 'cancelled' },
  { id: '6', date: '2026-01-10', name: '{nombre.cumpleañero}', time: '12:00 - 14:00', status: 'confirmed' },
  { id: '7', date: '2026-01-10', name: '{nombre.cumpleañero}', time: '15:00 - 17:00', status: 'confirmed' },
  { id: '8', date: '2026-01-10', name: '{nombre.cumpleañero}', time: '18:00 - 20:00', status: 'cancelled' },
  { id: '9', date: '2026-01-17', name: '{nombre.cumpleañero}', time: '16:00 - 18:00', status: 'cancelled' },
  { id: '10', date: '2026-01-22', name: '{nombre.cumpleañero}', time: '12:00 - 14:00', status: 'pending' },
  { id: '11', date: '2026-01-22', name: '{nombre.cumpleañero}', time: '16:00 - 18:00', status: 'cancelled' },
  { id: '12', date: '2026-01-23', name: '{nombre.cumpleañero}', time: '16:00 - 18:00', status: 'confirmed' },
  { id: '13', date: '2026-01-28', name: '{nombre.cumpleañero}', time: '16:00 - 18:00', status: 'pending' },
  { id: '14', date: '2026-01-31', name: '{nombre.cumpleañero}', time: '16:00 - 18:00', status: 'confirmed' },
]

const meta = {
  title: 'Componentes/Calendar (agenda de reservas)',
  component: DbBookingCalendar,
  parameters: { controls: { disable: false } },
  args: { month: new Date(2026, 0, 1), bookings, today: '2026-01-15', blocked: ['2026-01-13', '2026-01-24'], maxPerDay: 2, removable: false },
} satisfies Meta<typeof DbBookingCalendar>
export default meta
type Story = StoryObj<typeof meta>

/** Enero 2026 con todos los estados de reserva: Pendiente · Activa · Cancelada · Finalizada · Slot · Ver más. */
export const Mensual: Story = {
  render: (args) => ({ components: { DbBookingCalendar }, setup: () => ({ args }), template: '<div class="p-300"><DbBookingCalendar v-bind="args" /></div>' }),
}
