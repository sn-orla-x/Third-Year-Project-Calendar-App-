**Table​ ​of​ ​Contents**

**1. Introduction                                                                                2**

- 1.1 Overview                                                                                2
- 1.2 Business Context                                                                2
- 1.3 Glossary                                                                                2

**2. General Description                                                                        3**

- 2.1 Product / System Functions                                                        3
- 2.2 User Characteristics and Objectives                                                3
- 2.3 Operational Scenarios                                                                4
- 2.4 Constraints                                                                        5

**3. Functional Requirements                                                                5**

- 3.1 User Login                                                                        5
- 3.2 View All Scheduled Events                                                        6
- 3.3 Filtering Events - By Club/Society                                                6
- 3.4 Filtering Events - by Day / by Week / by Month                                7
- 3.5 Adding Favourite Clubs and Societies                                         7
- 3.6 Add Reminder For Event                                                        7
- 3.7 Search Events                                                                        8
- 3.8 Ability To Join Clubs and Socs                                                        8
- 3.9 Ability to Add New Events                                                        9
- 3.10 Ability to Edit An Event                                                        9
- 3.11 Ability to Delete an Event                                                         9
- 3.12 Ability to Promote Events                                                        10
- 3.13 Featured Event                                                                        10

**4. System Architecture                                                                        12**

- 4.1 iOS App                                                                                13
- 4.2 Android App                                                                        13
- 4.3 Calendar API                                                                        13
- 4.4 Adapt Server                                                                        13

**5. High-Level Design                                                                        14**

- Context Diagram                                                                        14
- Use Case Diagram                                                                15

**6. Preliminary Schedule                                                                        16**

- 6.1 Table                                                                                16
- 6.2 Gantt Chart                                                                        17

**7. Appendices                                                                                17**

**1. Introduction**

**1.1 Overview**

The application that we are developing is a system in which members of Clubs and Societies in DCU can join to see every event that DCU Clubs and Societies are offering that week. It will also include features to allow Clubs and Society members to add events to the calendar, edit events and delete events. Members will have varying levels of access. Regular members of the society will only be able to see the events and add reminders for them, for example, while a member of a committee for a club or society would be able to edit or add events. We hope to store events using Google Calendar, and simultaneously create a Facebook event.

We are also hoping to implement a feature in which users can join a club or society through the application, as currently there are only two ways in which to join - attending the Clubs and Socs fair at the beginning of semester one, or going to the clubs and societies office in the U. Students who miss the fair, or do not know that you can join Clubs and Societies through the office, are often &quot;locked out&quot; of joining societies. Our application hopes to open students to joining clubs and societies at any point in the year.

**1.2 Business Context**

The main business context for this application are as follows.

1. Developing the application without branding - allowing us to potentially approach other colleges and universities with the need for this application.
2. Clubs and Societies could also pay a small fee if they wanted to be featured as the &quot;featured event&quot; on the log-in page of the application.

These are feasible as many colleges and universities have vibrant and active Clubs and Society life, yet very few have dedicated applications to allow students to access up-to-date information.

In regards to our second point - many DCU Clubs and Societies already pay for advertisements on platforms such as Instagram and Facebook. This is especially true for bigger events - DCU LGBTA&#39;s Drag Race is one such example. It is likely, in our eyes, that these societies may pay a small fee to be advertised to a dedicated audience of DCU students - their target market.



**1.3 Glossary**


- **User**

 Refers to a student, be they a regular student, committee member or both.

- **Groups**

*Refers to Clubs and Societies/Clubs and Socs

- **API**

Application Program Interface

- **REST**

Representational state transfer



**2. General Description**

**2.1 Product / System Functions**

Our application will first have to be downloaded. After this, users will be able to do the following:

- Login
- View all scheduled events
- Filter events - by Club/Society
- Filter events - by Day, by Week, by Month
- Add favourite Clubs/Societies
- Add reminders for events
- Search events
- Ability to join Clubs and Societies
- Ability to add new events \*
- Ability to edit events \*
- Ability to delete events \*\*
- Ability to promote events\*
- &#39;Featured Event&#39; on Login page

These functions will be explained in more detail in part three of this document.

\*Only Committee Members for Clubs and Societies will be able to do this

\*\*Deleting events requires more than one Committee Member - to prevent improper deletion of event



  **2.2 User Characteristics and Objectives**

There are three main types of users for this application - Member User, Committee User and Admin User.

The majority of the potential users of this application are Member Users - that is, they are members of the DCU community, or are alumni. These users have the options to join a Club or Society, browse the events. If they find an event that they&#39;d like to attend, they can opt to be reminded that the event is on by clicking a button beside the event. If they decide to be reminded, the application will send a push notification on the morning of the event. They can also choose to add a club or society to their favourites - allowing them easy access to the events that have been scheduled so far.

If these users are aware of a specific event that they would like to be reminded about, they will be able to search for the event so that they don&#39;t have to manually search for through every event. If the user decides to join a club or society, they will pay using card. Only DCU students, alumni and DCU students who did not finish their degree can join DCU Clubs and Societies - and each has a different price. This will be accounted for in our application.

The Committee User will be able to add new events - so that the calendar will be populated. As these events are added to our calendar, an event is also created on Facebook, saving on extra work for the committee. They also have the ability to edit events, which is useful for for events which may have had to move locations or change the time. Committee users will also be able to delete events - if it happens that an event needs to be cancelled.

The final user that we have to deal with is the Admin user, the people who work in the Clubs and Societies office. These users will have to be able to process any payments that come into the account, and ensure that the user is signed up for the correct society, at the correct level.



**2.3 Operational Scenarios**

_Scenario 1: Login for students_

A user will log in using the student username and password given to them by DCU. Provided they enter the correct username and password, they will be able to access the app. If they do not, they will be shown an error message telling them that they have entered the wrong username and/or password and they can try again.

_Scenario 2: Login for committee_

A committee member, ideally the Events Officer or Chairperson, will log in using the clubs/socs username and password given to them by the Clubs and Socs office. As above, provided they enter the correct username and password, they will be able to access the app. If not, they will be shown an error message telling them that they have entered the wrong username and/or password and they can try again.

_Scenario 3: Setting favourite clubs/socs_

A user will be able to set favourite clubs and/or societies. They will do this by clicking on a &quot;favourites&quot; button. This will display a different version of the calendar which will contain only events being run by the users selected favourite clubs and/or socs.

_Scenario 4: Adding/Editing/Deleting events_

Committee accounts will have a slightly different layout to regular user accounts with some extra features. These features will mean that a committee member will have the ability to add, edit and delete events from the calendar with their version of the app.

_Scenario 5: A student is also a committee member_

In the case of a student also being a committee member they will have the option to switch between two different views of the app. This will be done by the student logging in to their own personal student account, going to the menu and selecting the option to add an account. The society account will then be added as a secondary account for that student.



**2.4 Constraints**

_Time constraints_ - We have a short time period to develop this application in, and we need to remember that we are also learning to work with new technologies and languages to help us develop this application. Our main functionality is our top priority, and anything else that we add on top of this will be seen as extra.

_User requirements_ -  Our application is designed to ideally replace the unused &quot;What&#39;s On&quot; tab on dcusu.ie/clubs. This would mean ideally working with the members of various committees in Clubs and Societies to ensure that this application is working in a way that they would want to use - which means running the application past them at every stage, and listening to their feedback.

_Staff requirements -_ As we are hoping to be able to implement a payment system, we will have to work with staff in the Clubs and Societies office to ensure that features such as students joining Clubs and Societies and money transfer is carried out in a way that suits them.



**3. Functional Requirements**

**3.1 User Login**

_Description_

Users will login using either their DCU student number and password, or their committee username and password which is provided by the Clubs and Socs office. These will be verified by running them against a database.

_Criticality_

This is essential for the application, as users have different levels of access to the application. A student, for example, should not be able to add or edit events. Without the authentication a user login provides, any user would be able to add or delete events in any club/society.

Another point is that users of this application must be a part of the DCU community - which is only verifiable by having them log in using student numbers and DCU given passwords, or accounts given by the clubs and societies office.

_Technical Issues_

We must create a copy of the database which DCU has of student numbers and passwords, and add the committee account details to allow queries relevant to our application without cluttering the main database.

_Dependencies with other Requirements_

There is no access to the system without a user first logging in. Only once logged in will users have access to other features, which will be matched to their appropriate privilege level.

**3.2 View All Scheduled Events**

_Description_

Users will be able to view every event currently scheduled. These events will be separated by day, and will contain all major details about the event, such as the name, the time it begins at, and the location it takes place in - including the building name and room number if it&#39;s on campus.

_Criticality_

This is the main functionality of our application, so this is without a doubt the most critical aspect. This would not be a calendar application without being able to see the events scheduled.

_Technical Issues_

The main technical issues we face with this is integrating Google Calendar with our application using Calendar API from Google and laying out the information in a way that is accessible to all users. We would also need to combine each committee&#39;s calendar into one main calendar, again using functions from Calendar API.

_Dependencies with other Requirements_

Viewing the event schedule requires users to be logged in - which means that this is dependant on the User Login functionality.  The ability to filter events also depends on being able to view all events, so there is a dependency present there also.

**3.3 Filtering Events - by Club/Society**

_Description_

Users will be able to view only events a certain club or society is hosting, by choosing the society from a drop down menu. Any events not hosted by the chosen group will be filtered out and only events hosted by the chosen group remain.

_Criticality_

While not as essential as viewing all scheduled events, this is a highly important feature and would make a lot of sense to implement as soon as possible.

_Technical Issues_

Being able to filter events by a specific group means that each Committee would have their own calendar- enabling us to use the Get function with Google&#39;s Calendar API.

_Dependencies with other Requirements_

Filtering events requires users to be logged in - which means that this has a dependency with User Login. It also requires all possible events to be present, meaning that there&#39;s a dependency with View All Scheduled Events.

**3.4 Filtering Events - by Day / by Week / by Month**

_Description_

Users will be able to filter events by time frame - viewing all events happening over the course of a day, a week, or a month. This will return only events happening in that time frame, allowing users to view plan for certain days or for the entire month if they choose to (and there are events planned that far in advance, of course).

_Criticality_

As with our other filtering function - Filtering Events - by Club/Society - this is not as highly critical as viewing all events, but we feel that this functionality will add a lot to our application.

_Technical Issues_

Being able to filter by the date field using dates input by Committee Users, using the Get function with Google calendar API

_Dependencies with other Requirements_

Much like the above, this functionality requires users to be logged in, and also requires to be able to access every event scheduled using the application.

**3.5 Adding Favourite Clubs and Societies**

_Description_

Users will be able to add favourite clubs and societies to allow quick access of the events that these groups. If a user has specified favourite groups, events that these groups are holding are displayed when clicking on the favourites button.

_Criticality_

The ability to add favourites would limit the amount of time that users have to spend repeatedly inputting the groups that they attend regularly into the app, improving usability of the application. For that reason,we feel that this is an important addition to the application.

_Technical Issues_

Storing the data for each user - allowing them to close the application and then reopen with the favourites still stored - and a personal screen with events being screened by favourite groups.

_Dependencies with other Requirements_

This requires users to be logged in - as that will allow us to save the favourites to their account.

**3.6 Add Reminder for Event**

_Description_

Users can press with a button on any event to opt in to be sent a push notification on the morning of the event.

_Criticality_

This feature would a really important feature for our application, as speaking from personal experience, we have found that a major reason students do not attend events is due to forgetting that they are scheduled.

_Technical Issues_

Users would have to give the application permissions to send a push notification.

_Dependencies with other Requirements_

This depends on events being created, so there is a dependency with the ability to add an event.  There is also, as always, a dependency with the login - to be able to view the events in the first place.

**3.7 Search Events**

_Description_

If a user wants to find an event by the event name, they can search for the event using the search bar.

_Criticality_

This is not critical, but would be a feature that would be missed and sought after if it wasn&#39;t included.

_Technical Issues_

We&#39;ll need to be able to access the event id of an event using keywords. Which means we&#39;ll have to account for that in the creation of events.

_Dependencies with other Requirements_

This depends on the add event functionality, and requires users to be logged into the application.

**3.8 Ability to Join Clubs and Societies**

_Description_

Users will be able to join clubs and societies through the application - paying using their cards. This means that they are able to join societies at any time, not just at the clubs and societies fair, or during opening hours of the Clubs and Societies office - which is based on the Glasnevin campus. A receipt will will be sent to their email address.

_Criticality_

This feature of our application doesn&#39;t affect other usability, and is therefore not essential. It would however, be a major selling point for our application.

_Technical Issues_

Working with card payments - using PayPal or similar. Working with the student data to automatically send a receipt to the email address associated with email address.

_Dependencies with other Requirements_

Users will have to be logged in to into the application to allow them to join clubs and societies. They will also have to have a student number associated with their account.

**3.9 Ability to Add New Events**

_Description_

Committee users will be able to add events to the calendar - providing information such as event name, the location the event takes place, the start time of the event, the end time of the event. They will also have the opportunity to add a brief description of the event and an optional picture.

Adding new events will also integrate with Facebook also, creating a Facebook event for the event created on our application.

_Criticality_

This feature is vital as our application would remain unpopulated if it was not present. Therefore, this will be one of the first features we implement, if not the first. The facebook event will come after this, but is also something we would really stress to have implemented.

_Technical Issues_

Working with Calendar API to allow users to easily add events to the calendar using the Insert function. Working with Graph API on the facebook end to create an event.

_Dependencies with other Requirements_

Committee users will need to be logged into their committee accounts, allowing them access to the elevated privileges.



**3.10 Ability to Edit Events**

_Description_

Committee users will have the option to edit events if needed, allowing them to change the name of their event, the location, the start time and the end time, as well as the event photo and/or description.

_Criticality_

Human error is inevitable, so this feature is something we would not present this application without.

_Technical Issues_

This would require us working again with Calendar API, this time using either the patch or update function.

_Dependencies with other Requirements_

This requires a Committee user to be logged in, and an event to have already been created. It also requires the committee user to be able to view the events.

**3.11 Ability to Delete Events**

_Description_

Committee users will be able to delete events, but it will require more than one committee user to agree to the deletion of the event. This is to ensure events are not improperly deleted by committee users.

_Criticality_

Events can sometimes not go ahead, so this is a feature we would consider essential to our application.

_Technical Issues_

Using the delete function within Calendar API, but only after two committee members have confirmed that they would like to delete the event.

_Dependencies with other Requirements_

Requires the users to be logged in, also requires an event to be created and for users to be able to see events.

**3.12 Ability to Promote Events**

_Description_

Committee Users will have the option to pay a small fee to promote their event on the application, making use of of the free space on the login screen to show off a featured event.

_Criticality_

Nothing is dependant on this feature, so it&#39;s more of a nice-to-have.

_Technical Issues_

Being able to accept payment for the promotion - again with Paypal or similar. Ensuring that events that have been promoted are showing up on the Login page using Calendar API&#39;s get function.

_Dependencies with other Requirements_

Requires the committee user who would like to promote the event to be logged in. Also requires the event to have been created.



**3.13 Featured Event**

_Description_

A featured event shows up beneath the user login,  highlighting an event that is happening within the next week. This could either be random, or used as an advertisement space for clubs and societies.

_Criticality_

Again, this feature is more of a nice-to-have feature than critical.

_Technical Issues_

Requires use of the get function in Calendar API.

_Dependencies with other Requirements_

If this is used as an advertisement space, it will depend on the ability to promote events. Regardless, it will depend on events being present - and therefore will have a dependency on the create event function.


**4. System Architecture**
![System Architecture Diagram](/Functional Spec/Funtional Spec Images/SystemArchitecture.png)

**4.1​ ​iOS​ ​App**

This is the frontend a user will see while using an iOS device. It will be written in CSS, HTML and Javascript through the cross platform development framework Apache Cordova.

**4.2​ ​Android​ ​App**

This is the frontend a user will see while using an Android device. It will be written in CSS, HTML and Javascript through the cross platform development framework Apache Cordova.

**4.3 Calendar API**

We will be using the Google Calendar API which is a RESTful API.

**4.4 Adapt Server**

We will use the Adapt servers to verify student usernames and passwords at the login stage. When the user enters their username and password, the database will be searched for the details, checked and if they are correct, access granted.















**5. High-Level Design**

**5.1 Context Diagram**
![Context Diagram](/Functional Spec/Funtional Spec Images/Context_Diagram.png)



**5.2 Use Case Diagram**
![Use Case Diagram](/Functional Spec/Functional_Spec_Images/Use_Case_Diagram.png)





**6.  Preliminary Schedule**

**6.1 Table**



| **Task Name** | **Start Date** | **End Date** | **Total Duration** |
| --- | --- | --- | --- |
| Functional Specification | 26/11/18 | 07/12/18 | 13 Days |
| Learning Period | 07/12/18 | 14/12/18 | 7 Days |
| UI Design | 12/12/18 | 21/12/18 | 10 Days |
| UI Implementation | 27/12/18 | 15/1/19 | 20 Days |
| Technical Spec &amp; User Manual | 2/1/19 | 4/3/19 | 62 Days |
| Testing existing code | 15/1/19 | 10/3/19 | 68 Days |
| Adding Events | 15/1/19 | 19/1/19 | 4 Days |
| Deleting Events | 20/1/19 | 22/1/19 | 2 Days |
| Editing Events | 22/1/19 | 24/1/19 | 2 Days |
| User Login | 25/1/19 | 3/2/19 | 10 Days |
| User Testing | 4/2/19 | 7/2/19 | 3 Days |
| Favourite Clubs and Socs | 8/2/19 | 12/2/19 | 5 Days |
| Join Clubs and Socs | 13/2/19 | 20/2/19 | 7 Days |
| Search/Filter | 21/2/19 | 25/2/19 | 4 Days |
| Reminder | 26/2/19 | 26/2/19 | 1 Days |
| Promotion features | 27/2/19 | 28/2/19 | 2 Days |
| User Testing | 1/3/19 | 4/3/19 | 3 Days |
| Preparation for Presentation | 1/3/19 | 10/3/19 | 10 Days |









**6.2 Gantt Chart**


![Gantt Chart](/Functional Spec/Functional Spec Images/gantt_diagram.PNG)
 

**7. Appendices**

**Calendar API**

[https://developers.google.com/calendar/v3/reference/](https://developers.google.com/calendar/v3/reference/)

**Graph API**

[https://developers.facebook.com/docs/graph-api/reference/event/](https://developers.facebook.com/docs/graph-api/reference/event/)

**Clubs &amp; Societies &quot;What&#39;s On?&quot; Page**

[http://www.dcusu.ie/whatson/2018-12](http://www.dcusu.ie/whatson/2018-12)

