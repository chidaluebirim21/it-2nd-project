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
- No JavaScript - the slider is pure HTML and CSS

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

The slider was the hardest part because I built it without JavaScript. Each slide has a hidden
radio button, and the arrow buttons are `<label>`s that check the previous or next radio. The
`:checked` selector then moves the track:

```css
#slide-2:checked ~ .slider-window .slider-track {
  transform: translateX(calc(var(--step) * -2));
}
```

Because they're radio buttons, keyboard users can Tab to the slider and change slides with the
arrow keys for free. I put a copy of the last slide at the start and the first slide at the end so
there's always a slide showing on both sides.

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

- Make the slider wrap smoothly from the last slide to the first (right now it slides back
  through all of them)
- Replace the SVG artwork in the services cards and slider with my own design work

## Author

- Ebirim Chidalu
