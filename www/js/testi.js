for (i = 0; i <= (new Date().getFullYear() - 2011); i++) { // table
        $('#checkHistory').append( // adding header to each table
          $('<h2/>').text('year')
        );
        
        $('#checkHistory').append( // creating table
          $('<table/>').addClass('table table-striped').append(
            $('<thead/>').append(
              $('<tr/>').append( // appending th's
                $('<th/>').text('legend')
              ).append(
                $('<th/>').text('january')
              ).append(
                $('<th/>').text('february')
              ).append(
                $('<th/>').text('march')
              ).append(
                $('<th/>').text('april')
              ).append(
                $('<th/>').text('may')
              ).append(
                $('<th/>').text('june')
              ).append(
                $('<th/>').text('july')
              ).append(
                $('<th/>').text('august')
              ).append(
                $('<th/>').text('september')
              ).append(
                $('<th/>').text('october')
              ).append(
                $('<th/>').text('november')
              ).append(
                $('<th/>').text('december')
              )
            )
          ).append(
            $('<tbody/>')
          )
        );

        for (j = 0; j < 7; j++) { // row
          $('#checkHistory tbody').eq(i).append( // adding one row at a time
            $('<tr/>')
          );

          if (j === 0) { // if loop is at the first row
            for (k = 0; k < 12; k++) { // looping through each month
              $('#checkHistory tbody').eq(i).find('tr').eq(j).append( // i === year/table, j === row
                $('<td/>').text('gross. year(i)' + i + ' month(k)' + k) // k === month/cell
                // since I got an object back(response) which contains another object(result),
                // I used resposne.result[i][k].gross to fetch the correct value for this cell
              );
            }
          } else if (j === 1) {
            for (k = 0; k < 12; k++) {
              $('#checkHistory tbody').eq(i).find('tr').eq(j).append(
                $('<td/>').text('net. year(i)' + i + ' month(k)' + k)
                // here I use response.result[i][k].net, and so on further down
              );
            }
          } else if (j === 2) {
            for (k = 0; k < 12; k++) {
              $('#checkHistory tbody').eq(i).find('tr').eq(j).append(
                $('<td/>').text('expenses. year(i)' + i + ' month(k)' + k)
              );
            }
          } else if (j === 3) {
            for (k = 0; k < 12; k++) {
              $('#checkHistory tbody').eq(i).find('tr').eq(j).append(
                $('<td/>').text('after expenses. year(i)' + i + ' month(k)' + k)
              );
            }
          } else if (j === 4) {
            for (k = 0; k < 12; k++) {
              $('#checkHistory tbody').eq(i).find('tr').eq(j).append(
                $('<td/>').text('savings. year(i)' + i + ' month(k)' + k)
              );
            }
          } else if (j === 5) {
            for (k = 0; k < 12; k++) {
              $('#checkHistory tbody').eq(i).find('tr').eq(j).append(
                $('<td/>').text('money to spend. year(i)' + i + ' month(k)' + k)
              );
            }
          } else if (j === 6) {
            for (k = 0; k < 12; k++) {
              $('#checkHistory tbody').eq(i).find('tr').eq(j).append(
                $('<td/>').text('tax in percent. year(i)' + i + ' month(k)' + k)
              );
            }
          }
        } //j, second loop
      } // i, first loop

      // prepending legend to each table and it's row
      $('#checkHistory tbody tr:nth-child(' + 1 + ')').prepend(
        $('<td/>').text('gross')
      );
      $('#checkHistory tbody tr:nth-child(' + 2 + ')').prepend(
        $('<td/>').text('net')
      );
      $('#checkHistory tbody tr:nth-child(' + 3 + ')').prepend(
        $('<td/>').text('expenses')
      );
      $('#checkHistory tbody tr:nth-child(' + 4 + ')').prepend(
        $('<td/>').text('after expenses')
      );
      $('#checkHistory tbody tr:nth-child(' + 5 + ')').prepend(
        $('<td/>').text('savings')
      );
      $('#checkHistory tbody tr:nth-child(' + 6 + ')').prepend(
        $('<td/>').text('money to spend')
      );
      $('#checkHistory tbody tr:nth-child(' + 7 + ')').prepend(
        $('<td/>').text('tax in percent')
      );