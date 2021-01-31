//Declare variable of city to search

//Other variables



//search city to see if it exists in storage


//API key

//Display current weather and forecast after acquiring city from the input box
function idsplayweather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}
//AJAX call here
function currentWeather(city){
    //Build a URL to get data from API



        //parse response to display current weather 
        //Dta object from API for Icon
        // Use date format method from the  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

        //parse response to display current temperatures

        //concert to fahrenheit


        // display humidity

        //Windspeed in mph

        // UVIndex

        //By Geographic coordinates method and using appid and coordinates as a parameter build our uv query url inside the function below.




        //Function to return the UVIndex response

        //Build URL for UVIndex


        //Display 5 day forecast for current city





        //Dynamically add the last city to the search history



        //Display the last search again when the list group is selected in Search History



        //Write a function here



        //Clear Search History



        //Click handlers


    }