const createWeatherWidget = (weatherData) => {
  const city = weatherData.name;
  const temperature = Math.round(weatherData.main.temp - 273.15);
  const condition = weatherData.weather[0].description;

  const $widget = $("<div>");
  const $temp = $("<p>");
  const $condition = $("<p>");
  const $city = $("<p>");

  $city.text(`Weather for the city of ${city}`);
  $temp.text(`Currently ${temperature}°C`);
  $condition.text(`The weather is: ${condition}`);

  $widget.append($city);
  $widget.append($temp);
  $widget.append($condition);

  return $widget;
};

const createPostElement = (postData) => {
  return `
  <article>
    <h1>${postData.title}</h1>
    <h2>By Author: ${postData.userId}</h2>
    <p>
      ${postData.body}
    </p>
  </article>
  `;
};

const createRandomColor = () => {
  // #00aaff
  // rgb(200,0,100)

  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
};

const createPostElementButBetter = (post) => {
  const { title, body, userId } = post;

  const $post = $("<article>"); // creating an article element
  const $postTitle = $("<h1>");
  const $postAuthor = $("<h2>");
  const $postBody = $("<p>");

  $postAuthor.text(`By Author: ${userId}`);
  $postTitle.text(title);
  $postBody.text(body);

  $post.append($postTitle);
  $post.append($postAuthor);
  $post.append($postBody);

  $post.on("click", (event) => {
    $(event.currentTarget).css("background-color", createRandomColor());
  });

  return $post;
};

const createMultiplePosts = (posts) => {
  const buffer = [];
  for (const post of somePosts) {
    buffer.push(createPostElementButBetter(post));
  }
  return buffer;
};

const createMultiplePostsButCooler = (posts) => posts.map(createPostElementButBetter);

const fetchWeather = (city) => {
  const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

  return $.ajax({
    method: "GET",
    url: apiUrl,
  });
};

const fetchPosts = () => {
  return $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
  });
};
