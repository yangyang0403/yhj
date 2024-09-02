document.addEventListener('DOMContentLoaded', function () {
    var depth2Elements = document.querySelectorAll('.gnb .depth2');

    depth2Elements.forEach(function (depth2) {
        depth2.addEventListener('mouseleave', function () {
            this.style.display = 'none';
        });
    });
});
