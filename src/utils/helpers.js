export const getFormattedDate = () => {
  // Current Date formatted for NewsAPI.
  const getToDate = () => {
    // new Date returns the full day, month, year, and time.
    const today = new Date();
    // toISOString() returns the date formatted: YYYY-MM-DDTHH:mm:ss.sssZ. I format
    // it further by cutting the time off the end using slice up to but not including index 10.
    const formattedDate = today.toISOString().slice(0, 10);
    return formattedDate;
  };

  // Per the project requirements, Date 1 week from current date formatted for NewsApi.
  const getFromDate = () => {
    const today = new Date();
    // Subtract a week from today. getDate() gets the day of the month. setDate()
    // changes the date to what you specify and automatically handles month and year changes.
    // setDate will return a timeStamp (number) but here it also modifies the today variable.
    today.setDate(today.getDate() - 7);
    // Format new date and save in new variable.
    const oneWeekAgoFormatted = today.toISOString().slice(0, 10);
    return oneWeekAgoFormatted;
  };

  return { getToDate, getFromDate };
};

export const getRequestHeaders = (token = null) => {
  if (!token) {
    return { Accept: "application/json" };
  }
  return {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const handleResponse = (res) => {
  // Parse the json response into a workable JS object. res.json is async and
  // returns a promise. Parse even for errors and throw to the catch block where
  // the request originates.
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
