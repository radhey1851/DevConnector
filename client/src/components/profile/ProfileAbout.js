import React from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    user: { name },
    bio,
    skills
  }
}) => {
  return (
    <div class='profile-about bg-light p-2'>
      <h2 class='text-primary'>{name}'s Bio</h2>
      {bio && <p>{bio}</p>}
      <div class='line' />
      <h2 class='text-primary'>Skill Set</h2>
      <div class='skills'>
        {skills.map((skill, index) => (
          <div key={index} class='p-1'>
            <i class='fa fa-check' /> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
