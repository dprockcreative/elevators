export const SESSION_START_NS       = 'dpc_elevators_session_start';
export const SESSION_WELCOMED_NS    = 'dpc_elevators_session_welcomed';

export const SESSION_TIME_TO_MIN    = (minutes: number): number => {
  return minutes * 60 * 1000;
};

export const SESSION_TIME_FROM_MIN  = (time: number): number => {
  return (time/60)/1000;
};

export const SESSION_WELCOMED_DELAY = SESSION_TIME_TO_MIN(2); // 2 MINUTES

export const SESSION_QUERY_INTERVAL = SESSION_TIME_TO_MIN(1); // 1 MINUTE