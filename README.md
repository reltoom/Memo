# Kidz Memo

![Kidz Memo shown on a variety of screen sizes](assets/readmeimages/responsive.png)

Visit the deployed site here: [Kidz Memo](https://reltoom.github.io/Memo/)

This site is a memory game for kids. It has bright, fun colors and the memory 'cards' are drawn by a child. There are 2 game difficulties, easy and hard. On easy, the player needs to match 4 pairs of cards and on hard, the player needs to match 8 pair of cards.


## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)
  * [Design](#design)
    * [Colour Scheme](#colour-scheme)
    * [Typography](#typography)
    * [Future Implementations](#future-implementations)
* [Features](#features)
    * [The Home Page](#the-home-page)
    * [The Yoga Page](#the-yoga-page)
    * [The Watsu Page](#the-watsu-page)
    * [The Newsletter-Sign Up Page](#the-newsletter-sign-up-page)
    * [The Thank You Page](#the-thank-you-page)
* [Technologies](#technologies)
  * [Languages](#languages)
  * [Websites & Programs](#websites-programs)
* [Deployment](#deployment)
* [Testing](#testing)
   * [Validator Test](#validator-test)
   * [Bugs](#bugs)
* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

- - -
## User Experience (UX)

### User Stories

#### First Time Visitor Goals

* Easy to understand what game you will play and how.
* Easy to navigate and start a game.
* Easy to reset the game after winning.

#### Returning Visitor Goals

* Layout is the same as before.
* Trying to beat the game modes faster than before.

## Design

### Color Scheme

I wanted the color scheme to happy, fun and bright. Something to draw a kids attention to it.
* `Rgba(234, 213, 255, 1)`A light lavender type is used as the primary background color the whole site.
* `Rgba(221, 72, 247, 1)`A shade of purple is used for Links, headers, text for reset button and background for Sound On/Off button.
* `Rgba(254, 252, 71, 1)`A shade of dark yellow is used for the main header background and main text background. It is also the background of the reset button and the text of the Sound On/Off button.
* `Rgba(5, 43, 237, 1)`A shade of royal blue is used for the name of the site, Kidz Memo, and then the text for rules and game modes.


  ![Kidz Memo](assets/readmeimages/colorscheme.png)

### Typography

One type of font from Google Fonts was used for this site.

* For text, Kidz Memo uses [Permanent Marker](https://fonts.google.com/specimen/Permanent+Marker). This seemed like a fun 'marker' style that a kid could use. 

### Future Implementations

1. Add a moves counter to see how many 'turns' it takes to win.
2. Adding a timer to see how long it takes to win a game.
3. Different pictures for the 'cards' and even bigger game area.

- - -

## Features

Kidz Memo has a 'home' page, 'easy mode' page and 'hard mode' page.

The whole site is responsive and works just as well on mobile phones as desktop screens.

* The word 'Memo'is writen in font-style and color scheme used for the site as the favicon.

  ![favicon](assets/readmeimages/faviconreadme.png)

* The Header section includes the title: 'Kidz Memo' as well as links to the game modes  and Sound On/Off button.
    ![Sound Button On](assets/readmeimages/soundon.png)
    ![Sound Button Off](assets/readmeimages/soundoff.png)

* The Main area holds the rules, descriptions of game modes and the game areas.

#### The Home Page

The home page of 'Kidz Memo' has the main header and then game rules and descriptions.
![Main Header](assets/readmeimages/header1.png)
![Home Page Image](assets/readmeimages/rules.png)
![Home Page Image](assets/readmeimages/gamemodes.png)


#### The Easy Mode
The header in the game mode holds links to the home page as well as the other game mode. It also has the Sound On/Off button.
![Header Easy Mode](assets/readmeimages/header2.png)

The Easy Mode version of the game is a 3 by 3 square. It includes one extra piece as 4 pairs of 2 is 8 blocks, so the 9th block is to fill the grid, it is unclickable.
![Easy Mode](assets/readmeimages/game3x3.png)
![Easy Mode](assets/readmeimages/extrapiece.png)

There is a 'reset' button at the bottom of the page to play again or to just reset the game board if you want.
![Reset Button](assets/readmeimages/resetbutton.png)
#### The Watsu Page

The first section on this page describes what Watsu is and what are the benefits of Watsu.

![What is Watsu and some Benefits](readmeimages/whatiswatsu.png)

Next, three different Watsu excersises are displayed. A short description of the excersise and some of the benefits followed by a picture of it in practice.

![Watsu Excersise - Pressure Point Massage](readmeimages/watsumassage.png)

Lastly on the Watsu page, in the bottom right corner of the footer is a credit from where the images for Watsu are taken.

![Footer Section with credit for Watsu images](readmeimages/watsucredit.png)

#### The Newsletter-Sign Up Page

On this page the user can sign up for a weekly newsletter from Ways to Relax. In this input form, the user is required to Enter a name and email address. Optional is a textarea where the user can tell more about themselves and their favorite way to relax. Pushing the 'Subscribe' button will take the user to the 'Thank You' page. The form itself is centered on a picture of a paper surrounded by sand and stones.

![Newsletter-Sign Up Form With Background Image](readmeimages/signup.png)

#### The Thank You Page

After subscribing to the 'Ways to Relax' newsletter, the user is taken to a page showing 'Thank you for subscribing to our newsletter!'. From here, the user can click any of the links in the header to return to the site.

![Thank You Page](readmeimages/thankyou.png)

- - -

## Technologies 

### Languages 

HTML & CSS were used in the making of Ways to Relax.

###  Websites & Programs 

* [Balsamiq](https://balsamiq.com/) - Created wireframes for basic outline and structure of site.
* [Github](https://github.com/) - Created repository and stored files here after commits.
* [Microsoft Visual Studio](https://visualstudio.microsoft.com/) - Wrote code and did commits to Github from here.
* [Google Fonts](https://fonts.google.com/) - Imports fonts for website.
* [Google Developer Tools](https://developer.chrome.com/docs/devtools) - For viewing in different screen resolutions and finding errors.
* [TinyPNG](https://tinypng.com/) Compressed background images.
* [Favicon.io](https://favicon.io/) Created the 'R' favicon for webbrowser.
* [W3 School](https://www.w3schools.com/) Read and understand code.
* [UI.dev Am I Responsive](https://ui.dev/amiresponsive) Used to get image on all different devices.
- - -

## Deployment 

Kidz Memo is deployed from Github Pages - [Kidz Memo](https://reltoom.github.io/Memo/).

To Deploy the site from GitHub Pages:

1. Go to the repository for this project and choose 'Settings'
2. From left side selection, go to 'Pages'.
3. Under 'Build and Deployment' from Source - choose 'Deploy from a branch'.
4. Under 'Branch', choose 'Main' from the first dropdown menu.
5. From the second dropdown menu, with the image of a folder, choose 'root', then save.

![Deployment Steps](readmeimages/deploy.png)

#### How to Fork

If you want to fork this repository:

1. Go to the repository for this project, [Kidz Memo](https://github.com/reltoom/Memo).
2. In the upper right hand area of the screen, click the 'Fork' button.
3. Then when the menu drops down, click 'Create New Fork'. (If you are the owner of a repository, you cannot fork.) 

#### How to Clone

If you want to clone this repository:

1. Go to the repository for this project [Kidz Memo](https://github.com/reltoom/Memo).
3. Click on the green 'Code' button and then select how you would like to clone: HTTPS, SSH or GitHub CLI (under the 'local' tab). 
4. Either copy the desired code or click to open with another program from the list below the code.
4. Open your code editor and go to 'Clone Repository' usually under 'File'.
5. Paste if your code and then 'Clone'.

- - -

## Testing

Ways to Relax has been tested on: Chrome, Microsoft Edge and Safari.

With Dev Tools all standard screen sizes were tested to make sure the site looks good and is still readable. 

I had a couple of friends and my brothers test the website on their mobile phone just to make sure that it was not only working locally with me.

Links in the main menu take the user where expected. Links in the footer take you to the appropriate social media site.

The newsletter-sign up form requires a name and email address and when submitted, correctly takes the user to the 'Thank You' page.

## Validator Test

* HTML
    * Using the [W3C Validator](https://validator.w3.org/#validate_by_input), code was checked for each webpage to see if there were any errors.
    ![W3C HTML Test](readmeimages/noerrorshtml.png)
* CSS
    * Using the [W3C Validator] (https://jigsaw.w3.org/css-validator/) the code for CSS was checked for errors.
    ![W3C CSS Test](readmeimages/validatorcss.png)
* Accessibility 
    * Using the Lighthouse dev tool from Chrome; accessibitly, performace, best practices and SEO were tested.

![Validator Test](readmeimages/lighthouse.png)

### Bugs
Here are some of the bugs that came up during development. 

| Bug | Fix |
| :--- | :--- |
| Background images not showing when deployed. | Changed relative pathing to URL pathing ( "https://reltoom.github.io/Project-1-Relax/assets/images/mainbackground.jpg"))  |
| Text overflowing from background after border radius was entered. | Added padding of 10px or 15px where necessary to text container. |
| Submit from the newsletter form did not send user to the 'Thank You' page, gave error. | In the 'form' tag changed 'method' from 'post' to 'get'.
| Footer was moving up or down depending on content. | Used flex to add footer into correct space and then made the 'body' have a min-height of 100vh.|

Whenever I discovered a bug, I would go back to the course material and re-read the section to better understand. If that did not help me, I used Google to search for more info on the topic or possible solutions. If efter this I still was not able to solve an issue, I asked my brother form help ( he works as a programmer). He would point out what was causing the issues and from there I was able to figure out a solution.

There are no unsolved bugs.
- - -

## Credits

### Code Used
Most of the code I wrote myself with a lot of trial and error, saving and viewing on web browser. 

Structure for the README file is from [Ways to Relax](http) adjusted to fit my project.
### Content

### Media
Audio clip is from [Free Sound](https://freesound.org/).

Images for the Memo game are drawn by my daughter.




### Acknowledgments
Thank you to 


Thank you to my mentor from CI, Precious, for giving me advice and guidelines on the project.