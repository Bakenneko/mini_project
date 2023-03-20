const user = document.getElementsByClassName("container1")[0];
const user2 = document.getElementsByClassName("box1")[0];

let data = 'data';

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(values => {

        for (const value of values) {
            let div1 = document.createElement('div');
            div1.innerText = `${value.id}. ${value.name}`;
            div1.classList.add("box2");
            user.appendChild(user2);
            user2.appendChild(div1);

            const uButton = document.createElement('button');
            uButton.innerText = 'info';
            uButton.classList.add('uButton');
            div1.appendChild(uButton);

            uButton.onclick = (e) => {
                e.preventDefault();
                localStorage.setItem(data,JSON.stringify(value));
                location.href = `../user-details/user-details.html`;
            }
        }
    });

// 1. В index.html Отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2. Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3. Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули

// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/посилвння розташувати під інформацією про user.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою інфою про post - в ряд по 5 .
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
