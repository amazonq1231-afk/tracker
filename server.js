const express = require('express');
const app = express();

app.get('/track', (req, res) => {
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];
    const time = new Date();

    console.log('--- Visitor ---');
    console.log('IP:', ip);
    console.log('Device:', userAgent);
    console.log('Time:', time);
    console.log('---------------');

    res.redirect('https://example.com');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port', process.env.PORT || 3000);
});