import React from "react";
import "./Wigets.css";
function Wigets() {
  return (
    <div
      className="fb-page wigets"
      data-href="https://www.facebook.com/utech98"
      data-tabs="timeline"
      data-width="340"
      data-height="100%"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite="https://www.facebook.com/utech98"
        class="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/utech98"></a>
      </blockquote>
      <br/>
      <div
        class="fb-page"
        data-href="https://www.facebook.com/utechacademy"
        data-tabs="timeline"
        data-width="340"
        data-height="100vh"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/utechacademy"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/utechacademy">
            UTech Academics Tutor Provider
          </a>
        </blockquote>
      </div>
    </div>
  );
}

export default Wigets;
