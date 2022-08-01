$(() => {
  console.log("jQuery methods go here...");

  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX],
  });

  Reveal.on("slidechanged", (event) => {
    // console.log(event);
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  });
});
