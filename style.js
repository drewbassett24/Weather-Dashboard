//Declare variable of city to search
var city="";
//Other variables
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var currentUvindex= $("#uv-index");
var sCity=[];

//search city to see if it exists in storage
function find(c){
    for (var i=0; i<sCity.length; i++){
        if(c.toUpperCase()===sCity[i]){
            return -1;
        }
    }
    return 1;
}

//API key
var APIKey="5a13d21d8e32e8262c6690f889c06517";
//Display current weather and forecast after acquiring city from the input box
function displayweather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}
//AJAX call here
function currentWeather(city){
    //Build a URL to get data from API
    var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){

        //parse response to display current weather 
        console.log(response);
        //Dta object from API for Icon
        var weathericon= response.weather[0].icon;
        var iconurl="https://openweathermap.org/img/wn/"+weathericon +"@2x.png";
        // Use date format method from the  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        var date=new Date(response.dt*1000).toLocaleDateString();
        $(currentCity).html(response.name +"("+date+")" + "<img src="+iconurl+">");


        //parse response to display current temperatures
        $(currentCity).html(response.name +"("+date+")" + "<img src="+iconurl+">");
        
        // display humidity
        $(currentHumidty).html(response.main.humidity+"%");

        //Windspeed in mph
        var ws=response.wind.speed;
        var windsmph=(ws*2.237).toFixed(1);
        $(currentWSpeed).html(windsmph+"MPH");
        
        UVIndex(response.coord.lon,response.coord.lat);
        forecast(response.id);
        if(response.cod==200){
            sCity=JSON.parse(localStorage.getItem("cityname"));
            console.log(sCity);
            if (sCity==null){
                sCity=[];
                sCity.push(city.toUpperCase()
                );
                localStorage.setItem("cityname",JSON.stringify(sCity));
                addToList(city);
            }
            else {
                if(find(city)>0){
                    sCity.push(city.toUpperCase());
                    localStorage.setItem("cityname",JSON.stringify(sCity));
                    addToList(city);
                }
            }
        }

    });
}
        
        
        
        
        
        
        
        
        // UVIndex

        //By Geographic coordinates method and using api and coordinates as a parameter build our uv query url inside the function below.




        //Function to return the UVIndex response

        //Build URL for UVIndex


        //Display 5 day forecast for current city





        //Dynamically add the last city to the search history



        //Display the last search again when the list group is selected in Search History



        //Write a function here



        //Clear Search History



        //Click handlers


    }