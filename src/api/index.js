export const getCalculations = () =>
  fetch('/api/results')
    .then((res) => res.json())
    .then(({ address, result_CO2_1, result_CO2_2 }) => ({
      address,
      result_CO2_1: JSON.parse(result_CO2_1),
      result_CO2_2: JSON.parse(result_CO2_2),
    }));

export const sendCalculation = (data) =>
  fetch('/api/coefficients', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

export const getAuthors = () => fetch('/api/author');