Collaborative React Project for funsies

yayyyy!

Objectives:
  styling react
    flexbox
    bootstrap
  learn another hook (or two?)
  react router
  changing urls/enabling using back button
  using local storage
  
  nice to haves:
    image upload
    oauth
    calendar
    weather
    charts & shit?

Description:
    A journal/blog that takes playlists as entries, and allows for adding notes/written portions and photos.

User Stories
  user can login with apple music or spotify (haven't decided)
  user can create a playlist with journal entries associated with it, by date
  users can add images to journal entries
  users can add one image to be the playlist cover
  
  user can click on calendar to see playlist and journal entry for that day
  user can see weather for that day as well
  user can see chart of most played songs
  

Todos:
- [x] Plan a layout
- [x] Make some mock data
- [x] Create Table of Contents Component
  - [x] Cool color changing entries
- [x] Create Journal Entry component 
- [X] Put components in separate files
- [x] make pages component, move showEntry definition onto App, pageView state *NEXT*
- [ ] Expand Login component
  - [x] Style component
  - [ ] Add OAuth
  - [ ] Make entries page show something else when viewing Login
- [ ] Change Logout component to button in nav menu 
  - [ ] Only visible when logged in
  - [ ] Actually logs user out
- [ ] DON'T FORGET to fix keys TODO
- [x] Style Nav OffCanvas
- [ ] Data Model
  - [ ]Test seed file
  - [x] Add image table
  - [x] Discuss Data Model
  - [x] Create model.py
  - [ ]Add methods to dictionary-ify results to be JSON-ified
- [ ] Create mock data that is also journal of progress (using commemorative photos
- [ ] Create to_dict mixin for model?

Book
  Pages
    Table of Contents
      Chapters
        Entries
    Menu
      Menu Items
Cover
  Login


  <!-- Co-authored-by: Katrina Huber-Juma <katrina.huber@gmail.com> -->