import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>About Eric Van Dyn Hoven</h1>
      <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAsQAAAAJGQ3N2NmZGExLWE0ODQtNDEyOC05MmM2LTk4ZWJkNzk5MjU3Yw.jpg" />
      <div className={cx('description')}>
        <p>I am a full stack web developer coming out of General Assembly's Web Development Immersive program. I was born and raised in Southwest Wisconsin where I grew up playing a lot of basketball and video games. Now days, I love to challenge myself with learning new technology and building applications that make life easier to manage.
        <br />
        <br />
        I have been creative my whole life through filmmaking and I plan to bring that creative problem solving over into my career as a web developer. I always have to find that balance between being functional and aesthetically pleasing to look at.
        </p>
      </div>
      <div className={cx('contribute')}>
        <p>Want to see more? Checkout his Github&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/evandynh">here</a>&nbsp;
        and Linkedin&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/evandynhoven/">here</a>!
        </p>
      </div>
    </div>
  );
};

export default About;
