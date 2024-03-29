# PASSWORD MAKER

<br/>

#### Contributors: Trevor Rapp

*All work is completely my own. This project completed as a solo project in the Scrimba [Front End Developer Career Path](https://scrimba.com/learn/frontend), meaning specifications for what the project should be able to do were given, but no help or instruction was provided.*

<br/>

---

[![View Project](https://user-images.githubusercontent.com/11747875/141705232-471a0b9c-ca45-4540-a1b6-740c5e1becbe.png)](https://trrapp12.github.io/password-maker/)

<br>

https://user-images.githubusercontent.com/11747875/218293195-e114b2af-b559-48bf-abf1-fb266433940a.mp4

<br>

---

<img align="left" alt="HTML5" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="Git" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img align="left" alt="GitHub" width="40px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
<img align="left" alt="Terminal" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />

<br>

---

### DESCRIPTION:

> Treat your password like your toothbrush. Don't let anybody else use it, and get a new one every six months.
> -- Clifford Stoll

A password generator that can generate multiple, randomized alpha-numeric/special character passwords.  Also includes a one-click copy/paste option.

<br/>

---

### QUICKSTART GUIDE

To use the app simply click on the ```View Project``` button or visit <a href="https://trrapp12.github.io/password-maker/">https://trrapp12.github.io/password-maker/</a>. 

<br/>

---

### PROJECT V1.0 DEMONSTRATES THE FOLLOWING:


- [X] <em>User Story 1: </em> User should be able to get a password with alphanumeric characters and special characters.
- [X] <em>User Story 2: </em> User should be able to click a button to create the password.
- [X] <em>User Story 3: </em> User should be able to generate multiple passwords.
- [X] <em>User Story 4: </em> User should be able to see passwords displayed.
- [X] <em>User Story 5: </em> User should be able to pick the length of the password.
- [X] <em>User Story 6: </em> User should be able to have a 1-click copy/paste option for password.

<br/>

---

### CHALLENGES I OVERCAME


As far as technical issues most were pretty straightforward.  Some interesting challenges I found were.

1) While refactoring my code it was pointed out that instead of creating an array of individual characters I could just use the .split() method on one long array and save a bunch of typing.  That was cool.

2) I wanted to create a feature that allowed for one click copying to the clipboard.  I had never accessed the clipboard before, so I had to research the navigator.clipboard API.  I came up with the following: 

```javascript

  function findTarget (evt) {
    if (evt.target.className === 'option') {
      
      targetId = evt.target.id;
      targetElement = document.getElementById(targetId);
      if (evt.target.innerHTML) {
        navigator.clipboard.writeText(evt.target.value)
        alert("Password successfully copied!")
      } else {
        alert('no password to copy')
      }
    }
  }
```
3. This was also where I started really getting used to the idea of functional programming and giving only one functionality to one function.

<br/>

---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED

- [X] all work is completely my own.  The only directions were user stories the assignment needed to complete.

<br/>

---

### SCRIMBA FRONT END DEVELOPER CAREER CERTIFICATE:

*This project was completed as part of the Scrimba [The Frontend Career Path](https://scrimba.com/learn/frontend), which is composed of:*

* over 1000 lessons
* over 65 hours of instruction
* over 30 instructor-lead, hands-on projects
* over 15 Solo Projects (completed completely alone, with only Figma files and user stories provided.)

![Scrimba Frontend Developer Career Path Certificate of Completion](https://private-user-images.githubusercontent.com/11747875/286343080-af711cc7-262a-4e10-b714-38242281f13a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMDE5MTksIm5iZiI6MTcwMTIwMTYxOSwicGF0aCI6Ii8xMTc0Nzg3NS8yODYzNDMwODAtYWY3MTFjYzctMjYyYS00ZTEwLWI3MTQtMzgyNDIyODFmMTNhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI4VDIwMDAxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFmZjY2MGEwZDJlZjk1ZWQ0NTI2MmViM2IxNmYyNWVhYTYzYjc4NDYxYzNjNTBiNmMwZmQ2YjhjMzk2NGRlMzEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.cHBvWMxpR5PRF-Aw44drZbsAgS64QlpdTXDzz9xUYhY)

[CERTIFICATE OF COMPLETION - The Frontend Developer Career Path.pdf](https://github.com/trrapp12/dice-game/files/13483804/CERTIFICATE.OF.COMPLETION.-.The.Frontend.Developer.Career.Path.pdf)

<br/>

---

### ATTRIBUTIONS

Project created by TREVOR RAPP

* Original project idea was part of the <a href="https://scrimba.com/learn/frontend"> Scrimba's Front End Development Course.</a>

<br/>

---

### YOU CAN FIND ME AT

\**For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037) or return to my [Github](https://github.com/trrapp12)*

