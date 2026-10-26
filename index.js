import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// API ENDPOINTS

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(baseURL);
    const drink = response.data.drinks[0]
    console.log(drink)
    res.render('index.ejs', { drink, err: null})
  } catch (error) {
    console.error(`There's been an error: ${error}`)
    res.render("index.ejs", { drink: err, null: "Couldn't get a cocktail. Try again." });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
