var selectElement = document.getElementById("work");
      
          selectElement.addEventListener("change", function() {
            var selectedOption = selectElement.options[selectElement.selectedIndex];
            var selectedValue = selectedOption.value;
      
            if (selectedValue !== "") {
              window.location.href = selectedValue;
            }
          });