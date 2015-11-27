$(function() {
    //при нажатии на кнопку с id="save"
    $('#save').click(function () {
        //переменная formValid
        var formValid = true;

        //найти предков, которые имеют класс .form-group, для установления success/error
        var formGroup = $(this).parents('.form-group');
        //найти glyphicon, который предназначен для показа иконки успеха или ошибки
        var glyphicon = formGroup.find('.form-control-feedback');
        //для валидации данных используем HTML5 функцию checkValidity
        if (($('#login')[0].checkValidity()) && ($('#phone')[0].checkValidity())) {
            //добавить к formGroup класс .has-success, удалить has-error
            formGroup.addClass('has-success').removeClass('has-error');
            //добавить к glyphicon класс glyphicon-ok, удалить glyphicon-remove
            glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');

        } else {
            //добавить к formGroup класс .has-error, удалить .has-success
            formGroup.addClass('has-error').removeClass('has-success');
            //добавить к glyphicon класс glyphicon-remove, удалить glyphicon-ok
            glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
            //отметить форму как невалидную
            formValid = false;
        }

        //если форма валидна, то
        if (formValid) {
            //сркыть модальное окно
            $(".modal-body").html("<h2 class='success'>Спасибо! Мы свяжемся с Вами в течение 15 минут.</h2>");
            setTimeout(function () {
                $('#myModal').modal('hide');
            }, 4000);
        }
    });
});

$(function () {
    //при нажатии на кнопку с id="callformbtn"
    $('#callformbtn3').click(function () {
        //переменная formValid
        var formValid = true;
        //найти предков, которые имеют класс .form-group, для установления success/error
        var formGroup = $(this).parents('.form-group');
        //найти glyphicon, который предназначен для показа иконки успеха или ошибки
        var glyphicon = formGroup.find('.form-control-feedback');
        //для валидации данных используем HTML5 функцию checkValidity
        if (($('#login3')[0].checkValidity()) && ($('#phone3')[0].checkValidity())) {
            //добавить к formGroup класс .has-success, удалить has-error
            formGroup.addClass('has-success').removeClass('has-error');
            //добавить к glyphicon класс glyphicon-ok, удалить glyphicon-remove
            glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');

        } else {
            //добавить к formGroup класс .has-error, удалить .has-success
            formGroup.addClass('has-error').removeClass('has-success');
            //добавить к glyphicon класс glyphicon-remove, удалить glyphicon-ok
            glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
            //отметить форму как невалидную
            formValid = false;
        }
        //если форма валидна, то
        if (formValid) {
            //сркыть форму
            $('#form3').addClass('hidden');
            //отобразить сообщение об успехе
            $("#modal3").modal('show');
            setTimeout(function() {
                $('#modal3').modal('hide')
            }, 3000);
            $('.form3 input').val('');
            return false;
        }
    });
});

$(function () {
    //при нажатии на кнопку с id="callformbtn"
    $('#callformbtn2').click(function () {
        //переменная formValid
        var formValid = true;
        //найти предков, которые имеют класс .form-group, для установления success/error
        var formGroup = $(this).parents('.form-group');
        //найти glyphicon, который предназначен для показа иконки успеха или ошибки
        var glyphicon = formGroup.find('.form-control-feedback');
        //для валидации данных используем HTML5 функцию checkValidity
        if (($('#login2')[0].checkValidity()) && ($('#phone2')[0].checkValidity())) {
            //добавить к formGroup класс .has-success, удалить has-error
            formGroup.addClass('has-success').removeClass('has-error');
            //добавить к glyphicon класс glyphicon-ok, удалить glyphicon-remove
            glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');

        } else {
            //добавить к formGroup класс .has-error, удалить .has-success
            formGroup.addClass('has-error').removeClass('has-success');
            //добавить к glyphicon класс glyphicon-remove, удалить glyphicon-ok
            glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
            //отметить форму как невалидную
            formValid = false;
        }
        //если форма валидна, то
        if (formValid) {
            //сркыть форму
            $('#form2').addClass('hidden');
            //отобразить сообщение об успехе
            $("#modal3").modal('show');
            setTimeout(function() {
                $('#modal3').modal('hide')
            }, 3000);
            $('.form3 input').val('');
            return false;
        }
    });
});