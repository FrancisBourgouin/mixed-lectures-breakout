$(() => {
  fetchWeather("Montréal")
    .then((res) => {
      const weatherWidget = createWeatherWidget(res);
      $("header").append(weatherWidget);
    })
    .catch((err) => {
      console.log("Issue with fetching weather data");
    });

  $("article").on("click", (event) => {
    $(event.currentTarget).css("background-color", createRandomColor());
  });

  fetchPosts()
    .then((res) => {
      const createdPosts = createMultiplePostsButCooler(res);
      for (const postElement of createdPosts) {
        $("section").append(postElement);
      }
    })
    .catch((err) => console.log(err));

  $("form").on("submit", (event) => {
    event.preventDefault();
    const cityInput = $("input[name=city]").val();
    $("input[name=city]").val("");
    console.log("User typed", cityInput);

    fetchWeather(cityInput)
      .then((res) => {
        const weatherWidget = createWeatherWidget(res);
        $("header div").remove();
        $("header").append(weatherWidget);
      })
      .catch((err) => {
        console.log("Issue with fetching weather data");
      });
  });
});

// AJAX => Proeminent figure of antique greece
// AJAX => Cleaning product (Tough on grease)

// AJAX => Asynchronous JavaScript And XML
