const data = require('../data/zoo_data');

const { hours } = data;
const { species } = data;
const days = Object.keys(hours);
const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday } = hours;
const array = [{ Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday }];
const animalsTuesday = species.filter(({ availability }) => availability.includes('Tuesday'))
  .map(({ name }) => name);
const animalsWednesday = species.filter(({ availability }) => availability.includes('Wednesday'))
  .map(({ name }) => name);
const animalsThursday = species.filter(({ availability }) => availability.includes('Thursday'))
  .map(({ name }) => name);
const animalsFriday = species.filter(({ availability }) => availability.includes('Friday'))
  .map(({ name }) => name);
const animalsSaturday = species.filter(({ availability }) => availability.includes('Saturday'))
  .map(({ name }) => name);
const animalsSunday = species.filter(({ availability }) => availability.includes('Sunday'))
  .map(({ name }) => name);

const getAllSchedules = () => {
  const schedules = array.map((element) => ({
    Tuesday: { officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
      exhibition: animalsTuesday },
    Wednesday: { officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
      exhibition: animalsWednesday },
    Thursday: { officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
      exhibition: animalsThursday },
    Friday: { officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
      exhibition: animalsFriday },
    Saturday: { officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
      exhibition: animalsSaturday },
    Sunday: { officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
      exhibition: animalsSunday },
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  }));
  const obj = { ...schedules };
  return obj[0];
};

function getSchedule(scheduleTarget) {
  const objSchedule = getAllSchedules();
  const animals = species.map(({ name }) => name);
  if (!scheduleTarget) return getAllSchedules();
  if (!days.includes(scheduleTarget) && !animals.includes(scheduleTarget)) return getAllSchedules();
  if (days.includes(scheduleTarget)) {
    const result = { scheduleTarget: objSchedule[scheduleTarget] };
    result[scheduleTarget] = result.scheduleTarget;
    delete result.scheduleTarget;
    return result;
  }
  const daysAvailability = species.find(({ name }) => name === scheduleTarget);
  const { availability } = daysAvailability;
  return availability;
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
