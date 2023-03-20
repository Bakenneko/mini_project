const postTitle = document.getElementsByClassName('container3')[0];

const url = new URL (location.href);
const value = JSON.parse(url.searchParams.get('value'));

fetch(`https://jsonplaceholder.typicode.com/posts/${value.id}`).then(value => value.json()).then(value => {

function newUser(value) {
    for (const userChapter in value) {
        if (typeof value[userChapter] !== 'object') {
            const div = document.createElement('div');
            div.innerText = `${userChapter}: ${value[userChapter]}`;
            div.classList.add('box3');
            postTitle.appendChild(div);
        } else {
            newUser(value[userChapter]);
        }
    }
}

newUser(value);
const divPost = document.createElement('div');
document.body.appendChild(divPost);


    fetch(`https://jsonplaceholder.typicode.com/posts/${value.id}/comments`)
        .then(value => value.json())
        .then(comments => {
            for (const data of comments) {
                const div = document.createElement('div')
                div.innerText = `${data.postId} _ ${data.id} _ ${data.name} _ ${data.email}`;
                divPost.appendChild(div);

            }
        });
});


// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)