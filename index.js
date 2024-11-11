
const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML += body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = goodbyeFunction(name);
};


const formalGoodbye = (name) => {
  return 'S úctou ' + name;
}

const rudeGoodbye = (name) => {
  return 'Měj se fanfárově ' + name
}

fillSubject('Pozvánka na oslavu narozenin');
fillBody('Zítra oslava ve 20:00 ve Starousedlé hospodě.', 'Věroslava', rudeGoodbye);