(function(){
    "use strict";
    const names = $("#names");
    const posts = $("#posts");
    const comments = $("#comments");
    const user = $("#user");
    const all = $("#all");
    const clear = $("#clear");
    const Tposts = $("#posts2");
    const Tusers = $("#users")
    let id;
    let hisPosts
    let currentId
    let title = "COMMENTS"
    async function fetchUsers(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const order = await response.json();

            return order;

        } catch (e) {
            console.error(e);
            const error = $(`<pre  id="result">${e}</pre>`);
            error.appendTo(document.body);

        }
    }
    $(document).ready(async function (e) {

        const users = await fetchUsers(`https://jsonplaceholder.typicode.com/users `);
        const blogs = await fetchUsers(`https://jsonplaceholder.typicode.com/posts?=${id}`);
        blogs.forEach(blog => {
            id = blog.id
        })
        clear.click(function () {
            comments.empty();
            $('.clickers').hide();
        })
        user.click(async function () {

            const haros = await fetchUsers(`https://jsonplaceholder.typicode.com/comments? `);
            if (haros) {
                $(`<h1>${title}</h1>`).appendTo(comments)
                const hisComments = haros.filter(comment => comment.postId == currentId);
                console.log(hisComments)
                $(`<ul>${JSON.stringify(hisComments, null, 3)}</ul>`).appendTo(comments)
            }
        });
        if (users) {
            users.forEach((user, index) => {
                comments.show();

                const nameDiv = document.createElement('div');
                nameDiv.appendChild(document.createTextNode(user.name));
                nameDiv.appendChild(document.createTextNode(user.website));
                nameDiv.appendChild(document.createTextNode(user.company.name));
                nameDiv.appendChild(document.createTextNode(user.company.catchPhrase));
                nameDiv.appendChild(document.createTextNode(user.company.bs));
                names.append(nameDiv)

                nameDiv.classList.add('clickers')
                nameDiv.setAttribute('id', `${index + 1}`)
            });
            $('.clickers').click(function (e) {
                e.preventDefault();
                $('.clickers').hide()
                all.show();
                let text = e.target;
                currentId = text.id;


                if (blogs) {
                    hisPosts = blogs.filter(post => post.userId == currentId);
                    posts.empty()
                    Tusers.hide();
                    Tposts.show();
                    $(`<ul>${JSON.stringify(hisPosts, null, 3)}</ul>`).appendTo(posts);

                    user.show()
                    clear.show();
                }
                all.appendTo(names);
                all.click(async function (e) {
                    all.hide();
                    posts.empty();
                    Tusers.show();
                    Tposts.hide();
                    comments.empty()
                    $(".clickers").show()
                })
            });
        }
    });
})();
