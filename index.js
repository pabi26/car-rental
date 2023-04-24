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
                        <button id="${cars[i].mark}">${cars[i].mark} ${cars[i].model}</button>
                        <div id="${cars[i].model}">
                            <img src="${cars[i].image}" alt="">
                            <table>
                                <thead>
                                    <th colspan="2">$${cars[i].price}/rent per day</th>
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
                            <button class="reserve-btn">Reserve Now</button>
                        </div>
                  `;
    document.getElementById('car-display').innerHTML += carDetails;
}
  
document.getElementById('question-one').addEventListener('click', function() {
    const questionanswer = document.getElementById('question-one-answer')
    if (questionanswer.style.display === 'none') {
        questionanswer.style.display = 'block'
    } else {
        questionanswer.style.display = 'none'
    }
})


document.getElementById('question-two').addEventListener('click', function() {
    const questionanswer = document.getElementById('question-two-answer')
    if (questionanswer.style.display === 'none') {
        questionanswer.style.display = 'block'
    } else {
        questionanswer.style.display = 'none'
    }
})

document.getElementById('question-three').addEventListener('click', function() {
    const questionanswer = document.getElementById('question-three-answer')
    if (questionanswer.style.display === 'none') {
        questionanswer.style.display = 'block'
    } else {
        questionanswer.style.display = 'none'
    }
})


document.getElementById('question-class').addEventListener('click', function() {
    const questionanswer = document.getElementById('question-class-answer')
    if (questionanswer.style.display === 'none') {
        questionanswer.style.display = 'block'
    } else {
        questionanswer.style.display = 'none'
    }
})

document.getElementById('Ferrari').addEventListener('click', function() {
    const car = document.getElementById('F8-Tributo')
    if (car.style.display === 'none') {
        car.style.display = 'block'
    } else {
        car.style.display = 'none'
    }
})