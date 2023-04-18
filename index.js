import { cars } from "./cars.js";
let navBarIcon = document.getElementById('navBarIcon');
let navBar = document.getElementById('nav-bar')
let closeNavBarIcon = document.getElementById('closeNavBarIcon')


navBarIcon.addEventListener('click', function() {
   navBar.style.display = 'flex';
   closeNavBarIcon.style.display = 'flex';
   navBarIcon.style.display = 'none';
})

closeNavBarIcon.addEventListener('click', function() {
    navBar.style.display = 'none';
   closeNavBarIcon.style.display = 'none';
   navBarIcon.style.display = 'flex';
})


for (let i = 0; i < cars.length; i++) {
    let carDetails = ` 
                        <button id="${cars[i].mark}${cars[i].model}">${cars[i].mark}${cars[i].model}</button>
                        <div id="${cars[i].mark}" class="car">
                            <img src="${cars[i].image}" alt="">
                            <table>
                                <thead>
                                    <tr>
                                        <th colspan="2">$${cars[i].price} per day</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Model</th>
                                        <td>${cars[i].model}</td>
                                    </tr>
                                    <tr>
                                        <th>Mark</th>
                                        <td>${cars[i].mark}</td>
                                    </tr>
                                    <tr>
                                        <th>Year</th>
                                        <td>${cars[i].year}</td>
                                    </tr>
                                    <tr>
                                        <th>Transmission</th>
                                        <td>${cars[i].transmission}</td>
                                    </tr>
                                    <tr>
                                        <th>Horsepower</th>
                                        <td>${cars[i].horsepower}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                  `;
    document.getElementById('car-display').innerHTML += carDetails;
  }
  

