function shadowizard(option){
    let images = document.querySelectorAll('.shadowizard');
    if(option.shadow_type === 'hard')
    option.shadow_type = '0px'
    else
    option.shadow_type = '15px'

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${option.shadow} 1px rgba(0,0,0,0.12)`;

        if(option.padding) {
            image.style.paddig = '1em';
        }
    })
};

module.exports.shadowizard = shadowizard;