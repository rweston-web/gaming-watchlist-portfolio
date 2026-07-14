$w.onReady(function () {

    // === CARD 1: CLAIR OBSCUR ===
    $w('#completeButton').onClick(() => {
        if ($w('#gameStatus').text === "Status: Want to Play") {
            $w('#gameStatus').html = `<p style="color:#00FF00; font-size:16px; font-weight:bold; text-align:center;">Status: Completed! ✅</p>`;
            $w('#completeButton').label = "Play Again";
        } else {
            $w('#gameStatus').html = `<p style="color:#00FFFF; font-size:16px; font-weight:bold; text-align:center;">Status: Want to Play</p>`;
            $w('#completeButton').label = "Mark as Completed";
        }
    });

    // === CARD 2: CRIMSON DESERT ===
    $w('#completeButton2').onClick(() => {
        if ($w('#gameStatus2').text === "Status: Want to Play") {
            $w('#gameStatus2').html = `<p style="color:#00FF00; font-size:16px; font-weight:bold; text-align:center;">Status: Completed! ✅</p>`;
            $w('#completeButton2').label = "Play Again";
        } else {
            $w('#gameStatus2').html = `<p style="color:#00FFFF; font-size:16px; font-weight:bold; text-align:center;">Status: Want to Play</p>`;
            $w('#completeButton2').label = "Mark as Completed";
        }
    });

    // === CARD 3: FINAL FANTASY VII REBIRTH ===
    $w('#completeButton3').onClick(() => {
        if ($w('#gameStatus3').text === "Status: Want to Play") {
            $w('#gameStatus3').html = `<p style="color:#00FF00; font-size:16px; font-weight:bold; text-align:center;">Status: Completed! ✅</p>`;
            $w('#completeButton3').label = "Play Again";
        } else {
            $w('#gameStatus3').html = `<p style="color:#00FFFF; font-size:16px; font-weight:bold; text-align:center;">Status: Want to Play</p>`;
            $w('#completeButton3').label = "Mark as Completed";
        }
    });

    // === CARD 4: NIER: AUTOMATA ===
    $w('#completeButton4').onClick(() => {
        if ($w('#gameStatus4').text === "Status: Want to Play") {
            $w('#gameStatus4').html = `<p style="color:#00FF00; font-size:16px; font-weight:bold; text-align:center;">Status: Completed! ✅</p>`;
            $w('#completeButton4').label = "Play Again";
        } else {
            $w('#gameStatus4').html = `<p style="color:#00FFFF; font-size:16px; font-weight:bold; text-align:center;">Status: Want to Play</p>`;
            $w('#completeButton4').label = "Mark as Completed";
        }
    });

});
