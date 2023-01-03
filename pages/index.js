import Link from "next/link";

export default function () {
  return (
    <div>
      <h1>Hello World from Next.js</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
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
