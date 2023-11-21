import Link from "next/link";

export default function () {
  return (
    <div>
      <h1>Hello World from Next.js</h1>
      <p>Test</p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <p>
        Here comes a update on the front-page...
      </p>
      <img
        src="https://images.unsplash.com/photo-1672782653936-2f152a7e0a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60"
        alt="Image"
      />
      <br />
      <ul>
        <li>
          <Link href="/api/test">API GET Test</Link>
        </li>
        <li>
          <Link href="/contact">Contact Form</Link>
        </li>
        <li>
          <Link href="/isr">ISR Test</Link>
        </li>
      </ul>
    </div>
  );
}
