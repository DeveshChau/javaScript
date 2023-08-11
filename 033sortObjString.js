let employeeNames= [

    { first_name: 'Manoj',     last_name: 'Kumar'     },

    { first_name: 'Ankit',        last_name: 'Chelawat'   },

    { first_name: 'Sachin',     last_name: 'HS'   },

    { first_name: 'Saurabh',    last_name: 'Kumar'   },

    { first_name: 'Lavannya',     last_name: 'Mahalingam' }

];
employeeNames.sort((a,b) => a.last_name.localeCompare(b.last_name))