import type { ModeratorServiceAttendanceOption } from "../mocks/moderatorServiceAttendance";

type FindClosesServiceParams = {
  services: ModeratorServiceAttendanceOption[];
  date: string;
  time: string;
  toleranceMinites?: number;
};

function timeToMinites(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function FindClosesService({
    services,
    date,
    time,
    toleranceMinites=60,
}: FindClosesServiceParams) {
    const currentMinutes = timeToMinites(time);

    const servicesForDate = services.filter(
        (service) => service.date === date,
    );
    const matchingServices = servicesForDate
        .map((service) => ({
            service,
            difference: Math.abs(
                timeToMinites(service.time) - currentMinutes,
            ),
        }))
        .filter(
            ({ difference }) => difference <= toleranceMinites,
        )
        .sort((a, b) => a.difference - b.difference);
    
    return matchingServices[0]?.service ?? null;
}