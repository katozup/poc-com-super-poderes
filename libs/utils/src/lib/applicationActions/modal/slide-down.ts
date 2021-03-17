
const slideDown = () => {
  const modalWrapper = document.getElementsByClassName('modal-wrapper')[0];
  const backdropDiv = document.getElementsByClassName('backdrop')[0];

  if (modalWrapper && backdropDiv) {
    modalWrapper.classList.add('exit');
    backdropDiv.classList.remove('backdrop');
  }

};

export default slideDown;
