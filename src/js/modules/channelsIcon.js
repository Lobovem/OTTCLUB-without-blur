function channelsIcon() {
  let icon = document.getElementsByClassName('channels__showAll');

  for (let i = 0; i < icon.length; i++) {
    icon[i].addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }
}

export { channelsIcon };
