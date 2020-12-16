<h1>Landing Page for Udacity Project Two</h1>

<h2>Building Nav</h2>
<p>Navigation is built dynamically by appending links to list items and then list items to the unordered list. Includes the addition of a class in the navigation bar items that makes it possible to connect active section and nav bar item. It adds the section ID as a class to the nav item.</p>

<h2>Adding Active States</h2>
<p>Active states are built in two separate functions for readibility. The active section section is determined using the getBoundingClient() method. The active navigation section is determined by looking for the section with the class 'your-active-class' assigned and then seraching the DOMTokenList for the navigation item that matches the section ID. If a section doesn't currently have 'your-active-class' assigned, it returns null, so the active navigation class is only changed if a class has 'your-active-class' assigned.</p>

<h2>Smooth Scrolling</h2>
<p>One function is built that deactivates the jump-to-section feature of anchor links and then changes scrollIntoView behavior to smooth.</p>
