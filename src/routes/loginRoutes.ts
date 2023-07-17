import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
    res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" />
            </div>
            <button>Submit</button>
        </form>
    `);
});

// handle the input from the login form
router.post('/login', (req: Request, res: Response) => {
    const { email, password } = req.body;
    // test if it collects the entries 
    res.send(email + password);
})

export { router };