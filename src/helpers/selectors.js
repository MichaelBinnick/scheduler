export function getAppointmentsForDay(state, day) {
  
  const filteredAppointments = [];

  const matchedDay = state.days.filter(dayOb => dayOb.name === day)[0];
  
  if (!matchedDay) {
    return filteredAppointments;
  }
  
  matchedDay.appointments.forEach(appt => {
    if (state.appointments[appt]) {
      filteredAppointments.push(state.appointments[appt]);
    }
  })

  return filteredAppointments;
}

export function getInterview(state, interview) {
  
  const modInterview = {};

  if (!interview) {
    return null;
  }

  modInterview.interviewer = state.interviewers[interview.interviewer];
  modInterview.student = interview.student;

  return modInterview;

}