# News Data Insight 

## Introduction 

#### GDELT is an open source project that monitors and catalogues online news across the world.  I have been reading up on GDELT for about 6 months and find it fascinating. My longer term goal is to become proficient using Google Big Query and analysing the GDELT databases to generate meaningful insights from online news. With this longer term goal in mind I wanted to create the News Data Insight website as a first step, to learn and to showcase some of what's possible with GDELT. 

## User Experience 

#### This website is designed for users interested in online news analysis. It is designed to be informative and give the user a flavour the type of insight GDELT can deliver. The plan is to regularly add articles about news data analysis. 

## User Types and Journey's

###  **Business or Academic Users**

#### This user is interested in learning what type of insight news data analysis using GDELT could deliver. Our first interactice graph highlights the sentiment tone for three politicians over a 90 day period. PR companies use different types of analysis to test the reaction to news content. The overall tone of individual news outlets towards topics, people and organisations can also be measured.

## Features 

### Current Features 

####  **Home Page**

#### - Particle Background and Title - Particles.js from vincentgarreau.com
#### - Interactive Graph - designed to give users an example of how tone comparisons from online media can be used. Three data sets were taken from a GDELT query based on tone, saved as json files and plotted on the graph using Chart.js
#### -  Interactive Map - Goople Map that highlights how Geo location 2.0 from GDELT can be used. In this instance I am plotting the georgraphic locations of news coverage from a media outlet. 
#### - Line Graph - The line graph using data from a GDELT query that plots news intensity for a keyword. Any keyword can be used. In this instance I am highlighting how topics can be monitored to see if they are increasing / decreasing in the news. 
#### - Blog Summary Cards - The blogs card are linking to a blog page that highlights how the articles about online news analysis will be presented in the future. 
#### - Footer - A simple footer is used to link to additional information about GDELT and Google Big Query.

### **Blog Pages**

#### - Two of the blog pages have interactive content(same content as home page) and one has some generic content. ( A word cloud depicting the top 100 names associated with the Fine Gael political party based on online news)

### **Contact Page**

#### A contact page with particles.js which will be used if readers would like to get in touch to learn more about online news analysis. 

#### Features left to implement 

#### - Additional blog content with more data visualizations to showcase more tools 

#### - Improved and animated data visualizations 

#### - At present I am storing data sets locally as Big Query is expensive. In the next phase of development I plan to host two of the GDELT databases and create an api to call data from them. A keword search function will be added for users. 


## Technology Used 

* HTML 
* CSS
* JAVASCRIPT
* JQUERY
* CHARTS.JS
* GDELT GKG / GEO 2.0 DATABASES
* GOOGLE BIG QUERY


* BOOTSTRAP
* FONT AWESOME
* PARTICLES.JS
* GOOGLE MAPS API


## Testing 

### **Code Validation** 

#### The following websites were used to validate the code.

#### HTML - https://validator.w3.org/ - This validator checks the markup validity of Web documents in HTML.

#### CSS - https://jigsaw.w3.org/css-validator/ - This validator compares your style sheets to the CSS specifications, helping you find errors, typos, or incorrect uses of CSS, it will also tell you when your CSS poses some risks in terms of usability.

#### JAVASCRIPt -   https://jshint.com/ -  This is a tool that helps to detect errors and potential  problems in your JavaScript code.



### **Initial User Testing**

#### The site was initially designed with more of a news style. The data visualisations were located on the blog pages. It was
#### difficult for a user to navigate so after the initial meeting with my mentor I decided to change the layout. 


### **User Story Testing**

### The user that is coming to the site should be able to understand the purpose of the site. They may or may not have an interest in the area of news analysis. I  woudl like to give the user flavour of the type of news analysis that we will develop in the future. The user can get in touch with me through the contact page to find our more and there are links to the GDELT and Big Query websites on the footer. 

### **Test and Result** 

#### I tested the pages myself on desktop and mobile. In addition I asked three friends to visit the link as try and complete the following taks which they were able to achieve. 

### 1. Find the tone graph for Boris Johnson

#### - User lands on the Home page and can read the headline and description about Leaders Tone in online news media. The buttons for the three leaders are visible and the graph changes when the button is clicked. 

### 2. Discover the how many times France is mentioned in RTE's new coverage for this data set

#### - User can navigate to the Map section on the Home Page. The markers are visible for the relevant countries. The user can zoom in to see the country view for France. The label is visible when the marker is clicked to indicate how many times this location was mentioned. 

### 3. Navigate to learn more about GDELT

#### - The links to learn more about GDELT are visible on the footer. 

### **Screen Sizes and Browsers** 

#### The website was viewed on a number of devices using Chrome developer tools. The website was also viewed on personal phones and tablets. In all cases the website is responsive. I will change how the graphs are displayed on mobile in the future as they are not as user friendly as I would like. 

### **Bugs and Challenges during Development** 

####  1. I encountered the Mime type error from the CSS.Stylesheet file on a number of occasions during this project which cuased a number of issues. I checked Google and a number of Stackoverflows before asking my mentor. It appears the error was due to connectivity issues. 

#### 2. Init map is not a function. This error was due to the order of the script tags and was resolved.  

#### 3. 404 errors on blog pages where stylesheet was not being picked up. This caused a lot of downtime. There were issues with relative and absolute file paths and the type of file path that was working locally on Chrome versus the file path that was working on GIT pages. 

#### 4. On my last project I used relative paths in VS code and this worked perfect both locally and on GIT pages. This was not the case during this project. I beleive I may have made an error setting up the project which resulted in the discrepancy. The blog page was not picking up the 'Interactive-project' part of the file url and was throwing a 404.  By decalring that part of the url in the reference on the blog page I was able to get the stylesheet working. 

#### 5. I encountered a bug on the first interactive graph. I noticed when the graphs are changed using the buttons it appears sometimes that the data is not clearing from the previous time it displayed.

#### 6. There was an error on one of the Maps related to Global scope which was resolved with some help from Stackoverflow. 


## Deployment 

### Process used to deploy on GitHUb Pages

#### 1. Select the repository on GitHub shakapoxa/user-centric-project
#### 2. Select settings
#### 3. In the settings sections scroll down the page to GitHub Pages
#### 4. Select Master branch
#### 5. Click save

#### The site url on GitHub pages is - https://shakapoxa.github.io/usercentric-project/

### Running the code locally / Cloning a repository

#### 1. On GitHub, navigate to the main page of the repository.
#### 2. Under the repository name, click Clone or download.
#### 3. In the Clone with HTTPs section, click the copy icon to copy the clone URL for the repository.
#### 4. Open Git Bash.
#### 5. Change the current working directory to the location where you want the cloned directory to be made.
#### 6. Type git clone, and then paste the URL you copied in Step 2.

$ git clone https://github.com/shakapoxa/user-centric-project

#### 7. Press Enter. Your local clone will be created.

 $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

  ```
  >Cloning into `Spoon-Knife`...
  >remote: Counting objects: 10, done. 
  >remote: Compressing objects: 100% (8/8), done. 
  >remove: Total 10 (delta 1), reused 10 (delta 1) 
  >Unpacking objects: 100% (10/10), done

   ``` 

   
## Credits 

### Content 

#### Particles.js is from vincentgarreau.com  MIT license: http://opensource.org/licenses/MIT
#### Some code to plot the Google Map taken from the Google Map API page
#### Datasets are from queries run on GDELT and Big Query. GDELT databases are opensource. 
#### Window EQfeed Callback. Stackoverflow to access Geojson data for the Interactive Map.

### Media 

#### Images are from free image websites: Burst and Pixabay

### Acknowledgements

#### I learned so much during this project and it has increased my confidence working with Javascript and Jquery. I would like to put a big shoud out to Tony my mentor for the constant encouragment and taking additional time outside of the allocated calls to help with creating a better homepage and resolving some of the errors I encountered. I would also like to Thank the support team at Code Institute for their assistance. 







