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
    }

    return (
      <section className="skills__wrapper" id="skills">
        <Title title="skills" accent="my" color="dark" />
        <div className="skills">
          <Skill type="Front-end" skills={frontEndList} />
          <Skill type="Back-end" skills={backEndList} />
          <Skill type="Tools" skills={knowledgeList} />
          <Skill type="Knowledge" skills={toolsList} />
        </div>
      </section>
    );
  }
}

export default Skills;
