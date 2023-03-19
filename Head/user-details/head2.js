const userInfo = document.getElementsByClassName('col-10')[0];
let data = 'data';
const user = JSON.parse(localStorage.getItem(data));
function newUser(user) {
    for (const userChapter in user) {
        if(typeof user[userChapter] !== 'object'){
            const div = document.createElement('div');
            div.innerText = `${userChapter}: ${user[userChapter]}`;
            div.classList.add('box');
            userInfo.appendChild(div);
        }else {
            newUser(user[userChapter]);
        }
    }
}
newUser(user);

const butPost = document.createElement("button");
butPost.innerText = "All posts";
butPost.classList.add('buttPost');
userInfo.appendChild(butPost);

const div1 = document.createElement('div');
div1.classList.add('divPost');
document.body.appendChild(div1);

butPost.onclick =(e) => {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then((response) => response.json())
        .then((json) => console.log(json));
}


// for (const post in posts1) {
    //     const divPost = document.createElement('div');
    //     divPost.innerText = ` ${posts1.id}: ${posts1.title}`;
    //     divPost.classList.add('box');
    //     div1.appendChild(divPost);
    // }




// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для отримання постів використовуйте https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.


