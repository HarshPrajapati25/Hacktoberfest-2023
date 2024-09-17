- ## Q. Write a blog on web scrapping.
# Web Scraping Simplified: A Guide to Scrap Data Using Selenium And Python

### Introduction:

Automating web interactions and tasks involves programming in Python language to automate web tasks. The process involves controlling web browsers, extracting data from websites, and performing repetitive tasks by utilizing various libraries and frameworks.

  

Python has a range of powerful libraries and tools for web automation. One of the most widely used tools is Selenium, which is a very popular web-based automation tool. With Selenium, developers and QA professionals can automate tasks such as clicking buttons, filling out forms, and navigating through web pages, making it ideal for tasks like web testing, web scraping, and web application development. So let’s see How Web application Testing and Web Scrapping can be done using Python

  

### The Installation Part:  
  
Before diving further, let’s first go through the requirements needed to perform Web Scrapping using Selenium and Python

  

-   Python Installation: The first and foremost requirement is the Installation of Python. You can install the latest version of Python from the official Python Website([https://www.python.org/](https://www.python.org/)). Follow the instructions given and you are good to go!!  
      
    
-   Selenium Installation: Open the command prompt(for Windows) or terminal(for Mac and Linux) and run the following command:- pip install selenium.
    

  

-   WebDriver Installation and Configuration: Choose the appropriate WebDriver for the browser you want to automate. For example, if you want to automate Google Chrome, download the ChromeDriver from the official website ([https://sites.google.com/a/chromium.org/chromedriver/](https://sites.google.com/a/chromium.org/chromedriver/)) and ensure it matches your Chrome browser version. Place the WebDriver executable in a directory accessible by your system's PATH environment variable.
    

  

Once done with the above steps, you are good to go!!!!



### Web Scrapping:

  
Data collection and exploitation have changed thanks to web scraping. It has become a game changer in the world of data extraction and analysis. It is like having a secret superpower that lets you become a data superhero!!

  

Web scraping with Python and Selenium is like having a digital sidekick that helps you navigate the web and collect hidden treasures of data. Imagine yourself as a digital explorer, navigating through the vast online universe, armed with a trustworthy Python sword and Selenium shield. With each website you encounter, you uncover hidden treasures of data, like a modern-day Indiana Jones, except instead of ancient artifacts, you collect valuable insights.

Sounds cool, right? 🤔 Let's dive deep in….

  

Let’s first understand what exactly is the term — Web-Scraping.  
  

The traditional definition goes like this:- “Web Scraping or Web Harvesting or Web Data Extraction is a technique for extracting data from websites.”

  

Let’s define it in a fun way:- Web scraping is like being a digital detective, sleuthing through the vast expanse of the internet to uncover hidden treasures of data. It's like having a magic wand that can magically extract valuable information from websites with just a few lines of code.

  

But, you must be wondering, we can just copy and paste data right from the website. Then why use web scraping? But, what if you need to get tons and tons of data in the shortest possible time? 🤔 🤔. That’s where web scraping comes into play. Unlike the lengthy process of getting all the data manually, web scraping uses intelligent automation methods to get thousands or even millions of data within the shortest time possible. Just sit back and relax, and watch the magic happen!!!

  

Enough of theory. Let’s get to the practical part…

  

### Requirements import

> from  time  import  sleep
> 
> from  selenium  import  webdriver
> 
> from  selenium.webdriver.chrome.service  import  Service
> 
> from  selenium.webdriver.common.by  import  By
> 
> from  webdriver_manager.chrome  import  ChromeDriverManager

  

### Automatically installs the Chrome driver according to your browser

> driver =
> webdriver.Chrome(service=Service(ChromeDriverManager().install()))

  

#### Output to CSV

    with  open("Output.csv", "w") as  writer:

### Open IMDB Top 250 page

     driver.get("https://www.imdb.com/chart/top")

  

### Find all movie titles and ratings using Selenium

    movie_titles = driver.find_elements(
    
    By.XPATH, "//td[@class='titleColumn']/a")
    
    movie_ratings = driver.find_elements(
    
    By.XPATH, "//td[@class='ratingColumn imdbRating']/strong")

  

# Extract the text from the elements

    titles = [title.text  for  title  in  movie_titles]
    
    ratings = [rating.text  for  rating  in  movie_ratings]

  

# Print the movie titles and ratings

    for  i  in  range(len(titles)):
    
    print("Movie:", titles[i])
    
    print("Rating:", ratings[i])
    
    print()
    
    sb = []
    
    sb.append(titles[i])
    
    sb.append(',')
    
    sb.append(ratings[i])
    
    sb.append('\n')
    
    writer.write("".join(sb))

  

 #### To Run the script:  
  

-   Save the file with the name of your choice
    
-   Open cmd/terminal and head to the directory where your project is located
    
-   Then Run the command:- python3 [name_of_your_file].py  
      
    

  
And boom.., if you have configured everything correctly, you will get the output below :  
  

  

![](https://lh5.googleusercontent.com/z8yLdmNNe20BFLEnZFiG_xGzlLOAxF4iNJlvpjhltYj4QBBOXfGPCiz-UA_WnwvIJ3YFNy2vp0IKBrRpV3_-PH_f3IWzp28gDjWouhAlpVlOluBorr0QDPXWJnt6udwkS7xUg8jqDvM3kPJspJvSI60)

  
  
  
  
  
  

![](https://lh6.googleusercontent.com/2JwhZiy2r_aSXN4YoLxNuL0ZPMflewb02g_DOrFmHUxW799Cic50VB6a-g7lr-aAR6117VPETOx7klbopBSRhIvUlIYoa-Oqd1pZlEHETDtFPj5Sn0lXZPuvvvmfvoN57P5lcTOX5fOeaMddbtZLH5w)

(Outputted CSV)

  

You might be curious about these intriguing terms: XPATH and find_elements. Let me shed some light on them for you.

  

-   find_elements: It is an inbuilt method in the selenium library. Its purpose is to locate multiple elements on the webpage based on a given specific criteria.
    

  

-   Commonly used criteria with which the find_elements method is often used are:
    

  

1.  By.ID: Locates element using “ID” attribute.
    
2.  By. CLASS_NAME : Locates element using “CLASS_NAME” attribute
    
3.  By.NAME: Locates element using “NAME” attribute
    
4.  By.TAG_NAME: Locates element using “HTML TAG NAME” attribute
    
5.  By.CSS_SELECTOR: Locates element using “CSS SELECTOR” expression
    
6.  By.XPATH: Locates element using “XPATH” expression.
    

  
  

Now, as we have a basic idea about find_elements, at this point you might be wondering, what are these criteria and this weird string: " //td[@class='titleColumn']/a" which was just mentioned in the code. Don’t worry, let’s get a ride together on this magical journey!!!

  

Let's first have a look at how can we get the “wierd_string”. Let's understand this through the IMDB example mentioned above.

  

-   Our objective is to extract the movie titles and ratings. To begin, we need to locate the HTML tag that contains the movie names and ratings. To achieve it, we need to open the Elements in Developers Tools and then, hovering over the needed tag, right-click the tag in the Element section(as shown) and hover on copy from context-menu, you can select the required criteria(as shown in the below screenshot) and have the necessary element(“wierd_string”) extracted.
    

  

![](https://lh6.googleusercontent.com/fp1s4-dHow1w8xtUbEF9jIew3BOIj31U4OsArvxNcsEfMiIA2lK89NT4SsQddguy_0iM2VsNoHzVCTbOP81lO1_okujFBr056sPTn0ySugrfC-Cc_8Tu2ya1nBAVmePfPm8Achu9TGhsul2EjrleVVY)

  
  

The next steps are pretty self-explanatory. If you have some familiarity with Python, you can easily go with the flow. I hope you have got some idea regarding the Scrapping using Python-Selenium.

  

### Conclusion :

With Python's simplicity and versatility, even individuals with limited programming experience can quickly learn to create web automation scripts. There are ample resources for learning and troubleshooting thanks to its rich ecosystem and extensive community support.

  

However, it's important to note that web automation should be used responsibly and within legal boundaries. It's essential to respect website terms of service, robots.txt files, and any applicable laws or regulations. Additionally, websites may implement measures to prevent automation, so it's crucial to be mindful of any limitations or restrictions imposed by the target website.

 
In conclusion, web automation using Python is a valuable skill that empowers us to automate repetitive tasks on the web. As a result, it reduces time, increases efficiency, and opens up possibilities for a variety of applications. We can simplify our work and boost our productivity by using Python's libraries and tools.
 
