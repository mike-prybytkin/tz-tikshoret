import { useEffect } from 'react';

function BodyScripts() {

    useEffect(() => {
        // Домонетка
        // window.history.pushState(null, null, window.location.href);
        // window.onpopstate = function(event) {
        //     window.location.replace('{offer}');
        // };

        // Изменяем href всех ссылок на #order, делаем переход внутренним, удалием событие onClick.
        // let links = document.querySelectorAll("a");
        // links.forEach(link => {
        //     link.href="#order";
        //     link.target="_self";
        //     link.onclick=null;
        // });

        // Анимация перехода на форму, фиксим ошибки, вызываемые Кейтаро
        const anchors = document.querySelectorAll('a[href*="#"]')
        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault()

                const blockID = anchor.getAttribute('href').substr(1)

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }

        // Валидация номеров телефонов
        document.addEventListener('DOMContentLoaded', ()=>{
            var phones=document.querySelectorAll('input[name=phone]');
            for (var i = phones.length - 1; i >= 0; i--) {
                processInput(phones[i]);
            }
        });

        function processInput(phone){
            var iti = window.intlTelInput(phone,{
                allowDropdown: true,
                initialCountry: '{country_code}',
                nationalMode: true,
                autoPlaceholder: 'aggressive',
                formatOnDisplay: true,
                separateDialCode: false,
                utilsScript: 'assets/intl-tel-input/js/utils.js'
            });
            phone.addEventListener('input', ()=> {
                phone.setCustomValidity('');
                if (!iti.isValidNumber()) phone.setCustomValidity('Enter a valid phone number');
            });
        }
    });

    return (console.log('Scripts in body loaded...'));
}

export default BodyScripts