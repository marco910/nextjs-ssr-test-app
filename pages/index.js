import Link from "next/link";

export default function () {
  return (
    <div>
      <h1>Hello World from Next.js</h1>
      <h2>New headline</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <img
        src="https://images.unsplash.com/photo-1672782653936-2f152a7e0a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60"
        alt="Image"
      />
      <br />
      <ul>
        <li>
          <Link href="/api/test">
            <a>API GET Test</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact Form</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
