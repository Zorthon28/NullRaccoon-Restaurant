// utils.ts
export function generateTimes(
  start: string,
  end: string,
  interval: number
): string[] {
  const times: string[] = [];
  let [startHour, startMinute] = start.split(":").map(Number);
  let [endHour, endMinute] = end.split(":").map(Number);

  let current = new Date();
  current.setHours(startHour, startMinute, 0, 0);

  const endTime = new Date();
  endTime.setHours(endHour, endMinute, 0, 0);

  while (current <= endTime) {
    const hours = current.getHours();
    const minutes = current.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHour = hours % 12 === 0 ? 12 : hours % 12;
    times.push(`${displayHour}:${minutes} ${ampm}`);
    current.setMinutes(current.getMinutes() + interval);
  }

  return times;
}
