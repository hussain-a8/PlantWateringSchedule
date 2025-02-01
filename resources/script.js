//sample plant data
const plants = [
    { plant_id: 1, name: "Aloe Vera", watering_frequency: 7 },
    { plant_id: 2, name: "Peace Lily", watering_frequency: 3 },
    { plant_id: 3, name: "Spider Plant", watering_frequency: 5 },
    { plant_id: 4, name: "Snake Plant", watering_frequency: 14 },
    { plant_id: 5, name: "Fern", watering_frequency: 2 },
    { plant_id: 6, name: "Cactus", watering_frequency: 10 },
    { plant_id: 7, name: "Orchid", watering_frequency: 7 },
    { plant_id: 8, name: "Bamboo", watering_frequency: 4 },
    { plant_id: 9, name: "Money Plant", watering_frequency: 6 },
    { plant_id: 10, name: "Lavender", watering_frequency: 8 },
  ];
  
  document.addEventListener('DOMContentLoaded', function () {
    //initialise date manipulation functions from library
    const { addDays, format, isSaturday, isSunday } = dateFns;
  
    //hardcoded start date (3rd February 2025)
    const startDate = new Date(2025, 1, 3);
  
    //initialise watering schedule object and stringify start date
    const calendarHolder = document.getElementById('calendar');
    const schedule = {};
    const startDateHolder = format(startDate, 'yyyy-MM-dd');
  
    //add the start date to the schedule as a key, assign all plants as a value
    schedule[startDateHolder] = plants.map((plant) => plant.name);
  
    //add watering dates to schedule for each plant
    plants.forEach((plant) => {
      let currentDate = startDate;
  
      //loop set for duration of 12 weeks
      while (currentDate <= addDays(startDate, 12 * 7)) { 
        currentDate = addDays(currentDate, plant.watering_frequency);
  
        //adjusting date if it falls on a weekend
        if (isSaturday(currentDate)) {
          currentDate = addDays(currentDate, -1); //move to Friday
        } else if (isSunday(currentDate)) {
          currentDate = addDays(currentDate, 1); //move to Monday
        }
  
        //adding dates to schedule as keys if not already present
        const dateHolder = format(currentDate, 'yyyy-MM-dd');
        if (!schedule[dateHolder]) schedule[dateHolder] = [];
  
        //adding plant names to corresponding dates
        schedule[dateHolder].push(plant.name);
      }
    });
  
    //render the calendar grid
    for (let week = 0; week < 12; week++) {
      for (let day = 0; day < 7; day++) {
        
        //creates a day card for 7 days x 12 weeks
        const dayCard = document.createElement('div');
        dayCard.className = 'day';
  
        //stringify current date
        const localCurrentDate = addDays(startDate, week * 7 + day);
        const localDateHolder = format(localCurrentDate, 'yyyy-MM-dd');
  
        //adds formatted date to card
        const dateHeader = document.createElement('h3');
        dateHeader.textContent = format(localCurrentDate, 'EEE MMM do');
        dayCard.appendChild(dateHeader);
  
        //creates unordered list of plants
        const plantList = document.createElement('ul');
  
        //if there are plants scheduled on this date...
        if (schedule[localDateHolder]) {
          schedule[localDateHolder].forEach((plant) => {
  
            //each plant is added to the list
            const plantItem = document.createElement('li');
            
            //add plant to list
            plantItem.appendChild(document.createTextNode(plant));
  
            //add checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'plant-checkbox';
            plantItem.appendChild(checkbox);
            plantList.appendChild(plantItem);
          });
        }
  
        //plant list added to day card
        dayCard.appendChild(plantList);
  
        //day card added to calendar
        calendarHolder.appendChild(dayCard);
      }
    }
  });
  