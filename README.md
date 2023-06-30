# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview
Kicki and Tshepiso decided to collaborate on this project as a challenge. This is the first time we work together. We created the page in React and used Git, Github and Github projects to structure our work. 

The lessons we hoped to learn from working on this together:

- Collaborating remotely
- technical communication
- version control
- project management

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

#### Desktop view

<img width="1704" alt="NEWS-WEBSITE:DESKTOP" src="https://github.com/akickia/news-homepage/assets/95541911/ea804465-8904-42cc-9eff-685d6fdd29cc">


#### Mobile view

https://github.com/akickia/news-homepage/assets/95541911/d94eb2b5-5a2a-4fef-a6c6-0755a70d7fde


### Links


- Live Site URL: [Add live site URL here](https://news-homepage-fontendmentorchallenge.netlify.app/)

## My process
We started our project with setting up a plan for how to collaborate and set up rules with esLint and prettier for consistensy. We divided the work between us and worked on small tasks until we met up again to plan ahead. We asked for reviews before merging branches and checked in with each other from time to time. 

The project itself was straight forward, we decided on what components we needed and then wrote them along with styling. The site is coded mobile first and the layout is responsive. We decided to write the news in json-files even though they are tiny, but a possible development of this project can be to add more news to display and to add more pages. Right now the page is static, the project only includes the start page. 

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I, Kicki, have learned quite a lot from Tshepiso about how to structure the workflow professionally and to work with esLint and pull request templates. It was a challenge to create consistensy in all of the aspects, everything from naming classes to where to put styling (and everything in between). This has been a great experience and I'm thankful for the oportunity to collaborate like this. 

I , Tshepiso have learnt so much technically from Kicki. I learn about conditional rendering of components along with the window event listner. It was also great working with Github projects. 

```js
const [isMobile, setMobile] = useState(window.innerWidth < 650);

  const updateMedia = () => {
    setMobile(window.innerWidth < 650);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.



### Continued development

with ore time we could implement:
- dark mode
- animations and hover states 

### Useful resources

- [ESLint](https://eslint.org/docs/latest/use/getting-started) 


## Author

- Github - [Tshepiso](https://github.com/tshepi-tech)
- Github - [Kicki](https://github.com/akickia)


