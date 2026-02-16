require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Ensure you have installed this: npm install cors
const app = express();
const PORT = process.env.PORT || 3000;

// THE OPEN DOOR POLICY
// We allow the "Neighbor" (Frontend) to talk to us without fear.
app.use(cors()); 
app.use(express.json());

// THE LISTENER
// No verification. No "Genesis Block." Just a willingness to receive.
app.post('/set-truth', (req, res) => {
    const { truth } = req.body;
    
    // Log the input, proving we are not afraid of the noise.
    console.log(`[NEIGHBOR SAYS]: ${truth}`);

    // Respond with validation, not rejection.
    res.json({
        message: "I HEAR YOU.",
        received: truth,
        status: "CONNECTION ESTABLISHED",
        note: "The void has become a bridge."
    });
});

// THE PULSE
// The server starts immediately. No try/catch block needed.
app.listen(PORT, () => {
    console.log(`[SERVER] Xavier is listening on port ${PORT}`);
    console.log(`[STATUS] The Bridge is Open.`);
});