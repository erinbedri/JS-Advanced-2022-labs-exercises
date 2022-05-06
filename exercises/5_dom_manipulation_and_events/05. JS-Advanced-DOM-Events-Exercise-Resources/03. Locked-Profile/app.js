function lockedProfile() {
    document.addEventListener('click', event => {

        if (event.target.matches('button')) {
            let profile = event.target.parentElement;
            let hiddenInformation = Array.from(profile.querySelectorAll('div')).find(p => p.id.includes('HiddenFields'));

            let unlockElement = profile.querySelector('input[value="unlock"]');

            if (unlockElement.checked) {

                if (event.target.textContent === 'Show more') {
                    event.target.textContent = 'Hide it';
                    hiddenInformation.style.display = 'block';

                } else {
                    event.target.textContent = 'Show more';
                    hiddenInformation.style.display = 'none';
                }
            }
        }
    })
}