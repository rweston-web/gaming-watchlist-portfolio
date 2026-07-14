$w.onReady(function () {

    // Listen for a user clicking your main roll button
    $w('#rollButton').onClick(() => {
        
        // 1. ANIMATION PREPARATION: Disable the button during the roll so they can't spam it
        $w('#rollButton').disable();
        $w('#rollButton').label = "🎲 Rolling...";
        $w('#combatLog').text = "The dice bounces across the tabletop...";
        
        let shuffleCount = 0;
        
        // 2. TIMING INTERACTION: Spin the numbers rapidly every 50 milliseconds
        const rollAnimation = setInterval(() => {
            
            // Flash a random fast number on screen during the spin
            let randomVisual = Math.floor(Math.random() * 20) + 1;
            $w('#diceResult').text = randomVisual.toString();
            
            shuffleCount++;
            
            // 3. LOCK IN THE RESULT: Stop the spin after 15 shuffles (less than 1 second)
            if (shuffleCount >= 15) {
                clearInterval(rollAnimation); // Kill the timer loop
                
                // Calculate the final official result landing state
                const finalRoll = Math.floor(Math.random() * 20) + 1;
                $w('#diceResult').text = finalRoll.toString();
                
                // Reactivate your button controls
                $w('#rollButton').enable();
                $w('#rollButton').label = "[ ROLL FOR INITIATIVE! ]";
                
                // 4. DATA LOGIC ENGINE: Print custom outcomes based on final lock state
                if (finalRoll === 20) {
                    $w('#combatLog').html = `<p style="color:#00FF00; font-size:18px; font-weight:bold; text-align:center;">CRITICAL HIT! 🎯 Double your damage dice!</p>`;
                } else if (finalRoll === 1) {
                    $w('#combatLog').html = `<p style="color:#FF0000; font-size:18px; font-weight:bold; text-align:center;">CRITICAL FAIL! 💀 You dropped your weapon!</p>`;
                } else if (finalRoll >= 15) {
                    $w('#combatLog').html = `<p style="color:#00FFFF; font-size:16px; text-align:center;">Great Roll! You pass the skill check easily. 👍</p>`;
                } else if (finalRoll <= 5) {
                    $w('#combatLog').html = `<p style="color:#FF9900; font-size:16px; text-align:center;">Low Roll... Your attack misses the target. 🛡️</p>`;
                } else {
                    $w('#combatLog').html = `<p style="color:#FFFFFF; font-size:16px; text-align:center;">You rolled a ${finalRoll}. Proceed with your turn.</p>`;
                }
            }
        }, 50); // Speed modifier key
    });

});
