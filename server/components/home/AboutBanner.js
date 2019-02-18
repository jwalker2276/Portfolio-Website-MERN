import React from 'react';

class AboutBanner extends React.Component {
  render() {
    if (this.props.contactInfo === undefined) {
      return <p className="about__loading">Loading ...</p>;
    }

    const gitHubIconPath = (
      <path
        className="banner__icon__path"
        d="M12.5 2.08333C18.2437 2.08333 22.9167 6.75625 22.9167 12.5C22.9167 18.2437 18.2437 22.9167 12.5 22.9167C6.75625 22.9167 2.08333 18.2437 2.08333 12.5C2.08333 6.75625 6.75625 2.08333 12.5 2.08333ZM12.5 0C5.59687 0 0 5.59687 0 12.5C0 19.4031 5.59687 25 12.5 25C19.4031 25 25 19.4031 25 12.5C25 5.59687 19.4031 0 12.5 0ZM12.5 6.25C9.04896 6.25 6.25 9.04792 6.25 12.5C6.25 15.2615 8.04062 17.6042 10.525 18.4302C10.8375 18.4885 10.9375 18.2948 10.9375 18.1292V16.9656C9.19896 17.3438 8.83646 16.2292 8.83646 16.2292C8.55312 15.5073 8.14271 15.3146 8.14271 15.3146C7.57604 14.926 8.18542 14.9344 8.18542 14.9344C8.81354 14.9781 9.14375 15.5792 9.14375 15.5792C9.70104 16.5344 10.6052 16.2583 10.9625 16.099C11.0188 15.6948 11.1802 15.4198 11.3594 15.2635C9.97083 15.1052 8.5125 14.5687 8.5125 12.175C8.5125 11.4927 8.75625 10.9354 9.15625 10.4979C9.09167 10.3385 8.87708 9.70208 9.21667 8.84167C9.21667 8.84167 9.74167 8.67396 10.9354 9.48229C11.4344 9.34375 11.9688 9.275 12.5 9.27187C13.0312 9.27396 13.5656 9.34375 14.0656 9.48229C15.2594 8.67396 15.7823 8.84167 15.7823 8.84167C16.1229 9.70208 15.9083 10.3385 15.8448 10.4958C16.2458 10.9333 16.4875 11.4906 16.4875 12.1729C16.4875 14.574 15.025 15.1021 13.6333 15.2562C13.8583 15.45 14.0625 15.8302 14.0625 16.4135V18.1281C14.0625 18.2948 14.1625 18.4896 14.4792 18.4281C16.9615 17.6021 18.75 15.2604 18.75 12.5C18.75 9.04792 15.951 6.25 12.5 6.25Z"
      />
    );

    const linkedInIconPath = (
      <path
        className="banner__icon__path"
        d="M12.5 2.08333C18.2437 2.08333 22.9167 6.75625 22.9167 12.5C22.9167 18.2437 18.2437 22.9167 12.5 22.9167C6.75625 22.9167 2.08333 18.2437 2.08333 12.5C2.08333 6.75625 6.75625 2.08333 12.5 2.08333ZM12.5 0C5.59688 0 0 5.59688 0 12.5C0 19.4031 5.59688 25 12.5 25C19.4031 25 25 19.4031 25 12.5C25 5.59688 19.4031 0 12.5 0ZM10.4167 8.33333C10.4167 8.91354 9.95104 9.38333 9.375 9.38333C8.79896 9.38333 8.33333 8.91458 8.33333 8.33333C8.33333 7.75312 8.79896 7.28333 9.375 7.28333C9.95104 7.28333 10.4167 7.75417 10.4167 8.33333ZM10.4167 10.4167H8.33333V16.6667H10.4167V10.4167ZM13.5417 10.4167H11.4583V16.6667H13.5417V13.6865C13.5417 11.8927 15.6271 11.7271 15.6271 13.6865V16.6667H17.7083V13.1677C17.7083 9.74687 14.45 9.87188 13.5417 11.5552V10.4167Z"
      />
    );

    const { email, github, linkedin } = this.props.contactInfo;

    return (
      <div className="about__banner">
        <div className="banner__first">
          <p className="banner__title">Find Me</p>
          <div className="banner__icons">
            <a
              aria-label="Github profile link"
              className="banner__link"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-down"
              data-aos-delay="250"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="banner__icon__svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
              >
                {gitHubIconPath}
              </svg>
            </a>
            <a
              aria-label="Linkedin profile link"
              className="banner__link"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="banner__icon__svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
              >
                {linkedInIconPath}
              </svg>
            </a>
          </div>
        </div>
        <div className="banner__second">
          <p className="banner__title">Email Me</p>
          <p className="banner__email" data-aos="fade-up" data-aos-delay="750">
            {email}
          </p>
        </div>
      </div>
    );
  }
}

export default AboutBanner;
