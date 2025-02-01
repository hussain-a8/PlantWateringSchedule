# PlantWateringSchedule

This project, created as part of Shivom Consultancy's Application Process, is a simple web application that generates an 'easy-to-read' 12-week calendar displaying a plant watering schedule. This app dynamically generates the schedule using plant data which specifies plant name, watering frequency etc. More details below.

## **Features**
- 🗓 **Dynamic schedule generation** for plant care over 12 weeks.  
- ✅ **Track plant watering** with checkboxes.  
- 📅 **Weekend adjustments** to move watering tasks to weekdays.    
- 🎨 **Responsive grid layout** using HTML, CSS, and JavaScript.  
- 📦 **Built-in date handling** with the `date-fns` library.

## **Technologies Used**
- **HTML** – Structure of the web app.
- **CSS** – Custom styling for a clean, user-friendly interface.
- **JavaScript** – Dynamic functionality and DOM manipulation.
- **Date-fns** – JavaScript library for date calculations and formatting.
- **GitHub Pages** – Hosting the project online.

## **Setup Instructions (For Local Use)**
1. Clone this repository:
   ```sh
   git clone https://github.com/hussain-a8/PlantWateringSchedule.git
   ```
2. Navigate to the project directory:
   ```sh
   cd PlantWateringSchedule
   ```
3. Open `index.html` in your browser.

## **Customization**
- Modify `resources/plantsData.js` to add or update plants. Ensure to maintain the same format when adding new plants!
- Adjust styles in `resources/styles.css`.

## **Live Demo**
[Link to the GitHub Pages site](https://<your-username>.github.io/plant-watering-schedule/)

## **Bonus Challenge**
Add a feature where only three plants can be watered in a day. This will require a way of prioritising plants which have been shifted, as plants can only tolerate being watered a day earlier or later than what the watering frequency dictates. 
