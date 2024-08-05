document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input[type="text"], input[type="date"], textarea');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            if (this.value.trim() !== "") {
                this.classList.add('filled');
            } else {
                this.classList.remove('filled');
            }
        });
});
});