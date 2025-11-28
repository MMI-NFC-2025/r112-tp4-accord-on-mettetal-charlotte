// *** ACCORDEON ***
const accordeons = document.querySelectorAll('.accordeon');
const accordeon.querySelectorAll('details');
accordeons.forEach(accordeon => {
    const details = accordeon.querySelectorAll('details');
    details.forEach(detail => { 
        detail.addEventListener('toggle', () => {
            if (detail.open) {
                // Fermer les autres détails    
                details.forEach(otherDetail => {
                    if (otherDetail !== detail) {
                        otherDetail.removeAttribute('open');
                    }   
                });
            }
        });
    }
    );
}); 
