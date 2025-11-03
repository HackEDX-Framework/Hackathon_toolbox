# Hackathon Participant Toolbox

This is a first prototype of a Toolbox for Hackathon Participants.
The idea behind it is to provide for a given hackathon a toolbox to the participants, that contains tutorials for all needed tools and programms -- that the teams are expected to use in the hackathon -- as well as information on what they should prepare before the hackathon, such as installing software. 
At a later stage the toolbox would ideally have user logins with the option for hackathon organizers to curate a space for their hackathon: choosing the applicable tutorials, and adding tutorials that are not part of the toolbox yet. 
A demo of the toolbox is running at: https://demo.colaps.team/hack-participant-kit

---

# .env file required in /web directory
- also do not change container_name in the pages
```
NEXTAUTH_URL=http://localhost:3000
# Is not being used I think but I would still keep it here

# Database configuration
# DATABASE_URL=your_database_url

# NextAuth configuration
# NEXTAUTH_SECRET=your_nextauth_secret
# NEXTAUTH_PROVIDERS=your_nextauth_providers

# Github OAuth configuration
GITHUB_CLIENT_ID=GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET=GITHUB_CLIENT_SECRET

# JWT configuration
JWT_SECRET=JWT_SECRET

MONGODB_PW=MONGODB_PW
MONGODB_USER=hackathon-toolkit-web-app
MONGODB_URI=mongodb+srv://${MONGODB_USER}:${MONGODB_PW}@hackathon-toolkit.4wrsnwa.mongodb.net/?retryWrites=true&w=majority&appName=hackathon-toolkit

BASE_PATH=/hack-participant-kit
# BASE_PATH=""
```