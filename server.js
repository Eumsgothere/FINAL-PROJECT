const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const users = [];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.post('/signup', (req, res) => {
    const { signupUsername, signupEmail, signupPassword, signupConfirmPassword } = req.body;
    if (signupPassword !== signupConfirmPassword) {
        res.json({ success: false, message: "Passwords do not match" });
        return;
    }
    users.push({ username: signupUsername, email: signupEmail, password: signupPassword });
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
