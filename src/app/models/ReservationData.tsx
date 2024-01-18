export default interface ReservationData {
  id: number;
  matriculeUser: string;
  matriculeManager: string;
  outboundVoyageId: number;
  returnVoyageId: number;
  hotelResId: number;
}
