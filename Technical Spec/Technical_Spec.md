# Clubs and Socs Calendar App
## CA326 Technical Specification
### Orla Kinsella and Phoebe Cooney
### Table of Contents
- 1 Introduction
    - 1.1 Overview
    - 1.2 Glossary
- 2 System Architecture
- 3 High Level Design
    - 3.1 Component Diagram
    - 3.2 Data Flow Diagram
    - 3.3 State Machines
    - 3.4 Sequence Diagrams
- 4 Problems and Resolution
- 5 Installation Guide
- 6 Future Plans


#### 1 Introduction
##### 1.1. Overview
The Clubs and Socs Calendar App is a cross-platform mobile application implemented with
the React-Native framework. The aim of this application is to deliver a lightweight, easy to
use application for users to more easily view events that are going on on the DCU
campuses. Our aim is to make sure that any user will never miss out on any club or society
events again.

Our application not only delivers a modern feeling UI which is easy to use and accessible,
but also allows for seamless movement between screens and fluid, responsive interactions
with our functions. The application includes a multitude of features: the ability to login, add
an event to the calendar, list all events, list events by club, list events by society, edit events
and remove events from the calendar.

We are using React-Native to develop our app. This means that the app is coded in ES
and JSX which is bundled into a jsbundle and is then bridged to the native side through
native code from the React library. Thanks to this, our app is one hundred percent cross
platform and uses native UI components on both iOS and Android. This means that the app
performs on any platform just as well as if it was written in purely native languages.

#### 1.2. Glossary
- System: Refers to the overall product/system to be developed.
- Users: Refers to the user of the system.
- API: Application Programming Interface.
- React-Native: "React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components."
- BDD: Behaviour Driven Development
- TDD: Test Driven Development
- App: Refers to an application, e.g., a mobile application
- Apache Cordova: “​a mobile application development framework.”
- QR Code: ​Quick Response Code
- OAuth: ​Open Authorization

#### 2. System Architecture
#### ![System Architecture diagram](./Technical Spec/images/SystemArchitecture.jpg)
The "Mobile Device" refers to the frontend. This is what the user will see either on their iOS
or Android device. It is developed using native UI components from the React-Native
library. This is how the user interacts with our system. Our system in tern interacts with
several other systems including the Google Calendar API, Expo, React-Native Packager,
Bundler and some dependencies. Development for each of these systems took place
primarily through the React and React-Native libraries, meaning we could use the
packagers, bundlers and Expo to build the completed application.

#### 3. High Level Design
##### 3.1. Component Diagram
##### ![Component diagram](./Technical Spec/images/ComponentDiagram1.jpg)

#### 3.2. Data Flow Diagram
#### ![Data Flow diagram](./Technical Spec/images/DataFlow2.0.jpg)

#### 3.3. State Machines
#### ![State Machine diagram for adding an event](./Technical Spec/images/StateMachines-add1.jpg)
#### ![State Machine diagram for logging in](./Technical Spec/images/StateMachine-login.jpg)

#### 3.4. Sequence Diagrams

#### ![Sequence diagram for viewing club events](./Technical Spec/images/SeqDia-Club.jpg)
#### ![Sequence diagram for viewing the home screen](./Technical Spec/images/SeqDia-hmscrn1.jpg)

#### 4. Problems and Resolutions
- Testing:
Testing proved to be a sore spot for us. It was very difficult to pull together as neither of us
really understood testing or how to go about doing it. Originally we were going to use
Mocha which provides developers with a base test framework, allowing you to have options
as to which assertion, mocking, and spy libraries you want to use, and Chai, ​a BDD/TDD
assertion library with an abundance of plugins and extensions,​ to test our code, but we
came across an open source testing framework called Jest which is built by Facebook. This
means it works well with React Native so we switched to that instead. We also decided to
use ​Enzyme, a JavaScript Testing utility for React, with Jest for our testing needs.

- Developing the app:
We had some difficulty finding a platform we could both use to build the app. Originally we
wanted to use Apache Cordova but we couldn’t both get it to work for us, so we did some
research and settled on Expo which allows us to bundle our app on any OS and then
publish it to their hosting service. From there, they compile and host our binaries which are
accessible through the Expo Client, a mobile app on Android and iOS. Through the Expo
Client we can scan a QR code which instantly installs our app for use. This made
everything from user testing to distribution of our app easier, as well as making
development completely wireless and simplifying debugging.

- Verification of Consent screen:
Because we are requesting certain sensitive OAuth scopes from Google, we had to pass
Google OAuth Client Verification. This required requesting a verification of the OAuth client
used by our app and waiting for Google to verify our app. In order to get around this we
made the app internal to the DCU organisation which fixed all the consent screen issues.

- The Backend:
We had a some problems with our backend. After spending a lot of time working on it we
discovered that it actually wouldn’t work with Expo and we wouldn’t have time to fix those
issues, so it was back to the drawing board to tweak everything. Thankfully all our work was
not in vain and after putting in some workarounds we were able to reuse most of our code.

- Delete Event:
We had wanted specific users to be able to delete events (club or society members) but we
found it very hard to get the right permissions into place. To work around this we decided to
take the delete function out, otherwise anyone could remove events from the calendar.

#### 5. Installation Guide
##### 5.1. Prerequisites
- iOS >= 10.0 OR Android >= 5.
- Camera

##### 5.2. Installation Instructions
#### Downloading the Expo Client
###### 1.1. Open the App Store (iOS) or the Google PlayStore (Android).
##### ![Downloading Expo on iOS and Android](./Technical Spec/images/inin1_1.jpg)

###### 1.2. Search for “Expo”.
##### ![Searching Expo on iOS and Android](./Technical Spec/images/inin1_2.jpg)

###### 1.3. Click the “Get” button (iOS) or the “Install” button (Android).
##### ![How to download Expo on iOS and Android](./Technical Spec/images/inin1_1.jpg)

#### Opening the Clubs and Socs Calendar App
##### 2.1. Open the project in Expo.
###### 2.1.1. On iOS: open camera and scan QR code. This will open the project in Expo.
###### ![Opening project in Expo on iOS](./Technical Spec/images/inin2_1_1.jpg)

###### 2.1.2. On Android: open Expo and open the QR scanner in Expo to start the project.
###### ![Opening project in Expo on Android](./Technical Spec/images/inin2_1_2.jpg)

#### 6. Future Plans
- Get the delete function working. Once we have a way to develop different views for
the app we will implement the delete function, if we put it in now any user could
delete events but this way users have to go through Google so must have the right
credentials to delete any events.
- To implement a payment system which would allow users to join any clubs and
societies through the app.
- Allow users to “favourite” clubs and societies.
- Allow users to filter by day/week/month.
- Have featured events on the homescreen.
- Have promoted event on the login screen.
- Integrate with Google Maps so event locations can be displayed in the app.