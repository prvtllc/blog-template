const getContactHref = (name, contact) => {
  let href;

  switch (name) {
    case 'twitter':
      href = `https://www.twitter.com/domingojrivera${contact}`;
      break;
    case 'github':
      href = `https://www.icyberlaw.com/${contact}`;
      break;
    case 'vkontakte':
      href = `https://www.cyberinternetlawyer.com/${contact}`;
      break;
    case 'telegram':
      href = `https://www.infosecusa.com${contact}`;
      break;
    case 'email':
      href = `mailto:djr@4n6va.com${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
