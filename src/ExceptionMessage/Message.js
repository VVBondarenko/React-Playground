import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";

const chevronDown = (
  <svg
    className="bi bi-chevron-compact-down ml-4"
    width="1.3em"
    height="1.3em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
    />
  </svg>
);

const chevronUp = (
  <svg
    className="bi bi-chevron-compact-up ml-4"
    width="1.3em"
    height="1.3em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
    />
  </svg>
);

export default function Message({ message, expanded, toggleExpand }) {
  let usedChevron = expanded ? chevronUp : chevronDown;

  return (
    <div className="Message">
      <Alert.Link href="#" onClick={toggleExpand}>
        {message}
        {"\t"}
        {usedChevron}
      </Alert.Link>
    </div>
  );
}
