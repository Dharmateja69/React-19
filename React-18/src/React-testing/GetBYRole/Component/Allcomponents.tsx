const Allcomponents = () => {
  return (
    <div>
      {/* ARIA: Link */}
      <a href="/">Link</a>
      {/* ARIA: Button */}
      <button>Button</button>
      {/* ARIA: ContentInfo */}
      <footer>ContentInfo</footer>
      {/* ARIA: Heading */}
      <h1>Heading</h1>
      {/* ARIA: Banner */}
      <header>Banner</header>
      {/* ARIA: Img */}
      <img src="example.jpg" alt="description" />
      {/* ARIA: Checkbox */}
      <input type="checkbox" /> Checkbox
      {/* ARIA: Spinbutton */}
      <input type="number" /> Spinbutton
      {/* ARIA: Radio */}
      <input type="radio" /> Radio
      {/* ARIA: Textbox */}
      <input type="text" /> Text
      {/* ARIA: List & ListItem */}
      <ul>
        <li>Listitem</li>
      </ul>
      {/* Additional Buttons */}
      <button>Learn More</button>
      <button>Submit</button>
    </div>
  );
};

export default Allcomponents;
