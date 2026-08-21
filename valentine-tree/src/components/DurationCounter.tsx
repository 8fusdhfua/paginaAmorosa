import { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

export function useDuration(startDate: Date) {
  const [timeText, setTimeText] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      const totalDays = differenceInDays(now, startDate);
      const totalHours = differenceInHours(now, startDate);
      const totalMinutes = differenceInMinutes(now, startDate);
      const totalSeconds = differenceInSeconds(now, startDate);
      
      const days = totalDays;
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;
      
      setTimeText(
        `${days} días ${hours.toString().padStart(2, '0')} hrs ${minutes.toString().padStart(2, '0')} min ${seconds.toString().padStart(2, '0')} seg`
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  return timeText;
}
