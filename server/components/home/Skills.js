import React from 'react';
// Components
import Title from './Title';
import Skill from './Skill';

class Skills extends React.Component {
  render() {
    let frontEndList;
    let backEndList;
    let knowledgeList;
    let toolsList;

    if (this.props.skills !== undefined) {
      frontEndList = this.props.skills.frontend;
      backEndList = this.props.skills.backend;
      knowledgeList = this.props.skills.knowledge;
      toolsList = this.props.skills.tools;
    } else {
      return (
        <section className="skills__wrapper animation__target" id="skills">
          <div className="skills__content">
            <Title title="skills" accent="my" color="dark" />
            <p className="skills__loading">Trying to remember my skills...</p>;
          </div>
        </section>
      );
    }

    return (
      <section className="skills__wrapper animation__target" id="skills">
        <div className="skills__content">
          <Title title="skills" accent="my" color="dark" />
          <div className="skills">
            <Skill type="Front-end" skills={frontEndList} />
            <Skill type="Back-end" skills={backEndList} />
            <Skill type="Tools" skills={knowledgeList} />
            <Skill type="Knowledge" skills={toolsList} />
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
