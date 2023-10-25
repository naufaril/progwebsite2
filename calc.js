function calculate() {
    try {
        let expression = document.querySelector('input[name="display"]').value;

        // Replace "%" with "%" and "^" with "**" for calculations
        expression = expression.replace(/%/g, '%').replace(/\^/g, '**');

        const result = eval(expression);
        document.querySelector('input[name="display"]').value = result;
    } catch (error) {
        document.querySelector('input[name="display"]').value = 'Error';
    }
}