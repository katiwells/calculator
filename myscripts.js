      let history = '';

      //function that display value 
      function insert(num) {
        document.getElementById("window").value += num;

        addToHistory(num);
      }

      //function that evaluates the digit and return result 
      function equal() {
        let x = document.getElementById("window").value;
        let y = eval(x);
        document.getElementById("window").value = y;

        addToHistory('=' + y);
      }

      //function that clear the display 
      function clean() {
        document.getElementById("window").value = "";

        addToHistory(' ');
      }

function addToHistory(value) {
        history += value;
        var historystring = history.replace( /\n/g, " " ).split( " " );
                document.getElementById('history').innerText = historystring;

          
      }
function format() {

}