import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Alert from "react-bootstrap/Alert";
import Message from "./Message";

export default function ExceptionAlert({ exceptionObj }) {
  const [exception, updateState] = React.useState(exceptionObj);

  function hide() {
    updateState(() => {
      let clone = JSON.parse(JSON.stringify(exception));
      clone.hidden = true;
      return clone;
    });
  }

  function toggleExpand() {
    updateState(() => {
      let clone = JSON.parse(JSON.stringify(exception));
      clone.expanded = !exception.expanded;
      return clone;
    });
  }

  return (
    <div className="ExceptionAlert ml-4 mr-4 mt-3" hidden={exception.hidden}>
      <Alert variant="danger" onClose={hide} dismissible>
        <Message
          message={exception.message}
          expanded={exception.expanded}
          toggleExpand={toggleExpand}
        />
        {exception.expanded && (
          <p className="text-left mt-2">{exception.trace}</p>
        )}
      </Alert>
    </div>
  );
}
