import React from 'react';
import SocialLink from './SocialLink';
/** Socials
 *
 * state: none
 * props: none
 *
 * FactContainer -> Socials -> SocialLink
 */

const Socials = () => {
  //TODO: need to implement functionality for sharing a fact to these social
  //media links
  const socialLinks = [
    ['https://twitter.com/', 'Twitter'],
    ['https://facebook.com/', 'Facebook'],
  ];
  return (
    <>
      {socialLinks.map((s, idx) => (
        <SocialLink key={idx} socialUrl={s[0]}>
          {s[1]}
        </SocialLink>
      ))}
    </>
  );
};

export default Socials;
