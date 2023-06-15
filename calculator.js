let calculation = sessionStorage.getItem('calculation') || '';

      // Display the calculation when the page first loads.
      displayCalculation();

      function updateCalculation(value) {
        if (value === '=') {
          calculateResult();
        } else {
          calculation += value;
          displayCalculation();
          sessionStorage.setItem('calculation', calculation);
        }
      }

      function displayCalculation() {
        document.querySelector('.js-calculation').textContent = calculation;
      }

      // Add event listener for Enter key press
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          event.preventDefault(); // Prevent the default form submission behavior
          calculateResult();
        }
      });

      function calculateResult() {
        try {
          calculation = eval(calculation);
          displayCalculation();
          sessionStorage.setItem('calculation', calculation);
        } catch (error) {
          console.error('Invalid calculation');
        }
      }

      function clearCalculation() {
        calculation = '';
        displayCalculation();
        sessionStorage.setItem('calculation', calculation);
      }

      // Clear the session storage when the page is refreshed
      window.onbeforeunload = function() {
        sessionStorage.removeItem('calculation');
      };