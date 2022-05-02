function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let output1Element = document.getElementById('bestRestaurant').querySelector('p');
   let output2Element = document.getElementById('workers').querySelector('p');

   function onClick() {
      let input = JSON.parse(document.getElementById('inputs').querySelector('textarea').value);
      let restaurants = {};
      let bestRestaurant;
      let bestRestaurantName;
      let bestAverageSalary = 0;
      let bestSalary = 0;

      for (restaurantData of input) {

         let [currentRestaurantName, currentRestaurantData] = restaurantData.split(' - ');
         let currentEmployeesData = currentRestaurantData.split(', ');

         let totalSalary = 0;
         let currentBestSalary = 0;

         for (employee of currentEmployeesData) {
            let [currentName, salary] = employee.split(' ');
            let currentSalary = Number(salary);
            totalSalary += currentSalary;
            
            if (currentSalary > currentBestSalary) {
               currentBestSalary = currentSalary;
            }

            if (!restaurants.hasOwnProperty(currentRestaurantName)) {
               restaurants[currentRestaurantName] = {[currentName]: currentSalary};

            } else {
               restaurants[currentRestaurantName][currentName] = currentSalary;
            }
         }

         let currentAverageSalary = totalSalary / Object.keys(restaurants[currentRestaurantName]).length;


         if (currentAverageSalary > bestAverageSalary) {
            bestAverageSalary = currentAverageSalary;
            bestRestaurant = restaurants[currentRestaurantName];
            bestRestaurantName = currentRestaurantName;
            bestSalary = currentBestSalary;
         }
      }

      output1Element.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

      let result = Object.entries(bestRestaurant).sort((a, b) => b[1] - a[1]);
      let print = '';
   
      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `)
      output2Element.textContent = print;
   }
}