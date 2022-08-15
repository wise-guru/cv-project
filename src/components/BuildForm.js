import React, { Component } from 'react';
import Experience from './CVSections/Experience';
import PersonalInfo from './CVSections/PersonalInfo';
import Education from './CVSections/Education';
import Skills from './CVSections/Skills';

class BuildForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <PersonalInfo
          personalInfo={this.props.personalInfo}
          firstNameHandler={e => {
            this.props.firstNameHandler(e);
          }}
          lastNameHandler={e => {
            this.props.lastNameHandler(e);
          }}
          phoneHandler={e => {
            this.props.phoneHandler(e);
          }}
          emailHandler={e => {
            this.props.emailHandler(e);
          }}
          linkedInHandler={e => {
            this.props.linkedInHandler(e);
          }}
          twitterHandler={e => {
            this.props.twitterHandler(e);
          }}
          descriptionHandler={e => {
            this.props.descriptionHandler(e);
          }}
        />
        <h2>Education Details</h2>
        {this.props.educationInfo.map(education => {
          const { id } = education;
          return (
            <Education
              key={id}
              educationInfo={education}
              institutionHandler={e => {
                this.props.institutionHandler(e, id);
              }}
              degreeHandler={e => {
                this.props.degreeHandler(e, id);
              }}
              eduStartHandler={e => {
                this.props.eduStartHandler(e, id);
              }}
              eduEndHandler={e => {
                this.props.eduEndHandler(e, id);
              }}
            />
          );
        })}
        <button onClick={this.props.educationHandler}>New Education+</button>
        <h2>Work Experience</h2>
        {this.props.experienceInfo.map(work => {
          const { id } = work;
          return (
            <Experience
              key={id}
              experienceInfo={work}
              companyHandler={e => {
                this.props.companyHandler(e, id);
              }}
              positionHandler={e => {
                this.props.positionHandler(e, id);
              }}
              expStartHandler={e => {
                this.props.expStartHandler(e, id);
              }}
              expEndHandler={e => {
                this.props.expEndHandler(e, id);
              }}
              expDescriptionHandler={e => {
                this.props.expDescriptionHandler(e, id);
              }}
            />
          );
        })}
        <button onClick={this.props.workHandler}>New Experience+</button>
        <h2>Skills</h2>
        {this.props.skillInfo.map(skill => {
          const { id } = skill;
          return (
            <Skills
              key={id}
              skillInfo={skill}
              skillHandler={e => {
                this.props.skillHandler(e, id);
              }}
            />
          );
        })}
        <button onClick={this.props.skillInfoHandler}>New Skill+</button>
      </div>
    );
  }
}

export default BuildForm;
