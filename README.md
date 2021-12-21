# Grade-wars
<a href='206.45.49.15/grades'>This</a> is a program that is used for controlling the grade wars system.

# Navagation
### Main Menu
![Main Menu](https://github.com/Foxxything/Grade-wars/blob/main/screenshots/mainMenu.png)

When you click on a button, you'll get redirected to the selected page.

[Teacher](http://206.45.49.15/grades/demos/teacher.html),
[Admin](http://206.45.49.15/grades/demos/admin.html),
[Sign Up](http://206.45.49.15/grades/demos/signup.html)

<hr>

## Teacher
### Full Screen
![Full screen for the teacher view](https://github.com/Foxxything/Grade-wars/blob/main/screenshots/teacher/teacherView.png)


### Point Menu
![point menu for the teacher view](https://github.com/Foxxything/Grade-wars/blob/main/screenshots/teacher/totalPointsForTeacher.png)

This menu shows all of the points that the teacher has submitted.


### Student Count Submit Panel
![Student Count Panel](https://github.com/Foxxything/Grade-wars/blob/main/screenshots/teacher/pointEnter.png)


This menu is where a teacher would enter the number of students in each grade that, for example, participated in a spirit week. Once submitted, the admin can either `approve` or `deny`. You can see that <b>[here](https://github.com/Foxxything/Grade-wars#approval-panel)</b>.

<hr>

# Admin
## Event Picker
![Event Picker](https://github.com/Foxxything/Grade-wars/blob/main/screenshots/admin/eventChanger.png)

Here is where you can first pick what event you're going to have, whether it is the `Food Hampers`, a `Student Count` event, or `No Event`. When the admin toggles the switches, it will change the preview once you select what you want. The user will then press `Start`, which starts this event globally (all teacher accounts will see this).

## Manual Point Change
![Manual Point Changer](https://github.com/Foxxything/Grade-wars/blob/main/screenshots/admin/manualPointChange.png)

In this panel, the admin can manually change the point values for any grade.

## Approval Panel
![Approval panel](https://github.com/Foxxything/Grade-wars/blob/main/screenshots/admin/approveManu.png)

Here the user can approve or deny the teachers' points. When approved, they get added to the total counted points.

## Danger Panel
![Danger Panel](https://github.com/Foxxything/Grade-wars/blob/main/screenshots/admin/dangerManu.png)

This is the tab of items that you need to be careful around. 

`Reset Points` - resets all counted points back to 0 and removes all pending point reqests.

`Create Join Code` - Here an admin would enter a list or just one email. if a list it would have to look like 

> 1@sjasd.ca,2@sjasd.ca,3@sjasd.ca

which would send a code for each email sumited. 

<hr>

## Sign Up
### Enter Join Code
![JoinCodeEnterMenu](https://github.com/Foxxything/Grade-wars/blob/main/screenshots/signup/joinCodeEnter.png)

Here, the new user will enter their given join code. on a successful code try it will then bring you to the [Sign up page](https://github.com/Foxxything/Grade-wars#sign-up).
All of the codes will genarated by the [adminDangerPanel](https://github.com/Foxxything/Grade-wars#danger-panel).

### Sign Up
![sign up](https://github.com/Foxxything/Grade-wars/blob/main/screenshots/signup/signUpMenu.png)

This is where the user would then enter `Full name`,`Password` and `Confirm Password`. When all fields are filled, it makes a account based off of the `Acount type` from what code was used, and the same goes for getting that users `Email`. Then when it has all data it will create the user with 

```
Full name
Passsword
Title (wrong word but if corected i will update)
Email
Account type
```
