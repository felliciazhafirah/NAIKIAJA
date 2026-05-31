export class CreateScheduleDto {
  origin: string
  destination: string

  departureTime: Date
  arrivalTime: Date

  price: number

  totalTickets: number

  busId: number
}