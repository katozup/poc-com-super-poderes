const slideDown = () => {
  const modalWrapper = document.getElementsByClassName('modal-wrapper')[0];

  if (modalWrapper) {
    modalWrapper.classList.add('exit');
  }
};

export default slideDown;
