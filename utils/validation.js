export function validateHotel(body) {
  const {
    amenities,
    name,
    owner_contact,
    price,
    rating,
    total_rooms,
    vacant_rooms,
  } = body;
  if (
    amenities &&
    name &&
    owner_contact &&
    price &&
    rating &&
    total_rooms &&
    vacant_rooms
  ) {
    return true;
  }
  return false;
}
export function validateRhomes(body) {
  const { amenities, name, owner_contact, price, rating, total_rooms } = body;
  if (amenities && name && owner_contact && price && rating && total_rooms) {
    return true;
  }
  return false;
}
export function validateTrain(body) {
  const {
    from,
    to,
    arrival_time,
    departure_time,
    operator_contact,
    operator_name,
    price,
    total_seats,
    vacant_seats,
  } = body;
  if (
    from &&
    to &&
    arrival_time &&
    departure_time &&
    operator_contact &&
    operator_name &&
    price &&
    total_seats &&
    vacant_seats
  ) {
    return true;
  }
  return false;
}

export function validateHotelBooking(body) {
  const { name, number_of_rooms, price, checkIn, checkOut, hotelId, userId } =
    body;
  if (
    name &&
    number_of_rooms &&
    price &&
    checkIn &&
    checkOut &&
    hotelId &&
    userId
  ) {
    return true;
  }
  return false;
}
