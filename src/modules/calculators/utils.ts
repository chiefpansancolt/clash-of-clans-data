import { BuildTime } from '@/types';

export function toTotalSeconds(t: BuildTime): number {
  return t.days * 86400 + t.hours * 3600 + t.minutes * 60 + t.seconds;
}

export function fromTotalSeconds(s: number): BuildTime {
  const total = Math.max(0, Math.floor(s));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export function subtractHours(time: BuildTime, hours: number): BuildTime {
  return fromTotalSeconds(toTotalSeconds(time) - hours * 3600);
}
