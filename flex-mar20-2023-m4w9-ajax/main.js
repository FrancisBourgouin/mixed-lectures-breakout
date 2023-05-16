// Our target is the h1 in article
// article h1

// document.addEventListener("DOMContentLoaded", () => {
//   const allTheArticleTitles = document.querySelectorAll("article h1");

//   for (const title of allTheArticleTitles) {
//     title.style.color = "#BADA55";
//   }
// });

// Red Green Blue => White
// Cyan Magenta Yellow Black

const createRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

// Eviil, and kinda bad-ish
const createAPost = (postObj) => {
  const { title, id, body } = postObj;

  return `
  <article>
    <h1>Post #${id} - ${title}</h1>
    <p>
      ${body}
    </p>
  </article>
  `;
};

const betterCreatePost = (postObj) => {
  const { title, id, body } = postObj;

  const $article = $("<article>");
  const $h1 = $("<h1>");
  const $p = $("<p>");

  $h1.text(`Post #${id} - ${title}`);
  $p.text(body);

  $article.append($h1);
  $article.append($p);

  $article.on("click", (event) => {
    $(event.target).css("color", createRandomColor());
    console.log("EViiiil.");
  });

  return $article;
};

const fetchPosts = () => {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
  }).then((posts) => {
    for (const post of posts) {
      const newPost = betterCreatePost(post);
      $("main").append(newPost);
    }
  });
};

const fetchARandomPost = () => {
  const randomId = Math.ceil(Math.random() * 100);

  $.ajax({
    url: `https://jsonplaceholder.typicode.com/posts/${randomId}`,
    method: "GET",
  }).then((post) => {
    const newPost = betterCreatePost(post);
    $("main").append(newPost);
  });
};

const createARemotePost = (title, body) => {
  const testPost = {
    userId: 1,
    title,
    body,
  };

  $.ajax({
    url: `https://jsonplaceholder.typicode.com/posts`,
    method: "POST",
    data: testPost,
  }).then((post) => {
    const newPost = betterCreatePost(post);
    $("main").append(newPost);
  });
};

$(document).ready(() => {
  // const allTheArticleTitles = document.querySelectorAll("article h1");

  // for (const title of allTheArticleTitles) {
  //   title.style.color = createRandomColor();
  // }

  $("article h1").css("color", createRandomColor());

  const newPost = betterCreatePost(somePosts[0]);
  $("main").append(newPost);

  $("article").on("click", (event) => {
    $(event.target).css("color", createRandomColor());
    console.log("EViiiil.");
  });

  $("footer > button").click(() => {
    // const newPost = betterCreatePost(somePosts[0]);
    // $("main").append(newPost);
    createARemotePost();
  });

  $("form").on("submit", (event) => {
    event.preventDefault();

    const inputValue = $(event.currentTarget).find("input").val();
    const textAreaValue = $(event.currentTarget).find("textarea").val();
    // console.log(inputValue, textAreaValue);

    createARemotePost(inputValue, textAreaValue);
  });
});
