export function getLandingPage(req, res)
{
    res.render('user/landing_page', {logged: req.session.logged});
}