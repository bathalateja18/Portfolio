import React from 'react';
import { GithubOutlined, LinkedinFilled,CopyrightOutlined } from '@ant-design/icons';
import style from '../footer/footer.module.css';

// SVG Component for LeetCode
const LeetCodeIcon = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226a1.374 1.374 0 0 0-.016 1.928 1.374 1.374 0 0 0 1.928.016l5.389-5.772A1.374 1.374 0 0 0 13.483 0zm-2.85 4.382a1.374 1.374 0 0 0-.965.405l-7.23 7.23a1.374 1.374 0 0 0 0 1.944l7.23 7.23a1.374 1.374 0 0 0 1.944-1.944l-6.258-6.258 6.258-6.258a1.374 1.374 0 0 0-.979-2.349zm5.341 3.518a1.374 1.374 0 0 0-.972.402l-4.225 4.225a1.374 1.374 0 0 0 0 1.944l4.225 4.225a1.374 1.374 0 1 0 1.944-1.944l-3.253-3.253 3.253-3.253a1.374 1.374 0 0 0-.972-2.346z"/>
  </svg>
);

// SVG Component for Scaler
const ScalerIcon = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 8L4.5 6.25 12 2.5l7.5 3.75L12 10zm-10 4l10 5 10-5v3l-10 5-10-5v-3z"/>
  </svg>
);

const socialLinks = [
  { name:'GitHub',  icon: <GithubOutlined />, url: 'https://github.com/bathalateja18' },
  { name:'LeetCode', icon: <LeetCodeIcon />, url: 'https://leetcode.com/u/Bathala-teja8352/' },
  { name:'LinkedIn', icon: <LinkedinFilled />, url: 'https://www.linkedin.com/in/bathala-teja-017b21240/' },
  { name:'Scaler', icon: <ScalerIcon />, url: 'https://www.scaler.com/academy/profile/35bb1be9a39d/' },
];


let Footer = () => {
  return (
    <div id={style.footer}>
      <div id={style.info}>
        <label htmlFor=""><CopyrightOutlined /> 2026 Bathala Teja</label>
      </div>
      <div id={style.links}>
        <ul className={style.socialContainer}>
          {socialLinks.map((item, index) => (
            <li key={index}>
              <span className={style.tooltip}>{item.name}</span>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <span className={style.icon}>{item.icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;