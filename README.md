# Frontend Mentor - Single-page design portfolio solution

This is a solution to the Single-page design portfolio challenge on Frontend Mentor.

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

## Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid (services section) and Flexbox
- Mobile-first workflow
- Vanilla JavaScript for the slider

## What I learned

The services grid was the fun part. Using `grid-template-areas` meant I could completely rearrange
the cards at each breakpoint without touching the HTML:

```css
.services {
  grid-template-areas:
    "graphic uiux apps photo"
    "graphic illus illus motion";
}
```

For the slider I wanted it to loop forever and always show a slide on both sides. Instead of
cloning slides I move the first/last image to the other end of the track after each transition.

I also used my own photo for the about section. To keep it a perfect circle at every screen size
I used `aspect-ratio` with `object-fit: cover`:

```css
.about-img {
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
}
```

## Continued development

- Add pointer/mouse drag support to the slider (only touch swipe works right now)
- Replace the SVG artwork in the services cards and slider with my own design work

## Author

- Ebirim Chidalu
