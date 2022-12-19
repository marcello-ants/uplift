# Framework

This is the Framework marketing website; it includes:

-   Landing page
-   Docs
-   Blog
-   & more!

It's built on Next.js using Typescript with Tailwind CSS for styles and GSAP for animations.

Basic structure is:

```text
src
    ➝ blocks        # Page section components stored here
    ➝ components    # Relatively primitive primitives
    ➝ data          # Things like links for navbar, repetitive content, etc.
    ➝ hooks         # Custom helper hooks
    ➝ pages         # Self explanatory
```

Design tokens/theme info is located in `tailwind.config.js`.

## Running Locally

```sh
npm install
npm run dev
```

<img src="./public/images/logomark.png" width="50"/>
