import React from "react";

import PrimaryButton from "./PrimaryButton";

export default class CTA extends React.Component {
  scrollToContact = () => {
    const contact = document.querySelector("#contact");
    contact.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    return (
      <div className="cta">
        <PrimaryButton />
        <p>
          Not ready?{" "}
          <button onClick={this.scrollToContact} className="cta-email-button">
            Send an email
          </button>{" "}
          instead.
        </p>
      </div>
    );
  }
}
