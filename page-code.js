$w.onReady(function () {

    // 1. When a user clicks your tracking button...
    $w('#completeButton').onClick(() => {
        
        // 2. JavaScript checks what the status currently says
        if ($w('#gameStatus').text === "Status: Want to Play ⏳") {
            
            // 3. If it says "Want to Play", change it to "Completed!" 
            $w('#gameStatus').text = "Status: Completed! ✅";
            $w('#completeButton').label = "Play Again";
            
            // 🎨 Coding Bonus: Turn the status text bright green!
            $w('#gameStatus').html = `<p style="color:#00FF00; font-size:16px;">Status: Completed! ✅</p>`;

        } else {
            // 4. If they click it again, reset it back to the start
            $w('#gameStatus').text = "Status: Want to Play ⏳";
            $w('#completeButton').label = "Mark as Completed";
            $w('#gameStatus').html = `<p style="color:#FFFFFF; font-size:16px;">Status: Want to Play ⏳</p>`;
        }
    });

});

$w.onReady(function () {

    // === GAME 1: PALWORLD ===
    $w('#completeButton').onClick(() => {
        if ($w('#gameStatus').text === "Status: Want to Play ⏳") {
            $w('#gameStatus').html = `<p style="color:#00FF00; font-size:16px;">Status: Completed! ✅</p>`;
            $w('#completeButton').label = "Play Again";
        } else {
            $w('#gameStatus').html = `<p style="color:#FFFFFF; font-size:16px;">Status: Want to Play ⏳</p>`;
            $w('#completeButton').label = "Mark as Completed";
        }
    });

    // === GAME 2: YOUR NEW GAME ===
    // This looks at your brand new second button and second status box!
    $w('#completeButton2').onClick(() => {
        if ($w('#gameStatus2').text === "Status: Want to Play ⏳") {
            $w('#gameStatus2').html = `<p style="color:#00FF00; font-size:16px;">Status: Completed! ✅</p>`;
            $w('#completeButton2').label = "Play Again";
        } else {
            $w('#gameStatus2').html = `<p style="color:#FFFFFF; font-size:16px;">Status: Want to Play ⏳</p>`;
            $w('#completeButton22').label = "Mark as Completed";
        }
    });

});
