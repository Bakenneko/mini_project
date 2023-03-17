const userInfo = document.getElementsByClassName('usersInfo')[0];

let data = 'data';

const user = JSON.parse(localStorage.getItem(data));

function newUser(user) {
    for (const userChapter in user) {
        if(typeof user[userChapter] !== 'object'){
            const div = document.createElement('div');
            div.innerText = `${userChapter} ${user[userChapter]}`;
            div.classList.add('userChapter');
            userInfo.appendChild(div);
        }else {
            newUser(user[userChapter]);
        }
    }
}

newUser(user);





// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для отримання постів використовуйте https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.


