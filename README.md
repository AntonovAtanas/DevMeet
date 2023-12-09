# DevMeet - Transform Code into Connections

Welcome to devMeet, your platform for discovering the latest IT events in Bulgaria. DevMeet, created with React.js, is your go-to resource for exploring and participating in the diverse IT landscape in Bulgaria.

# Demo:
[DevMeet](https://dev-meet.vercel.app/)

# Deployment

- **Frontend** - The frontend is deployed on [Vercel](https://www.vercel.com/).
- **Backend** - For the backend I am using [Supabase](https://supabase.com/).
- **Database** - The database is Postgre, provided by [Supabase](https://supabase.com/).


# Technologies Used
- **React**: DevMeet is a single-page application allowing for dynamic and interactive behavior built using the React framework.
- **HTML and CSS**: The website's structure and styling are implemented using HTML5 and CSS3.
- **Other**: Supabase, Google Maps API, Moment.js, SVG icons

# Purpose
DevMeet was designed with the goal of connecting IT enthusiasts with their preferred tech events and creating new connections in the industry. Our platform provides users to search, create, and explore a wide range of IT events. You can access detailed information about each event. Join us in exploring and celebrating the dynamic world of IT events in Bulgaria.

# Key Features

- **Home Page**: The home page is available for any user. It provides:
     - A hero section which has a button link which takes the user to all events page.
     - 5 upcoming events which are sorted by upcoming date.
- **User Authentication**: You can register an account with email, first name, last name and password The user can also log in existing one for access features like create event, edit event, go to event or delete event.
- **Search Event**: Easily search events by title. Accessible for both logged and guest users.
- **All Events**: This feature is accessible for any user and shows all the events which are added.
- **Event Details Page**: This page shows a detail page for an exact event and can be accessed by any user.
     - Event poster image: Shows a poster image of the event which is uploaded by the owner of the event.
     - Event title: An event title which has to be between 6-60 characters
     - Event date: Shows the event date.
     - Event ticket price: The event ticket price in BGN. If the price is 0 it will show "FREE" conditionally rendered.
     - Event attendees: Shows the number of people which have confirmed to attend on the event.
     - Event detailed description: Event description between 20 and 1500 characters.
     - Event location: Dynamically shows every event's location with Google Maps provided by the owner of the event.
     - Ticket price alert: Conditinally will render a message when there are less than 10 tickets left.
     - Edit event: The owner of the event can edit the event he created.
     - Delete event: Only the owner of the event can delete it.
- **Add Event**: Only logged in users can add an event. The add event form requires the user to provide title, date, image url, address, ticket price and hall capacity.
- **User Profile**: Accessible only for logged in users. The user profile page will render the events which they have confirmed to attend.
       
# App architecture
![8](https://github.com/AntonovAtanas/DevMeet/assets/114076833/4269d135-d1a2-4e2e-83a4-1a169e375c6b)

![App Routing Module](https://github.com/AntonovAtanas/DevMeet/assets/114076833/15562f7a-ab08-4b1d-b38e-1a36d8ea9bcc)

# App screenshots

# Home     
![image](https://github.com/AntonovAtanas/DevMeet/assets/114076833/3f3402c6-fc23-4eb1-a64e-dae4cec094d1)
![image](https://github.com/AntonovAtanas/DevMeet/assets/114076833/c4eb43f9-727a-4988-b35b-a63e47df28bc)

# All Events
![image](https://github.com/AntonovAtanas/DevMeet/assets/114076833/664612b9-39f8-4954-a726-3c5da6140af3)

# Event Details
![image](https://github.com/AntonovAtanas/DevMeet/assets/114076833/42eab84c-60a0-4a80-aeb9-dd6827020718)
![image](https://github.com/AntonovAtanas/DevMeet/assets/114076833/1ba53c78-2747-4e71-8c54-83d85492cc88)
![image](https://github.com/AntonovAtanas/DevMeet/assets/114076833/87768f2d-a385-4b69-91d4-5ae27c080493)

# Edit Event
![image](https://github.com/AntonovAtanas/DevMeet/assets/114076833/b70405f3-5696-45c7-b940-a6f58e920a5f)

# User Profile
![image](https://github.com/AntonovAtanas/DevMeet/assets/114076833/98a8e9cd-9add-4e62-8991-614f892d26ed)

# Login Page
![image](https://github.com/AntonovAtanas/DevMeet/assets/114076833/212b3577-cfe2-4cab-b38f-9bd8c544bf9a)

# Register Page
![image](https://github.com/AntonovAtanas/DevMeet/assets/114076833/e2dd99f2-8692-4177-8d15-50d1d59a4389)

# Search Page
![image](https://github.com/AntonovAtanas/DevMeet/assets/114076833/ad9c42bd-fb31-422d-846e-ee7ba07cdb40)

