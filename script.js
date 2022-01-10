$(function(){
    $('.slick').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>'
    });
});

function burgerMenu(selector){
    let menu = $(selector);
    let button = menu.find('.burger_menu_button');
    let links = menu.find('.burger_menu_link');
    let overlay = menu.find('.burger_menu_overlay');

    button.on('click', (e) =>{
        e.preventDefault();
        toggleMenu();
    });
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu(){
        menu.toggleClass('burger_menu-active');

        if(menu.hasClass('burger_menu-active')){
            $('body').css('overflow', 'hidden');
        } else{
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu('.burger_menu')

$(function(){
    $('form').submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Заявка отправлена!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});

/*document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.form_body').submit(function() { //Change
        var th = this;
        fetch('mail.php', {
            method: "POST",
            body: th.serialize()
        }).done(function() {
            alert("Заявка отправлена!");
        });
        return false;
    });
});*/


const area = document.getElementById('area'),
      lighting = document.getElementById('lighting'),
      corners = document.getElementById('corners'),
      pipes = document.getElementById('pipes'),
      light_lines = document.getElementById('light_lines'),
      contour_lighting = document.getElementById('contour_lighting')
      
const cost = document.getElementById('cost')

let areaCost, light_linesCost, contour_lightingCost

let lightingCost = 100,
    cornersCost = 35,
    pipesCost = 100

const input = document.querySelectorAll('.input')

for(item of input){
    item.addEventListener('input', () =>{
        countingCost()
    })
}

function countingCost(){ 
    areaCost = strtoNum(area) * 199
    light_linesCost = strtoNum(light_lines) * 600
    contour_lightingCost = strtoNum(contour_lighting) * 350
    const costCeiling = areaCost + light_linesCost + contour_lightingCost +
                        (lightingCost * strtoNum(lighting)) + 
                        (cornersCost * strtoNum(corners)) +
                        (pipesCost * strtoNum(pipes))
                    
    cost.value = costCeiling
}

function strtoNum(arg){
    if(arg.value){
        return parseFloat(arg.value)
    }
    else return 0
}

//Отправка формы
/*
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    const modal = document.getElementById('modal');

    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('image', formImage.files[0])

        if(error === 0){
            body.classList.add('_sending');
            let response = await fetch('mail.php', {
                method:'POST',
                body: formData
            });
            if(response.ok){
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                body.classList.remove('_sending');
            } else{
                alert('Ошибка');
                body.classList.remove('_sending');
            }


        } else{
            alert('Заполните обязательные поля');
        }
    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        formReq.forEach(item => {
            const input = item
            formRemoveError(input)      
                if(input.value === ''){
                    formAddError(input);
                    error++;
                }
                else if(input.classList.contains('_phone')){
                    if(phoneTest(input)){
                        formAddError(input);
                        error++;
                    }
                }
        });

        return error;
    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function phoneTest(input){
        return !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(input.value)
    }

    const formImage = document.getElementById('formImage');
    const formPreview = document.getElementById('formPreview');

    formImage.addEventListener('change', () => {
        uploadFile(formImage.files[0]);
    })

    function uploadFile(file){
        if(!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)){
            alert('Разрешены только изображения');
            formImage.value = '';
            return;
        }

        if(file.size > 2 * 1024 * 1024){
            alert('Файл должен быть менее 2 МБ')
            return;
        }

        var reader = new FileReader();
        reader.onload = function(e){
            formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`
        };
        reader.onerror = function(e){
            alert('Ошибка');
        }
        reader.readAsDataURL(file);
    }
});*/