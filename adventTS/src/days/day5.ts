type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(fromTime: ElfDateTime, takeOffTime: ElfDateTime): number {
  function toRealTime(s: ElfDateTime): string {
    return s.replaceAll('*', '/').replace('@', ' ').replaceAll('|', ':').replace('NP', 'UTC')
  }

  const takeOffSeconds = Date.parse(toRealTime(takeOffTime));
  const fromTimeReal = Date.parse(toRealTime(fromTime));

  return Math.floor((takeOffSeconds - fromTimeReal) / 1000);
}

const takeoff = '2025*12*25@00|00|00 NP'

// from December 24, 2025, 23:59:30, 30 seconds before takeoff
export const result = timeUntilTakeOff(takeoff, takeoff)